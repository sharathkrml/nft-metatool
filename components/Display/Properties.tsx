import { Properties } from "../../types";
import { motion } from "framer-motion";
function PropertiesPreview({ trait_type, value }: Properties) {
  return (
    <motion.div
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      exit={{ opacity: 0 }}
      className="border-[#15B2E5] bg-[#253239] border-2 rounded-md p-2 m-1"
    >
      {trait_type && (
        <div className="text-center text-xs text-[#15B2E5]">{trait_type}</div>
      )}
      {value && <div className="text-center my-2">{value}</div>}
      {trait_type && value && (
        <div className="text-center text-xs text-slate-400">
          100% have this trait
        </div>
      )}
    </motion.div>
  );
}

export default PropertiesPreview;
