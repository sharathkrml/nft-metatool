import Level from "./Level"

function LevelWrapper() {
    return (
        <div className="text-slate-400 text-sm border-[1px] border-black p-2">
            <Level trait_type="Level" value={5} max_value={100} />
            <Level trait_type="Stamina" value={1.4} />
        </div>
    )
}

export default LevelWrapper