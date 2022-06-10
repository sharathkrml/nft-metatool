import AttributesComponent from "./AttributesComponent";
import ExternalLinkComponent from "./ExternalLinkComponent";
import ImagePreviewComponent from "./ImagePreviewComponent";
import DescriptionComponent from "./DescriptionComponent"

const DisplayComponent = () => {
    return (
        <div className="text-white px-10 py-5">
            <ExternalLinkComponent />
            <div className="mt-3 mb-5 text-4xl text-[#E5E8EB]">NFT NAME #</div>
            <ImagePreviewComponent />
            <DescriptionComponent />
            <AttributesComponent />
        </div>
    );
};

export default DisplayComponent;
