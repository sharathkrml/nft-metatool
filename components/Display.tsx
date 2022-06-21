import Attributes from "./Attributes";
import ExternalLink from "./ExternalLink";
import MediaPreview from "./MediaPreview";
import Description from "./Description";
import { DisplayMetaData } from "../types";

const Display = ({
  basics,
  properties,
  stats,
  levels,
  boosts,
  dates,
  media,
}: DisplayMetaData) => {
  return (
    <div className="text-white px-10 py-5">
      <ExternalLink external_url={basics?.external_url} />
      <div className="mt-3 mb-5 text-4xl text-[#E5E8EB]">{basics.name}</div>
      <MediaPreview media={media} />
      <Description description={basics.description} />
      <Attributes attributes={{ properties, stats, levels, boosts, dates }} />
    </div>
  );
};

export default Display;
