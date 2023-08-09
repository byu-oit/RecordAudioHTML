import { Component, ReactNode, createElement } from "react";
// import { HelloWorldSample } from "./components/HelloWorldSample";
import { RecordAudioHTMLPreviewProps } from "../typings/RecordAudioHTMLProps";
import {RecordAudio} from "./components/RecordAudio";

declare function require(name: string): string;

export class preview extends Component<RecordAudioHTMLPreviewProps> {
    render(): ReactNode {
        return <RecordAudio
            audioName={this.props.audioName}
            audioGuid={this.props.audioGuid}
        />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/RecordAudioHTML.css");
}
