import AttributesComponent from "./AttributesComponent";
import ExternalLinkComponent from "./ExternalLinkComponent";
import ImagePreviewComponent from "./ImagePreviewComponent";
import DescriptionComponent from "./DescriptionComponent"
import { IMetadata } from "../types";


interface DisplayMetaData {
    metaData: IMetadata;
}

const DisplayComponent = ({ metaData }: DisplayMetaData) => {
    let { name, external_url = "" } = metaData
    return (
        <div className="text-white px-10 py-5">
            <ExternalLinkComponent external_url={external_url} />
            <div className="mt-3 mb-5 text-4xl text-[#E5E8EB]">{!!name ? name : "Lorem Ipsum #1"}</div>
            <ImagePreviewComponent />
            <DescriptionComponent />
            <AttributesComponent />
        </div>
    );
};

export default DisplayComponent;
