import PropertiesPreview from "../Display/Properties";
// box that covers all properties
import { Properties } from "../../types";
import { AnimatePresence } from "framer-motion";
function PropertiesWrapper({
  properties,
}: {
  properties: Properties[] | undefined;
}) {
  return (
    <div className="grid grid-cols-3 gap-1 border-[1px] border-black p-2">
      <AnimatePresence>
        {properties?.map((property, i) => (
          <PropertiesPreview
            key={i}
            trait_type={property.trait_type}
            value={property.value}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default PropertiesWrapper;
