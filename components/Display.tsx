import Attributes from "./Attributes";
import ExternalLink from "./ExternalLink";
import ImagePreview from "./ImagePreview";
import Description from "./Description";
import { DisplayMetaData } from "../types";

const Display = ({
  basics,
  properties,
  stats,
  levels,
  boosts,
  dates,
}: DisplayMetaData) => {
  return (
    <div className="text-white px-10 py-5">
      <ExternalLink external_url={basics?.external_url} />
      <div className="mt-3 mb-5 text-4xl text-[#E5E8EB]">
        {basics?.name || "Lorem Ipsum #1"}
      </div>
      <ImagePreview />
      <Description
        description={
          basics?.description ||
          "Friendly OpenSea Creature that enjoys long swims in the ocean."
        }
      />
      <Attributes attributes={{ properties, stats, levels, boosts, dates }} />
    </div>
  );
};

export default Display;
