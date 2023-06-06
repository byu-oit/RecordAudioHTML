import { Component, ReactNode, createElement } from "react";

import { RecordAudioHTMLContainerProps } from "../typings/RecordAudioHTMLProps";
import {RecordAudio} from "./components/RecordAudio";

import "./ui/RecordAudioHTML.css";

export default class RecordAudioHTML extends Component<RecordAudioHTMLContainerProps> {
    //private readonly audioFileUrlHandler = this.setAudioFileUrl.bind(this);
    render(): ReactNode {
        return <RecordAudio
                style={this.props.style}
                className={this.props.class}
                tabIndex={this.props.tabIndex}
                actionItem={this.props.actionItem}
        />
    }
}
