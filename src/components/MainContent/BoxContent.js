import React from 'react'
import { AiFillCar } from 'react-icons/ai'
import { FaShapes } from 'react-icons/fa'
import { crmContent, partsContent, salesContent, serviceContent } from '../../Data'

function BoxContent({ title, icons, counterBox, theme }) {

    const changeHeadTheme = theme === 'dark' ? 'bg-[#635D5D]' : 'bg-[#F4F4F4]'
    const changeBodyTheme = theme === 'dark' ? 'bg-[#242424]' : 'bg-white'

    const lastSide = Object.keys(crmContent).length - 1;

    return (
        <>
            {/* SALES */}
            <div className='w-full slg:h-[164px] h-max rounded-lg shadow-[0_0_3px_rgba(0,0,0,0.2)]'>
                {/* head */}
                <div className={`h-[25%] ${changeHeadTheme} rounded-t-lg flex items-center justify-between p-[12px]`}>
                    <div className='flex items-center gap-[8px]'>
                        {/* icons */}
                        <AiFillCar size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'}`} />
                        <span className='text-[12px] font-bold'>SALES</span>
                    </div>
                    {/* watch more button */}
                    <div className='flex items-baseline'>
                        <button type='button' className='underline text-[12px] font-[400]'>View more</button>
                    </div>
                </div>

                {/* content */}
                <div className={`${changeBodyTheme} slg:h-[75%] h-max py-[1rem] flex items-center divide-x-[1px] rounded-b-lg`}>
                    {
                        salesContent.map((ele) => {
                            return (
                                <div key={ele.id} className='w-full flex flex-col items-center justify-center slg:px-[2rem] px-[15px] h-full'>
                                    <h1 className={`font-bold slg:text-[34px] xs:text-[24px] text-[16px]`}>
                                        {ele.counts}
                                    </h1>
                                    <h6 className='font-[400] sm:text-[12px] text-[10px] text-center'>{ele.name}</h6>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* PARTS */}
            <div className='w-full slg:h-[164px] h-max rounded-lg shadow-[0_0_3px_rgba(0,0,0,0.2)]'>
                {/* head */}
                <div className={`h-[25%] ${changeHeadTheme} rounded-t-lg flex items-center justify-between p-[12px]`}>
                    <div className='flex items-center gap-[8px]'>
                        {/* icons */}
                        <FaShapes size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'}`} />
                        <span className='text-[12px] font-bold'>PARTS</span>
                    </div>
                    {/* watch more button */}
                    <div className='flex items-baseline'>
                        <button type='button' className='underline text-[12px] font-[400]'>View more</button>
                    </div>
                </div>

                {/* content */}
                <div className={`${changeBodyTheme} slg:h-[75%] h-max py-[1rem] flex items-center divide-x-[1px] rounded-b-lg`}>

                    {
                        partsContent.map((ele) => {
                            return (
                                <div key={ele.id} className='w-full flex flex-col items-center justify-center slg:px-[2rem] px-[15px] h-full'>
                                    <h1 className={`font-bold slg:text-[34px] xs:text-[24px] text-[16px]`}>
                                        {ele.counts}
                                    </h1>
                                    <h6 className='font-[400] sm:text-[12px] text-[10px] text-center'>{ele.name}</h6>
                                    <h6 className='font-[400] xs:text-[12px] text-[10px] text-center whitespace-nowrap'>
                                        {ele.name2}
                                    </h6>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* SERVICE */}
            <div className='w-full slg:h-[164px] h-max rounded-lg shadow-[0_0_3px_rgba(0,0,0,0.2)]'>
                {/* head */}
                <div className={`h-[25%] ${changeHeadTheme} rounded-t-lg flex items-center justify-between p-[12px]`}>
                    <div className='flex items-center gap-[8px]'>
                        {/* icons */}
                        <div className='w-full h-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.07239 5.3696C2.15671 6.74001 1.66797 8.35118 1.66797 9.99935C1.66797 12.2095 2.54594 14.3291 4.10875 15.8919C5.67155 17.4547 7.79116 18.3327 10.0013 18.3327C11.6495 18.3327 13.2606 17.8439 14.6311 16.9283C16.0015 16.0126 17.0696 14.7111 17.7003 13.1884C18.331 11.6657 18.4961 9.99011 18.1745 8.3736C17.853 6.75709 17.0593 5.27223 15.8939 4.1068C14.7284 2.94136 13.2436 2.14769 11.6271 1.82614C10.0105 1.5046 8.33499 1.66963 6.81227 2.30036C5.28956 2.93109 3.98807 3.99919 3.07239 5.3696ZM12.9185 14.0749L14.0852 12.9082C14.1615 12.8303 14.2043 12.7256 14.2043 12.6165C14.2043 12.5075 14.1615 12.4028 14.0852 12.3249L11.2435 9.4832C11.4418 8.93306 11.4682 8.33559 11.319 7.77013C11.1698 7.20467 10.8521 6.69797 10.4081 6.31731C9.96416 5.93664 9.41492 5.70002 8.83331 5.63886C8.25171 5.57769 7.66526 5.69489 7.15182 5.97487L9.11016 7.92487L7.93516 9.09987L5.97682 7.14154C5.69684 7.65497 5.57965 8.24142 5.64081 8.82303C5.70197 9.40463 5.93859 9.95388 6.31926 10.3978C6.69992 10.8418 7.20662 11.1595 7.77208 11.3087C8.33754 11.4579 8.93501 11.4316 9.48516 11.2332L12.3268 14.0749C12.3656 14.1139 12.4116 14.1449 12.4624 14.1661C12.5132 14.1872 12.5677 14.1981 12.6227 14.1981C12.6777 14.1981 12.7321 14.1872 12.7829 14.1661C12.8337 14.1449 12.8798 14.1139 12.9185 14.0749Z" fill={`${theme === 'dark' ? 'white' : 'black'}`} />
                            </svg>
                        </div>
                        <span className='text-[12px] font-bold'>SERVICE</span>
                    </div>
                    {/* watch more button */}
                    <div className='flex items-baseline'>
                        <button type='button' className='underline text-[12px] font-[400]'>View more</button>
                    </div>
                </div>

                {/* content */}
                <div className={`${changeBodyTheme} slg:h-[75%] h-max py-[1rem] flex items-center divide-x-[1px] rounded-b-lg`}>
                    {
                        serviceContent.map((ele) => {
                            return (
                                <div key={ele.id} className='w-full flex flex-col items-center justify-center slg:px-[2rem] px-[15px] h-full'>
                                    <h1 className='font-bold slg:text-[34px] xs:text-[24px] text-[16px]'>{ele.counts}</h1>
                                    <h6 className='font-[400] xs:text-[12px] text-[10px] text-center whitespace-nowrap'>{ele.name}</h6>
                                    <h6 className='font-[400] xs:text-[12px] text-[10px] text-center whitespace-nowrap'>
                                        {ele.name2}
                                    </h6>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* CRM */}
            <div className='w-full slg:h-[164px] h-max rounded-lg shadow-[0_0_3px_rgba(0,0,0,0.2)]'>
                {/* head */}
                <div className={`h-[25%] ${changeHeadTheme} rounded-t-lg flex items-center justify-between p-[12px]`}>
                    <div className='flex items-center gap-[8px]'>
                        {/* icons */}
                        <div className='w-full h-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 19" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H15.8333C16.275 17.4987 16.6981 17.3227 17.0104 17.0104C17.3227 16.6981 17.4987 16.275 17.5 15.8333V4.16667C17.5 3.72464 17.3244 3.30072 17.0118 2.98816C16.6993 2.67559 16.2754 2.5 15.8333 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118ZM4.16797 15.834H15.8346V5.83398H4.16797V15.834Z" fill={`${theme === "dark" ? 'white' : 'black'}`} />
                                <path d="M14.1654 9.99967H5.83203V8.33301H14.1654V9.99967Z" fill={`${theme === "dark" ? 'white' : 'black'}`} />
                                <path d="M10.832 13.3337H5.83203V11.667H10.832V13.3337Z" fill={`${theme === "dark" ? 'white' : 'black'}`} />
                            </svg>
                        </div>
                        <span className='text-[12px] font-bold'>CRM</span>
                    </div>
                    {/* watch more button */}
                    <div className='flex items-baseline'>
                        <button type='button' className='underline text-[12px] font-[400]'>View more</button>
                    </div>
                </div>

                {/* content */}
                <div className={`${changeBodyTheme} slg:h-[75%] h-max py-[1rem] grid sm:grid-cols-4 grid-cols-3 items-center rounded-b-lg relative overflow-hidden`}>
                    {/* divide-x-[1px] */}
                    <div className={`w-full flex flex-col items-center justify-center slg:px-[2rem] px-[15px] h-full border-r-[1px] border-[#DEDEDE]`}>
                        <h1 className={`font-bold slg:text-[34px] xs:text-[24px] text-[16px] text-[#FF3E5B]`}>
                            12
                        </h1>
                        <h6 className='font-[400] sm:text-[12px] text-[10px] text-center'>Pending Complaints</h6>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center slg:px-[2rem] px-[15px] h-full border-r-[1px] border-[#DEDEDE]'>
                        <h1 className='font-bold slg:text-[34px] xs:text-[24px] text-[16px]'>
                            1.2
                        </h1>
                        <h6 className='font-[400] xs:text-[12px] text-[10px] text-center whitespace-nowrap'>
                            CSI (%)
                        </h6>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center slg:px-[2rem] px-[15px] h-full sm:border-r-[1px] sm:border-[#DEDEDE]'>
                        <h1 className='font-bold slg:text-[34px] xs:text-[24px] text-[16px]'>4.2</h1>
                        <h6 className='font-[400] xs:text-[12px] text-[10px] text-center whitespace-nowrap'>SSI (%)</h6>
                    </div>
                    {/* hr lines */}
                    <div className='w-full h-full sm:hidden block absolute top-[52%]'>
                        <span className='w-[90%] mx-auto h-[1px] bg-[#DEDEDE] block'></span>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center slg:px-[2rem] px-[15px] h-full sm:pt-0 pt-6'>
                        <h1 className={`font-bold slg:text-[34px] xs:text-[24px] text-[16px] text-[#FF3E5B]`}>
                            15
                        </h1>
                        <h6 className='font-[400] sm:text-[12px] text-[10px] text-center'>Follow ups for the Day</h6>
                    </div>

                    {/* {
                        crmContent.map((ele) => {
                            return (
                                <>
                                    <div className={` ${ele.id === 4 && 'sm:pt-0 pt-6'}  w-full flex flex-col items-center justify-center slg:px-[2rem] px-[15px] h-full ${ele.id === 3 || ? "border-r-0 border-none" : "border-r-[1px] border-[#DEDEDE]"}`}>
                                        <h1 className='font-bold slg:text-[34px] xs:text-[24px] text-[16px]'>{ele.counts}</h1>
                                        <h6 className='font-[400] xs:text-[12px] text-[10px] text-center whitespace-nowrap'>{ele.name}</h6>
                                    </div>
                                    <div className='w-full h-full sm:hidden block absolute top-[52%]'>
                                        <span className='w-[90%] mx-auto h-[1px] bg-[#DEDEDE] block'></span>
                                    </div>
                                </>
                            )
                        })
                    } */}
                </div>
            </div>
        </>
    )
}

export default BoxContent