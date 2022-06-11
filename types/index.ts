import React, { Dispatch, SetStateAction } from "react";

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
    "display_type"?: "boost_number" | "boost_percentage" | "number" | "date",
    "trait_type"?: string,
    "value"?: string | number
}

export type PropertiesPreview = {
    "trait_type": string;
    "value": string;
}
export type AttributeWrapperProps = {
    expanded: boolean;
    setExpanded: Dispatch<SetStateAction<boolean>>;
    icon: React.ReactNode;
    name: "Properties" | "Stats" | "Levels" | "Boosts" | "Dates" | "Details";
    children: React.ReactNode;
    last?: boolean
}
export type StatsProps = {
    trait_type: string;
    value: number;
}
export type LevelProps = {
    trait_type: string;
    value: number;
    max_value?: number;
}

export type BoostProps = {
    display_type: "boost_number" | "boost_percentage";
    trait_type: string;
    value: number;
    max_value?: number;
}
export type DateProps = {
    trait_type: string;
    value: number;
}