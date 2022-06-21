import { Date as DateType } from "../../types";
import { motion } from "framer-motion";

function Stats({ trait_type, value }: DateType) {
  let date_String = new Date(value * 1000).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      exit={{ opacity: 0 }}
      className="flex p-2 item-center justify-between"
    >
      <div className="capitalize">{trait_type}</div>
      <div className="stats">{date_String}</div>
    </motion.div>
  );
}

export default Stats;
