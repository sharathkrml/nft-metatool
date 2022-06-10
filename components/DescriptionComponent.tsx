import React from 'react'
import { Subject } from "@mui/icons-material"
function DescriptionComponent() {
    return (
        <div className=' mt-2'>
            <div className="flex p-4 border-[1px] border-black bg-[#262B2F] rounded-t-md">
                <Subject />
                <span className='ml-2'>Description</span>
            </div>
            <div className="py-5 px-10 border-[1px] border-black bg-[#262B2F]">
                <span className='text-slate-400'>Created by <span className='text-blue-400'>Sharath</span></span><br/>
                <span className='text-sm'>Friendly OpenSea Creature that enjoys long swims in the ocean.</span>
            </div>
        </div>
    )
}

export default DescriptionComponent