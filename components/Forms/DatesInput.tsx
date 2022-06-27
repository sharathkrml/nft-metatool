import RemoveCircle from "../RemoveCircle";
import AttributesInputHead from "./AttributesInputHead";
import { DateSetter } from "../../types";
import { INPUTSTYLE } from "../../styles";
import { useExpand } from "../../context/Expand";
import { motion, AnimatePresence } from "framer-motion";
const DatesInput = ({ dates, setDates }: DateSetter) => {
  let dateNow = new Date();
  const [, setExpand] = useExpand();
  const addDate = () => {
    setExpand((prev) => ({ ...prev, datesExpand: true }));
    setDates((prev) => [
      ...prev,
      {
        display_type: "date",
        trait_type: "",
        value: dateNow.getTime() / 1000,
      },
    ]);
  };

  const editTrait = (index: number, data: string) => {
    let newDates = [...dates];
    newDates[index].trait_type = data;
    setDates(newDates);
  };
  const editDateValue = (index: number, date: string) => {
    let dateObj = new Date(date);
    let seconds = dateObj.getTime() / 1000;
    let newDates = [...dates];
    newDates[index].value = seconds;
    setDates(newDates);
  };
  const deleteDates = (index: number) => {
    let newDates = [...dates];
    newDates.splice(index, 1);
    setDates(newDates);
  };
  return (
    <div className="flex flex-col items-end justify-center">
      <AttributesInputHead addFn={addDate} title="Dates" />
      <AnimatePresence>
        {dates.map((date, i) => {
          let dateInSeconds = new Date(date.value * 1000);
          let [convertedDate] = dateInSeconds.toISOString().split("T");
          return (
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ opacity: 0 }}
              key={i}
              className="mb-2"
            >
              <input
                className={`${INPUTSTYLE} mr-10`}
                type="text"
                name="trait_type"
                placeholder="trait_type"
                id="trait_type"
                value={date.trait_type}
                onChange={(e) => {
                  editTrait(i, e.target.value);
                }}
              />
              <input
                type="date"
                name="date"
                id="date"
                onChange={(e) => editDateValue(i, e.target.value)}
                value={convertedDate}
                className={`${INPUTSTYLE} mr-10`}
              />
              <RemoveCircle index={i} deleteFn={deleteDates} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default DatesInput;
