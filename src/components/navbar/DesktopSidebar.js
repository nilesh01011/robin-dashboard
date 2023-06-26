import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsChevronLeft } from 'react-icons/bs'
import NavTabs from './NavTabs';

function DesktopSidebar({ theme, handleTheme }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            {/* overflow-hidden */}
            {/* false */}
            {/* slg:w-[60px] -w-[120%] */}
            {/* true */}
            {/* slg:w-[282px] w-full */}
            <nav id="isOpenNavbar" className={` ${isOpen ? ' h-screen' : 'isOpenNavbar h-full'} ${theme === "dark" ? 'bg-[#242424]' : 'bg-white'} slg:transition-none transition-all slg:duration-none duration-1000 pt-[14px] flex flex-col justify-between select-none shadow-[0_0_3px_rgba(0,0,0,0.2)]`}>
                <div className='w-full px-[14px]'>
                    {/* buttons */}
                    {/* desktop sizes */}
                    <div className='slg:block hidden'>
                        <button type='button' className='flex items-center justify-between w-full mb-[10px]' onClick={() => setIsOpen(!isOpen)}>
                            {
                                isOpen ?
                                    (
                                        <div className='w-[15px] h-[36px] flex items-start transition-all duration-300 relative left-[4px]'>
                                            <img width={15} height={36} src={`${theme === 'dark' ? '/B_dark_theme.svg' : '/B_Light_theme.svg'}`} className='h-full mr-auto' alt='robin-logo' />
                                        </div>
                                    ) : (
                                        <div className='h-[36px] flex items-center py-[5px]'>
                                            <img width={82} height={36} src={`${theme === 'dark' ? '/RobinDark_theme.svg' : '/RobinLightTheme.svg'}`} className='h-full mr-auto' alt='robin-logo' />
                                        </div>
                                    )
                            }
                            <BsChevronLeft size={18} className={`${isOpen ? `${theme === 'dark' ? 'text-white' : 'text-black'} rotate-180` : 'text-[#FF3E5B]'}  ${isOpen ? 'relative left-[4px]' : ''}`} />
                        </button>
                    </div>
                    {/* search boxs */}
                    <div className={`w-full ${isOpen ? 'justify-center' : ''} h-[34px] flex items-end`}>
                        {
                            isOpen ? (
                                <AiOutlineSearch size={25} />

                            ) : (
                                <input className={`${theme === 'dark' ? 'bg-[#0B0B0C] text-white' : 'bg-white text-black'} w-full h-full text-[14px] placeholder:text-[#8E8585] p-[6px_12px] rounded ${isOpen && 'scale-0'}`} placeholder='Search menu..' style={{ border: `1px solid ${theme === 'dark' ? '#342C2C' : '#DEDEDE'}` }} />
                            )
                        }
                    </div>

                    {/* tabs buttons */}
                    <NavTabs theme={theme} isOpen={isOpen} />
                </div>
                {/* Themes fixed */}
                <div className={`w-full shadow-lg ${isOpen === true ? 'p-[7px_10px]' : 'p-[10px_16px]'} bg-[#F2F2F]`}>

                    <div className={`flex items-center gap-[10px] p-[5px] border-[1px] ${theme === "dark" ? 'border-[#545454]' : 'border-[#E6E6E6]'} rounded-[6px]`}>
                        {
                            isOpen === true ? (
                                <>
                                    {
                                        theme === "dark" ? (
                                            <>
                                                <div onClick={() => handleTheme()} className='cursor-pointer w-full h-[26px] flex items-center justify-center'>
                                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.31744 0.146458C5.47876 0.307778 5.51043 0.55784 5.39441 0.754279C3.68269 3.65252 4.07273 7.44807 6.56233 9.93768C9.05194 12.4273 12.8475 12.8173 15.7457 11.1056C15.9422 10.9896 16.1922 11.0212 16.3536 11.1826C16.5149 11.3439 16.5465 11.594 16.4305 11.7904C16.0712 12.3987 15.6305 12.9717 15.1087 13.4936C11.7667 16.8355 6.34838 16.8355 3.00645 13.4936C-0.335484 10.1516 -0.335483 4.73328 3.00645 1.39135C3.52827 0.869531 4.10129 0.428777 4.70962 0.0694909C4.90606 -0.0465274 5.15612 -0.0148627 5.31744 0.146458ZM3.72141 2.09061C3.71879 2.09323 3.71617 2.09584 3.71356 2.09845C0.762148 5.04986 0.762147 9.83504 3.71356 12.7865C6.66497 15.7379 11.4501 15.7379 14.4016 12.7865C14.4042 12.7838 14.4068 12.7812 14.4094 12.7786C11.4821 13.6711 8.17067 12.9602 5.85523 10.6448C3.53979 8.32934 2.82892 5.01792 3.72141 2.09061Z" fill={`${theme === "dark" ? '#FF3E5B' : `${theme === "dark" ? 'white' : 'black'}`}`} />
                                                    </svg>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div onClick={() => handleTheme()} className='cursor-pointer w-full h-[26px] flex items-center justify-center'>
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8 0C8.27614 0 8.5 0.223858 8.5 0.5V2.75C8.5 3.02614 8.27614 3.25 8 3.25C7.72386 3.25 7.5 3.02614 7.5 2.75V0.5C7.5 0.223858 7.72386 0 8 0ZM2.34315 2.34315C2.53841 2.14789 2.85499 2.14789 3.05025 2.34315L4.60355 3.89645C4.79882 4.09171 4.79882 4.40829 4.60355 4.60355C4.40829 4.79882 4.09171 4.79882 3.89645 4.60355L2.34315 3.05025C2.14789 2.85499 2.14789 2.53841 2.34315 2.34315ZM13.6569 2.34315C13.8521 2.53841 13.8521 2.85499 13.6569 3.05025L12.1036 4.60355C11.9083 4.79882 11.5917 4.79882 11.3964 4.60355C11.2012 4.40829 11.2012 4.09171 11.3964 3.89645L12.9497 2.34315C13.145 2.14789 13.4616 2.14789 13.6569 2.34315ZM8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5ZM4.5 8C4.5 6.067 6.067 4.5 8 4.5C9.933 4.5 11.5 6.067 11.5 8C11.5 9.933 9.933 11.5 8 11.5C6.067 11.5 4.5 9.933 4.5 8ZM0 8C0 7.72386 0.223858 7.5 0.5 7.5H2.75C3.02614 7.5 3.25 7.72386 3.25 8C3.25 8.27614 3.02614 8.5 2.75 8.5H0.5C0.223858 8.5 0 8.27614 0 8ZM12.75 8C12.75 7.72386 12.9739 7.5 13.25 7.5H15.5C15.7761 7.5 16 7.72386 16 8C16 8.27614 15.7761 8.5 15.5 8.5H13.25C12.9739 8.5 12.75 8.27614 12.75 8ZM4.60355 11.3964C4.79882 11.5917 4.79882 11.9083 4.60355 12.1036L3.05025 13.6569C2.85499 13.8521 2.53841 13.8521 2.34314 13.6569C2.14788 13.4616 2.14788 13.145 2.34314 12.9498L3.89645 11.3964C4.09171 11.2012 4.40829 11.2012 4.60355 11.3964ZM11.3964 11.3964C11.5917 11.2012 11.9083 11.2012 12.1036 11.3964L13.6569 12.9497C13.8521 13.145 13.8521 13.4616 13.6569 13.6569C13.4616 13.8521 13.145 13.8521 12.9497 13.6569L11.3964 12.1036C11.2012 11.9083 11.2012 11.5917 11.3964 11.3964ZM8 12.75C8.27614 12.75 8.5 12.9739 8.5 13.25V15.5C8.5 15.7761 8.27614 16 8 16C7.72386 16 7.5 15.7761 7.5 15.5V13.25C7.5 12.9739 7.72386 12.75 8 12.75Z" fill={`${theme === 'light' ? '#FF3E5B' : `${theme === "dark" ? 'white' : 'black'}`}`} />
                                                    </svg>
                                                </div>
                                            </>
                                        )
                                    }
                                </>
                            ) : (
                                <>
                                    <button onClick={() => handleTheme()} type='button' className={`w-full h-full flex items-center justify-center gap-[8px] text-[12px] p-[4px_12px] rounded-[5px] ${theme === "light" ? 'text-[#FF3E5B]' : ''}`} style={{ border: `1px solid ${theme === "light" ? '#FF3E5B' : 'transparent'}` }}>
                                        <span>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M8 0C8.27614 0 8.5 0.223858 8.5 0.5V2.75C8.5 3.02614 8.27614 3.25 8 3.25C7.72386 3.25 7.5 3.02614 7.5 2.75V0.5C7.5 0.223858 7.72386 0 8 0ZM2.34315 2.34315C2.53841 2.14789 2.85499 2.14789 3.05025 2.34315L4.60355 3.89645C4.79882 4.09171 4.79882 4.40829 4.60355 4.60355C4.40829 4.79882 4.09171 4.79882 3.89645 4.60355L2.34315 3.05025C2.14789 2.85499 2.14789 2.53841 2.34315 2.34315ZM13.6569 2.34315C13.8521 2.53841 13.8521 2.85499 13.6569 3.05025L12.1036 4.60355C11.9083 4.79882 11.5917 4.79882 11.3964 4.60355C11.2012 4.40829 11.2012 4.09171 11.3964 3.89645L12.9497 2.34315C13.145 2.14789 13.4616 2.14789 13.6569 2.34315ZM8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5ZM4.5 8C4.5 6.067 6.067 4.5 8 4.5C9.933 4.5 11.5 6.067 11.5 8C11.5 9.933 9.933 11.5 8 11.5C6.067 11.5 4.5 9.933 4.5 8ZM0 8C0 7.72386 0.223858 7.5 0.5 7.5H2.75C3.02614 7.5 3.25 7.72386 3.25 8C3.25 8.27614 3.02614 8.5 2.75 8.5H0.5C0.223858 8.5 0 8.27614 0 8ZM12.75 8C12.75 7.72386 12.9739 7.5 13.25 7.5H15.5C15.7761 7.5 16 7.72386 16 8C16 8.27614 15.7761 8.5 15.5 8.5H13.25C12.9739 8.5 12.75 8.27614 12.75 8ZM4.60355 11.3964C4.79882 11.5917 4.79882 11.9083 4.60355 12.1036L3.05025 13.6569C2.85499 13.8521 2.53841 13.8521 2.34314 13.6569C2.14788 13.4616 2.14788 13.145 2.34314 12.9498L3.89645 11.3964C4.09171 11.2012 4.40829 11.2012 4.60355 11.3964ZM11.3964 11.3964C11.5917 11.2012 11.9083 11.2012 12.1036 11.3964L13.6569 12.9497C13.8521 13.145 13.8521 13.4616 13.6569 13.6569C13.4616 13.8521 13.145 13.8521 12.9497 13.6569L11.3964 12.1036C11.2012 11.9083 11.2012 11.5917 11.3964 11.3964ZM8 12.75C8.27614 12.75 8.5 12.9739 8.5 13.25V15.5C8.5 15.7761 8.27614 16 8 16C7.72386 16 7.5 15.7761 7.5 15.5V13.25C7.5 12.9739 7.72386 12.75 8 12.75Z" fill={`${theme === 'light' ? '#FF3E5B' : `${theme === "dark" ? 'white' : 'black'}`}`} />
                                            </svg>
                                        </span>
                                        Light Mode
                                    </button>
                                    <button onClick={() => handleTheme()} type='button' className={`w-full h-full flex items-center justify-center gap-[8px] text-[12px] p-[4px_12px] rounded-[5px] ${theme === "dark" ? 'text-[#FF3E5B]' : ''}`} style={{ border: `1px solid ${theme === "dark" ? '#FF3E5B' : 'transparent'}` }}>
                                        <span>
                                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.31744 0.146458C5.47876 0.307778 5.51043 0.55784 5.39441 0.754279C3.68269 3.65252 4.07273 7.44807 6.56233 9.93768C9.05194 12.4273 12.8475 12.8173 15.7457 11.1056C15.9422 10.9896 16.1922 11.0212 16.3536 11.1826C16.5149 11.3439 16.5465 11.594 16.4305 11.7904C16.0712 12.3987 15.6305 12.9717 15.1087 13.4936C11.7667 16.8355 6.34838 16.8355 3.00645 13.4936C-0.335484 10.1516 -0.335483 4.73328 3.00645 1.39135C3.52827 0.869531 4.10129 0.428777 4.70962 0.0694909C4.90606 -0.0465274 5.15612 -0.0148627 5.31744 0.146458ZM3.72141 2.09061C3.71879 2.09323 3.71617 2.09584 3.71356 2.09845C0.762148 5.04986 0.762147 9.83504 3.71356 12.7865C6.66497 15.7379 11.4501 15.7379 14.4016 12.7865C14.4042 12.7838 14.4068 12.7812 14.4094 12.7786C11.4821 13.6711 8.17067 12.9602 5.85523 10.6448C3.53979 8.32934 2.82892 5.01792 3.72141 2.09061Z" fill={`${theme === "dark" ? '#FF3E5B' : `${theme === "dark" ? 'white' : 'black'}`}`} />
                                            </svg>
                                        </span>
                                        Dark Mode
                                    </button>
                                </>
                            )
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default DesktopSidebar