import React, { Dispatch, SetStateAction } from "react";

export interface Basics {
    name?: string,
    description?: string,
    external_url?: string,
}
export interface ImageVideo {
    background_color?: string,
    image?: string,
    animation_url?: string,
    youtube_url?: string

}

export type Properties = {
    trait_type: string;
    value: string;
}
export type Stats = {
    display_type: "number";
    trait_type: string;
    value: number;
}
export type Level = {
    trait_type: string;
    value: number;
    max_value?: number;
}

export type Boost = {
    display_type: "boost_number" | "boost_percentage";
    trait_type: string;
    value: number;
    max_value?: number;
}
export type Date = {
    display_type: "date";
    trait_type: string;
    value: number;
}
export type AttributeWrapperProps = {
    expanded: boolean;
    setExpanded: Dispatch<SetStateAction<boolean>>;
    icon: React.ReactNode;
    name: "Properties" | "Stats" | "Levels" | "Boosts" | "Dates" | "Details";
    children: React.ReactNode;
    last?: boolean
}

export type InputMetaData = DisplayMetaData & {
    setBasics: Dispatch<SetStateAction<Basics | undefined>>
    setProperties: Dispatch<SetStateAction<Properties[] | undefined>>
    setStats: Dispatch<SetStateAction<Stats[] | undefined>>
    setLevels: Dispatch<SetStateAction<Level[] | undefined>>,
    setBoosts: Dispatch<SetStateAction<Boost[] | undefined>>,
    setDates: Dispatch<SetStateAction<Date[] | undefined>>,
}
export type DisplayMetaData = Attributes & {
    basics: Basics | undefined,
}
export type Attributes = {
    properties: Properties[] | undefined,
    stats: Stats[] | undefined;
    levels: Level[] | undefined,
    boosts: Boost[] | undefined,
    dates: Date[] | undefined,
}