import { ExpandMore, ExpandLess } from "@mui/icons-material"

import { AttributeWrapperProps } from '../types'
// gives that expandable structure
function AttributeWrapper({ expanded, setExpanded, icon, name, children, last }: AttributeWrapperProps) {
  return (<>
    <div onClick={() => setExpanded((prev) => (!prev))} className={`flex items-center justify-between p-4 border-[1px] border-black bg-[#262B2F] ${last && !expanded && "rounded-b-md"}`}>
      <div>{icon}<span className='ml-2'>{name}</span></div>
      {expanded ? <ExpandLess /> : <ExpandMore />}
    </div>
    {expanded && children}
  </>)
}

export default AttributeWrapper