import React from 'react'
import { boxBodyContent } from '../Data'
import BoxContent from './BoxContent'

function LeftContentBody({ theme }) {
    return (
        <>
            <div className='xl:w-[69%] w-full'>
                {/* title */}
                <div className='flex items-center justify-between'>
                    <h1 className='text-[24px] font-bold'>Welcome back John!</h1>
                </div>
                {/* box content */}
                <div className='flex flex-col gap-[22px] mt-[1rem] h-full w-full'>
                    {
                        boxBodyContent.map((ele) => (
                            <BoxContent theme={theme} key={ele.id} title={ele.title} icons={ele.icons} counterBox={ele.counterBox} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default LeftContentBody