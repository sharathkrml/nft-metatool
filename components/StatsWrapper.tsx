import React from 'react'
import Stats from './Stats'
import { Stats as StatsType } from "../types"
function StatsWrapper({ stats }: { stats: StatsType[] | undefined }) {
    return (
        <div className="text-slate-400 text-sm border-[1px] border-black p-2">
            {
                stats?.map((stat, i) => (
                    <Stats key={i} trait_type={stat.trait_type} value={stat.value} />
                ))
            }
        </div>
    )
}

export default StatsWrapper