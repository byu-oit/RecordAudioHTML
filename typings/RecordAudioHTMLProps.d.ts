/**
 * This file was generated from RecordAudioHTML.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ActionValue, EditableValue, ListValue, ListAttributeValue } from "mendix";

export interface RecordAudioHTMLContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    audioData: ListValue;
    audioName: ListAttributeValue<string>;
    testAudioName: EditableValue<string>;
    onSaveAction?: ActionValue;
}

export interface RecordAudioHTMLPreviewProps {
    readOnly: boolean;
    audioData: {} | { caption: string } | { type: string } | null;
    audioName: string;
    testAudioName: string;
    onSaveAction: {} | null;
}
