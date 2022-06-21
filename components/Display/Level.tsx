import { Line } from "rc-progress";
import { Level } from "../../types";
import { motion } from "framer-motion";
function Level({ trait_type, value, max_value }: Level) {
  return (
    <motion.div
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      exit={{ opacity: 0 }}
      className="px-2 mb-2"
    >
      <div className="flex justify-between py-2">
        <div>{trait_type}</div>
        <div>
          {value} or {max_value ? max_value : value}
        </div>
      </div>
      <Line
        percent={max_value ? (value * 100) / max_value : 100}
        trailWidth={2}
        strokeWidth={2}
        strokeColor="#2081E2"
        trailColor="#303339"
      />
    </motion.div>
  );
}

export default Level;
