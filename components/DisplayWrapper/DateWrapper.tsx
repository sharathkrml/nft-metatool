import React from "react";
import Date from "../Display/Date";
import { Date as DateType } from "../../types";
function DateWrapper({ dates }: { dates: DateType[] | undefined }) {
  return (
    <div className="text-slate-400 text-sm border-[1px] border-black p-2">
      {dates?.map((date, i) => (
        <Date
          key={i}
          display_type="date"
          trait_type={date.trait_type}
          value={date.value}
        />
      ))}
    </div>
  );
}

export default DateWrapper;
