import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AttributesInputHead from "./AttributesInputHead";
import { LevelsSetter } from "../../types";

const INPUTSTYLE =
  "bg-[#202225] border-2 border-[#4A5357] px-2 text-[#EDEDEE] focus:border-[#205ADC] rounded-md focus:outline-none";
const LevelsInput = ({ levels, setLevels }: LevelsSetter) => {
  const addLevels = () => {
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
    <div>
      <AttributesInputHead addFn={addLevels} title="Levels" />
      {levels.map((level, i) => (
        <div key={i} className="flex justify-around mb-2">
          <input
            className={INPUTSTYLE}
            type="text"
            name="trait_type"
            placeholder="trait_type"
            id="trait_type"
            value={level.trait_type}
            onChange={(e) => {
              editTrait(i, e.target.value);
            }}
          />
          <input
            type="number"
            name="value"
            id="value"
            value={level.value}
            className={`w-20 ${INPUTSTYLE}`}
            onChange={(e) => {
              editValue(i, parseFloat(e.target.value));
            }}
            placeholder="value"
          />
          <input
            type="number"
            name="max_value"
            id="max_value"
            value={level.max_value}
            className={`w-20 ${INPUTSTYLE}`}
            onChange={(e) => {
              editMaxValue(i, parseFloat(e.target.value));
            }}
          />
          <button className="text-red-500" onClick={() => deleteLevel(i)}>
            <RemoveCircleIcon color="inherit" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default LevelsInput;
