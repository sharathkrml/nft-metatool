import React from 'react'
import Date from './Date'
function DateWrapper() {
    return (
        <div className="text-slate-400 text-sm border-[1px] border-black p-2">
            <Date trait_type='birthday' value={1546360800} />
            <Date trait_type='Hii' value={1546360981} />
        </div>
    )
}

export default DateWrapper