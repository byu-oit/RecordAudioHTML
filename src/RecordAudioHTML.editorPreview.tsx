import { Component, ReactNode, createElement } from "react";
import { RecordAudioHTMLPreviewProps } from "../typings/RecordAudioHTMLProps";
import {RecordAudio} from "./components/RecordAudio";

export class preview extends Component<RecordAudioHTMLPreviewProps> {
    render(): ReactNode {
        return <RecordAudio showAllButtons={true}
            />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/RecordAudioHTML.css");
}
