import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AttributesInputHead from "./AttributesInputHead";
import { BoostSetter } from "../../types";
import RemoveCircle from "../RemoveCircle";
import { useExpand } from "../../context/Expand";
import { INPUTSTYLE } from "../../styles";
const BoostsInput = ({ boosts, setBoosts }: BoostSetter) => {
  const [, setExpand] = useExpand();
  const addBoost = () => {
    setExpand((prev) => ({ ...prev, boostsExpand: true }));
    setBoosts((prev) => [
      ...prev,
      {
        display_type: "boost_number",
        trait_type: "",
        value: 0,
      },
    ]);
  };

  const editTrait = (index: number, data: string) => {
    setExpand((prev) => ({ ...prev, boostsExpand: true }));

    let newboosts = [...boosts];
    newboosts[index].trait_type = data;
    setBoosts(newboosts);
  };
  const editValue = (index: number, data: number) => {
    setExpand((prev) => ({ ...prev, boostsExpand: true }));

    let newboosts = [...boosts];
    newboosts[index].value = data;
    setBoosts(newboosts);
  };
  const editDisplayType = (
    index: number,
    data: "boost_number" | "boost_percentage"
  ) => {
    setExpand((prev) => ({ ...prev, boostsExpand: true }));

    let newboosts = [...boosts];
    newboosts[index].display_type = data;
    setBoosts(newboosts);
  };
  const deleteBoosts = (index: number) => {
    setExpand((prev) => ({ ...prev, boostsExpand: true }));

    let newboosts = [...boosts];
    newboosts.splice(index, 1);
    setBoosts(newboosts);
  };
  return (
    <div className="flex flex-col items-end">
      <AttributesInputHead addFn={addBoost} title="Boosts" />
      {boosts.map((boost, i) => (
        <div key={i} className="mb-2">
          <select
            name="display_type"
            className={`mr-2 ${INPUTSTYLE}`}
            id="display_type"
            value={boost.display_type}
            onChange={(e) =>
              editDisplayType(
                i,
                e.target.value as "boost_number" | "boost_percentage"
              )
            }
          >
            <option value="boost_number">Boost Number</option>
            <option value="boost_percentage">Boost Percentage</option>
          </select>

          <input
            className={`mr-2 ${INPUTSTYLE}`}
            type="text"
            name="trait_type"
            placeholder="trait_type"
            id="trait_type"
            value={boost.trait_type}
            onChange={(e) => {
              editTrait(i, e.target.value);
            }}
          />
          <input
            type="number"
            name="value"
            id="value"
            value={boost.value}
            className={`w-20 mr-2 ${INPUTSTYLE}`}
            onChange={(e) => {
              editValue(i, parseFloat(e.target.value || ""));
            }}
            placeholder="value"
          />
          <RemoveCircle index={i} deleteFn={deleteBoosts} />
        </div>
      ))}
    </div>
  );
};

export default BoostsInput;
