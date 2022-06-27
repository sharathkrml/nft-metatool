import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { useExpand } from "../../context/Expand";

import { AttributeWrapperProps } from "../../types";
// gives that expandable structure
function AttributeWrapper({
  expanded,
  setExpand,
  icon,
  name,
  children,
  last,
}: AttributeWrapperProps) {
  return (
    <>
      <div
        onClick={() => setExpand()}
        className={`flex items-center justify-between p-4 border-[1px] border-black bg-[#262B2F] ${last &&
          !expanded &&
          "rounded-b-md"}`}
      >
        <div>
          {icon}
          <span className="ml-2">{name}</span>
        </div>
        {expanded ? <ExpandLess /> : <ExpandMore />}
      </div>
      {expanded && children}
    </>
  );
}

export default AttributeWrapper;
