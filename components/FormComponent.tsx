import { InputMetaData } from "../types";
import ImageComponent from "./ImageComponent";

const FormComponent = ({ metaData, setMetaData }: InputMetaData) => {
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
          setMetaData((prevMetaData) => ({
            ...prevMetaData,
            name: e.target.value,
          }))
        }
      />
    </div>
  );
};

export default FormComponent;
