/**
 * This file was generated from RecordAudioHTML.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { EditableValue, ListValue } from "mendix";

export interface RecordAudioHTMLContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    audioFileUrl: EditableValue<string>;
    showInstructions: boolean;
    saveLocation: string;
    microflowCall: string;
    audioFileDataSource: ListValue;
    entityName: string;
}

export interface RecordAudioHTMLPreviewProps {
    class: string;
    style: string;
    audioFileUrl: string;
    showInstructions: boolean;
    saveLocation: string;
    microflowCall: string;
    audioFileDataSource: {} | null;
    entityName: string;
}
