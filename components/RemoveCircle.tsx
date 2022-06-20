import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import React from "react";

type DeleteProp = {
  index: number;
  deleteFn: (index: number) => void;
};
const RemoveCircle = ({ index, deleteFn }: DeleteProp) => {
  return (
    <button className="text-red-500" onClick={() => deleteFn(index)}>
      <RemoveCircleOutlineIcon color="inherit" />
    </button>
  );
};

export default RemoveCircle;
