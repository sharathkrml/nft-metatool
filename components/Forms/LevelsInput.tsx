import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AttributesInputHead from "./AttributesInputHead";
import { LevelsSetter } from "../../types";
import RemoveCircle from "../RemoveCircle";
import { INPUTSTYLE } from "../../styles";
import { useExpand } from "../../context/Expand";
import { motion, AnimatePresence } from "framer-motion";
const LevelsInput = ({ levels, setLevels }: LevelsSetter) => {
  const [, setExpand] = useExpand();
  const addLevels = () => {
    setExpand((prev) => ({ ...prev, levelsExpand: true }));
    setLevels((prev) => [
      ...prev,
      {
        trait_type: "",
        value: 0,
        max_value: 0,
      },
    ]);
  };

  const editTrait = (index: number, data: string) => {
    let newlevels = [...levels];
    newlevels[index].trait_type = data;
    setLevels(newlevels);
  };
  const editValue = (index: number, data: number) => {
    let newlevels = [...levels];
    newlevels[index].value = data;
    setLevels(newlevels);
  };
  const editMaxValue = (index: number, data: number) => {
    let newlevels = [...levels];
    newlevels[index].max_value = data;
    setLevels(newlevels);
  };
  const deleteLevel = (index: number) => {
    let newlevels = [...levels];
    newlevels.splice(index, 1);
    setLevels(newlevels);
  };
  return (
    <div className="flex flex-col items-end">
      <AttributesInputHead addFn={addLevels} title="Levels" />
      <AnimatePresence>
        {levels.map((level, i) => (
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            exit={{ opacity: 0 }}
            key={i}
            className="mb-2"
          >
            <input
              className={`mr-4 ${INPUTSTYLE}`}
              type="text"
              name="trait_type"
              placeholder="trait_type"
              id="trait_type"
              value={level.trait_type || ""}
              onChange={(e) => {
                editTrait(i, e.target.value);
              }}
            />
            <input
              type="number"
              name="value"
              id="value"
              value={level.value || ""}
              className={`w-28 mr-4 ${INPUTSTYLE}`}
              onChange={(e) => {
                editValue(i, parseFloat(e.target.value));
              }}
              placeholder="value"
            />
            <input
              type="number"
              name="max_value"
              id="max_value"
              value={level.max_value || ""}
              placeholder="max_value"
              className={`w-28 mr-4 ${INPUTSTYLE}`}
              onChange={(e) => {
                editMaxValue(i, parseFloat(e.target.value));
              }}
            />

            <RemoveCircle index={i} deleteFn={deleteLevel} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default LevelsInput;
