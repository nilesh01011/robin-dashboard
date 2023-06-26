import React, { useEffect, useRef, useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { AiOutlineLeft } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'

let useClickOutSide = (handler) => {
    let domNode = useRef();

    useEffect(() => {
        const handlerEvent = (e) => {
            if (!domNode.current.contains(e.target)) {
                handler();
            }
        }

        document.addEventListener("mousedown", handlerEvent);

        return () => {
            document.removeEventListener("mousedown", handlerEvent)
        }
    }, [handler]);

    return domNode
}

function TopNav({ theme }) {
    const [isOpen, setIsOpen] = useState(false)
    // const [isMobile, setIsMobile] = useState(false);

    const handleNavbar = () => {
        document.querySelector("#navbars").style.cssText = 'left: 0%; transition: left cubic-bezier(0.4, 0, 0.2, 1) 50ms; transition-duration: 1000ms;'
    }

    const selectMakeItems = [
        {
            id: 1,
            name: 'items'
        },
        {
            id: 2,
            name: 'items 1'
        },
        {
            id: 3,
            name: 'items 2'
        },
        {
            id: 4,
            name: 'items 3'
        }
    ]

    let domNode = useClickOutSide(() => {
        setIsOpen(false)
    })

    // Navbar dropdown

    const [isOpenTwo, setIsOpenTwo] = useState(false);
    const [isOpenThree, setIsOpenThree] = useState(false);

    const [isOpenNotificationsBar, setIsOpenNotificationsBar] = useState(false);

    const notificationsItems = [
        {
            id: 1,
            title: 'Smart Alert from ProMech!',
            text: 'Stock up your inventory with Brake Pad Kit (Part No:0603BAB0080KT) for XUV700 model as five customers have been alerted with brake pad replacement request and they are likely to send their vehicle for service in the coming week.'
        },
        // {
        //     id: 2,
        //     text: 'Part request received from Rahul Patel - XUV700 | MH02RA2419 for Brake Pad Kit'
        // },
        // {
        //     id: 3,
        //     text: 'Part request received from Kirtan Panchal - XUV700 | MH01GH7689 for Brake Pad Kit'
        // },
        // {
        //     id: 4,
        //     text: 'Part request received from Jay Parekh - XUV700 | MH02AG1122 for Brake Pad Kit'
        // },
        // {
        //     id: 5,
        //     text: 'Part request received from Sahrdul Rao - XUV700 | MH04GH6781 for Brake Pad Kit'
        // }
    ]

    // go to the suggestion page

    const router = useNavigate();

    const goToSuggestPage = () => {
        router('/suggest-order-qty')
    }

    let domNode_2 = useClickOutSide(() => {
        setIsOpenNotificationsBar(false)
    })

    return (
        <>
            <div className='w-full h-max flex items-center justify-between py-[13px]'>
                {/* title */}
                <div className='slg:block hidden'>
                    <div className='flex flex-col w-max'>
                        <h1 className='text-[18px] font-bold'>NBS International Ltd</h1>
                        {/* <h1 className='text-[18px] font-bold'>Welcome back John!</h1> */}
                        <div className={`flex gap-[12px] items-center divide-x-[1px] ${theme === "dark" ? 'divide-white' : 'divide-[#8E8585]'}`}>
                            <div className='text-[12px] text-[#FF3E5B] flex items-center gap-[10px] cursor-pointer'>
                                Goregoan (W) Mumbai
                                <BsChevronDown size={14} className={`text-[#FF3E5B] ${isOpenTwo === true && ('rotate-180 transition-all')} transition-all`} />
                            </div>
                            {/* <div className='text-[12px] text-[#FF3E5B] pl-[13px] flex items-center gap-[10px] cursor-pointer'>
                                FY 2023
                                <BsChevronDown size={14} className={`text-[#FF3E5B] ${isOpenThree === true && ('rotate-180 transition-all')} transition-all`} />
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* searchings div */}
                {/* <div className='w-max h-[32px] slg:block hidden'>
                    <div className={`1x1:w-[360px] sm:w-[329px] w-full h-full relative flex border-[1px] ${theme === "dark" ? 'border-[#635D5D] ' : 'border-[#DEDEDE]'} rounded-[5px]`}>
                        <input type="search" placeholder='Search by Doc ID' className={`w-full flex-1 p-[8px_16px] pr-[36px] placeholder:capitalize 1x1:placeholder:text-[14px] rounded-[5px] placeholder:text-[12px] ${theme === "dark" ? 'bg-[#191919] text-white placeholder:text-[#635D5D]' : 'bg-white text-black placeholder:text-[#8E8585]'}`} />
                        <div className={`h-auto w-[40px] cursor-pointer rounded-[0_5px_5px_0] flex items-center justify-center border-l-[1px] ${theme === "dark" ? 'bg-[#191919] border-[#635D5D]' : 'bg-white border-[#DEDEDE]'}`}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.69565 0C2.99775 0 0 2.99775 0 6.69565C0 10.3936 2.99775 13.3913 6.69565 13.3913C8.36464 13.3913 9.891 12.7807 11.0635 11.7706L15.1464 15.8535C15.3417 16.0488 15.6583 16.0488 15.8535 15.8535C16.0488 15.6583 16.0488 15.3417 15.8535 15.1464L11.7706 11.0635C12.7807 9.891 13.3913 8.36464 13.3913 6.69565C13.3913 2.99775 10.3936 0 6.69565 0ZM1 6.69565C1 3.55003 3.55003 1 6.69565 1C9.84128 1 12.3913 3.55003 12.3913 6.69565C12.3913 9.84128 9.84128 12.3913 6.69565 12.3913C3.55003 12.3913 1 9.84128 1 6.69565Z" fill="#635D5D" />
                            </svg>
                        </div>
                    </div>
                </div> */}

                {/* right sides */}
                <div className='w-max h-full slg:hidden block'>
                    <button onClick={() => handleNavbar()} type='button' className='flex items-center gap-1'>
                        <div className='w-[15px] h-[30px] flex items-start transition-all duration-300 relative left-[4px]'>
                            <img width={15} height={30} src={`${theme === 'dark' ? '/B_dark_theme.svg' : '/B_Light_theme.svg'}`} className='h-full mr-auto' alt='robin-logo' />
                        </div>
                        {/* icons */}
                        <AiOutlineLeft size={16} className={`${theme === 'dark' ? 'text-white' : 'text-black'} rotate-180`} />
                    </button>
                </div>
                {/* mobile view icons */}
                <div>
                    <div className='flex items-center gap-6'>
                        {/* notificons */}
                        <div ref={domNode_2} className='relative'>
                            <div onClick={() => setIsOpenNotificationsBar(!isOpenNotificationsBar)} className='relative cursor-pointer'>
                                {/* icons */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.25222 2.09071C9.42805 1.25428 10.1472 0.600098 11.0486 0.600098C11.9607 0.600098 12.6863 1.26995 12.8511 2.12066C15.7298 2.98796 17.8114 5.75089 17.8114 8.98819V13.6356C17.8114 13.9643 17.9369 14.2743 18.1523 14.4988L21.132 17.6051C21.6771 18.1734 21.3447 19.2334 20.4529 19.2334H13.7035C13.4213 20.461 12.3575 21.4001 11.0486 21.4001H10.7517C9.44286 21.4001 8.37905 20.461 8.09684 19.2334H1.54797C0.656167 19.2334 0.323775 18.1734 0.868944 17.6051L3.84863 14.4988C4.06399 14.2743 4.18949 13.9643 4.18949 13.6356V8.98819C4.18949 5.71264 6.32058 2.92274 9.25222 2.09071ZM11.0005 3.1387C7.97485 3.17992 5.48949 5.75803 5.48949 8.98819V13.6356C5.48949 14.292 5.23961 14.9267 4.78678 15.3988L2.35538 17.9334H19.6455L17.2141 15.3988C16.7613 14.9267 16.5114 14.292 16.5114 13.6356V8.98819C16.5114 5.75803 14.0261 3.17992 11.0005 3.1387ZM9.45992 19.2334C9.69291 19.7543 10.1961 20.1001 10.7517 20.1001H11.0486C11.6042 20.1001 12.1074 19.7543 12.3404 19.2334H9.45992Z" fill={`${isOpenNotificationsBar === true ? '#FF3E5B' : `${theme === "dark" ? 'white' : 'black'}`}`} />
                                </svg>

                                {/* notificons count */}
                                {
                                    isOpenNotificationsBar === true ? '' : (
                                        <span className='absolute -top-[2px] -right-[4px] bg-[#FF3E5B] text-white text-[10px] flex items-center justify-center rounded-full w-[1rem] h-[1rem]'>1</span>
                                    )
                                }

                            </div>
                            {
                                isOpenNotificationsBar === true &&
                                <div className={`absolute sm:w-[380px] w-[330px] z-50 h-max rounded-[10px] top-[170%] p-[14px_11px] shadow-xl md:-right-[15px] sm:-right-[150px] -right-[15px] border-[1px] ${theme === "dark" ? 'bg-[#232324] border-[#545454]' : 'bg-white border-[#E6E6E6]'}`}>

                                    <div className='absolute -top-[8.7px] lg:right-[15px] sm:right-[151px]'>
                                        {/* <TiArrowSortedUp size={24} className={`border-[0.8px] ${theme === "dark" ? 'bg-[#232324] border-[#545454]' : ''}`} /> */}
                                        <svg width="20" height="9" viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.75947 1.21387L1.68115 8.15796H17.9152L9.75947 1.21387Z" fill={`${theme === "dark" ? '#232324' : 'white'}`} stroke={`${theme === "dark" ? '#545454' : '#E6E6E6'}`} />
                                        </svg>
                                    </div>

                                    <div className={`w-full divide-y-[1px] ${theme === "dark" ? ' divide-[#545454]' : ' divide-[#DEDEDE]'}`}>
                                        {/* headers */}
                                        <div className='w-full flex items-center justify-between text-[14px] pb-[8px]'>
                                            <h6 className='font-bold'>Notifications</h6>

                                            <span onClick={() => goToSuggestPage()} className='text-[#FF3E5B] cursor-pointer'>View all</span>
                                        </div>

                                        {
                                            notificationsItems.map((ele) => {
                                                const { id, text, title } = ele;

                                                return (
                                                    <div key={id} className={`w-full pt-[8px]`}>
                                                        {/* title */}
                                                        <span className='text-[12px] font-[700] mb-[4px]'>
                                                            {title}
                                                        </span>
                                                        {/* text */}
                                                        <span className={`text-[12px] flex items-start gap-[6px] flex-col ${theme === "dark" ? 'text-[#B5B5B6]' : 'text-[#635D5D]'}`}>
                                                            {text}

                                                            <Link to="/suggest-order-qty" className='underline text-[12px] text-[#FF3E5B] cursor-pointer'>View More</Link>
                                                        </span>
                                                        {/* <span>
                                                        <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.592753 1.02229C0.781618 0.820833 1.09804 0.810626 1.29949 0.999491L9.29949 8.49949C9.40032 8.59401 9.45752 8.72606 9.45752 8.86426C9.45752 9.00246 9.40032 9.1345 9.29949 9.22903L1.29949 16.729C1.09804 16.9179 0.781618 16.9077 0.592753 16.7062C0.403887 16.5048 0.414094 16.1884 0.615551 15.9995L8.22646 8.86426L0.615551 1.72903C0.414094 1.54016 0.403887 1.22374 0.592753 1.02229Z" fill={`${theme === "dark" ? 'white' : '#0B0B0C'}`} />
                                                        </svg>
                                                    </span> */}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>


                                </div>
                            }
                        </div>


                        {/* Help Desk */}
                        <div className='flex gap-3 items-center'>
                            {/* icons */}
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 23 25" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.56401 2.21532C7.99298 1.01142 9.8631 0.5 11.3493 0.5C12.8345 0.5 14.7211 1.01082 16.1674 2.2119C17.557 3.36589 18.5031 5.13098 18.318 7.55121C18.6539 7.75928 18.9557 8.0622 19.1408 8.49444C19.4293 9.16845 19.457 10.0871 19.3272 10.8766C19.2602 11.2843 19.1453 11.6962 18.9746 12.0633C18.8305 12.373 18.6299 12.6867 18.3525 12.9293C18.3683 13.2785 18.3382 13.7328 18.1886 14.1869C17.9733 14.8404 17.491 15.5307 16.5471 15.8185C16.1741 15.9323 15.7171 15.9093 15.3151 15.8574C15.1417 15.835 14.9592 15.8043 14.7712 15.767C14.8211 15.8638 14.8791 15.9653 14.9559 16.0824C15.1637 16.3987 15.4859 16.7634 16.0807 17.1385C16.3129 17.2849 16.6246 17.3873 17.0673 17.4949C17.174 17.5208 17.2905 17.5475 17.4139 17.5757C17.7613 17.6551 18.1628 17.7468 18.5492 17.8697C19.6713 18.2264 20.85 18.8921 21.6812 20.5265C22.3143 21.7712 22.4136 22.7611 22.0766 23.4985C21.7617 24.1874 21.1048 24.5282 20.5769 24.4982H2.20525C1.67742 24.5282 1.02043 24.1874 0.705559 23.4985C0.368573 22.7611 0.46788 21.7712 1.10093 20.5265C1.9322 18.8921 3.11086 18.2264 4.23292 17.8697C4.61935 17.7468 5.02086 17.6551 5.36828 17.5757C5.49165 17.5475 5.60821 17.5208 5.71484 17.4949C6.15757 17.3873 6.46927 17.2849 6.70142 17.1385C7.29625 16.7634 7.61849 16.3987 7.82623 16.0824C7.96005 15.8786 8.03656 15.722 8.11316 15.5551C7.88026 15.3432 7.66273 15.1081 7.46138 14.8523C7.10963 14.4053 6.80759 13.8964 6.55541 13.3372C6.38673 13.3789 6.20997 13.4078 6.03713 13.4221C5.58022 13.4598 4.9596 13.4118 4.44387 13.0415C4.09172 12.7887 3.84788 12.4233 3.68046 12.0633C3.50975 11.6962 3.39489 11.2843 3.32785 10.8766C3.19803 10.0871 3.22577 9.16845 3.51429 8.49444C3.71846 8.01749 4.07119 7.70119 4.45 7.49532C4.28164 5.10904 5.20206 3.36275 6.56401 2.21532ZM5.67841 8.64953C5.5703 8.66801 5.46671 8.69304 5.37112 8.72525C5.08269 8.82242 4.94968 8.95294 4.89326 9.08473C4.75853 9.39948 4.70383 9.99981 4.80798 10.6332C4.85793 10.937 4.93916 11.2126 5.04059 11.4308C5.1453 11.6559 5.24965 11.7735 5.31869 11.823C5.42392 11.8986 5.62774 11.9508 5.91363 11.9271C5.95951 11.9234 6.00444 11.9178 6.0477 11.9109C5.8908 11.3366 5.77516 10.7285 5.70091 10.0951C5.6422 9.5944 5.63678 9.11143 5.67841 8.64953ZM6.01072 7.11173C5.98483 7.11268 5.95877 7.11385 5.93256 7.11524C5.8827 5.36173 6.58126 4.16217 7.53047 3.36246C8.64652 2.4222 10.157 2 11.3493 2C12.5424 2 14.0735 2.42281 15.2091 3.36588C16.1753 4.16828 16.8862 5.36842 16.839 7.11897C16.8341 7.11863 16.8291 7.11831 16.8242 7.11799C16.5623 6.30356 16.143 5.59697 15.6065 5.01403C14.5044 3.81661 12.9492 3.18647 11.3871 3.18647C9.06635 3.18647 6.8544 4.71883 6.01072 7.11173ZM17.115 8.66845C17.1451 9.12206 17.1327 9.5988 17.0731 10.0969C16.9957 10.7438 16.8828 11.3553 16.7336 11.9265C16.7362 11.9267 16.7388 11.9269 16.7414 11.9271C17.0273 11.9508 17.2311 11.8986 17.3364 11.823C17.4054 11.7735 17.5097 11.6559 17.6145 11.4308C17.7159 11.2126 17.7971 10.937 17.8471 10.6332C17.9512 9.99981 17.8965 9.39948 17.7618 9.08473C17.6998 8.93996 17.5684 8.81432 17.3057 8.72245C17.2455 8.70141 17.1817 8.68346 17.115 8.66845ZM16.2412 13.3688C16.082 13.7343 15.9026 14.0756 15.7025 14.3906C15.9436 14.4102 16.0709 14.3955 16.1096 14.3837C16.4764 14.2719 16.661 14.03 16.7639 13.7176C16.7949 13.6235 16.8166 13.5269 16.8311 13.4324C16.757 13.4314 16.6857 13.4277 16.6179 13.4221C16.4929 13.4117 16.3658 13.3937 16.2412 13.3688ZM14.0958 14.0571C13.2535 13.8153 12.3713 13.4847 11.7342 13.1811C11.3603 13.0029 10.9127 13.1616 10.7345 13.5356C10.5564 13.9095 10.7151 14.3571 11.089 14.5353C11.5178 14.7396 12.0323 14.9496 12.5715 15.1414C12.2084 15.266 11.8139 15.3291 11.3871 15.3291C10.2802 15.3291 9.35763 14.8364 8.64015 13.9246C7.90851 12.9949 7.39016 11.6217 7.1907 9.92045C6.82203 6.77588 9.11059 4.68647 11.3871 4.68647C12.554 4.68647 13.7007 5.15838 14.5027 6.02982C15.2939 6.88943 15.7912 8.18372 15.5837 9.9187C15.3621 11.7708 14.8411 13.1357 14.1244 14.0221C14.1149 14.0338 14.1054 14.0455 14.0958 14.0571ZM13.4221 16.4184C12.806 16.6888 12.1245 16.8291 11.3871 16.8291C10.6546 16.8291 9.98012 16.6763 9.37167 16.3956C9.28663 16.5626 9.18845 16.7407 9.08008 16.9057C8.88079 17.2092 8.62462 17.5206 8.27763 17.8289C8.89407 18.2122 9.78802 18.5438 10.8219 18.642C12.0125 18.755 13.3139 18.5495 14.4866 17.8128C14.1487 17.5098 13.8979 17.2039 13.7021 16.9057C13.5986 16.7481 13.5045 16.5787 13.4221 16.4184ZM15.8474 18.6902C14.2155 19.9506 12.3315 20.292 10.6801 20.1352C9.18878 19.9937 7.8039 19.4365 6.91996 18.696C6.63316 18.808 6.34121 18.8863 6.06909 18.9525C5.92209 18.9882 5.78124 19.0204 5.6439 19.0518C5.31706 19.1264 5.01009 19.1966 4.68735 19.2992C3.84541 19.5668 3.04361 20.0157 2.43794 21.2065C1.89872 22.2667 2.00708 22.7377 2.06982 22.8749C2.11489 22.9736 2.16963 22.9942 2.17466 22.9982H20.6075C20.6125 22.9942 20.6673 22.9736 20.7123 22.8749C20.7751 22.7377 20.8835 22.2667 20.3442 21.2065C19.7386 20.0157 18.9368 19.5668 18.0948 19.2992C17.7721 19.1966 17.4651 19.1264 17.1383 19.0518C17.0009 19.0204 16.8601 18.9882 16.7131 18.9525C16.4363 18.8852 16.139 18.8053 15.8474 18.6902Z" fill={theme === "dark" ? 'white' : 'black'} />
                                </svg>
                            </div>

                            {/* text */}
                            <div className='sm:block hidden'>
                                <div className='flex flex-col text-[12px] leading-[1rem] w-max'>
                                    {/* <span>OneStop</span>
                                    <span>Help Desk</span> */}
                                    <span>OneStop Help Desk</span>
                                </div>
                            </div>
                        </div>

                        {/* profile box */}
                        <div ref={domNode}>
                            <div onClick={() => setIsOpen(!isOpen)} className='flex items-center sm:gap-[6px] gap-[3px] w-full relative cursor-pointer'>
                                {/* <div className='h-[32px] w-[32px] rounded-full border-[1px] border-[#E6E6E6] flex items-center justify-center text-[13px] font-bold'>
                                    SN
                                </div> */}

                                <div className=''>
                                    {/* <FaUserCircle size={25} /> */}
                                    {/* <img src="/userImages.png" alt="userImages" /> */}
                                    <div className={`w-[30px] h-[30px] rounded-full border-[1px] ${theme === "dark" ? 'border-[#545454] text-black bg-white' : 'border-[#E6E6E6] text-black'} font-black text-[12px] flex items-center justify-center`}>
                                        SN
                                    </div>
                                </div>

                                <button className='flex items-end gap-[3px]'>
                                    <div className='sm:block hidden'>
                                        <div className='flex flex-col items-start'>
                                            <span className='text-[12px] font-bold'>Shailesh Naik</span>
                                            <span className='text-[12px] text-[#FF3E5B]'>+91 9890678656</span>
                                        </div>
                                    </div>

                                    <HiChevronDown size={16} className={`${isOpen && 'rotate-180 transition-all'} transition-all`} />
                                </button>

                                {
                                    isOpen && (
                                        <div className={`w-[166px] absolute top-[115%] z-50 sm:-left-[24px] left-[280%] ${theme === 'dark' ? 'bg-[#242424]' : 'bg-white'} rounded shadow-md`}>
                                            <ul className={`${theme === 'dark' ? 'divide-[#635D5D]' : 'divide-[#DEDEDE]'} divide-y`}>
                                                <li className='text-[12px] text-left p-[6px] px-[10px]'>List 1</li>
                                                <li className='text-[12px] text-left p-[6px] px-[10px]'>List 2</li>
                                                <li className='text-[12px] text-left p-[6px] px-[10px]'>List 3</li>
                                            </ul>
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNav