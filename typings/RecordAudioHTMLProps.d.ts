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
    audioEntity: ListValue;
    audioFileGuid: EditableValue<string>;
    actionItem?: ActionValue;
    someData: ListValue;
    someProperty: ListAttributeValue<string>;
}

export interface RecordAudioHTMLPreviewProps {
    class: string;
    style: string;
    audioEntity: {} | null;
    audioFileGuid: string;
    actionItem: {} | null;
    someData: {} | null;
    someProperty: string;
}
