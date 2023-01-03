import React, { useEffect, useState } from 'react'
// import { boxBodyContent } from '../Data'
import BoxContent from './BoxContent'

function LeftContentBody({ theme }) {

    return (
        <>
            <div className='xl:w-[69%] w-full'>
                {/* box content */}
                <div className='flex flex-col gap-[22px] h-full w-full'>
                    {/* {
                        boxBodyContent.map((ele) => (
                            <BoxContent theme={theme} key={ele.id} title={ele.title} icons={ele.icons} counterBox={ele.counterBox} />
                        ))
                    } */}
                    <BoxContent theme={theme} />
                </div>
            </div>
        </>
    )
}

export default LeftContentBody