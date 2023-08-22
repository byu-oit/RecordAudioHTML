/**
 * This file was generated from RecordAudioHTML.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue, ListValue, ListAttributeValue } from "mendix";

export interface RecordAudioHTMLContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    id: string;
    audioData: ListValue;
    audioName: ListAttributeValue<string>;
    testAudioName: EditableValue<string>;
    onSaveAction?: ActionValue;
}

export interface RecordAudioHTMLPreviewProps {
    class: string;
    style: string;
    audioData: {} | null;
    audioName: string;
    testAudioName: string;
    onSaveAction: {} | null;
}
