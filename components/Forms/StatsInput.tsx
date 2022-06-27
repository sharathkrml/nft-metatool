import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AttributesInputHead from "./AttributesInputHead";
import { StatsSetter } from "../../types";
import RemoveCircle from "../RemoveCircle";
import { INPUTSTYLE } from "../../styles";
import { useExpand } from "../../context/Expand";
import { motion, AnimatePresence } from "framer-motion";
const StatsInput = ({ stats, setStats }: StatsSetter) => {
  const [, setExpand] = useExpand();
  const addStats = () => {
    setExpand((prev) => ({ ...prev, statsExpand: true }));
    setStats((prev) => [
      ...prev,
      { display_type: "number", trait_type: "", value: 0 },
    ]);
  };
  const editTrait = (index: number, data: string) => {
    setExpand((prev) => ({ ...prev, statsExpand: true }));

    let newStats = [...stats];
    newStats[index].trait_type = data;
    setStats(newStats);
  };
  const editValue = (index: number, data: number) => {
    setExpand((prev) => ({ ...prev, statsExpand: true }));

    let newStats = [...stats];
    newStats[index].value = data;
    setStats(newStats);
  };
  const editMaxValue = (index: number, data: number) => {
    setExpand((prev) => ({ ...prev, statsExpand: true }));

    let newStats = [...stats];
    newStats[index].max_value = data;
    setStats(newStats);
  };
  const deleteStat = (index: number) => {
    setExpand((prev) => ({ ...prev, statsExpand: true }));

    let newStats = [...stats];
    newStats.splice(index, 1);
    setStats(newStats);
  };
  return (
    <div className="flex flex-col items-end">
      <AttributesInputHead addFn={addStats} title="Stats" />
      <AnimatePresence>
        {stats.map((stat, i) => (
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            exit={{ opacity: 0 }}
            key={i}
            className="flex mb-2 items-center justify-center"
          >
            <input
              className={`${INPUTSTYLE} mr-4`}
              type="text"
              name="trait_type"
              placeholder="trait_type"
              id="trait_type"
              value={stat.trait_type || ""}
              onChange={(e) => {
                editTrait(i, e.target.value);
              }}
            />
            <input
              type="number"
              name="value"
              id="value"
              className={`w-28 ${INPUTSTYLE} mr-4`}
              value={stat.value || ""}
              onChange={(e) => {
                editValue(i, parseFloat(e.target.value));
              }}
              placeholder="value"
            />

            <input
              type="number"
              name="value"
              id="value"
              className={`w-28 ${INPUTSTYLE} mr-4`}
              value={stat.max_value || ""}
              onChange={(e) => {
                editMaxValue(i, parseFloat(e.target.value));
              }}
              placeholder="max_value"
            />
            <RemoveCircle index={i} deleteFn={deleteStat} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default StatsInput;
