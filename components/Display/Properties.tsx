import { Properties } from "../../types";

function PropertiesPreview({ trait_type, value }: Properties) {
  return (
    <div className="border-[#15B2E5] bg-[#253239] border-2 rounded-md p-2 m-1">
      {trait_type && (
        <div className="text-center text-xs text-[#15B2E5]">{trait_type}</div>
      )}
      {value && <div className="text-center my-2">{value}</div>}
      {trait_type && value && (
        <div className="text-center text-xs text-slate-400">
          100% have this trait
        </div>
      )}
    </div>
  );
}

export default PropertiesPreview;
