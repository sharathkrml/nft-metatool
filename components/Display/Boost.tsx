import { Boost } from "../../types";
import { Circle } from "rc-progress";
import { motion, AnimatePresence } from "framer-motion";
function Boosts({ display_type, trait_type, value }: Boost) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        exit={{ opacity: 0 }}
        className="p-2 m-1"
      >
        <Circle
          percent={display_type == "boost_percentage" ? value : 100}
          strokeColor="#6BD9FC"
          strokeWidth={10}
          trailWidth={10}
        />
        <div className="text-center leading-4 mt-2">{trait_type}</div>
        <div className="text-center ">
          +{value}
          {display_type == "boost_percentage" && "%"}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Boosts;
