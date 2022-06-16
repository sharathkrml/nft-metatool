import Boost from "../Display/Boost";
// box that covers all properties
import { Boost as BoostType } from "../../types";
function BoostsWrapper({ boosts }: { boosts: BoostType[] | undefined }) {
  return (
    <div className="grid grid-cols-6 gap-1 border-[1px] border-black p-2">
      {boosts?.map((boost, i) => {
        if (boost.display_type == "boost_number") {
          return (
            <Boost
              display_type="boost_number"
              trait_type={boost.trait_type}
              value={boost.value}
            />
          );
        }
      })}
      {boosts?.map((boost, i) => {
        if (boost.display_type == "boost_percentage") {
          return (
            <Boost
              display_type="boost_percentage"
              trait_type={boost.trait_type}
              value={boost.value}
            />
          );
        }
      })}
    </div>
  );
}

export default BoostsWrapper;
