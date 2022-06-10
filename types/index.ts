import { Dispatch, SetStateAction } from "react";

export interface IMetadata {
    "name"?: string,
    "description"?: string,
    "external_url"?: string,
    "background_color"?: string,
    "image"?: string,
    "attributes"?: IAttribute[]
}
export interface InputMetaData {
    metaData: IMetadata;
    setMetaData: Dispatch<SetStateAction<IMetadata>>;
}
interface IAttribute {
    "display_type"?: "boost_number" | "boost_percentage" | "number",
    "trait_type"?: string,
    "value"?: string | number
}

export type PropertiesPreview = {
    "trait_type": string;
    "value": string;
}