import React, { useState } from 'react'
import { MdAccessTimeFilled, MdOutlineArrowForwardIos } from 'react-icons/md'
import { news, upCommingTraining } from '../../Data'
import UpcomingAccordion from './UpcomingAccordion'

function RightContentBody({ theme }) {
    const [isOpen, setIsOpen] = useState(true)
    const [isOpens, setIsOpens] = useState(true)
    const [isOpen_1, setIsOpen_1] = useState(true)
    const [isOpen_2, setIsOpen_2] = useState(false)
    const [isOpen_3, setIsOpen_3] = useState(false)

    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState(upCommingTraining);

    const changeTheme = theme === 'dark' ? 'bg-[#242424]' : 'bg-white';

    const [currentNews, setCurrentNews] = useState(0);

    const goToSlide = (index) => {
        setCurrentNews(index)
    }

    return (
        <>
            <div className='xl:w-[28%] w-full xl:mt-[0.3rem] mt-[20px] lg:mb-0 mb-[25px]'>
                {/* top head */}
                <div className='w-full h-[32px] flex items-center justify-between'>
                    <button className={`rounded-md flex items-center gap-[5px] p-[8px_12px] w-max ${theme === 'dark' ? 'bg-[#242424]  ' : ' bg-white'}`} style={{ border: `1px solid ${theme === 'dark' ? '#242424' : '#DEDEDE'}` }}>
                        {/* icons */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M9.166 18V13H10.833V14.667H17.5V16.334H10.833V18H9.166ZM2.5 16.333V14.667H7.5V16.334L2.5 16.333ZM5.834 13V11.333H2.5V9.666H5.834V8H7.5V13H5.834ZM9.166 11.333V9.666H17.5V11.333H9.166ZM12.5 8V3H14.167V4.667H17.5V6.334H14.167V8H12.5ZM2.5 6.334V4.667H10.833V6.334H2.5Z" fill={`${theme === 'dark' ? 'white' : 'black'}`} />
                        </svg>
                        {/* text */}
                        <span className='text-[14px]'>Configuration</span>
                    </button>

                    {/* reset button */}
                    <button className='text-[14px]'>
                        Reset to default
                    </button>
                </div>

                {/* right side boxs */}


                <div className='flex flex-col gap-[22px] mt-[1.28rem]'>
                    {/* box 1 */}
                    <div className={`rounded-md w-full ${isOpen ? 'h-max' : 'h-[50px]'} overflow-hidden ${changeTheme} flex flex-col items-center p-[16px] pt-[14px] shadow-[0_0_3px_rgba(0,0,0,0.2)]`}>
                        <div onClick={() => setIsOpen(!isOpen)} className='w-full flex items-center justify-between cursor-pointer'>
                            <div className='w-full flex items-center gap-[5px]'>
                                {/* icons */}
                                <MdAccessTimeFilled size={18} className={`${theme === 'dark' ? 'text-white' : 'text-[#342C2C]'}`} />
                                {/* text */}
                                <span className='font-bold text-[16px] select-none'>Action Items</span>
                            </div>
                            {/* icons */}

                            <MdOutlineArrowForwardIos className={`${isOpen ? 'rotate-[270deg] transition-all' : 'rotate-[90deg] transition-all'}`} size={20} />
                        </div>
                        {/* contents body */}
                        {
                            isOpen &&
                            <div className='w-full text-left mt-[12px] flex xl:flex-col sm:flex-row flex-col gap-[12px] h-full'>
                                <div className='w-full flex gap-[6px]'>
                                    <span className='text-[14px]'>Enquiries to be followed up</span>
                                    <span className={`text-white flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#FF3E5B] text-[10px]`}>12</span>
                                </div>
                                <div className='w-full flex gap-[6px]'>
                                    <span className='text-[14px]'>Pending POs to be released </span>
                                    <span className='text-white flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#FF3E5B] text-[10px]'>3</span>
                                </div>
                                <div className='w-full flex gap-[6px]'>
                                    <span className='text-[14px]'>Vehicles to be delivered</span>
                                    <span className='text-white flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#FF3E5B] text-[10px]'>5</span>
                                </div>
                            </div>
                        }
                    </div>

                    {/* box 2 */}
                    <div className={`rounded-md w-full ${isOpens ? 'h-max' : 'h-[50px]'} overflow-hidden ${changeTheme} flex flex-col items-center p-[16px] pt-[14px] shadow-[0_0_3px_rgba(0,0,0,0.2)]`}>
                        <div onClick={() => setIsOpens(!isOpens)} className='w-full flex items-center justify-between cursor-pointer'>
                            <div className='w-full flex items-center gap-[5px]'>
                                {/* icons */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 16" fill="none">
                                    <path d="M14 13.61C14.4 13.08 14.8 12.54 15.2 12C16.16 12.72 17.41 13.66 18.4 14.4C18 14.93 17.6 15.47 17.2 16C16.21 15.26 14.96 14.32 14 13.61ZM3 15V11H2C1.47005 10.9984 0.962265 10.7872 0.587535 10.4125C0.212805 10.0377 0.00158273 9.52995 0 9L0 7C0.00158273 6.47005 0.212805 5.96227 0.587535 5.58753C0.962265 5.2128 1.47005 5.00158 2 5H6L11 2V14L6 11H5V15H3ZM12 4.65C12.4719 5.07019 12.8495 5.58546 13.1081 6.16197C13.3667 6.73847 13.5003 7.36316 13.5003 7.995C13.5003 8.62684 13.3667 9.25153 13.1081 9.82803C12.8495 10.4045 12.4719 10.9198 12 11.34V4.65ZM16 9V7H20V9H16ZM14 2.4C14.96 1.68 16.21 0.74 17.2 0C17.6 0.53 18 1.07 18.4 1.6C17.41 2.35 16.161 3.279 15.2 4C14.8 3.47 14.4 2.93 14 2.4Z" fill={`${theme === 'dark' ? 'white' : '#342C2C'}`} />
                                </svg>
                                {/* text */}
                                <span className='font-bold text-[16px] select-none'>News</span>
                            </div>
                            {/* icons */}

                            <MdOutlineArrowForwardIos className={`${isOpens ? 'rotate-[270deg] transition-all' : 'rotate-[90deg] transition-all'}`} size={20} />
                        </div>
                        {/* contents body */}
                        <div className='w-full h-auto flex flex-col items-start gap-[20px] overflow-auto'>
                            {
                                isOpens &&
                                <div key={news[currentNews].id} className='w-auto h-auto text-left mt-[12px] flex flex-col'>
                                    <div className='w-full'>
                                        <span className='text-[14px] font-bold'>{news[currentNews].title}</span>
                                    </div>
                                    <div className='w-full'>
                                        <span className='text-[12px]'>{news[currentNews].description}</span>
                                    </div>
                                    <div className='w-full mt-[12px]'>
                                        <button type='button' className='h-[25px] rounded-[5px] text-[#FF3E5B] text-[14px] bg-white px-[8px]' style={{ border: `1px solid #DEDEDE` }}>Read more</button>
                                    </div>
                                </div>
                            }
                            {/* paginations */}
                            <div className='w-full h-max flex items-center gap-[6px] justify-center'>
                                {
                                    news.map((ele, index) => (
                                        <span key={index} onClick={() => goToSlide(index)} className={`w-[6px] h-[6px] rounded-full ${currentNews === index ? 'bg-[#FF3E5B]' : 'bg-[#DEDEDE]'} cursor-pointer`}></span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    {/* box 3 */}
                    <div className={`rounded-md w-full ${isOpen_1 ? 'h-max' : 'h-[50px]'} overflow-hidden ${changeTheme} flex flex-col items-center p-[16px] pt-[14px] shadow-[0_0_3px_rgba(0,0,0,0.2)]`}>
                        <div onClick={() => setIsOpen_1(!isOpen_1)} className='w-full flex items-center justify-between cursor-pointer'>
                            <div className='w-full flex items-center gap-[5px]'>
                                {/* icons */}
                                <div className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                        <path d="M21.1595 7.25961L19.7495 5.84961L16.1895 9.39961L17.5995 10.8096C17.5995 10.8096 21.0495 7.28961 21.1595 7.25961Z" fill={`${theme === 'dark' ? '#fff' : '#000'}`} />
                                        <path d="M13 3H11V8H13V3Z" fill={`${theme === 'dark' ? '#fff' : '#000'}`} />
                                        <path d="M6.39984 10.8098L7.80984 9.39984L4.25984 5.83984L2.83984 7.25984C2.94984 7.28984 6.39984 10.8098 6.39984 10.8098Z" fill={`${theme === 'dark' ? '#fff' : '#000'}`} />
                                        <path d="M20 12H15C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12H4C3.47005 12.0016 2.96227 12.2128 2.58753 12.5875C2.2128 12.9623 2.00158 13.4701 2 14L2 19C2.00158 19.5299 2.2128 20.0377 2.58753 20.4125C2.96227 20.7872 3.47005 20.9984 4 21H20C20.5299 20.9984 21.0377 20.7872 21.4125 20.4125C21.7872 20.0377 21.9984 19.5299 22 19V14C21.9984 13.4701 21.7872 12.9623 21.4125 12.5875C21.0377 12.2128 20.5299 12.0016 20 12V12Z" fill={`${theme === 'dark' ? '#fff' : '#000'}`} />
                                    </svg>
                                </div>
                                {/* text */}
                                <span className='font-bold text-[16px] select-none'>Upcoming Training</span>
                            </div>
                            {/* icons */}

                            <MdOutlineArrowForwardIos className={`${isOpen_1 ? 'rotate-[270deg] transition-all' : 'rotate-[90deg] transition-all'}`} size={20} />
                        </div>
                        {/* contents body */}
                        <div className={`w-full text-left mt-[7px] flex flex-col gap-[8px] h-full divide-y-[1px] ${theme === 'dark' ? 'divide-[#8E8585]' : 'divide-[#DEDEDE]'}`}>

                            {
                                data.map((ele) => {
                                    const { id } = ele;
                                    return <UpcomingAccordion key={id} onlyone={id} {...ele} theme={theme} />
                                })
                            }
                        </div>
                    </div>

                    {/* box 4 */}
                    <div className={`rounded-md w-full ${isOpen_2 ? 'h-max' : 'h-[50px]'} overflow-hidden ${changeTheme} flex flex-col items-center p-[16px] pt-[14px] shadow-[0_0_3px_rgba(0,0,0,0.2)]`}>
                        <div onClick={() => setIsOpen_2(!isOpen_2)} className='w-full flex items-center justify-between cursor-pointer'>
                            <div className='w-full flex items-center gap-[5px]'>
                                {/* icons */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M19 3H18V1H16V3H8V1H6V3H5C4.73786 3.00013 4.47833 3.05202 4.2363 3.1527C3.99427 3.25338 3.7745 3.40086 3.58961 3.58668C3.40471 3.77251 3.25833 3.99301 3.15887 4.23554C3.05941 4.47808 3.00882 4.73787 3.01 5L3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5299 20.9984 20.0377 20.7872 20.4125 20.4125C20.7872 20.0377 20.9984 19.5299 21 19V5C20.9984 4.47005 20.7872 3.96227 20.4125 3.58753C20.0377 3.2128 19.5299 3.00158 19 3Z" fill={`${theme === 'dark' ? '#fff' : '#000'}`} />
                                    <path d="M19 19H5V8H19V19Z" fill={`${theme === 'dark' ? '#242424' : '#fff'}`} />
                                    <path d="M7 10H12V15H7V10Z" fill={`${theme === 'dark' ? '#fff' : '#000'}`} />
                                </svg>
                                {/* text */}
                                <span className='font-bold text-[16px] select-none'>Birthday Calendar</span>
                            </div>
                            {/* icons */}

                            <MdOutlineArrowForwardIos className={`${isOpen_2 ? 'rotate-[270deg] transition-all' : 'rotate-[90deg] transition-all'}`} size={20} />
                        </div>
                        {/* contents body */}
                        {
                            isOpen_2 &&
                            <div className='w-full text-left mt-[12px] flex flex-col h-full'>
                                <div className='w-full'>
                                    <span className='text-[14px] font-bold'>29th June 2021 - Competitor Watch</span>
                                </div>
                                <div className='w-full'>
                                    <span className='text-[12px]'>Short description goes here lorem ipsum</span>
                                </div>
                                <div className='w-full mt-[12px]'>
                                    <button type='button' className='h-[25px] rounded-[5px] text-[#FF3E5B] text-[14px] bg-white px-[8px]' style={{ border: `1px solid #DEDEDE` }}>Read more</button>
                                </div>
                            </div>
                        }
                    </div>

                    {/* box 5 */}
                    <div className={`rounded-md w-full ${isOpen_3 ? 'h-max' : 'h-[50px]'} overflow-hidden ${changeTheme} flex flex-col items-center p-[16px] pt-[14px] shadow-[0_0_3px_rgba(0,0,0,0.2)]`}>
                        <div onClick={() => setIsOpen_3(!isOpen_3)} className='w-full flex items-center justify-between cursor-pointer'>
                            <div className='w-full flex items-center gap-[5px]'>
                                {/* icons */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M13.9801 2H5.99133C5.46338 2.00264 4.95794 2.21452 4.58556 2.58931C4.21317 2.9641 4.00412 3.4713 4.00413 4L3.99414 20C3.99413 20.5287 4.20318 21.0359 4.57557 21.4107C4.94796 21.7855 5.45339 21.9974 5.98135 22H17.9745C18.5037 21.9984 19.0108 21.7872 19.385 21.4125C19.7592 21.0377 19.9701 20.5299 19.9717 20V8L13.9801 2Z" fill={`${theme === 'dark' ? '#fff' : '#000'}`} />
                                    <path d="M15.977 18H7.98828V16H15.977V18Z" fill={`${theme === 'dark' ? '#000' : '#fff'}`} />
                                    <path d="M15.977 14H7.98828V12H15.977V14Z" fill={`${theme === 'dark' ? '#000' : '#fff'}`} />
                                    <path d="M12.9824 9V3.5L18.4747 9H12.9824Z" fill={`${theme === 'dark' ? '#000' : '#fff'}`} />
                                </svg>
                                {/* text */}
                                <span className='font-bold text-[16px] select-none'>MIS Reports</span>
                            </div>
                            {/* icons */}

                            <MdOutlineArrowForwardIos className={`${isOpen_3 ? 'rotate-[270deg] transition-all' : 'rotate-[90deg] transition-all'}`} size={20} />
                        </div>
                        {/* contents body */}
                        {
                            isOpen_3 &&
                            <div className='w-full text-left mt-[12px] flex flex-col h-full'>
                                <div className='w-full'>
                                    <span className='text-[14px] font-bold'>29th June 2021 - Competitor Watch</span>
                                </div>
                                <div className='w-full'>
                                    <span className='text-[12px]'>Short description goes here lorem ipsum</span>
                                </div>
                                <div className='w-full mt-[12px]'>
                                    <button type='button' className='h-[25px] rounded-[5px] text-[#FF3E5B] text-[14px] bg-white px-[8px]' style={{ border: `1px solid #DEDEDE` }}>Read more</button>
                                </div>
                            </div>
                        }
                    </div>

                </div>

            </div>
        </>
    )
}

export default RightContentBody