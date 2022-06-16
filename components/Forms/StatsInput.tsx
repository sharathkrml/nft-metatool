import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AttributesInputHead from "./AttributesInputHead";
import { StatsSetter } from "../../types";

const INPUTSTYLE =
  "bg-[#202225] border-2 border-[#4A5357] px-2 text-[#EDEDEE] focus:border-[#205ADC] rounded-md focus:outline-none";
const StatsInput = ({ stats, setStats }: StatsSetter) => {
  const addStats = () => {
    setStats((prev) => [
      ...prev,
      { display_type: "number", trait_type: "", value: 0 },
    ]);
  };
  const editStat = (
    index: number,
    data: string | number,
    value: "trait_type" | "value" | "max_value"
  ) => {
    let newStats = [...stats];
    switch (value) {
      case "trait_type":
        newStats[index].trait_type = data as string;
      case "value":
        newStats[index].value = data as number;
      case "max_value":
        newStats[index].max_value = data as number;
    }
    setStats(newStats);
  };
  const deleteStat = (index: number) => {
    let newStats = [...stats];
    newStats.splice(index, 1);
    setStats(newStats);
  };
  return (
    <div>
      <AttributesInputHead addFn={addStats} title="Stats" />
      {stats.map((stat, i) => (
        <div key={i} className="flex mb-2 justify-between">
          <input
            className={INPUTSTYLE}
            type="text"
            name="trait_type"
            placeholder="trait_type"
            id="trait_type"
            value={stat.trait_type}
            onChange={(e) => {
              editStat(i, e.target.value, "trait_type");
            }}
          />
          <input
            type="number"
            name="value"
            id="value"
            className={`w-20 ${INPUTSTYLE}`}
            value={stat.value}
            onChange={(e) => {
              editStat(i, e.target.value, "value");
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
              editStat(i, e.target.value, "max_value");
            }}
            placeholder="value"
          />
          <button className="text-red-500" onClick={() => deleteStat(i)}>
            <RemoveCircleIcon color="inherit" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default StatsInput;
