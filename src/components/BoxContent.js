import React from 'react'

function BoxContent({ title, icons, counterBox, theme }) {

    const counts = counterBox.map((ele) => ele.counts);
    const countsName = counterBox.map((ele) => ele.name);
    const names = counterBox.map((ele) => ele.name2)

    const changeHeadTheme = theme === 'dark' ? 'bg-[#635D5D]' : 'bg-[#F4F4F4]'
    const changeBodyTheme = theme === 'dark' ? 'bg-[#242424]' : 'bg-white'

    return (
        <>
            <div className='w-full slg:h-[164px] h-max rounded-lg shadow-[0_0_3px_rgba(0,0,0,0.2)]'>
                {/* head */}
                <div className={`h-[25%] ${changeHeadTheme} rounded-t-lg flex items-center justify-between p-[12px]`}>
                    <div className='flex items-center gap-[8px]'>
                        {/* icons */}
                        {icons}
                        <span className='text-[12px] font-bold'>{title}</span>
                    </div>
                    {/* watch more button */}
                    <div className='flex items-baseline'>
                        <button type='button' className='underline text-[12px] font-[400]'>View more</button>
                    </div>
                </div>

                {/* content */}
                <div className={`${changeBodyTheme} slg:h-[75%] h-max py-[1rem] flex items-center divide-x-[1px] rounded-b-lg`}>
                    <div className='w-full flex flex-col items-center justify-center slg:px-[2rem] px-[15px] h-full'>
                        <h1 className={`font-bold slg:text-[34px] xs:text-[24px] text-[16px] ${counts[3] && 'text-[#FF3E5B]'}`}>{counts[0]}</h1>
                        <h6 className='font-[400] sm:text-[12px] text-[10px] text-center'>{countsName[0]}</h6>
                        {names[0] &&
                            <h6 className='font-[400] xs:text-[12px] text-[10px] text-center'>{names[0]}</h6>
                        }
                    </div>
                    <div className='w-full flex flex-col items-center justify-center slg:px-[2rem] px-[15px] h-full'>
                        <h1 className='font-bold slg:text-[34px] xs:text-[24px] text-[16px]'>{counts[1]}</h1>
                        <h6 className='font-[400] sm:text-[12px] text-[10px] text-center'>{countsName[1]}</h6>
                        {names[1] &&
                            <h6 className='font-[400] xs:text-[12px] text-[10px] text-center'>{names[1]}</h6>
                        }
                    </div>
                    <div className='w-full flex flex-col items-center justify-center slg:px-[2rem] px-[15px] h-full'>
                        <h1 className='font-bold slg:text-[34px] xs:text-[24px] text-[16px]'>{counts[2]}</h1>
                        <h6 className='font-[400] xs:text-[12px] text-[10px] text-center whitespace-nowrap'>{countsName[2]}</h6>
                        {names[2] &&
                            <h6 className='font-[400] xs:text-[12px] text-[10px] text-center whitespace-nowrap'>{names[2]}</h6>
                        }
                    </div>

                    {
                        counterBox.length === 4 ? (
                            <div className='w-full flex flex-col items-center justify-center slg:px-[2rem] px-[15px]'>
                                <h1 className="font-bold slg:text-[34px] xs:text-[24px] text-[16px] text-[#FF3E5B]">{counts[3]}</h1>
                                <h6 className='font-[400] xs:text-[12px] text-[10px] text-center'>{countsName[3]}</h6>
                            </div>
                        ) : ('')
                    }

                </div>
            </div>
        </>
    )
}

export default BoxContent