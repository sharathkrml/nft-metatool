import React from 'react'
import Stats from './Stats'
function StatsWrapper() {
    return (
        <div className="text-slate-400 text-sm border-[1px] border-black p-2">
            <Stats trait_type='Generation' value={2} />
            <Stats trait_type='Generation' value={2} />
        </div>
    )
}

export default StatsWrapper