import AttributesComponent from "./AttributesComponent";
import ExternalLinkComponent from "./ExternalLinkComponent";
import ImagePreviewComponent from "./ImagePreviewComponent";
import DescriptionComponent from "./DescriptionComponent"
import { DisplayMetaData } from "../types";


const DisplayComponent = ({ basics, properties, stats, levels, boosts, dates }: DisplayMetaData) => {
    return (
        <div className="text-white px-10 py-5">
            <ExternalLinkComponent external_url={basics?.external_url} />
            <div className="mt-3 mb-5 text-4xl text-[#E5E8EB]">{basics?.name || "Lorem Ipsum #1"}</div>
            <ImagePreviewComponent />
            <DescriptionComponent description={basics?.description || "Friendly OpenSea Creature that enjoys long swims in the ocean."} />
            <AttributesComponent attributes={{ properties, stats, levels, boosts, dates }} />
        </div>
    );
};

export default DisplayComponent;
