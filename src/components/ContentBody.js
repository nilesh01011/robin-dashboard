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

                {/* user name and config
                <div className='w-full flex items-center justify-between mt-[25px] xl:pr-[22px] pr-0'>
                    user name as a title
                    <div className='xl:w-[69%] w-full flex items-center justify-between'>
                        <h1 className='text-[24px] font-bold'>Welcome back John!</h1>
                    </div>

                    right congig
                    <div className='xl:w-[27%] w-full h-[32px] flex items-center justify-between'>
                        <button className={`rounded-md flex items-center gap-[5px] p-[8px_12px] w-max ${theme === 'dark' ? 'bg-[#242424]  ' : ' bg-white'}`} style={{ border: `1px solid ${theme === 'dark' ? '#242424' : '#DEDEDE'}` }}>
                            icons
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M9.166 18V13H10.833V14.667H17.5V16.334H10.833V18H9.166ZM2.5 16.333V14.667H7.5V16.334L2.5 16.333ZM5.834 13V11.333H2.5V9.666H5.834V8H7.5V13H5.834ZM9.166 11.333V9.666H17.5V11.333H9.166ZM12.5 8V3H14.167V4.667H17.5V6.334H14.167V8H12.5ZM2.5 6.334V4.667H10.833V6.334H2.5Z" fill={`${theme === 'dark' ? 'white' : 'black'}`} />
                            </svg>
                            text
                            <span className='text-[14px]'>Configuration</span>
                        </button>

                        reset button
                        <button className='text-[14px]'>
                            Reset to default
                        </button>
                    </div>
                </div> */}

                {/* main content body */}
                <div className='w-full h-full flex mt-[25px] mb-[25px] items-start justify-between flex-wrap xl:flex-row'>
                    <LeftContentBody theme={theme} />
                    <RightContentBody theme={theme} />
                </div>
            </div>
        </>
    )
}

export default ContentBody