import React, { useEffect, useState } from 'react'

function AdminSidebarContent({ theme, getUserData, isRightSideOpen, setIsRightSideOpen }) {
    const handleNavbar = () => {
        document.querySelector("#right_navbars").style.cssText = 'left: 18%; transition: left cubic-bezier(0.4, 0, 0.2, 1) 50ms; transition-duration: 600ms;'
    }

    useEffect(() => {
        if (isRightSideOpen === true) {
            handleNavbar();
        }
    }, [isRightSideOpen]);

    const [isActiveAccordion, setIsActiveAccordion] = useState(false);
    const [isActiveAccordion_2, setIsActiveAccordion_2] = useState(false);
    const [isActiveAccordion_3, setIsActiveAccordion_3] = useState(false);

    // const [activeId, setActiveId] = useState(0);

    return (
        <>
            {/* overflow */}
            <div onClick={() => setIsRightSideOpen(false)} className={`${isRightSideOpen === true && 'z-[99995] fixed top-0 left-0 right-0 bottom-0 w-[100vw] h-screen bg-[#342C2C]/30'}`}></div>
            <div className={`fixed top-0 bottom-0 right-0 z-[99999] ${isRightSideOpen === true ? 'left-[18%] transition-all duration-[600ms]' : 'left-[150%]'} w-full h-full`}>
                <nav id='right_navbars' className={`max-w-[82vw] h-full max-h-auto ${theme === 'dark' ? 'bg-[#242424]' : 'bg-white'} flex flex-col justify-between shadow-[0_0_3px_rgba(0,0,0,0.2)]`}>
                    {
                        getUserData && (
                            <div className='w-full'>
                                {/* header sides */}
                                <div className={`w-full md:p-[16px_30px] p-[16px_20px] flex items-center justify-between border-b-[1px] ${theme === "dark" ? 'border-[#545454]' : 'border-black/10'}`}>
                                    <h4 className={`${theme === "dark" ? "text-white" : 'text-black'} md:text-[20px] sm:text-[18px] text-[16px] font-[500]`}>
                                        View Customer Details
                                    </h4>

                                    {/* close icons */}
                                    <div onClick={() => setIsRightSideOpen(false)} className='h-auto w-max cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.146447 0.146447C0.341709 -0.0488155 0.658291 -0.0488155 0.853553 0.146447L8 7.29289L15.1464 0.146447C15.3417 -0.0488151 15.6583 -0.0488151 15.8536 0.146447C16.0488 0.341709 16.0488 0.658292 15.8536 0.853554L8.70711 8L15.8536 15.1464C16.0488 15.3417 16.0488 15.6583 15.8536 15.8536C15.6583 16.0488 15.3417 16.0488 15.1464 15.8536L8 8.70711L0.853554 15.8536C0.658292 16.0488 0.341709 16.0488 0.146447 15.8536C-0.0488151 15.6583 -0.0488151 15.3417 0.146447 15.1464L7.29289 8L0.146447 0.853554C-0.0488155 0.658291 -0.0488155 0.341709 0.146447 0.146447Z" fill={`${theme === 'dark' ? 'white' : 'black'}`} />
                                        </svg>
                                    </div>
                                </div>

                                {/* bottom data */}
                                <div className='flex w-full h-full'>
                                    {/* left sides */}
                                    <div className='slg:block hidden'>
                                        {/* box */}
                                        <div className={`${theme === "dark" ? 'bg-[#545454]' : 'bg-[#F2F2F2]'} h-max w-full p-[30px]`}>
                                            {/* user name and ids box */}
                                            <div className={`p-[16px_20px] border-[1px] ${theme === "dark" ? 'bg-[#242424] divide-[#545454] border-white/40' : 'bg-[#E6E6E6] border-[#B5B5B6] divide-[#B5B5B6]'} rounded-[4px] divide-y-[1px]`}>
                                                <div className='w-[220px] flex items-center gap-[20px] pb-[20px]'>
                                                    <h1 className='1x1:text-[42px] text-[32px] font-bold'>JD</h1>

                                                    {/* name */}
                                                    <div>
                                                        <h6 className='1x1:text-[18px] text-[16px] text-[#FF3E5B] font-bold'>John Micheal</h6>
                                                        <span>C200615396</span>
                                                    </div>
                                                </div>
                                                <div className='1x1:pt-[18px] pt-[16px]'>
                                                    <div>
                                                        <span className={`${theme === "dark" ? 'text-[#A3A3A3]' : 'text-[#545454]'} text-[14px]`}>Customer Type:</span>
                                                        <span className={`${theme === "dark" ? 'text-white' : 'text-black'} text-[14px] font-[500]`}> Corporate</span>
                                                    </div>

                                                    <div>
                                                        <span className={`${theme === "dark" ? 'text-[#A3A3A3]' : 'text-[#545454]'} text-[14px]`}>Mobile:</span>
                                                        <span className={`${theme === "dark" ? 'text-white' : 'text-black'} text-[14px] font-[500]`}> +91-1234567890</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* bottom sides */}
                                            <div className='1x1:mt-[30px] mt-[20px] flex flex-col gap-[17px]'>
                                                <div className='relative pl-[40px]'>
                                                    {/* check icons */}
                                                    <span className='absolute -left-[2%] top-0'>
                                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g filter="url(#filter0_d_34_4337)">
                                                                <circle cx="20" cy="16" r="12" fill="#70C922" />
                                                            </g>
                                                            <path d="M25.3333 12L18 19.3333L14.6667 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <defs>
                                                                <filter id="filter0_d_34_4337" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dy="4" />
                                                                    <feGaussianBlur stdDeviation="4" />
                                                                    <feComposite in2="hardAlpha" operator="out" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.129412 0 0 0 0 0.129412 0 0 0 0 0.129412 0 0 0 0.1 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_4337" />
                                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_4337" result="shape" />
                                                                </filter>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                    <span className='absolute top-[25px] left-[14px] w-[2px] h-full bg-[#70C922]'></span>
                                                    {/* details */}
                                                    <span className='text-[14px]'>Customer Details</span>
                                                    <div className='flex items-center gap-[4px]'>
                                                        <span className='w-full h-[4px] rounded-full bg-[#70C922] block'></span>
                                                        <span className='text-[#70C922] font-bold text-[14px]'>100%</span>
                                                    </div>
                                                </div>

                                                <div className='relative pl-[40px]'>
                                                    {/* check icons */}
                                                    <span className='absolute -left-[2%] top-0'>
                                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g filter="url(#filter0_d_34_4337)">
                                                                <circle cx="20" cy="16" r="12" fill="#70C922" />
                                                            </g>
                                                            <path d="M25.3333 12L18 19.3333L14.6667 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <defs>
                                                                <filter id="filter0_d_34_4337" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dy="4" />
                                                                    <feGaussianBlur stdDeviation="4" />
                                                                    <feComposite in2="hardAlpha" operator="out" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.129412 0 0 0 0 0.129412 0 0 0 0 0.129412 0 0 0 0.1 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_4337" />
                                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_4337" result="shape" />
                                                                </filter>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                    <span className='absolute top-[25px] left-[14px] w-[2px] h-full bg-[#70C922]'></span>
                                                    <span className='text-[14px]'>Customer Profile</span>
                                                    <div className='flex items-center gap-[4px]'>
                                                        <span className='w-full h-[4px] rounded-full bg-[#70C922] block'></span>
                                                        <span className='text-[#70C922] font-bold text-[14px]'>100%</span>
                                                    </div>
                                                </div>

                                                <div className='relative pl-[40px]'>
                                                    {/* check icons */}
                                                    <span className='absolute -left-[2%] top-0'>
                                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g filter="url(#filter0_d_34_4337)">
                                                                <circle cx="20" cy="16" r="12" fill="#70C922" />
                                                            </g>
                                                            <path d="M25.3333 12L18 19.3333L14.6667 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <defs>
                                                                <filter id="filter0_d_34_4337" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dy="4" />
                                                                    <feGaussianBlur stdDeviation="4" />
                                                                    <feComposite in2="hardAlpha" operator="out" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.129412 0 0 0 0 0.129412 0 0 0 0 0.129412 0 0 0 0.1 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_4337" />
                                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_4337" result="shape" />
                                                                </filter>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                    <span className='absolute top-[25px] left-[14px] w-[2px] h-full bg-[#70C922]'></span>
                                                    <span className='text-[14px]'>Address</span>
                                                    <div className='flex items-center gap-[4px]'>
                                                        <span className='w-full h-[4px] rounded-full bg-[#70C922] block'></span>
                                                        <span className='text-[#70C922] font-bold text-[14px]'>100%</span>
                                                    </div>
                                                </div>

                                                <div className='relative pl-[40px]'>
                                                    {/* check icons */}
                                                    <span className='absolute -left-[2%] top-0'>
                                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g filter="url(#filter0_d_34_4337)">
                                                                <circle cx="20" cy="16" r="12" fill="#70C922" />
                                                            </g>
                                                            <path d="M25.3333 12L18 19.3333L14.6667 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <defs>
                                                                <filter id="filter0_d_34_4337" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dy="4" />
                                                                    <feGaussianBlur stdDeviation="4" />
                                                                    <feComposite in2="hardAlpha" operator="out" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.129412 0 0 0 0 0.129412 0 0 0 0 0.129412 0 0 0 0.1 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_4337" />
                                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_4337" result="shape" />
                                                                </filter>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                    <span className='absolute top-[25px] left-[14px] w-[2px] h-full bg-[#70C922]'></span>
                                                    <span className='text-[14px]'>Contact</span>
                                                    <div className='flex items-center gap-[4px]'>
                                                        <span className='w-full h-[4px] rounded-full bg-[#70C922] block'></span>
                                                        <span className='text-[#70C922] font-bold text-[14px]'>100%</span>
                                                    </div>
                                                </div>

                                                <div className='relative pl-[40px]'>
                                                    {/* check icons */}
                                                    <span className='absolute -left-[2%] top-0'>
                                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g filter="url(#filter0_d_34_4337)">
                                                                <circle cx="20" cy="16" r="12" fill="#70C922" />
                                                            </g>
                                                            <path d="M25.3333 12L18 19.3333L14.6667 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <defs>
                                                                <filter id="filter0_d_34_4337" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dy="4" />
                                                                    <feGaussianBlur stdDeviation="4" />
                                                                    <feComposite in2="hardAlpha" operator="out" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.129412 0 0 0 0 0.129412 0 0 0 0 0.129412 0 0 0 0.1 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_4337" />
                                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_4337" result="shape" />
                                                                </filter>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                    {/* <span className='absolute top-[25px] left-[14px] w-[2px] h-full bg-[#70C922]'></span> */}
                                                    <span className='text-[14px]'>Account Related</span>
                                                    <div className='flex items-center gap-[4px]'>
                                                        <span className='w-full h-[4px] rounded-full bg-[#70C922] block'></span>
                                                        <span className='text-[#70C922] font-bold text-[14px]'>100%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* right sides */}
                                    <div id="overFlowNone" className='w-full flex flex-col overflow-scroll relative'>
                                        <div id="overFlowNone" className='w-full md:p-[30px] slg:mt-[60px] md:pt-0 p-[20px] pt-0 pb-[10px] 1x1:h-[550px] slg:h-[64vh] h-[74vh] overflow-scroll'>
                                            {/* title */}
                                            <h4 className={`${theme === "dark" ? 'text-white bg-[#242424]' : 'text-black bg-white'} p-[30px] pt-0 pb-[20px] pl-0 sticky top-0 md:text-[24px] text-[20px] font-bold`}>Customer Details</h4>

                                            <div className='flex gap-[20px] flex-col'>
                                                <div className={`md:p-[23px_30px] p-[15px_20px] rounded-[8px] w-full h-max divide-y-[1px] ${theme === "dark" ? 'bg-[#545454] divide-[#E6E6E6]' : 'bg-[#F2F2F2] divide-[#E6E6E6]'}`}>
                                                    {/* head */}
                                                    <div onClick={() => setIsActiveAccordion(!isActiveAccordion)} className={`w-full cursor-pointer flex items-center justify-between ${isActiveAccordion === true && 'pb-[20px]'}`}>
                                                        {/* left side */}
                                                        <div className='flex items-center gap-[9px]'>
                                                            <span>
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.0681 19.7649C21.1767 17.8444 22.5 15.0767 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 15.0767 2.82333 17.8444 4.93186 19.7648C5.51728 16.3913 8.45905 13.8259 12 13.8259C15.541 13.8259 18.4827 16.3913 19.0681 19.7649ZM17.6718 20.8379C17.586 17.7791 15.0795 15.3259 12 15.3259C8.92053 15.3259 6.41403 17.7791 6.3282 20.8379C7.96394 21.8898 9.91071 22.5 12 22.5C14.0893 22.5 16.0361 21.8898 17.6718 20.8379ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 11.4224C13.3264 11.4224 14.4016 10.3471 14.4016 9.02074C14.4016 7.69434 13.3264 6.61908 12 6.61908C10.6736 6.61908 9.5983 7.69434 9.5983 9.02074C9.5983 10.3471 10.6736 11.4224 12 11.4224ZM12 12.9224C14.1548 12.9224 15.9016 11.1756 15.9016 9.02074C15.9016 6.86591 14.1548 5.11908 12 5.11908C9.84513 5.11908 8.0983 6.86591 8.0983 9.02074C8.0983 11.1756 9.84513 12.9224 12 12.9224Z" fill="#FF3E5B" />
                                                                </svg>
                                                            </span>
                                                            <h5 className='font-bold'>Customer Information</h5>
                                                        </div>
                                                        <span>
                                                            {
                                                                isActiveAccordion === true ? (
                                                                    <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.2 1.00002C15.2 1.3314 14.9313 1.60002 14.6 1.60002L1.39995 1.60002C1.06858 1.60002 0.799951 1.33139 0.799951 1.00002C0.799951 0.668653 1.06858 0.400024 1.39995 0.400024L14.6 0.400024C14.9313 0.400024 15.2 0.668654 15.2 1.00002Z" fill="#FF3E5B" />
                                                                    </svg>
                                                                ) : (
                                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.9999 0.400024C10.3313 0.400024 10.5999 0.668654 10.5999 1.00002V9.40002H18.9999C19.3313 9.40002 19.5999 9.66865 19.5999 10C19.5999 10.3314 19.3313 10.6 18.9999 10.6H10.5999V19C10.5999 19.3314 10.3313 19.6 9.9999 19.6C9.66853 19.6 9.3999 19.3314 9.3999 19L9.3999 10.6H0.999902C0.668531 10.6 0.399902 10.3314 0.399902 10C0.399902 9.66865 0.668532 9.40002 0.999902 9.40002H9.3999L9.3999 1.00002C9.3999 0.668654 9.66853 0.400024 9.9999 0.400024Z" fill="#FF3E5B" />
                                                                    </svg>
                                                                )
                                                            }

                                                        </span>
                                                    </div>

                                                    {/* contents */}

                                                    {
                                                        isActiveAccordion === true && (
                                                            <div className={`w-full h-full grid md:grid-cols-3 grid-cols-2 gap-4 pt-[20px]`}>
                                                                <div className='flex flex-col gap-[2px]'>
                                                                    <span className='text-[#858585] sm:text-[14px] text-[12px]'>Enquiry No.</span>
                                                                    <span className={`${theme === "dark" ? 'text-white' : 'text-black'} sm:text-[16px] text-[14px]`}>
                                                                        {getUserData.enquiryNo}
                                                                    </span>
                                                                </div>

                                                                <div className='flex flex-col gap-[2px]'>
                                                                    <span className='text-[#858585] sm:text-[14px] text-[12px]'>Customer ID</span>
                                                                    <span className={`${theme === "dark" ? 'text-white' : 'text-black'} sm:text-[16px] text-[14px]`}>
                                                                        {getUserData.customerId}
                                                                    </span>
                                                                </div>

                                                                <div className='flex flex-col gap-[2px]'>
                                                                    <span className='text-[#858585] sm:text-[14px] text-[12px]'>Customer Type</span>
                                                                    <span className={`${theme === "dark" ? 'text-white' : 'text-black'} sm:text-[16px] text-[14px]`}>
                                                                        {getUserData.customerType}
                                                                    </span>
                                                                </div>

                                                                <div className='flex flex-col gap-[2px]'>
                                                                    <span className='text-[#858585] sm:text-[14px] text-[12px]'>Dummy Major Route Details</span>
                                                                    <span className={`${theme === "dark" ? 'text-white' : 'text-black'} sm:text-[16px] text-[14px]`}>
                                                                        {getUserData.dummyMajor}
                                                                    </span>
                                                                </div>

                                                                <div className='flex flex-col gap-[2px]'>
                                                                    <span className='text-[#858585] sm:text-[14px] text-[12px]'>Corporate Type</span>
                                                                    <span className={`${theme === "dark" ? 'text-white' : 'text-black'} sm:text-[16px] text-[14px]`}>
                                                                        {getUserData.corporateType}
                                                                    </span>
                                                                </div>

                                                                <div className='flex flex-col gap-[2px]'>
                                                                    <span className='text-[#858585] sm:text-[14px] text-[12px]'>Corporate Name</span>
                                                                    <span className={`${theme === "dark" ? 'text-white' : 'text-black'} sm:text-[16px] text-[14px]`}>
                                                                        {getUserData.corporateName}
                                                                    </span>
                                                                </div>

                                                                <div className='flex flex-col gap-[2px]'>
                                                                    <span className='text-[#858585] sm:text-[14px] text-[12px]'>Usage/Application Category</span>
                                                                    <span className={`${theme === "dark" ? 'text-white' : 'text-black'} sm:text-[16px] text-[14px]`}>
                                                                        {getUserData.applicationCategory}
                                                                    </span>
                                                                </div>

                                                                <div className='flex flex-col gap-[2px]'>
                                                                    <span className='text-[#858585] sm:text-[14px] text-[12px]'>Usage/Application Sub-Category</span>
                                                                    <span className={`${theme === "dark" ? 'text-white' : 'text-black'} sm:text-[16px] text-[14px]`}>
                                                                        {getUserData.applicationSubCategory}
                                                                    </span>
                                                                </div>

                                                                <div className='flex flex-col gap-[2px]'>
                                                                    <span className='text-[#858585] sm:text-[14px] text-[12px]'>Customer Category</span>
                                                                    <span className={`${theme === "dark" ? 'text-white' : 'text-black'} sm:text-[16px] text-[14px]`}>
                                                                        {getUserData.customerCategory}
                                                                    </span>
                                                                </div>

                                                                <div className='flex flex-col gap-[2px]'>
                                                                    <span className='text-[#858585] sm:text-[14px] text-[12px]'>Business Details</span>
                                                                    <span className={`${theme === "dark" ? 'text-white' : 'text-black'} sm:text-[16px] text-[14px]`}>
                                                                        {getUserData.bussinessDetails}
                                                                    </span>
                                                                </div>

                                                                <div className='flex flex-col gap-[2px]'>
                                                                    <span className='text-[#858585] sm:text-[14px] text-[12px]'>Vehicle Deployment Details</span>
                                                                    <span className={`${theme === "dark" ? 'text-white' : 'text-black'} sm:text-[16px] text-[14px]`}>
                                                                        {getUserData.vehicleDetails}
                                                                    </span>
                                                                </div>

                                                                <div className='flex flex-col gap-[2px]'>
                                                                    <span className='text-[#858585] sm:text-[14px] text-[12px]'>Key Role Details</span>
                                                                    <span className={`${theme === "dark" ? 'text-white' : 'text-black'} sm:text-[16px] text-[14px]`}>
                                                                        {getUserData.roleDetails}
                                                                    </span>
                                                                </div>

                                                                <div className='flex flex-col gap-[2px]'>
                                                                    <span className='text-[#858585] sm:text-[14px] text-[12px]'>Major Route Details</span>
                                                                    <span className={`${theme === "dark" ? 'text-white' : 'text-black'} sm:text-[16px] text-[14px]`}>
                                                                        {getUserData.routeDetails}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        )
                                                    }

                                                </div>

                                                <div className={`md:p-[23px_30px] p-[15px_20px] rounded-[8px] w-full h-max divide-y-[1px] ${theme === "dark" ? 'bg-[#545454] divide-[#E6E6E6]' : 'bg-[#F2F2F2] divide-[#E6E6E6]'}`}>
                                                    {/* head */}
                                                    <div onClick={() => setIsActiveAccordion_2(!isActiveAccordion_2)} className={`w-full cursor-pointer flex items-center justify-between ${isActiveAccordion_2 === true && 'pb-[20px]'}`}>
                                                        {/* left side */}
                                                        <div className='flex items-center gap-[9px]'>
                                                            <span>
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.0681 19.7649C21.1767 17.8444 22.5 15.0767 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 15.0767 2.82333 17.8444 4.93186 19.7648C5.51728 16.3913 8.45905 13.8259 12 13.8259C15.541 13.8259 18.4827 16.3913 19.0681 19.7649ZM17.6718 20.8379C17.586 17.7791 15.0795 15.3259 12 15.3259C8.92053 15.3259 6.41403 17.7791 6.3282 20.8379C7.96394 21.8898 9.91071 22.5 12 22.5C14.0893 22.5 16.0361 21.8898 17.6718 20.8379ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 11.4224C13.3264 11.4224 14.4016 10.3471 14.4016 9.02074C14.4016 7.69434 13.3264 6.61908 12 6.61908C10.6736 6.61908 9.5983 7.69434 9.5983 9.02074C9.5983 10.3471 10.6736 11.4224 12 11.4224ZM12 12.9224C14.1548 12.9224 15.9016 11.1756 15.9016 9.02074C15.9016 6.86591 14.1548 5.11908 12 5.11908C9.84513 5.11908 8.0983 6.86591 8.0983 9.02074C8.0983 11.1756 9.84513 12.9224 12 12.9224Z" fill="#FF3E5B" />
                                                                </svg>
                                                            </span>
                                                            <h5 className='font-bold'>Key Account Details</h5>
                                                        </div>
                                                        <span>
                                                            {
                                                                isActiveAccordion_2 === true ? (
                                                                    <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.2 1.00002C15.2 1.3314 14.9313 1.60002 14.6 1.60002L1.39995 1.60002C1.06858 1.60002 0.799951 1.33139 0.799951 1.00002C0.799951 0.668653 1.06858 0.400024 1.39995 0.400024L14.6 0.400024C14.9313 0.400024 15.2 0.668654 15.2 1.00002Z" fill="#FF3E5B" />
                                                                    </svg>
                                                                ) : (
                                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.9999 0.400024C10.3313 0.400024 10.5999 0.668654 10.5999 1.00002V9.40002H18.9999C19.3313 9.40002 19.5999 9.66865 19.5999 10C19.5999 10.3314 19.3313 10.6 18.9999 10.6H10.5999V19C10.5999 19.3314 10.3313 19.6 9.9999 19.6C9.66853 19.6 9.3999 19.3314 9.3999 19L9.3999 10.6H0.999902C0.668531 10.6 0.399902 10.3314 0.399902 10C0.399902 9.66865 0.668532 9.40002 0.999902 9.40002H9.3999L9.3999 1.00002C9.3999 0.668654 9.66853 0.400024 9.9999 0.400024Z" fill="#FF3E5B" />
                                                                    </svg>
                                                                )
                                                            }

                                                        </span>
                                                    </div>

                                                    {/* contents */}

                                                    {
                                                        isActiveAccordion_2 === true && (
                                                            <div className={`w-full h-full grid md:grid-cols-3 grid-cols-2 gap-4 pt-[20px]`}>
                                                                <div className='flex flex-col gap-[2px]'>
                                                                    <span className='text-[#858585] sm:text-[14px] text-[12px]'>Account Code</span>
                                                                    <span className={`${theme === "dark" ? 'text-white' : 'text-black'} sm:text-[16px] text-[14px]`}>
                                                                        {getUserData.accountCode}
                                                                    </span>
                                                                </div>

                                                                <div className='flex flex-col gap-[2px]'>
                                                                    <span className='text-[#858585] sm:text-[14px] text-[12px]'>Account Name</span>
                                                                    <span className={`${theme === "dark" ? 'text-white' : 'text-black'} sm:text-[16px] text-[14px]`}>
                                                                        {getUserData.accountName}
                                                                    </span>
                                                                </div>

                                                                <div className='flex flex-col gap-[2px]'>
                                                                    <span className='text-[#858585] sm:text-[14px] text-[12px]'>Account Segment</span>
                                                                    <span className={`${theme === "dark" ? 'text-white' : 'text-black'} sm:text-[16px] text-[14px]`}>
                                                                        {getUserData.accountSegment}
                                                                    </span>
                                                                </div>

                                                                <div className='flex flex-col gap-[2px]'>
                                                                    <span className='text-[#858585] sm:text-[14px] text-[12px]'>Account Client Name</span>
                                                                    <span className={`${theme === "dark" ? 'text-white' : 'text-black'} sm:text-[16px] text-[14px]`}>
                                                                        {getUserData.accountClientName}
                                                                    </span>
                                                                </div>

                                                                <div className='flex flex-col gap-[2px]'>
                                                                    <span className='text-[#858585] sm:text-[14px] text-[12px]'>Account Mapping Date</span>
                                                                    <span className={`${theme === "dark" ? 'text-white' : 'text-black'} sm:text-[16px] text-[14px]`}>
                                                                        {getUserData.accountMappingDate}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                </div>

                                                <div className={`md:p-[23px_30px] p-[15px_20px] rounded-[8px] w-full h-max divide-y-[1px] ${theme === "dark" ? 'bg-[#545454] divide-[#E6E6E6]' : 'bg-[#F2F2F2] divide-[#E6E6E6]'}`}>
                                                    {/* head */}
                                                    <div onClick={() => setIsActiveAccordion_3(!isActiveAccordion_3)} className={`w-full cursor-pointer flex items-center justify-between ${isActiveAccordion_3 === true && 'pb-[20px]'}`}>
                                                        {/* left side */}
                                                        <div className='flex items-center gap-[9px]'>
                                                            <span>
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.0681 19.7649C21.1767 17.8444 22.5 15.0767 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 15.0767 2.82333 17.8444 4.93186 19.7648C5.51728 16.3913 8.45905 13.8259 12 13.8259C15.541 13.8259 18.4827 16.3913 19.0681 19.7649ZM17.6718 20.8379C17.586 17.7791 15.0795 15.3259 12 15.3259C8.92053 15.3259 6.41403 17.7791 6.3282 20.8379C7.96394 21.8898 9.91071 22.5 12 22.5C14.0893 22.5 16.0361 21.8898 17.6718 20.8379ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 11.4224C13.3264 11.4224 14.4016 10.3471 14.4016 9.02074C14.4016 7.69434 13.3264 6.61908 12 6.61908C10.6736 6.61908 9.5983 7.69434 9.5983 9.02074C9.5983 10.3471 10.6736 11.4224 12 11.4224ZM12 12.9224C14.1548 12.9224 15.9016 11.1756 15.9016 9.02074C15.9016 6.86591 14.1548 5.11908 12 5.11908C9.84513 5.11908 8.0983 6.86591 8.0983 9.02074C8.0983 11.1756 9.84513 12.9224 12 12.9224Z" fill="#FF3E5B" />
                                                                </svg>
                                                            </span>
                                                            <h5 className='font-bold'>Authority Details</h5>
                                                        </div>
                                                        <span>
                                                            {
                                                                isActiveAccordion_3 === true ? (
                                                                    <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.2 1.00002C15.2 1.3314 14.9313 1.60002 14.6 1.60002L1.39995 1.60002C1.06858 1.60002 0.799951 1.33139 0.799951 1.00002C0.799951 0.668653 1.06858 0.400024 1.39995 0.400024L14.6 0.400024C14.9313 0.400024 15.2 0.668654 15.2 1.00002Z" fill="#FF3E5B" />
                                                                    </svg>
                                                                ) : (
                                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.9999 0.400024C10.3313 0.400024 10.5999 0.668654 10.5999 1.00002V9.40002H18.9999C19.3313 9.40002 19.5999 9.66865 19.5999 10C19.5999 10.3314 19.3313 10.6 18.9999 10.6H10.5999V19C10.5999 19.3314 10.3313 19.6 9.9999 19.6C9.66853 19.6 9.3999 19.3314 9.3999 19L9.3999 10.6H0.999902C0.668531 10.6 0.399902 10.3314 0.399902 10C0.399902 9.66865 0.668532 9.40002 0.999902 9.40002H9.3999L9.3999 1.00002C9.3999 0.668654 9.66853 0.400024 9.9999 0.400024Z" fill="#FF3E5B" />
                                                                    </svg>
                                                                )
                                                            }

                                                        </span>
                                                    </div>

                                                    {/* contents */}

                                                    {
                                                        isActiveAccordion_3 === true && (
                                                            <div>
                                                                <div className={`w-full h-full grid md:grid-cols-3 grid-cols-2 gap-4 pt-[20px]`}>
                                                                    <div className='flex flex-col gap-[2px]'>
                                                                        <span className='text-[#858585] sm:text-[14px] text-[12px]'>Name Of Person</span>
                                                                        <span className={`${theme === "dark" ? 'text-white' : 'text-black'} sm:text-[16px] text-[14px]`}>
                                                                            {getUserData.numberPerson}
                                                                        </span>
                                                                    </div>

                                                                    <div className='flex flex-col gap-[2px]'>
                                                                        <span className='text-[#858585] sm:text-[14px] text-[12px]'>Position</span>
                                                                        <span className={`${theme === "dark" ? 'text-white' : 'text-black'}`}>
                                                                            {getUserData.position}
                                                                        </span>
                                                                    </div>

                                                                    <div className='flex flex-col gap-[2px]'>
                                                                        <span className='text-[#858585] sm:text-[14px] text-[12px]'>Company Name</span>
                                                                        <span className={`${theme === "dark" ? 'text-white' : 'text-black'} sm:text-[16px] text-[14px]`}>
                                                                            {getUserData.companyName}
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                {/* remarks */}

                                                                <div className='flex flex-col gap-[2px] pt-[20px]'>
                                                                    <span className='text-[#858585] sm:text-[14px] text-[12px]'>Remarks</span>
                                                                    <span className={`${theme === "dark" ? 'text-white' : 'text-black'} sm:text-[16px] text-[14px]`}>
                                                                        {getUserData.remark}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        {/* footer */}
                                        <div className='w-full shadow-[0_-1px_1px_0_rgba(0,0,0,0.15)] p-[18px_30px] mt-[23px] flex items-center justify-between'>
                                            {/* left side */}
                                            <div>
                                                <button onClick={() => setIsRightSideOpen(false)} type='button' className=' rounded-[4px] p-[6px_16px] text-[#FF3E5B]' style={{ border: '1px solid #FF3E5B' }}>Close</button>
                                            </div>
                                            {/* right side */}
                                            <div className='flex items-center gap-[18px]'>
                                                <button type='button' className=' rounded-[4px] p-[6px_16px] text-[#FF3E5B]' style={{ border: '1px solid #FF3E5B' }}>Edit</button>
                                                <button type='button' onClick={() => setIsRightSideOpen(false)} className=' rounded-[4px] p-[6px_16px] text-white bg-[#FF3E5B]'>Next</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </nav>
            </div>
        </>
    )
}

export default AdminSidebarContent