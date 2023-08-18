import { Component, ReactNode, createElement } from "react";

import { RecordAudioHTMLContainerProps } from "../typings/RecordAudioHTMLProps";
import { RecordAudio } from "./components/RecordAudio";

import "./ui/RecordAudioHTML.css";

export class RecordAudioHTML extends Component<RecordAudioHTMLContainerProps> {
    render(): ReactNode {
        const testAudioName = this.props.testAudioName || "";
        return <RecordAudio
            tabIndex={this.props.tabIndex}
            audioData={this.props.audioData}
            audioName={this.props.audioName}
            testAudioName={testAudioName}
            onSaveAction={this.props.onSaveAction}
            isDesignMode={false}
            />
    }
}
