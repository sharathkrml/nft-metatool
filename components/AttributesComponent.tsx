import { Label, Equalizer, Stars, FlashOn, CalendarToday, Ballot } from "@mui/icons-material"
import AttributeWrapper from "./AttributeWrapper"
import { useState } from "react"
import PropertiesWrapper from "./PropertiesWrapper"
import DetailsWrapper from "./DetailsWrapper"
import StatsWrapper from "./StatsWrapper"
import LevelWrapper from "./LevelWrapper"
import BoostsWrapper from './BoostsWrapper'
import DateWrapper from "./DateWrapper"
import { Attributes, Properties, Stats, Level, Boost, Date } from '../types'
function AttributesComponent({ attributes }: { attributes: Attributes }) {
  const [propertiesExpand, setPropertiesExpand] = useState<boolean>(false)
  const [properties, setProperties] = useState<Properties[]>()
  const [statsExpand, setStatsExpand] = useState<boolean>(false)
  const [stats, setStats] = useState<Stats[]>()
  const [levelsExpand, setLevelsExpand] = useState<boolean>(false)
  const [levels, setLevels] = useState<Level[]>()
  const [boostsExpand, setBoostsExpand] = useState<boolean>(false)
  const [boosts, setBoosts] = useState<Boost[]>()
  const [datesExpand, setDatesExpand] = useState<boolean>(false)
  const [dates, setDates] = useState<Date[]>()
  const [detailExpand, setDetailsExpand] = useState<boolean>(true)

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
        <BoostsWrapper />
      </AttributeWrapper>
      {/* Dates */}
      <AttributeWrapper expanded={datesExpand}
        setExpanded={setDatesExpand} icon={<CalendarToday />}
        name={"Dates"}
      >
        <DateWrapper />
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