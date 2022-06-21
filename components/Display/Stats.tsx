import { Stats as StatsProps } from "../../types";
import { motion } from "framer-motion";
function Stats({ trait_type, value, max_value }: StatsProps) {
  return (
    <motion.div
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      exit={{ opacity: 0 }}
      className="flex p-2 item-center justify-between"
    >
      <div className="name">{trait_type}</div>
      <div className="stats">
        {value} of {max_value ? max_value : 100}
      </div>
    </motion.div>
  );
}

export default Stats;
