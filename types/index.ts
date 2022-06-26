import React, { Dispatch, SetStateAction } from "react";
export type Metadata = Basics &
  Media & {
    attributes: Properties[] & Stats[] & Level[] & Boost[] & Date[];
  };

export type Basics = {
  name: string;
  description?: string;
  external_url?: string;
};
export type Media = {
  background_color?: string;
  image?: string;
  animation_url?: string;
  youtube_url?: string;
};

export type Properties = {
  trait_type: string;
  value: string;
};
export type Stats = {
  display_type: "number";
  trait_type: string;
  value: number;
  max_value?: number;
};
export type Level = {
  trait_type: string;
  value: number;
  max_value?: number;
};

export type Boost = {
  display_type: "boost_number" | "boost_percentage";
  trait_type: string;
  value: number;
};
export type Date = {
  display_type: "date";
  trait_type: string;
  value: number;
};
export type AttributeWrapperProps = {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  icon: React.ReactNode;
  name: "Properties" | "Stats" | "Levels" | "Boosts" | "Dates" | "Details";
  children: React.ReactNode;
  last?: boolean;
};

export type InputMetaData = DisplayMetaData & {
  setBasics: Dispatch<SetStateAction<Basics>>;
  setProperties: Dispatch<SetStateAction<Properties[]>>;
  setStats: Dispatch<SetStateAction<Stats[]>>;
  setLevels: Dispatch<SetStateAction<Level[]>>;
  setBoosts: Dispatch<SetStateAction<Boost[]>>;
  setDates: Dispatch<SetStateAction<Date[]>>;
  setMedia: Dispatch<SetStateAction<Media>>;
};
export type DisplayMetaData = Attributes & {
  basics: Basics;
  media: Media;
};
export type Attributes = {
  properties: Properties[];
  stats: Stats[];
  levels: Level[];
  boosts: Boost[];
  dates: Date[];
};
export type PropertiesSetter = {
  properties: Properties[];
  setProperties: Dispatch<SetStateAction<Properties[]>>;
};

export type StatsSetter = {
  stats: Stats[];
  setStats: Dispatch<SetStateAction<Stats[]>>;
};
export type LevelsSetter = {
  levels: Level[];
  setLevels: Dispatch<SetStateAction<Level[]>>;
};
export type BoostSetter = {
  boosts: Boost[];
  setBoosts: Dispatch<SetStateAction<Boost[]>>;
};
export type DateSetter = {
  dates: Date[];
  setDates: Dispatch<SetStateAction<Date[]>>;
};
export type MediaSetter = {
  media: Media;
  setMedia: Dispatch<SetStateAction<Media>>;
};
export type Progress = {
  statusImage: "initial" | "uploading" | "completed";
  statusVideo: "initial" | "uploading" | "completed";
  total: number;
  progress: number;
};
