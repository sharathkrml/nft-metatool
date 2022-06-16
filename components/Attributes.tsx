import {
  Label,
  Equalizer,
  Stars,
  FlashOn,
  CalendarToday,
  Ballot,
} from "@mui/icons-material";
import AttributeWrapper from "./DisplayWrapper/AttributeWrapper";
import { useState } from "react";
import PropertiesWrapper from "./DisplayWrapper/PropertiesWrapper";
import DetailsWrapper from "./DisplayWrapper/DetailsWrapper";
import StatsWrapper from "./DisplayWrapper/StatsWrapper";
import LevelWrapper from "./DisplayWrapper/LevelWrapper";
import BoostsWrapper from "./DisplayWrapper/BoostsWrapper";
import DateWrapper from "./DisplayWrapper/DateWrapper";
import { Attributes } from "../types";
function Attributes({ attributes }: { attributes: Attributes }) {
  const [propertiesExpand, setPropertiesExpand] = useState<boolean>(false);
  const [statsExpand, setStatsExpand] = useState<boolean>(false);
  const [levelsExpand, setLevelsExpand] = useState<boolean>(false);
  const [boostsExpand, setBoostsExpand] = useState<boolean>(false);
  const [datesExpand, setDatesExpand] = useState<boolean>(false);
  const [detailExpand, setDetailsExpand] = useState<boolean>(true);
  return (
    <div>
      <AttributeWrapper
        expanded={propertiesExpand}
        setExpanded={setPropertiesExpand}
        icon={<Label />}
        name={"Properties"}
      >
        <PropertiesWrapper properties={attributes.properties} />
      </AttributeWrapper>
      {/* stats */}
      <AttributeWrapper
        expanded={statsExpand}
        setExpanded={setStatsExpand}
        icon={<Equalizer />}
        name={"Stats"}
      >
        <StatsWrapper stats={attributes.stats} />
      </AttributeWrapper>
      {/* levels */}
      <AttributeWrapper
        expanded={levelsExpand}
        setExpanded={setLevelsExpand}
        icon={<Stars />}
        name={"Levels"}
      >
        <LevelWrapper levels={attributes.levels} />
      </AttributeWrapper>
      {/* Boosts */}
      <AttributeWrapper
        expanded={boostsExpand}
        setExpanded={setBoostsExpand}
        icon={<FlashOn />}
        name={"Boosts"}
      >
        <BoostsWrapper boosts={attributes.boosts} />
      </AttributeWrapper>
      {/* Dates */}
      <AttributeWrapper
        expanded={datesExpand}
        setExpanded={setDatesExpand}
        icon={<CalendarToday />}
        name={"Dates"}
      >
        <DateWrapper dates={attributes.dates} />
      </AttributeWrapper>
      {/* Details */}
      <AttributeWrapper
        expanded={detailExpand}
        setExpanded={setDetailsExpand}
        icon={<Ballot />}
        name={"Details"}
        last={true}
      >
        <DetailsWrapper />
      </AttributeWrapper>
    </div>
  );
}

export default Attributes;
