import PropertiesPreview from "./PropertiesPreview"
// box that covers all properties
function PropertiesWrapper() {
    return (
        <div className="grid grid-cols-3 gap-1 border-[1px] border-black p-2">
            <PropertiesPreview trait_type="BASE" value="Starfish" />
            <PropertiesPreview trait_type="EYES" value="Big" />
            <PropertiesPreview trait_type="MOUTH" value="Surprised" />
            <PropertiesPreview trait_type="PERSONALITY" value="SAD" />
        </div>
    )
}

export default PropertiesWrapper