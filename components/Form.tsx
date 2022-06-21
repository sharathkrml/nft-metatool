import { InputMetaData } from "../types";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import PropertiesInput from "./Forms/PropertiesInput";
import StatsInput from "./Forms/StatsInput";
import LevelsInput from "./Forms/LevelsInput";
import BoostsInput from "./Forms/BoostsInput";
import DatesInput from "./Forms/DatesInput";
import MediaInput from "./Forms/MediaInput";
import { INPUTSTYLE } from "../styles";
const Form = ({
  basics,
  setBasics,
  properties,
  setProperties,
  stats,
  setStats,
  levels,
  setLevels,
  boosts,
  setBoosts,
  dates,
  setDates,
  media,
  setMedia,
}: InputMetaData) => {
  return (
    <div>
      <h1 className="text-center text-[#205ADC] font-happy-monkey text-4xl mt-5">
        Basic Information
      </h1>
      <div className="flex justify-end items-center my-3">
        <label htmlFor="name" className="text-[#205ADC] font-happy-monkey mr-2">
          Name :
        </label>
        <input
          type="text"
          className={`${INPUTSTYLE} w-8/12 h-8`}
          value={basics.name}
          onChange={(e) =>
            setBasics((prevMetaData) => ({
              ...prevMetaData,
              name: e.target.value,
            }))
          }
        />
      </div>
      <div className="flex justify-end items-center my-3">
        <label
          htmlFor="external_url"
          className="text-[#205ADC] font-happy-monkey mr-2"
        >
          External
          <div className="text-right">URL :</div>
        </label>
        <input
          type="text"
          className={`${INPUTSTYLE} w-8/12 h-8`}
          onChange={(e) =>
            setBasics((prevMetaData) => ({
              ...prevMetaData,
              external_url: e.target.value,
            }))
          }
        />
      </div>
      <MediaInput media={media} setMedia={setMedia} />
      <div className="flex justify-end my-3">
        <label
          htmlFor="description"
          className="text-[#205ADC] font-happy-monkey mr-2"
        >
          Description:
        </label>
        <textarea
          className={`${INPUTSTYLE} w-8/12 h-20`}
          value={basics.description}
          onChange={(e) =>
            setBasics((prevMetaData) => ({
              ...prevMetaData,
              description: e.target.value,
            }))
          }
        />
      </div>

      <PropertiesInput properties={properties} setProperties={setProperties} />
      {/* Stats */}
      <StatsInput stats={stats} setStats={setStats} />
      {/* levels */}
      <LevelsInput levels={levels} setLevels={setLevels} />
      {/* Boosts */}
      <BoostsInput boosts={boosts} setBoosts={setBoosts} />
      {/* Dates */}
      <DatesInput dates={dates} setDates={setDates} />
    </div>
  );
};

export default Form;
