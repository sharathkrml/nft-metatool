import { InputMetaData } from "../types";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
const FormComponent = ({
  basics,
  setBasics,
  properties,
  setProperties,
  stats,
  setStats
}: InputMetaData) => {

  const addProperty = () => {
    setProperties((prev) => ([...prev, {
      "trait_type": "",
      "value": ""
    }]))
  }

  const editProperty = (index: number, data: string, value: boolean = false) => {
    let newProperties = [...properties]
    value ? newProperties[index].value = data : newProperties[index].trait_type = data
    setProperties(newProperties)
  }
  const deleteProperty = (index: number) => {
    let newProperties = [...properties]
    newProperties.splice(index, 1);
    setProperties(newProperties)
  }
  const addStats = () => {
    setStats((prev) => ([...prev, { display_type: "number", trait_type: "", value: 0 }]))
  }
  const editStat = (index: number, data: string | number, value: "trait_type" | "value" | "max_value") => {
    let newStats = [...stats]
    switch (value) {
      case "trait_type":
        newStats[index].trait_type = data as string
      case "value":
        newStats[index].value = data as number
      case "max_value":
        newStats[index].max_value = data as number
    }
    setStats(newStats)
  }
  const deleteStat = (index: number) => {
    let newStats = [...stats]
    newStats.splice(index, 1);
    setStats(newStats)
  }
  return (
    <div>
      <h1 className="text-center text-[#205ADC] text-2xl mt-5">
        Basic Information
      </h1>
      <label htmlFor="name" className="text-[#205ADC] mr-2">
        Name
      </label>
      <input
        type="text"
        className="bg-[#202225] border-2 border-[#4A5357] px-2 text-[#EDEDEE] focus:border-[#205ADC] rounded-md focus:outline-none"
        onChange={(e) =>
          setBasics((prevMetaData) => ({
            ...prevMetaData,
            name: e.target.value,
          }))
        }
      />
      <br />
      <label htmlFor="external_url" className="text-[#205ADC] mr-2">
        External URL
      </label>
      <input
        type="text"
        className="bg-[#202225] border-2 border-[#4A5357] px-2 text-[#EDEDEE] focus:border-[#205ADC] rounded-md focus:outline-none"
        onChange={(e) =>
          setBasics((prevMetaData) => ({
            ...prevMetaData,
            external_url: e.target.value,
          }))
        }
      />
      <br />
      <label htmlFor="description" className="text-[#205ADC] mr-2">
        Description
      </label>
      <textarea
        className="bg-[#202225] border-2 border-[#4A5357] px-2 text-[#EDEDEE] focus:border-[#205ADC] rounded-md focus:outline-none"
        onChange={(e) =>
          setBasics((prevMetaData) => ({
            ...prevMetaData,
            description: e.target.value,
          }))
        }
      />
      <div className="w-1/3 flex justify-between">
        <span className="text-[#205ADC]">Properties</span>
        <button className="text-white" onClick={addProperty}>
          <AddCircleOutlineIcon color="inherit" />
        </button>
      </div>
      {properties.map((property, i) => (
        <div key={i} className="flex justify-around mb-2">
          <input
            type="text"
            name="trait_type"
            placeholder="trait_type"
            id="trait_type"
            value={property.trait_type}
            onChange={(e) => {
              editProperty(i, e.target.value)
            }}
          />
          <input type="text" name="value" id="value"
            value={property.value}
            onChange={(e) => {
              editProperty(i, e.target.value, true)
            }}
            placeholder="value" />
          <button className="text-red-500" onClick={() => deleteProperty(i)}>
            <RemoveCircleIcon color="inherit" />
          </button>
        </div>
      ))}
      {/* Stats */}
      <div className="w-1/3 flex justify-between">
        <span className="text-[#205ADC]">Stats</span>
        <button className="text-white" onClick={addStats}>
          <AddCircleOutlineIcon color="inherit" />
        </button>
      </div>
      {stats.map((stat, i) => (
        <div key={i} className="flex mb-2 justify-between">
          <input
            type="text"
            name="trait_type"
            placeholder="trait_type"
            id="trait_type"
            value={stat.trait_type}
            onChange={(e) => {
              editStat(i, e.target.value, "trait_type")
            }}
          />
          <input type="number" name="value" id="value"
            className="w-20"
            value={stat.value}
            onChange={(e) => {
              editStat(i, e.target.value, "value")
            }}
            placeholder="value" />

          <input type="number" name="value" id="value"
            className="w-20"

            value={stat.max_value}
            onChange={(e) => {
              editStat(i, e.target.value, "max_value")
            }}
            placeholder="value" />
          <button className="text-red-500" onClick={() => deleteStat(i)}>
            <RemoveCircleIcon color="inherit" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default FormComponent;
