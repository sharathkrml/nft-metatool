import Level from "../Display/Level";
import { Level as LevelType } from "../../types";
import { AnimatePresence } from "framer-motion";
function LevelWrapper({ levels }: { levels: LevelType[] | undefined }) {
  return (
    <div className="text-slate-400 text-sm border-[1px] border-black p-2">
      <AnimatePresence>
        {levels?.map((level, i) => (
          <Level
            key={i}
            trait_type={level.trait_type}
            value={level.value}
            max_value={level.max_value}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default LevelWrapper;
