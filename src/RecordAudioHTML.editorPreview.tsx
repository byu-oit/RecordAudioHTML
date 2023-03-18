import { Component, ReactNode, createElement } from "react";
// import { HelloWorldSample } from "./components/HelloWorldSample";
import { RecordAudioHTMLPreviewProps } from "../typings/RecordAudioHTMLProps";
import {RecordAudio} from "./components/RecordAudio";

declare function require(name: string): string;

export class preview extends Component<RecordAudioHTMLPreviewProps> {
    render(): ReactNode {
        // return <HelloWorldSample sampleText={this.props.sampleText} />;
        // const inText = `[${this.props.inText}]`;
        // return <RecordAudio inText={inText}/>;
        // const file = `[${this.props.file}]`;
        // return <RecordAudio file={file}/>;
        // const fileUrl = `[${this.props.audioFileUrl}`;
        return <RecordAudio/>;
    }
}

export function getPreviewCss(): string {
    return require("./ui/RecordAudioHTML.css");
}
