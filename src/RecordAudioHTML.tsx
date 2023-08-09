import { Component, ReactNode, createElement } from "react";

import { RecordAudioHTMLContainerProps } from "../typings/RecordAudioHTMLProps";
import {RecordAudio} from "./components/RecordAudio";

import "./ui/RecordAudioHTML.css";

export default class RecordAudioHTML extends Component<RecordAudioHTMLContainerProps> {
    render(): ReactNode {
        const testProp = this.props.testProp;
        return <RecordAudio
            style={this.props.style}
            className={this.props.class}
            tabIndex={this.props.tabIndex}
            audioName={this.props.audioName.value}
            audioGuid={this.props.audioGuid.value}
            onSaveAction={this.props.onSaveAction}
            onStopAction={this.props.onStopAction}
            testData={this.props.testData}
            testProp={testProp}
        />
    }
}
