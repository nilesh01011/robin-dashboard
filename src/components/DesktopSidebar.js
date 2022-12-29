import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineSearch } from 'react-icons/ai'
import { BsMoon } from 'react-icons/bs'
import NavTabs from './NavTabs';

function DesktopSidebar({ theme, handleTheme }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className={` overflow-hidden ${isOpen ? 'slg:w-[60px] -w-[120%]' : 'slg:w-[240px] w-full'} h-full ${theme === 'dark' ? 'bg-[#242424]' : 'bg-[#F4F4F4]'} slg:transition-none transition-all slg:duration-none duration-1000 px-[14px] pt-[14px] flex flex-col justify-between select-none shadow-[0_0_3px_rgba(0,0,0,0.2)]`}>
                <div className='w-full'>
                    {/* buttons */}
                    {/* desktop sizes */}
                    <div className='slg:block hidden'>
                        <button type='button' className='flex items-center justify-between w-full mb-[10px]' onClick={() => setIsOpen(!isOpen)}>
                            {
                                isOpen ?
                                    (
                                        <div className='w-[15px] h-[34px] flex items-start transition-all duration-300 relative left-[4px]'>
                                            <img src={`${theme === 'dark' ? './images/B_dark_theme.svg' : './images/B_Light_theme.svg'}`} className='h-full mr-auto' alt='robin-logo' />
                                        </div>
                                    ) : (
                                        <div className='h-[34px] flex items-start'>
                                            <img src={`${theme === 'dark' ? './images/RobinDark_theme.svg' : './images/RobinLightTheme.svg'}`} className='h-full mr-auto' alt='robin-logo' />
                                        </div>
                                    )
                            }
                            <AiOutlineLeft size={16} className={`${isOpen ? `${theme === 'dark' ? 'text-white' : 'text-black'} rotate-180` : 'text-[#FF3E5B]'}  ${isOpen ? 'relative left-[4px]' : ''}`} />
                        </button>
                    </div>
                    {/* search boxs */}
                    <div className={`w-full ${isOpen ? 'justify-center' : ''} h-[33px] flex items-end`}>
                        {
                            isOpen ? (
                                <AiOutlineSearch size={24} />

                            ) : (
                                <input className={`${theme === 'dark' ? 'bg-[#0B0B0C] text-white' : 'bg-white text-black'} w-full h-full text-[14px] placeholder:text-[#8E8585] p-[6px_12px] rounded ${isOpen && 'scale-0'}`} placeholder='Search menu..' style={{ border: `1px solid ${theme === 'dark' ? '#342C2C' : '#DEDEDE'}` }} />
                            )
                        }
                    </div>

                    {/* tabs buttons */}
                    <NavTabs isOpen={isOpen} theme={theme} />
                </div>
                {/* fixed bottom-[3.5rem] */}
                <div className={`w-max 1x1:fixed lg:absolute slg:fixed slg:bottom-10 slg:mb-0 mb-6`}>
                    <button onClick={() => handleTheme()} type='button' className={`w-[30px] h-[30px] rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}`}>
                        {
                            theme === 'dark' ? (
                                <BsMoon size={14} className="text-[#FF3E5B]" />
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 20 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.0004 0.399902C10.3318 0.399902 10.6004 0.668531 10.6004 0.999902V3.6999C10.6004 4.03127 10.3318 4.2999 10.0004 4.2999C9.66902 4.2999 9.40039 4.03127 9.40039 3.6999V0.999902C9.40039 0.668531 9.66902 0.399902 10.0004 0.399902ZM3.21217 3.21168C3.44648 2.97737 3.82638 2.97737 4.0607 3.21168L5.92465 5.07564C6.15897 5.30995 6.15897 5.68985 5.92465 5.92417C5.69034 6.15848 5.31044 6.15848 5.07613 5.92417L3.21217 4.06021C2.97785 3.82589 2.97785 3.44599 3.21217 3.21168ZM16.7886 3.21168C17.0229 3.44599 17.0229 3.82589 16.7886 4.06021L14.9247 5.92417C14.6903 6.15848 14.3104 6.15848 14.0761 5.92417C13.8418 5.68985 13.8418 5.30995 14.0761 5.07564L15.9401 3.21168C16.1744 2.97737 16.5543 2.97737 16.7886 3.21168ZM10.0004 6.9999C8.34354 6.9999 7.00039 8.34305 7.00039 9.9999C7.00039 11.6568 8.34354 12.9999 10.0004 12.9999C11.6572 12.9999 13.0004 11.6568 13.0004 9.9999C13.0004 8.34305 11.6572 6.9999 10.0004 6.9999ZM5.80039 9.9999C5.80039 7.68031 7.68079 5.7999 10.0004 5.7999C12.32 5.7999 14.2004 7.68031 14.2004 9.9999C14.2004 12.3195 12.32 14.1999 10.0004 14.1999C7.68079 14.1999 5.80039 12.3195 5.80039 9.9999ZM0.400391 9.9999C0.400391 9.66853 0.66902 9.3999 1.00039 9.3999H3.70039C4.03176 9.3999 4.30039 9.66853 4.30039 9.9999C4.30039 10.3313 4.03176 10.5999 3.70039 10.5999H1.00039C0.66902 10.5999 0.400391 10.3313 0.400391 9.9999ZM15.7004 9.9999C15.7004 9.66853 15.969 9.3999 16.3004 9.3999H19.0004C19.3318 9.3999 19.6004 9.66853 19.6004 9.9999C19.6004 10.3313 19.3318 10.5999 19.0004 10.5999H16.3004C15.969 10.5999 15.7004 10.3313 15.7004 9.9999ZM5.92465 14.0756C6.15897 14.31 6.15897 14.6899 5.92465 14.9242L4.06069 16.7881C3.82638 17.0224 3.44648 17.0224 3.21216 16.7881C2.97785 16.5538 2.97785 16.1739 3.21216 15.9396L5.07613 14.0756C5.31044 13.8413 5.69034 13.8413 5.92465 14.0756ZM14.0761 14.0756C14.3104 13.8413 14.6903 13.8413 14.9247 14.0756L16.7886 15.9396C17.0229 16.1739 17.0229 16.5538 16.7886 16.7881C16.5543 17.0224 16.1744 17.0224 15.9401 16.7881L14.0761 14.9242C13.8418 14.6899 13.8418 14.31 14.0761 14.0756ZM10.0004 15.6999C10.3318 15.6999 10.6004 15.9685 10.6004 16.2999V18.9999C10.6004 19.3313 10.3318 19.5999 10.0004 19.5999C9.66902 19.5999 9.40039 19.3313 9.40039 18.9999V16.2999C9.40039 15.9685 9.66902 15.6999 10.0004 15.6999Z" fill="#FF3E5B" />
                                </svg>
                            )
                        }
                    </button>
                </div>
            </nav>
        </>
    )
}

export default DesktopSidebar