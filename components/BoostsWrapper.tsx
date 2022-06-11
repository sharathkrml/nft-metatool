import Boost from "./Boost"
// box that covers all properties
function BoostsWrapper() {
    return (
        <div className="grid grid-cols-6 gap-1 border-[1px] border-black p-2">
            <Boost display_type="boost_number" trait_type="Aqua Power" value={40} />
            <Boost display_type="boost_percentage" trait_type="Stamina Increase" value={20}  />
        </div>
    )
}

export default BoostsWrapper