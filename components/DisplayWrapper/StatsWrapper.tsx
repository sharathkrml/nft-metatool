import React from "react";
import Stats from "../Display/Stats";
import { Stats as StatsType } from "../../types";
import { AnimatePresence } from "framer-motion";
function StatsWrapper({ stats }: { stats: StatsType[] }) {
  return (
    <div className="text-slate-400 text-sm border-[1px] border-black p-2">
      <AnimatePresence>
        {stats.map((stat, i) => (
          <Stats
            key={i}
            display_type="number"
            trait_type={stat.trait_type}
            value={stat.value}
            max_value={stat.max_value}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default StatsWrapper;
