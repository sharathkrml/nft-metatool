import { Label, Equalizer, Stars, FlashOn, CalendarToday, Ballot } from "@mui/icons-material"
import AttributeWrapper from "./AttributeWrapper"
import { useState } from "react"
import PropertiesWrapper from "./PropertiesWrapper"
import DetailsWrapper from "./DetailsWrapper"
import StatsWrapper from "./StatsWrapper"
import LevelWrapper from "./LevelWrapper"
function AttributesComponent() {
  const [propertiesExpand, setPropertiesExpand] = useState<boolean>(false)
  const [statsExpand, setStatsExpand] = useState<boolean>(false)
  const [levelsExpand, setLevelsExpand] = useState<boolean>(false)
  const [boostsExpand, setBoostsExpand] = useState<boolean>(false)
  const [datesExpand, setDatesExpand] = useState<boolean>(false)
  const [detailExpand, setDetailsExpand] = useState<boolean>(false)
  return (
    <div>
      <AttributeWrapper expanded={propertiesExpand}
        setExpanded={setPropertiesExpand} icon={<Label />}
        name={"Properties"}
      >
        <PropertiesWrapper />
      </AttributeWrapper>
      {/* stats */}
      <AttributeWrapper expanded={statsExpand}
        setExpanded={setStatsExpand} icon={<Equalizer />}
        name={"Stats"}
      >
        <StatsWrapper />
      </AttributeWrapper>
      {/* levels */}
      <AttributeWrapper expanded={levelsExpand}
        setExpanded={setLevelsExpand} icon={<Stars />}
        name={"Levels"}
      >
        <LevelWrapper />
      </AttributeWrapper>
      {/* Boosts */}
      <AttributeWrapper expanded={boostsExpand}
        setExpanded={setBoostsExpand} icon={<FlashOn />}
        name={"Boosts"}
      >
        <PropertiesWrapper />
      </AttributeWrapper>
      {/* Dates */}
      <AttributeWrapper expanded={datesExpand}
        setExpanded={setDatesExpand} icon={<CalendarToday />}
        name={"Dates"}
      >
        <PropertiesWrapper />
      </AttributeWrapper>
      {/* Details */}
      <AttributeWrapper expanded={detailExpand}
        setExpanded={setDetailsExpand} icon={<Ballot />}
        name={"Details"} last={true}
      >
        <DetailsWrapper />
      </AttributeWrapper>
    </div>
  )
}

export default AttributesComponent