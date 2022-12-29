import React from 'react'
import LeftContentBody from './LeftContentBody'
import RightContentBody from './RightContentBody'

function ContentBody({ theme }) {
    return (
        <>
            <div className='w-full h-full'>
                {/* title */}
                <div className={`w-full border-b-[1px] ${theme === 'dark' ? 'border-[#635D5D]' : 'border-[#DEDEDE]'}`}>
                    <h1 className='pb-[8px] relative w-max font-semibold'>
                        DASHBOARD
                        <span className='absolute bottom-0 left-0 bg-gradient-to-r from-[#CAC9EE] to-[#EFA3A3] w-full h-[4px] rounded'></span>
                    </h1>
                </div>

                {/* main content body */}
                <div className='w-full h-full flex my-[20px] items-start justify-between flex-wrap xl:flex-row'>
                    <LeftContentBody theme={theme} />
                    <RightContentBody theme={theme} />
                </div>
            </div>
        </>
    )
}

export default ContentBody