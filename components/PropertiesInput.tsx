import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AttributesInputHead from "./AttributesInputHead";
import { PropertiesSetter } from "../types";

const INPUTSTYLE =
    "bg-[#202225] border-2 border-[#4A5357] px-2 text-[#EDEDEE] focus:border-[#205ADC] rounded-md focus:outline-none";
const PropertiesInput = ({ properties, setProperties }: PropertiesSetter) => {
    const addProperty = () => {
        setProperties((prev) => [
            ...prev,
            {
                trait_type: "",
                value: "",
            },
        ]);
    };

    const editProperty = (
        index: number,
        data: string,
        value: boolean = false
    ) => {
        let newProperties = [...properties];
        value
            ? (newProperties[index].value = data)
            : (newProperties[index].trait_type = data);
        setProperties(newProperties);
    };
    const deleteProperty = (index: number) => {
        let newProperties = [...properties];
        newProperties.splice(index, 1);
        setProperties(newProperties);
    };
    return (
        <div>
            <AttributesInputHead addFn={addProperty} title="Property" />
            {properties.map((property, i) => (
                <div key={i} className="flex justify-around mb-2">
                    <input
                        className={INPUTSTYLE}
                        type="text"
                        name="trait_type"
                        placeholder="trait_type"
                        id="trait_type"
                        value={property.trait_type}
                        onChange={(e) => {
                            editProperty(i, e.target.value);
                        }}
                    />
                    <input
                        type="text"
                        name="value"
                        id="value"
                        value={property.value}
                        className={INPUTSTYLE}
                        onChange={(e) => {
                            editProperty(i, e.target.value, true);
                        }}
                        placeholder="value"
                    />
                    <button className="text-red-500" onClick={() => deleteProperty(i)}>
                        <RemoveCircleIcon color="inherit" />
                    </button>
                </div>
            ))}
        </div>
    )
}

export default PropertiesInput