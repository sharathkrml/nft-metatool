import { PropertiesPreview } from "../types";

function PropertiesPreview({ trait_type, value }: PropertiesPreview) {
    return (
        <div className="border-[#15B2E5] bg-[#253239] border-2 rounded-md p-2 m-1">
            <div className="text-center text-xs text-[#15B2E5]">{trait_type}</div>
            <div className="text-center my-2">{value}</div>
            <div className="text-center text-xs text-slate-400">100% have this trait</div>
        </div>
    )
}

export default PropertiesPreview