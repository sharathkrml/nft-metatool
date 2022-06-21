import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import AttributesInputHead from "./AttributesInputHead";
import { PropertiesSetter } from "../../types";
import RemoveCircle from "../RemoveCircle";
import { motion, AnimatePresence } from "framer-motion";
const INPUTSTYLE =
  "bg-[#202225] border-2 border-[#4A5357] px-2 text-[#EDEDEE] focus:border-[#205ADC] rounded-md focus:outline-none";
const PropertiesInput = ({ properties, setProperties }: PropertiesSetter) => {
  const addProperty = () => {
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
              value={property.trait_type}
              onChange={(e) => {
                editProperty(i, e.target.value);
              }}
            />
            <input
              type="text"
              name="value"
              id="value"
              value={property.value}
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
