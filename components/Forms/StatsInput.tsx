import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AttributesInputHead from "./AttributesInputHead";
import { StatsSetter } from "../../types";
import RemoveCircle from "../RemoveCircle";

const INPUTSTYLE =
  "bg-[#202225] border-2 border-[#4A5357] px-2 text-[#EDEDEE] focus:border-[#205ADC] rounded-md focus:outline-none";
const StatsInput = ({ stats, setStats }: StatsSetter) => {
  const addStats = () => {
    setStats((prev) => [
      ...prev,
      { display_type: "number", trait_type: "", value: 0 },
    ]);
  };
  const editTrait = (index: number, data: string) => {
    let newStats = [...stats];
    newStats[index].trait_type = data;
    setStats(newStats);
  };
  const editValue = (index: number, data: number) => {
    let newStats = [...stats];
    newStats[index].value = data;
    setStats(newStats);
  };
  const editMaxValue = (index: number, data: number) => {
    let newStats = [...stats];
    newStats[index].max_value = data;
    setStats(newStats);
  };
  const deleteStat = (index: number) => {
    let newStats = [...stats];
    newStats.splice(index, 1);
    setStats(newStats);
  };
  return (
    <div className="flex flex-col item-end justify-end ">
      <AttributesInputHead addFn={addStats} title="Stats" />
      {stats.map((stat, i) => (
        <div key={i} className="flex mb-2 justify-around">
          <input
            className={INPUTSTYLE}
            type="text"
            name="trait_type"
            placeholder="trait_type"
            id="trait_type"
            value={stat.trait_type}
            onChange={(e) => {
              editTrait(i, e.target.value);
            }}
          />
          <input
            type="number"
            name="value"
            id="value"
            className={`w-20 ${INPUTSTYLE}`}
            value={stat.value}
            onChange={(e) => {
              editValue(i, parseFloat(e.target.value));
            }}
            placeholder="value"
          />

          <input
            type="number"
            name="value"
            id="value"
            className={`w-20 ${INPUTSTYLE}`}
            value={stat.max_value}
            onChange={(e) => {
              editMaxValue(i, parseFloat(e.target.value));
            }}
            placeholder="value"
          />
          <RemoveCircle index={i} deleteFn={deleteStat} />
        </div>
      ))}
    </div>
  );
};

export default StatsInput;
