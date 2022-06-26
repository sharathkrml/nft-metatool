import {
  Basics,
  Boost,
  Date,
  Level,
  Media,
  Metadata,
  Properties,
  Stats,
} from "../types";

export const convertedMedia = (media: string) => {
  if (media.startsWith("ipfs://")) {
    return `https://ipfs.infura.io/ipfs/${media.split("ipfs://")[1]}`;
  }
  return media;
};
export const downloadJson = (metadata: any, filename: string) => {
  const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
    JSON.stringify(metadata)
  )}`;
  const link = document.createElement("a");
  link.href = jsonString;
  link.download = filename;
  link.click();
};
export const convertMetadata = (metadata: Metadata) => {
  let basics: Basics = {
    name: metadata.name || "",
    description: metadata.description || "",
    external_url: metadata.external_url || "",
  };
  let media: Media = {
    animation_url: metadata.animation_url || "",
    background_color: metadata.background_color || "",
    image: metadata.image || "",
    youtube_url: metadata.youtube_url || "",
  };
  let properties: Properties[] = [];
  let levels: Level[] = [];
  let stats: Stats[] = [];
  let boosts: Boost[] = [];
  let dates: Date[] = [];
  if (metadata.attributes) {
    metadata.attributes.forEach((a: any) => {
      if (a.display_type === "date") {
        dates.push({
          display_type: a.display_type,
          trait_type: a.trait_type,
          value: a.value,
        });
      } else if (
        a.display_type === "boost_number" ||
        a.display_type === "boost_percentage"
      ) {
        boosts.push({
          display_type: a.display_type,
          trait_type: a.trait_type,
          value: a.value,
        });
      } else if (a.display_type === "number") {
        stats.push({
          display_type: a.display_type,
          trait_type: a.trait_type,
          value: a.value,
          max_value: a.max_value,
        });
      } else if (
        typeof a.trait_type === "string" &&
        typeof a.value === "number"
      ) {
        levels.push({
          trait_type: a.trait_type || "",
          value: a.value,
          max_value: a.max_value,
        });
      } else if (
        typeof a.trait_type === "string" &&
        typeof a.value === "string"
      ) {
        properties.push({
          trait_type: a.trait_type || "",
          value: a.value || "",
        });
      }
    });
  }

  return { basics, media, properties, levels, stats, boosts, dates };
};
