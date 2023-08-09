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
    audioName: EditableValue<string>;
    audioGuid: EditableValue<string>;
    onSaveAction?: ActionValue;
    onStopAction?: ActionValue;
    testData: ListValue;
    testProp: ListAttributeValue<string>;
    onChangeAction?: ActionValue;
}

export interface RecordAudioHTMLPreviewProps {
    class: string;
    style: string;
    audioName: string;
    audioGuid: string;
    onSaveAction: {} | null;
    onStopAction: {} | null;
    testData: {} | null;
    testProp: string;
    onChangeAction: {} | null;
}
