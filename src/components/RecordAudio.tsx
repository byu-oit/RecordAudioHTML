import {CSSProperties, Component, ReactNode, createElement} from "react";
import {ActionValue, EditableValue, ListValue, ListAttributeValue} from "mendix";

export interface RecordAudioProps {
    // fileUrl?: (value: string) => void;
    className?: string;
    index?: number;
    style?: CSSProperties;
    tabIndex?: number;
    id?: string;
    audioData?: ListValue;
    audioName?: ListAttributeValue<string>;
    testAudioName?: EditableValue<string>;
    onSaveAction?: ActionValue;
    isDesignMode?: boolean;
    isTestMode?: boolean;
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
    editedNameValue?: string;
}

export class RecordAudio extends Component<RecordAudioProps, RecordAudioState> {

    static mimeType: string = 'audio/webm;codecs=opus';
    saveCounter: number = 0;

    /**
     * Check to see if browser supports getUserMedia for recording before doing anything else.
     * If not supported, the render function will disable buttons.
     * @param props
     */
    constructor(props: RecordAudioProps) {
        super(props);

        let isRecordingSupported = true;
        // TODO: fix this to properly use .getUserMedia
        // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        if (navigator.mediaDevices) {
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
            editedNameValue: undefined
        };
    }

    private testStuff = () => {
        if (this.props.audioData?.status === 'available') {
            console.log("Getting audioData..."); // testing only
            const ds = this.props.audioData;
            console.log("Getting audioData rows..."); // testing only

            ds?.items?.forEach(( dataItem ) => {
                console.log("dataItem.id = " + dataItem.id);
                mx.data.get({
                    guid: dataItem.id,
                    callback: function(objs) {
                        console.log("Entity received using dataItem.id: " + objs.getEntity());
                    }
                })
            });

            ds?.items?.forEach(( dataItem ) => {
                console.log("ObjectItem = " + dataItem);
                mx.data.get({
                    guid: dataItem.id,
                    callback: function(objs) {
                        console.log("Entity received using ObjectItem: " + objs.getEntity());
                    }
                })
            });
        }

        // console.log("Getting audioName..."); // testing only
        // const audioName = this.props.audioName ?? "no name";

        console.log("Getting testAudioName..."); // testing only
        const testAudioName = this.props.testAudioName;
        console.log("testAudioName.value = " + testAudioName?.value);
        // return this.state.editedNameValue !== undefined
        //     ? this.state.editedNameValue
        //     : audioName;

    }

    private getCurrentName(): string {

        console.log("getCurrentName()..."); // testing only


        return "";
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

    /**
     * TODO: 1. Developer sets the entity for the audio as a widget configuration parameter.
     * mx.data.create() requires it to be a String, not an object. Is there a way
     * to introspect the entity name (as a string) from a datasource?
     *
     * TODO: 2. Allow user to enter a Name for the audio FileDocument before it is saved?
     * Is this really important since we can use the guid as the name and the user can
     * edit the object after saving it and rename it?
     *
     * TODO: 3. Remove all unnecessary parameters and code.
     * Just use a datasource (entity) and (optionally) a Name.
     */

    /**
     * Create file and save recording into it.
     * 1. Must create a DataView of a specialization of System.FileDocument; for example, AudioFile.
     * 2. Must add a custom string attribute to it to hold autogenerated GUID; for example, AudioFile.FileGuid.
     * 3. Must put Record Audio HTML widget inside DataView.
     * 4. Must set Name parameter to FileDocument.Name; for example, AudioFile.Name.
     * 5. Must set GUID parameter custom string attribute; for example, AudioFile.FileGuid.
     */
    createFileAndSave = () => {
        console.log("createFileAndSave()..."); // testing only

        const audioBlob = this.state.audioBlob;
        const actionItem = this.props.onSaveAction;
        const audioName = this.props.testAudioName?.value;
        const audioUrl = this.state.audioUrl;
        const componentScope = this; // get component scope so we can call its methods


        if (this.props.audioData?.status === 'available') {
            const ds = this.props.audioData;
            console.log("Getting audioData rows..."); // testing only

            // const myDataObjectItem = ds?.items?[0];

            ds?.items?.forEach(( dataItem ) => {
                console.log("dataItem.id = " + dataItem.id);
            });
        }

        console.log("Getting audioName..."); // testing only
        const audioNameX = this.props.audioName ?? "no name";

        //const attrValue = this.props.audioName?.get()
        console.log("audidoNameX = " + audioNameX); // testing only

        console.log("Getting testAudioName..."); // testing only
        const testAudioName = this.props.testAudioName;
        console.log("testAudioName.value = " + testAudioName?.value);



        mx.data.create({
            // TODO: get entity name from entered entityName parameter (not set up yet)
            entity: "HTMLAudio.AudioFile",
            callback : function (obj) {
                const audioGuid = obj.getGuid(); // get guid of new FileDocument
                var newFilename = "audio" + audioGuid + ".weba";
                if (audioName) {
                    newFilename = audioName;
                }
                console.log("setting Name to: " + newFilename); // testing only
                obj.set("Name", newFilename); // TODO: get name of attribute from entered audioName parameter (how?)
                console.log("setting FileGuild to: " + audioGuid); // testing only
                obj.set("FileGuid", audioGuid); // TODO: get name attribute from entered audioGuid parameter (how?)

                mx.data.saveDocument(
                    audioGuid,
                    newFilename,
                    {},
                    audioBlob as Blob,
                    function (){
                        console.log("Successfully saved document but not committed yet."); // testing only
                        mx.data.commit({
                            mxobj: obj,
                            callback: function () {
                                if (actionItem?.canExecute) actionItem.execute();
                                componentScope.deleteRecording();
                                // if (audioUrl) {
                                    // URL.revokeObjectURL(audioUrl);
                                    // componentScope.setState({
                                    //     isDone: false,
                                    //     isRecording: false,
                                    //     isRecordingStarted: false,
                                    //     isRecordButtonsEnabled: true
                                    // })
                                // }

                            },
                            error: function (error) {
                                mx.ui.error(`Error attempting to commit audio file.\nContact app support\n\n 1: ${error}`);
                            }
                        })
                    },
                    function (error) {
                        // Error in save document call
                        mx.ui.error(`Error attempting to save audio file.\nContact app support\n\n 2: ${error}`);
                        mx.data.remove({
                            guid: obj.toString(),
                            callback: function () {},       // Success
                            error: function () {
                                mx.ui.error(`Error attempting to remove audio file.\nContact app support\n\n 3: ${error}`);
                            }           // Error deleting object
                        })
                    }
                )
            },
            error: function (error) {
                // Error in create entity call
                // Likely an incorrect entity name listed in widget options, check entityName variable
                mx.ui.error(`Error creating audio file.\nContact app support.\n\n 4: ${error}`);
            }
        },
        componentScope)
    }


    /**
     * Modify this to check if the Action is "Do nothing". If it is, just save the file?
     * If it's an actionable microflow or nanoflow, run that instead of saving the file.
     * Let the microflow or nanoflow save the file if they want.
     */
    createObjectAndSaveRecording = () => {
        const audioBlob = this.state.audioBlob;
        const onSaveAction = this.props.onSaveAction;
        const counter = this.saveCounter;

        console.log("Saving recording..."); // testing only
        console.log("onSaveAction: " + onSaveAction);

    };

    render(): ReactNode {
        // const className = classNames(this.props.className);
        // See https://reactjs.org/docs/conditional-rendering.html to set state and render button(s)
        // and https://stackoverflow.com/questions/41092677/ternary-operator-on-style-with-react-js-es-6
        // <ButtonRecord isRecording={this.state.isRecording} recordHandler={this.startRecording}/>
        // <ButtonPause isRecording={this.state.isRecording} pauseHandler={this.pauseRecording}/>
        // TODO: 1. disable (grey) stop button unless this.state.isRecording, then enable it (make it black).

        var isRecordingSupported = this.state.isRecordingSupported;
        var isRecordButtonsEnabled = this.state.isRecordButtonsEnabled;
        var isRecording = this.state.isRecording;
        var isDone = this.state.isDone;
        var isTestMode = this.props.isTestMode;

        // Display preview with all buttons (only for Design Mode in Studio Pro).
        if (this.props.isDesignMode) {
            isRecordingSupported = true;
            isRecordButtonsEnabled = true;
            isRecording = false;
            isDone = true;
            isTestMode = false;
        }
        return !isRecordingSupported ? <div className="not-supported">Recording not supported in this browser.</div> :
            <div className="outer-container">
                <div className="widget-record-audio">
                    <button style={ isRecording ? { display: 'none' } : { display: 'inline-block' } }
                            type="button"
                            disabled={!isRecordButtonsEnabled}
                            className={ isRecordButtonsEnabled ? "btn-record btn-all btn-icon btn-enabled" : "btn-record btn-all btn-icon" }
                            // className={ "btn-record btn-all btn-icon btn-enabled" }
                            onClick={this.startRecording}
                    >
                        <div className={ isRecordButtonsEnabled ? "btn-record-circle" : "btn-record-circle-disabled" }>
                        {/*<div className={ "btn-record-circle" }>*/}
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
                            // className={ "btn-color-black btn-all btn-icon btn-enabled" }
                            onClick={this.stopRecording}
                    >
                        <span className="glyphicon glyphicon-stop"></span>
                    </button>
                    <div className={ isDone ? "widget-play-audio-show" : "widget-play-audio-hide" }>
                    {/*<div className={ "widget-play-audio-show" }>*/}
                        <audio className={"audio-player"} controls src={this.state.audioUrl}>
                            Your browser does not support the <code>audio</code> element.
                        </audio>
                    </div>
                    <div style={ { "margin" : "0px 0px 0px 15px"} }>
                        <button type="button"
                                disabled={!isDone}
                                className={ isDone ? "btn-color-black btn-all btn-icon btn-enabled" : "btn-hide" }
                                onClick={this.createFileAndSave}
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
                        <button style={ isTestMode ? { display: 'inline-block' } : { display: 'none'} }
                                type="button"
                                disabled={!isDone}
                                className={ isDone ? "btn-color-black btn-enabled" : "btn-hide"}
                                onClick={this.testStuff}
                        >Test</button>
                    </div>
                </div>
            </div>
    }
}