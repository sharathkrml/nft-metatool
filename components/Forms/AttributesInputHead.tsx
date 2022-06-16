import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const AttributesInputHead = ({
  addFn,
  title,
}: {
  addFn: () => void;
  title: string;
}) => {
  return (
    <div className="w-1/3 flex justify-between">
      <span className="text-[#205ADC]">{title}</span>
      <button className="text-white" onClick={addFn}>
        <AddCircleOutlineIcon color="inherit" />
      </button>
    </div>
  );
};

export default AttributesInputHead;
