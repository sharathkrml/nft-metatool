import {
  Label,
  Equalizer,
  Stars,
  FlashOn,
  CalendarToday,
  Ballot,
} from "@mui/icons-material";
import AttributeWrapper from "./DisplayWrapper/AttributeWrapper";
import PropertiesWrapper from "./DisplayWrapper/PropertiesWrapper";
import DetailsWrapper from "./DisplayWrapper/DetailsWrapper";
import StatsWrapper from "./DisplayWrapper/StatsWrapper";
import LevelWrapper from "./DisplayWrapper/LevelWrapper";
import BoostsWrapper from "./DisplayWrapper/BoostsWrapper";
import DateWrapper from "./DisplayWrapper/DateWrapper";
import { Attributes } from "../types";
import { useExpand } from "../context/Expand";
function Attributes({ attributes }: { attributes: Attributes }) {
  const [expand, setExpand] = useExpand();
  const expandProperties = () => {
    return;
  };
  return (
    <div>
      <AttributeWrapper
        expanded={expand.propertiesExpand}
        setExpand={() =>
          setExpand((prev) => ({
            ...prev,
            propertiesExpand: !prev.propertiesExpand,
          }))
        }
        icon={<Label />}
        name={"Properties"}
      >
        <PropertiesWrapper properties={attributes.properties} />
      </AttributeWrapper>
      {/* stats */}
      <AttributeWrapper
        expanded={expand.statsExpand}
        setExpand={() =>
          setExpand((prev) => ({
            ...prev,
            statsExpand: !prev.statsExpand,
          }))
        }
        icon={<Equalizer />}
        name={"Stats"}
      >
        <StatsWrapper stats={attributes.stats} />
      </AttributeWrapper>
      {/* levels */}
      <AttributeWrapper
        setExpand={() =>
          setExpand((prev) => ({
            ...prev,
            levelsExpand: !prev.levelsExpand,
          }))
        }
        expanded={expand.levelsExpand}
        icon={<Stars />}
        name={"Levels"}
      >
        <LevelWrapper levels={attributes.levels} />
      </AttributeWrapper>
      {/* Boosts */}
      <AttributeWrapper
        expanded={expand.boostsExpand}
        setExpand={() =>
          setExpand((prev) => ({
            ...prev,
            boostsExpand: !prev.boostsExpand,
          }))
        }
        icon={<FlashOn />}
        name={"Boosts"}
      >
        <BoostsWrapper boosts={attributes.boosts} />
      </AttributeWrapper>
      {/* Dates */}
      <AttributeWrapper
        setExpand={() =>
          setExpand((prev) => ({
            ...prev,
            datesExpand: !prev.datesExpand,
          }))
        }
        expanded={expand.datesExpand}
        icon={<CalendarToday />}
        name={"Dates"}
      >
        <DateWrapper dates={attributes.dates} />
      </AttributeWrapper>
      {/* Details */}
      <AttributeWrapper
        expanded={expand.detailExpand}
        setExpand={() =>
          setExpand((prev) => ({
            ...prev,
            detailExpand: !prev.detailExpand,
          }))
        }
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
