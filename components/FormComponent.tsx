import { InputMetaData } from "../types";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
const FormComponent = ({
  basics,
  setBasics,
  properties,
  setProperties,
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
    </div>
  );
};

export default FormComponent;
