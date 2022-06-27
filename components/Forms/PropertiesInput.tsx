import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import AttributesInputHead from "./AttributesInputHead";
import { PropertiesSetter } from "../../types";
import RemoveCircle from "../RemoveCircle";
import { motion, AnimatePresence } from "framer-motion";
import { useExpand } from "../../context/Expand";
import { INPUTSTYLE } from "../../styles";
const PropertiesInput = ({ properties, setProperties }: PropertiesSetter) => {
  const [, setExpand] = useExpand();
  const addProperty = () => {
    setExpand((prev) => ({ ...prev, propertiesExpand: true }));
    setProperties((prev) => [
      ...prev,
      {
        trait_type: "",
        value: "",
      },
    ]);
  };

  const editProperty = (
    index: number,
    data: string,
    value: boolean = false
  ) => {
    let newProperties = [...properties];
    value
      ? (newProperties[index].value = data)
      : (newProperties[index].trait_type = data);
    setProperties(newProperties);
  };
  const deleteProperty = (index: number) => {
    let newProperties = [...properties];
    newProperties.splice(index, 1);
    setProperties(newProperties);
  };
  return (
    <div className="flex flex-col items-end justify-center">
      <AttributesInputHead addFn={addProperty} title="Property" />
      <AnimatePresence>
        {properties.map((property, i) => (
          <motion.div
            key={i}
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            exit={{ opacity: 0 }}
            className="mb-2"
          >
            <input
              className={`${INPUTSTYLE} mr-2`}
              type="text"
              name="trait_type"
              placeholder="trait_type"
              id="trait_type"
              value={property.trait_type || ""}
              onChange={(e) => {
                editProperty(i, e.target.value);
              }}
            />
            <input
              type="text"
              name="value"
              id="value"
              value={property.value || ""}
              className={INPUTSTYLE}
              onChange={(e) => {
                editProperty(i, e.target.value, true);
              }}
              placeholder="value"
            />
            <RemoveCircle index={i} deleteFn={deleteProperty} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default PropertiesInput;
