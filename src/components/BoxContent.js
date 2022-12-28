import React from 'react'

function BoxContent({ title, icons, counterBox, theme }) {

    const counts = counterBox.map((ele) => ele.counts);
    const countsName = counterBox.map((ele) => ele.name);
    const names = counterBox.map((ele) => ele.name2)

    const changeHeadTheme = theme === 'dark' ? 'bg-[#635D5D]' : 'bg-[#F4F4F4]'
    const changeBodyTheme = theme === 'dark' ? 'bg-[#242424]' : 'bg-white'

    return (
        <>
            <div className='w-full h-[164px] rounded-lg shadow-[0_0_3px_rgba(0,0,0,0.2)]'>
                {/* head */}
                <div className={`h-[25%] ${changeHeadTheme} rounded-t-lg flex items-center justify-between p-[12px]`}>
                    <div className='flex items-center gap-[8px]'>
                        {/* icons */}
                        {icons}
                        <span className='text-[12px]'>{title}</span>
                    </div>
                    {/* watch more button */}
                    <div className='flex items-baseline'>
                        <button type='button' className='underline text-[12px] font-[400]'>View more</button>
                    </div>
                </div>

                {/* content */}
                <div className={`w-full ${changeBodyTheme} h-[75%] py-[1rem] flex items-center divide-x-[1px] rounded-b-lg `}>
                    <div className='w-full flex flex-col items-center justify-center px-[2rem] h-full'>
                        <h1 className={`font-bold text-[34px] ${counts[3] && 'text-[#FF3E5B]'}`}>{counts[0]}</h1>
                        <h6 className='font-[400] text-[12px] whitespace-nowrap'>{countsName[0]}</h6>
                        {names[0] &&
                            <h6 className='font-[400] text-[12px] whitespace-nowrap'>{names[0]}</h6>
                        }
                    </div>
                    <div className='w-full flex flex-col items-center justify-center px-[2rem] h-full'>
                        <h1 className='font-bold text-[34px]'>{counts[1]}</h1>
                        <h6 className='font-[400] text-[12px] whitespace-nowrap'>{countsName[1]}</h6>
                        {names[1] &&
                            <h6 className='font-[400] text-[12px] whitespace-nowrap'>{names[1]}</h6>
                        }
                    </div>
                    <div className='w-full flex flex-col items-center justify-center px-[2rem] h-full'>
                        <h1 className='font-bold text-[34px]'>{counts[2]}</h1>
                        <h6 className='font-[400] text-[12px] whitespace-nowrap'>{countsName[2]}</h6>
                        {names[2] &&
                            <h6 className='font-[400] text-[12px] whitespace-nowrap'>{names[2]}</h6>
                        }
                    </div>

                    {
                        counterBox.length === 4 ? (
                            <div className='w-full flex flex-col items-center justify-center px-[2rem] h-full'>
                                <h1 className="font-bold text-[34px] text-[#FF3E5B]">{counts[3]}</h1>
                                <h6 className='font-[400] text-[12px] whitespace-nowrap'>{countsName[3]}</h6>
                            </div>
                        ) : ('')
                    }

                </div>
            </div>
        </>
    )
}

export default BoxContent