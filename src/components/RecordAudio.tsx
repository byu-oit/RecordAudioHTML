import { CSSProperties, Component, ReactNode, createElement } from "react";
import {ActionValue} from "mendix";

export interface RecordAudioProps {
    // fileUrl?: (value: string) => void;
    className?: string;
    index?: number;
    style?: CSSProperties;
    tabIndex?: number;
    id?: string;
    actionItem?: ActionValue;
}

export interface RecordAudioState {
    isRecordingSupported: boolean;
    isRecordingStarted: boolean;
    isRecording: boolean;
    isPaused: boolean;
    isDone: boolean;
    isRecordButtonsEnabled: boolean;
    mediaRecorder?: MediaRecorder;
    audioUrl?: string;
    audioBlob?: Blob;
}

export class RecordAudio extends Component<RecordAudioProps, RecordAudioState> {

    static mimeType: string = 'audio/webm;codecs=opus';
    saveCounter: number = 1;

    /**
     * Check to see if browser supports getUserMedia for recording before doing anything else.
     * If not supported, the render function will disable buttons.
     * @param props
     */
    constructor(props: RecordAudioProps) {
        super(props);
        let isRecordingSupported = true;
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            if (MediaRecorder.isTypeSupported(RecordAudio.mimeType)) {
                isRecordingSupported = true;
                /* List the recording devices to let the user choose. Returns an array of InputDeviceInfo */
                navigator.mediaDevices.enumerateDevices().then((deviceList) => {
                    deviceList = deviceList.filter((deviceInfo) => deviceInfo.kind === 'audioinput');
                    console.log('Devices = ' + deviceList);
                });
            }
            else {
                isRecordingSupported = false;
            }
        }
        else {
            isRecordingSupported = false;
        }
        if (!isRecordingSupported) {
            alert('Your browser does not support recording with getUserMedia. Try a different browser.');
        }
        /* Set defaults for state variables */
        this.state = {
            isRecordingSupported: isRecordingSupported,
            isRecordingStarted: false,
            isRecording: false,
            isPaused: false,
            isDone: false,
            isRecordButtonsEnabled: true,
        };
    }

    startRecording = () => {
        if (this.state.isRecordingStarted) {
            if (!this.state.isRecording) {
                /* Resume recording after pause. */
                if (this.state.mediaRecorder) {
                    this.state.mediaRecorder.resume();
                }
                this.setState({ isRecording: true });
            }
        }
        else {
            if (this.state.isRecordingSupported) {
                navigator.mediaDevices.getUserMedia(
                    // only audio needed for this app
                    {
                        audio: true
                    }
                ).then(stream => {
                    /* Initialize a new MediaRecorder */
                    const mediaOptions = {
                        mimeType: RecordAudio.mimeType
                    };
                    const mediaRecorder = new MediaRecorder(stream, mediaOptions);
                    mediaRecorder.start();
                    const audioChunks: any = [];

                    /* Event listener for when new data is available from recording device. */
                    mediaRecorder.addEventListener("dataavailable", event => {
                        audioChunks.push(event.data);
                    });
                    this.setState( { isRecordingStarted: true, isRecording: true });

                    /* Event listener for "stop" event.*/
                    mediaRecorder.addEventListener("stop", () => {

                        /* Collect audio chunks into a Blob, create URL for it, update state. */
                        const audioBlob = new Blob(audioChunks, {'type' : RecordAudio.mimeType});
                        const audioUrl = URL.createObjectURL(audioBlob);
                        this.setState( { audioUrl: audioUrl, audioBlob: audioBlob, isRecording: false, isDone: true });
                        stream.getAudioTracks().forEach( track => track.stop());
                    });
                    this.setState( { mediaRecorder: mediaRecorder});
                })
            }
        }
    };

    pauseRecording = () => {
        if (this.state.mediaRecorder) {
            this.state.mediaRecorder.pause();
        }
        this.setState({ isRecording: false });
    };

    stopRecording = () => {
        if (this.state.isRecording) {
            if (this.state.mediaRecorder) {
                this.state.mediaRecorder.stop();
            }
            this.setState({
                isDone: true,
                isRecording: false,
                isRecordButtonsEnabled: false
            });
            console.log("done"); // testing only
        }
    };

    saveRecording = () => {
        const audioBlob = this.state.audioBlob;
        const actionItem = this.props.actionItem
        const counter = this.saveCounter;

        mx.data.create({
            entity: "System.FileDocument",
            callback : function (obj) {
                obj.set("Name", "recording.weba");

                mx.data.saveDocument(
                    obj.toString(),
                    "new_audio" + counter + ".weba",
                    {},
                    audioBlob as Blob,
                    function (){
                        mx.data.commit({
                            mxobj: obj,
                            callback: function () {
                                if (actionItem?.canExecute) actionItem.execute()
                            },
                            error: function (error) {
                              mx.ui.error(`Error attempting to save audio.\nContact app support\n\n 1: ${error}`)
                            }
                        })
                    },
                    function (error) {
                        // Error in save document call
                        mx.ui.error(`Error attempting to save audio.\nContact app support\n\n 2: ${error}`)
                        mx.data.remove({
                            guid: obj.toString(),
                            callback: function () {},       // Success
                            error: function () {
                                mx.ui.error(`Error attempting to save audio.\nContact app support\n\n 3: ${error}`)
                            }           // Error deleting object
                        })
                    }
                )
            },
            error: function (error) {
                // Error in create entity call
                // Likely an incorrect entity name listed in widget options, check entityName variable
                mx.ui.error(`Error creating audio file.\nContact app support.\n\n 4: ${error}`)
            }
        })
        this.saveCounter++
    };

    deleteRecording = () => {
        if (this.state.audioUrl) {
            URL.revokeObjectURL(this.state.audioUrl);
            this.setState({
                isDone: false,
                isRecording: false,
                isRecordingStarted: false,
                isRecordButtonsEnabled: true
            })
        }
    };

    render(): ReactNode {
        // const className = classNames(this.props.className);
        // See https://reactjs.org/docs/conditional-rendering.html to set state and render button(s)
        // and https://stackoverflow.com/questions/41092677/ternary-operator-on-style-with-react-js-es-6
        // <ButtonRecord isRecording={this.state.isRecording} recordHandler={this.startRecording}/>
        // <ButtonPause isRecording={this.state.isRecording} pauseHandler={this.pauseRecording}/>

        const isRecordingSupported = this.state.isRecordingSupported;
        const isRecordButtonsEnabled = this.state.isRecordButtonsEnabled;
        const isRecording = this.state.isRecording;
        const isDone = this.state.isDone;
        return !isRecordingSupported ? <div className="not-supported">Recording not supported in this browser.</div> :
            <div className="outer-container">
                <div className="widget-record-audio">
                    <button style={ isRecording ? { display: 'none' } : { display: 'inline-block' } }
                            type="button"
                            disabled={!isRecordButtonsEnabled}
                            className={ isRecordButtonsEnabled ? "btn-record btn-all btn-icon btn-enabled" : "btn-record btn-all btn-icon" }
                            onClick={this.startRecording}
                    >
                        <div className={ isRecordButtonsEnabled ? "btn-record-circle" : "btn-record-circle-disabled" }>
                        </div>
                    </button>
                    <button style={ isRecording ? { display: 'inline-block' } : { display: 'none'} }
                            type="button"
                            disabled={!isRecordButtonsEnabled}
                            className={ isRecordButtonsEnabled ? "btn-color-red btn-all btn-icon btn-enabled" : "btn-color-grey btn-all btn-icon" }
                            onClick={this.pauseRecording}
                    >
                        <span className="glyphicon glyphicon-pause"></span>
                    </button>
                    <button type="button"
                            disabled={!isRecordButtonsEnabled}
                            className={ isRecordButtonsEnabled ? "btn-color-black btn-all btn-icon btn-enabled" : "btn-color-grey btn-all btn-icon" }
                            onClick={this.stopRecording}
                    >
                        <span className="glyphicon glyphicon-stop"></span>
                    </button>
                    <div className={ isDone ? "widget-play-audio-show" : "widget-play-audio-hide" }>
                        <audio className={"audio-player"} controls src={this.state.audioUrl}>
                            Your browser does not support the <code>audio</code> element.
                        </audio>
                    </div>
                    <div style={ { "margin" : "0px 0px 0px 15px"} }>
                        <button type="button"
                                disabled={!isDone}
                                className={ isDone ? "btn-color-black btn-all btn-icon btn-enabled" : "btn-hide" }
                                onClick={this.saveRecording}
                        >
                            <span className="glyphicon glyphicon-plus" ></span>
                        </button>
                        <button type="button"
                                disabled={!isDone}
                                className={ isDone ? "btn-color-black btn-all btn-icon btn-enabled" : "btn-hide" }
                                onClick={this.deleteRecording}
                        >
                            <span className="glyphicon glyphicon-remove"></span>
                        </button>
                    </div>
                </div>
            </div>
    }
}
