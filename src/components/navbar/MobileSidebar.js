import React, { useState } from 'react'
import { BsMoon } from 'react-icons/bs'
import NavTabs from './NavTabs';
import { useNavigate } from 'react-router-dom';

function MobileSidebar({ theme, handleTheme }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavbar = () => {
        document.querySelector("#navbars").style.cssText = 'left: -150%; transition: left cubic-bezier(0.4, 0, 0.2, 1) 50ms; transition-duration: 1000ms;'
    }

    const router = useNavigate()

    return (
        <>
            <nav id='navbars' className={`z-[99999] w-full h-full fixed overflow-scroll top-0 -left-[150%] bottom-0 ${theme === 'dark' ? 'bg-[#242424]' : 'bg-[#F4F4F4]'} px-[14px] pt-[14px] flex flex-col justify-between select-none shadow-[0_0_3px_rgba(0,0,0,0.2)]`}>
                <div className='w-full'>
                    {/* buttons */}
                    {/* small sizes */}
                    <div className='slg:hidden block'>
                        <button type='button' className='flex items-center justify-between w-full mb-[1rem]'>
                            <div className='h-[34px] flex items-start'>
                                <img height={34} onClick={() => router('/dashboard')} src={`${theme === 'dark' ? '/RobinDark_theme.svg' : '/RobinLightTheme.svg'}`} className='h-full mr-auto' alt='robin-logo' />
                            </div>
                            <div onClick={() => handleNavbar()} className='h-auto w-max'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.146447 0.146447C0.341709 -0.0488155 0.658291 -0.0488155 0.853553 0.146447L8 7.29289L15.1464 0.146447C15.3417 -0.0488151 15.6583 -0.0488151 15.8536 0.146447C16.0488 0.341709 16.0488 0.658292 15.8536 0.853554L8.70711 8L15.8536 15.1464C16.0488 15.3417 16.0488 15.6583 15.8536 15.8536C15.6583 16.0488 15.3417 16.0488 15.1464 15.8536L8 8.70711L0.853554 15.8536C0.658292 16.0488 0.341709 16.0488 0.146447 15.8536C-0.0488151 15.6583 -0.0488151 15.3417 0.146447 15.1464L7.29289 8L0.146447 0.853554C-0.0488155 0.658291 -0.0488155 0.341709 0.146447 0.146447Z" fill={`${theme === 'dark' ? 'white' : ' #FF3E5B'}`} />
                                </svg>
                            </div>
                        </button>
                    </div>
                    {/* search boxs */}
                    <div className={`w-full h-[36px] flex items-end`}>
                        <input className={`${theme === 'dark' ? 'bg-[#0B0B0C] text-white' : 'bg-white text-black'} w-full h-full text-[14px] placeholder:text-[#8E8585] p-[6px_12px] rounded`} placeholder='Search menu..' style={{ border: `1px solid ${theme === 'dark' ? '#342C2C' : '#DEDEDE'}` }} />
                    </div>

                    {/* tabs buttons */}
                    <NavTabs isOpen={false} theme={theme} />
                </div>
                {/* fixed bottom-[3.5rem] */}
                <div className={`w-full 1x1:fixed lg:absolute slg:fixed slg:bottom-10 slg:mb-0 mb-6`}>
                    {/* <button onClick={() => handleTheme()} type='button' className={`w-[30px] h-[30px] rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}`}>
                        {
                            theme === 'dark' ? (
                                <BsMoon size={14} className="text-[#FF3E5B]" />
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 20 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.0004 0.399902C10.3318 0.399902 10.6004 0.668531 10.6004 0.999902V3.6999C10.6004 4.03127 10.3318 4.2999 10.0004 4.2999C9.66902 4.2999 9.40039 4.03127 9.40039 3.6999V0.999902C9.40039 0.668531 9.66902 0.399902 10.0004 0.399902ZM3.21217 3.21168C3.44648 2.97737 3.82638 2.97737 4.0607 3.21168L5.92465 5.07564C6.15897 5.30995 6.15897 5.68985 5.92465 5.92417C5.69034 6.15848 5.31044 6.15848 5.07613 5.92417L3.21217 4.06021C2.97785 3.82589 2.97785 3.44599 3.21217 3.21168ZM16.7886 3.21168C17.0229 3.44599 17.0229 3.82589 16.7886 4.06021L14.9247 5.92417C14.6903 6.15848 14.3104 6.15848 14.0761 5.92417C13.8418 5.68985 13.8418 5.30995 14.0761 5.07564L15.9401 3.21168C16.1744 2.97737 16.5543 2.97737 16.7886 3.21168ZM10.0004 6.9999C8.34354 6.9999 7.00039 8.34305 7.00039 9.9999C7.00039 11.6568 8.34354 12.9999 10.0004 12.9999C11.6572 12.9999 13.0004 11.6568 13.0004 9.9999C13.0004 8.34305 11.6572 6.9999 10.0004 6.9999ZM5.80039 9.9999C5.80039 7.68031 7.68079 5.7999 10.0004 5.7999C12.32 5.7999 14.2004 7.68031 14.2004 9.9999C14.2004 12.3195 12.32 14.1999 10.0004 14.1999C7.68079 14.1999 5.80039 12.3195 5.80039 9.9999ZM0.400391 9.9999C0.400391 9.66853 0.66902 9.3999 1.00039 9.3999H3.70039C4.03176 9.3999 4.30039 9.66853 4.30039 9.9999C4.30039 10.3313 4.03176 10.5999 3.70039 10.5999H1.00039C0.66902 10.5999 0.400391 10.3313 0.400391 9.9999ZM15.7004 9.9999C15.7004 9.66853 15.969 9.3999 16.3004 9.3999H19.0004C19.3318 9.3999 19.6004 9.66853 19.6004 9.9999C19.6004 10.3313 19.3318 10.5999 19.0004 10.5999H16.3004C15.969 10.5999 15.7004 10.3313 15.7004 9.9999ZM5.92465 14.0756C6.15897 14.31 6.15897 14.6899 5.92465 14.9242L4.06069 16.7881C3.82638 17.0224 3.44648 17.0224 3.21216 16.7881C2.97785 16.5538 2.97785 16.1739 3.21216 15.9396L5.07613 14.0756C5.31044 13.8413 5.69034 13.8413 5.92465 14.0756ZM14.0761 14.0756C14.3104 13.8413 14.6903 13.8413 14.9247 14.0756L16.7886 15.9396C17.0229 16.1739 17.0229 16.5538 16.7886 16.7881C16.5543 17.0224 16.1744 17.0224 15.9401 16.7881L14.0761 14.9242C13.8418 14.6899 13.8418 14.31 14.0761 14.0756ZM10.0004 15.6999C10.3318 15.6999 10.6004 15.9685 10.6004 16.2999V18.9999C10.6004 19.3313 10.3318 19.5999 10.0004 19.5999C9.66902 19.5999 9.40039 19.3313 9.40039 18.9999V16.2999C9.40039 15.9685 9.66902 15.6999 10.0004 15.6999Z" fill="#FF3E5B" />
                                </svg>
                            )
                        }
                    </button> */}

                    <div className={`flex items-center gap-[10px] p-[5px] border-[1px] ${theme === "dark" ? 'border-[#545454]' : 'border-[#E6E6E6]'} rounded-[6px]`}>
                        {
                            isOpen === true ? (
                                <>
                                    {
                                        theme === "dark" ? (
                                            <>
                                                <div className='w-full h-[26px] flex items-center justify-center'>
                                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.31744 0.146458C5.47876 0.307778 5.51043 0.55784 5.39441 0.754279C3.68269 3.65252 4.07273 7.44807 6.56233 9.93768C9.05194 12.4273 12.8475 12.8173 15.7457 11.1056C15.9422 10.9896 16.1922 11.0212 16.3536 11.1826C16.5149 11.3439 16.5465 11.594 16.4305 11.7904C16.0712 12.3987 15.6305 12.9717 15.1087 13.4936C11.7667 16.8355 6.34838 16.8355 3.00645 13.4936C-0.335484 10.1516 -0.335483 4.73328 3.00645 1.39135C3.52827 0.869531 4.10129 0.428777 4.70962 0.0694909C4.90606 -0.0465274 5.15612 -0.0148627 5.31744 0.146458ZM3.72141 2.09061C3.71879 2.09323 3.71617 2.09584 3.71356 2.09845C0.762148 5.04986 0.762147 9.83504 3.71356 12.7865C6.66497 15.7379 11.4501 15.7379 14.4016 12.7865C14.4042 12.7838 14.4068 12.7812 14.4094 12.7786C11.4821 13.6711 8.17067 12.9602 5.85523 10.6448C3.53979 8.32934 2.82892 5.01792 3.72141 2.09061Z" fill={`${theme === "dark" ? '#FF3E5B' : `${theme === "dark" ? 'white' : 'black'}`}`} />
                                                    </svg>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className='w-full h-[26px] flex items-center justify-center'>
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

export default MobileSidebar