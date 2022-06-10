import { Label, ExpandMore, ExpandLess } from "@mui/icons-material"
import PropertiesPreview from "./PropertiesPreview"
import { useState } from "react"
function AttributesComponent() {
  const [PropertiesExpand, setPropertiesExpand] = useState<boolean>(false)
  return (
    <div>
      <div onClick={() => setPropertiesExpand((prev) => (!prev))} className="flex items-center justify-between p-4 border-[1px] border-black bg-[#262B2F] ">
        <div><Label /><span className='ml-2'>Properties</span></div>
        {PropertiesExpand ? <ExpandLess /> : <ExpandMore />}
      </div>
      {PropertiesExpand && <div className="grid grid-cols-3 gap-1 border-[1px] border-black p-2">
        <PropertiesPreview trait_type="BASE" value="Starfish" />
        <PropertiesPreview trait_type="EYES" value="Big" />
        <PropertiesPreview trait_type="MOUTH" value="Surprised" />
        <PropertiesPreview trait_type="PERSONALITY" value="SAD" />
      </div>}
    </div>
  )
}

export default AttributesComponent