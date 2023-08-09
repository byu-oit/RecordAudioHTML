import { Component, ReactNode, createElement } from "react";

import { RecordAudioHTMLContainerProps } from "../typings/RecordAudioHTMLProps";
import {RecordAudio} from "./components/RecordAudio";

import "./ui/RecordAudioHTML.css";

export default class RecordAudioHTML extends Component<RecordAudioHTMLContainerProps> {
    private readonly onLeaveHandle = this.onLeave.bind(this);
    render(): ReactNode {
        const audioName = this.props.audioName.value || "";
        const audioGuid = this.props.audioGuid.value || "";
        const testProp = this.props.testProp;
        return <RecordAudio
            style={this.props.style}
            className={this.props.class}
            tabIndex={this.props.tabIndex}
            audioName={audioName}
            audioGuid={audioGuid}
            onSaveAction={this.props.onSaveAction}
            onStopAction={this.props.onStopAction}
            testData={this.props.testData}
            testProp={testProp}
            onLeave={this.onLeaveHandle}
        />
    }
    // Trigger update of audioName when field is left (click away, tab away, enter).
    private onLeave(value: string, isChanged: boolean): void {
        if (!isChanged) {
            return;
        }
        console.log("set new audioName: " + value); // testing only
        this.props.audioName.setValue(value);
    }
}
