import React, { useEffect, useState } from 'react'
import { BsChevronDown, BsFillCaretLeftFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
// import { dashboardNavTabs } from '../Data'

function NavTabs({ isOpen, theme }) {
    const [submenu, setSubmenu] = useState(false);
    const [submenu_2, setSubmenu_2] = useState(false);
    const [submenu_3, setSubmenu_3] = useState(false);
    const [submenu_4, setSubmenu_4] = useState(false);
    const [submenu_5, setSubmenu_5] = useState(false);
    const [submenu_6, setSubmenu_6] = useState(false);
    const [submenu_7, setSubmenu_7] = useState(false);
    const [submenu_8, setSubmenu_8] = useState(false);
    const [submenu_9, setSubmenu_9] = useState(false);

    const SubMenuList = [
        {
            id: 1,
            list: 'Items',
            // list: 'Dashboard',
        },
        {
            id: 2,
            list: 'Items 1',
            // list: 'Terms and Conditions',
        },
        {
            id: 3,
            list: 'Items 2',
            // list: 'Manufacturer Hierarchy',
        },
        {
            id: 4,
            list: 'Items 3',
            // list: 'Customer Master',
        }
    ]

    // active list of favorites
    const [activeTabs, setActiveTabs] = useState(0);

    // parts tabs

    const PartsLists = [
        {
            id: 1,
            list: 'Part Ordering',
            moreLists: [
                {
                    id: 1.1,
                    text: 'Suggested Order Qty. (SOQ)'
                },
                {
                    id: 1.2,
                    text: 'Purchase Order'
                },
                {
                    id: 1.3,
                    text: 'PO-lap'
                }
            ]
        },
        {
            id: 2,
            list: 'Receive Parts',
        },
        {
            id: 3,
            list: 'Workshop Related',
        },
        {
            id: 4,
            list: 'Branch wise Stock View',
        },
        {
            id: 5,
            list: 'Part sales',
            moreLists: [
                {
                    id: 5.1,
                    text: 'text 1'
                },
                {
                    id: 5.2,
                    text: 'text 2'
                },
                {
                    id: 5.3,
                    text: 'text 3'
                }
            ]
        },
        {
            id: 6,
            list: 'Stock Transfer',
            moreLists: [
                {
                    id: 6.1,
                    text: 'text 1'
                },
                {
                    id: 6.2,
                    text: 'text 2'
                },
                {
                    id: 6.3,
                    text: 'text 3'
                }
            ]
        },
        {
            id: 7,
            list: 'Stock',
        }
    ]

    const [partsTabs, setPartsTabs] = useState(0);

    const [miniTabsOpen, setMiniTabsOpen] = useState(false);

    const [miniTabsOpen_2, setMiniTabsOpen_2] = useState(false);
    const [miniTabsOpen_3, setMiniTabsOpen_3] = useState(false);

    const [innerTabsActive, setInnerTabsActive] = useState(0);

    // URL router paths
    const pathname = window.location.pathname;
    const suggestPathname = '/suggest-order-qty' || '/admin/customer';
    const adminCustomer = '/admin/customer';
    const router = useNavigate()

    useEffect(() => {
        if (pathname === suggestPathname) {
            setSubmenu_4(true);
            setMiniTabsOpen(true);
        } else if (pathname === adminCustomer) {
            setSubmenu_9(true)
        }
    }, [pathname, suggestPathname])

    const goToSuggestPage = () => {
        router('/suggest-order-qty')
    }

    const goToAdminCustomerPage = () => {
        router('/admin/customer')
    }

    return (
        <>
            <div className={`flex flex-col mt-3 1x1:gap-[10px] gap-[8px] mb-6 z-10 relative`}>
                {/* {
                    dashboardNavTabs.map((ele) => {
                        return (
                            <button key={ele.id} type='button' className={`flex flex-col ${isOpen ? 'justify-center' : 'justify-between'} items-center w-full mb-[4px] relative`}>
                                <div onClick={() => ele.id === 1 ? setSubmenu(!submenu) : null} className={`flex items-center ${isOpen ? 'justify-center' : 'justify-between'} w-full ${theme === 'dark' ? `${ele.setDropdown ? 'text-[#FF3E5B]' : 'text-white'}` : `${ele.setDropdown ? 'text-[#FF3E5B]' : 'text-black'}`}`}>
                                    <div className={`h-[32px] flex items-center gap-[8px]`}>
                                        {ele.icons}
                                        <span className={`capitalize ${isOpen ? 'hidden transition-all scale-0' : 'transition-all'} lg:text-[16px] text-[14px] uppercase`}>{ele.title}</span>
                                    </div>
                                    {ele.setDropdown && !isOpen && (
                                        <AiOutlineUp size={16} className={`text-[#FF3E5B] ${submenu && ('rotate-180 transition-all')} transition-all`} />
                                    )
                                    }
                                </div>
                                submenu
                                <div key={ele.id} className='w-full'>
                                    {ele.setDropdown && !submenu && !isOpen &&
                                        (
                                            <>
                                                <ul className='w-full'>
                                                    {
                                                        ele.lists.map((el) => (
                                                            <>
                                                                <li key={el.id} className={`w-auto whitespace-nowrap ${isOpen && 'text-[#FF3E5B]'} ${theme === 'dark' ? `text-white hover:bg-[#0B0B0C] ${el.active && 'bg-[#0B0B0C]'}` : `text-[#342C2C] hover:bg-white ${el.active && 'bg-white'}`} text-left pl-[30px] rounded py-[5px] lg:text-[13px] text-[11px]`}>{el.heading}</li>
                                                            </>
                                                        ))
                                                    }
                                                </ul>
                                            </>
                                        )
                                    }
                                </div>
                            </button>
                        )
                    })
                } */}

                <button type='button' className={`flex flex-col ${isOpen ? 'justify-center' : 'justify-between'} items-center w-full mb-[4px] relative`}>
                    <Link aria-label="dashboard" to="/dashboard" className='w-full'>
                        <div className={`w-full flex items-center ${isOpen ? 'justify-center' : 'justify-between'} ${theme === 'dark' ? ` text-white` : `text-black`}`}>
                            <div className={`h-[32px] flex items-center gap-[8px]`}>
                                <span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.6453 5.22805L9.44855 0.993922C8.64617 0.336639 7.34886 0.336639 6.55398 0.986279L1.35727 5.22805C0.772355 5.7019 0.397412 6.70311 0.524892 7.45211L1.52224 13.5358C1.70221 14.6211 2.72206 15.5 3.8019 15.5H12.2006C13.273 15.5 14.3003 14.6134 14.4803 13.5358L15.4776 7.45211C15.5976 6.70311 15.2227 5.7019 14.6453 5.22805ZM8.00126 10.6774C6.96642 10.6774 6.12655 9.82138 6.12655 8.76667C6.12655 7.71196 6.96642 6.85597 8.00126 6.85597C9.03611 6.85597 9.87598 7.71196 9.87598 8.76667C9.87598 9.82138 9.03611 10.6774 8.00126 10.6774Z" fill={`${pathname === adminCustomer || pathname === suggestPathname ? `${theme === "dark" ? 'white' : 'black'}` : '#FF3E5B'}`} />
                                    </svg>
                                </span>
                                <span className={`capitalize ${isOpen ? 'hidden' : ''} lg:text-[16px] text-[14px] ${pathname === adminCustomer || pathname === suggestPathname ? '' : 'text-[#FF3E5B]'}`}>
                                    Home
                                </span>
                            </div>
                        </div>
                    </Link>
                </button>

                <button type='button' className={`flex flex-col ${isOpen ? 'justify-center group' : 'justify-between'} items-center w-full mb-[4px] relative`}>
                    <div onClick={() => setSubmenu(!submenu)} className={`flex items-center ${isOpen ? 'justify-center' : 'justify-between'} w-full`}>
                        <div className={`h-[32px] flex items-center gap-[8px]`}>
                            <span>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.99333 1.52115C5.47218 0.531137 7.21136 0.00178415 8.991 4.50041e-06C10.1737 -0.00117815 11.3449 0.230741 12.4379 0.682504C13.5309 1.13427 14.5241 1.79701 15.3608 2.63286C16.1975 3.4687 16.8612 4.46126 17.3141 5.55377C17.7669 6.64629 18 7.81735 18 9C18 10.7797 17.4724 12.5194 16.4839 13.9992C15.4953 15.479 14.0902 16.6326 12.4462 17.3141C10.8022 17.9955 8.99308 18.1743 7.2475 17.8277C5.50191 17.4812 3.89825 16.6249 2.63922 15.3671C1.38019 14.1094 0.522318 12.5066 0.174035 10.7613C-0.174247 9.01609 0.00269905 7.20677 0.682508 5.56208C1.36232 3.91739 2.51447 2.51116 3.99333 1.52115ZM9.00014 12.105L12.8071 14.4L11.7991 10.062L15.1561 7.155L10.7281 6.777L9.00014 2.7L7.27214 6.786L2.84414 7.164L6.20114 10.071L5.19314 14.4L9.00014 12.105Z" fill={`${theme === "dark" ? 'white' : '#0B0B0C'}`} />
                                </svg>
                            </span>
                            <span className={`capitalize ${isOpen ? 'hidden' : ''} lg:text-[16px] text-[14px] `}>Favorites</span>
                        </div>
                        {
                            !isOpen && (
                                <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${submenu === true && ('rotate-180 transition-all')} transition-all`} />
                            )
                        }
                    </div>

                    {/* show tooltips */}
                    <div className={`group-hover:block hidden rounded-[5px] absolute top-0 left-[46px] w-[200px] h-max z-[99999] border-[1px] ${theme === "dark" ? 'bg-[#242424] border-[#545454]' : 'bg-[#f2f2f2] border-[#E6E6E6]'}`}>
                        {/* right arrow */}
                        <span className='absolute -left-[12px] top-[8px]'>
                            <BsFillCaretLeftFill size={18} className={`${theme === "dark" ? 'text-[#545454]' : 'text-[#f2f2f2]'}`} />
                        </span>
                        {/* list */}
                        <ul className='w-full flex flex-col gap-1'>
                            {
                                SubMenuList.map((ele) => {
                                    return (
                                        <li onClick={() => setActiveTabs(ele.id)} key={ele.id} className={`w-auto whitespace-nowrap ${activeTabs === ele.id ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#f2f2f2]'}`} text-left pl-[30px] rounded py-[5px] lg:text-[14px] text-[12px]`}>
                                            {ele.list}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {/* submenu */}
                    <div className='w-full'>
                        {
                            submenu && !isOpen &&
                            (
                                <>
                                    <ul className='w-full mt-[0.4rem] flex flex-col gap-1'>
                                        {
                                            SubMenuList.map((ele) => {
                                                return (
                                                    <li onClick={() => setActiveTabs(ele.id)} key={ele.id} className={`w-auto whitespace-nowrap ${activeTabs === ele.id ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#f2f2f2]'}`} text-left pl-[30px] rounded py-[5px] lg:text-[14px] text-[12px]`}>{ele.list}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </>
                            )
                        }
                    </div>
                </button>

                <button type='button' className={`flex flex-col ${isOpen ? 'justify-center group' : 'justify-between'} items-center w-full mb-[4px] relative`}>
                    <div onClick={() => setSubmenu_2(!submenu_2)} className={`flex items-center ${isOpen ? 'justify-center' : 'justify-between'} w-full`}>
                        <div className={`h-[32px] flex items-center gap-[8px]`}>
                            <span>
                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.35 2.33352H13.8333C14.275 2.33484 14.6981 2.51086 15.0104 2.82313C15.3227 3.13541 15.4987 3.55857 15.5 4.00019V15.6669C15.4987 16.1085 15.3227 16.5316 15.0104 16.8439C14.6981 17.1562 14.275 17.3322 13.8333 17.3335H2.16667C1.72504 17.3322 1.30189 17.1562 0.989612 16.8439C0.677337 16.5316 0.501319 16.1085 0.5 15.6669V4.00019C0.501319 3.55857 0.677337 3.13541 0.989612 2.82313C1.30189 2.51086 1.72504 2.33484 2.16667 2.33352H5.65C5.82063 1.84639 6.13844 1.42432 6.55944 1.1257C6.98045 0.827089 7.48384 0.666687 8 0.666687C8.51615 0.666687 9.01955 0.827089 9.44056 1.1257C9.86156 1.42432 10.1794 1.84639 10.35 2.33352ZM8.46299 2.4738C8.32595 2.38223 8.16484 2.33336 8.00002 2.33336C7.77901 2.33336 7.56704 2.42116 7.41076 2.57744C7.25448 2.73372 7.16669 2.94568 7.16669 3.16669C7.16669 3.33151 7.21556 3.49263 7.30713 3.62967C7.3987 3.76671 7.52885 3.87352 7.68112 3.93659C7.83339 3.99966 8.00094 4.01617 8.16259 3.98401C8.32425 3.95186 8.47273 3.87249 8.58928 3.75595C8.70582 3.6394 8.78519 3.49092 8.81734 3.32927C8.84949 3.16762 8.83299 3.00006 8.76992 2.84779C8.70685 2.69552 8.60004 2.56537 8.46299 2.4738ZM8.00001 5.6667C8.49447 5.6667 8.97782 5.81332 9.38894 6.08803C9.80006 6.36273 10.1205 6.75318 10.3097 7.20999C10.4989 7.66681 10.5484 8.16947 10.452 8.65443C10.3555 9.13938 10.1174 9.58484 9.76778 9.93447C9.41815 10.2841 8.97269 10.5222 8.48774 10.6187C8.00279 10.7151 7.50012 10.6656 7.04331 10.4764C6.58649 10.2872 6.19604 9.96675 5.92134 9.55563C5.64664 9.1445 5.50001 8.66115 5.50001 8.1667C5.50001 7.50366 5.76341 6.86778 6.23225 6.39893C6.70109 5.93009 7.33697 5.6667 8.00001 5.6667ZM2.99998 14.5V15.6667H13V14.5C13 12.8334 9.66665 11.9167 7.99998 11.9167C6.33332 11.9167 2.99998 12.8334 2.99998 14.5Z" fill={`${theme === "dark" ? 'white' : '#0B0B0C'}`} />
                                </svg>
                            </span>
                            <span className={`capitalize ${isOpen ? 'hidden' : ''} lg:text-[16px] text-[14px] `}>Pre Sales</span>
                        </div>
                        {
                            !isOpen && (
                                <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${submenu_2 === true && ('rotate-180 transition-all')} transition-all`} />
                            )
                        }
                    </div>

                    {/* show tooltips */}
                    <div className={`group-hover:block hidden rounded-[5px] absolute top-0 left-[46px] w-[200px] h-max z-[99999] border-[1px] ${theme === "dark" ? 'bg-[#242424] border-[#545454]' : 'bg-[#f2f2f2] border-[#E6E6E6]'}`}>
                        {/* right arrow */}
                        <span className='absolute -left-[12px] top-[8px]'>
                            <BsFillCaretLeftFill size={18} className={`${theme === "dark" ? 'text-[#545454]' : 'text-[#f2f2f2]'}`} />
                        </span>
                        {/* list */}
                        <ul className='w-full flex flex-col gap-1'>
                            {
                                SubMenuList.map((ele) => {
                                    return (
                                        <li onClick={() => setActiveTabs(ele.id)} key={ele.id} className={`w-auto whitespace-nowrap ${activeTabs === ele.id ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#f2f2f2]'}`} text-left pl-[30px] rounded py-[5px] lg:text-[14px] text-[12px]`}>
                                            {ele.list}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {/* submenu */}
                    <div className='w-full'>
                        {
                            submenu_2 && !isOpen &&
                            (
                                <>
                                    <ul className='w-full mt-[0.4rem] flex flex-col gap-1'>
                                        {
                                            SubMenuList.map((ele) => {
                                                return (
                                                    <li onClick={() => setActiveTabs(ele.id)} key={ele.id} className={`w-auto whitespace-nowrap ${activeTabs === ele.id ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#f2f2f2]'}`} text-left pl-[30px] rounded py-[5px] lg:text-[14px] text-[12px]`}>{ele.list}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </>
                            )
                        }
                    </div>
                </button>

                <button type='button' className={`flex flex-col ${isOpen ? 'justify-center group' : 'justify-between'} items-center w-full mb-[4px] relative`}>
                    <div onClick={() => setSubmenu_3(!submenu_3)} className={`flex items-center ${isOpen ? 'justify-center' : 'justify-between'} w-full`}>
                        <div className={`h-[32px] flex items-center gap-[8px]`}>
                            <span>
                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.3104 0.563769C13.5227 0.714759 13.6823 0.928535 13.7667 1.17499L15.5 6.16666V12.8333C15.5 13.0543 15.4122 13.2663 15.2559 13.4226C15.0996 13.5789 14.8877 13.6667 14.6667 13.6667H13.8333C13.6123 13.6667 13.4004 13.5789 13.2441 13.4226C13.0878 13.2663 13 13.0543 13 12.8333V12H3V12.8333C3 13.0543 2.9122 13.2663 2.75592 13.4226C2.59964 13.5789 2.38768 13.6667 2.16667 13.6667H1.33333C1.11232 13.6667 0.900358 13.5789 0.744078 13.4226C0.587797 13.2663 0.5 13.0543 0.5 12.8333V6.16666L2.23333 1.17499C2.31837 0.928947 2.47811 0.715592 2.69025 0.564705C2.90239 0.413817 3.15634 0.332928 3.41667 0.333325H12.5833C12.8438 0.33218 13.0981 0.412778 13.3104 0.563769ZM2.72221 9.28934C2.92777 9.42669 3.16945 9.5 3.41667 9.5C3.74819 9.5 4.06614 9.36831 4.30056 9.13388C4.53498 8.89946 4.66667 8.58152 4.66667 8.25C4.66667 8.00277 4.59336 7.7611 4.45601 7.55554C4.31866 7.34998 4.12343 7.18976 3.89503 7.09515C3.66662 7.00054 3.41529 6.97579 3.17281 7.02402C2.93033 7.07225 2.7076 7.1913 2.53279 7.36612C2.35797 7.54093 2.23892 7.76366 2.19069 8.00614C2.14246 8.24861 2.16721 8.49995 2.26182 8.72836C2.35643 8.95676 2.51665 9.15199 2.72221 9.28934ZM12.5833 9.5C12.3361 9.5 12.0944 9.42669 11.8889 9.28934C11.6833 9.15199 11.5231 8.95676 11.4285 8.72836C11.3339 8.49995 11.3091 8.24861 11.3574 8.00614C11.4056 7.76366 11.5246 7.54093 11.6995 7.36612C11.8743 7.1913 12.097 7.07225 12.3395 7.02402C12.582 6.97579 12.8333 7.00054 13.0617 7.09515C13.2901 7.18976 13.4853 7.34998 13.6227 7.55554C13.76 7.7611 13.8333 8.00277 13.8333 8.25C13.8333 8.58152 13.7016 8.89946 13.4672 9.13388C13.2328 9.36831 12.9149 9.5 12.5833 9.5ZM3.41667 1.58333L2.16667 5.33333H13.8333L12.5833 1.58333H3.41667Z" fill={`${theme === "dark" ? 'white' : '#0B0B0C'}`} />
                                </svg>
                            </span>
                            <span className={`capitalize ${isOpen ? 'hidden' : ''} lg:text-[16px] text-[14px] `}>Sales</span>
                        </div>
                        {
                            !isOpen && (
                                <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${submenu_3 === true && ('rotate-180 transition-all')} transition-all`} />
                            )
                        }
                    </div>

                    {/* show tooltips */}
                    <div className={`group-hover:block hidden rounded-[5px] absolute top-0 left-[46px] w-[200px] h-max z-[99999] border-[1px] ${theme === "dark" ? 'bg-[#242424] border-[#545454]' : 'bg-[#f2f2f2] border-[#E6E6E6]'}`}>
                        {/* right arrow */}
                        <span className='absolute -left-[12px] top-[8px]'>
                            <BsFillCaretLeftFill size={18} className={`${theme === "dark" ? 'text-[#545454]' : 'text-[#f2f2f2]'}`} />
                        </span>
                        {/* list */}
                        <ul className='w-full flex flex-col gap-1'>
                            {
                                SubMenuList.map((ele) => {
                                    return (
                                        <li onClick={() => setActiveTabs(ele.id)} key={ele.id} className={`w-auto whitespace-nowrap ${activeTabs === ele.id ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#f2f2f2]'}`} text-left pl-[30px] rounded py-[5px] lg:text-[14px] text-[12px]`}>
                                            {ele.list}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {/* submenu */}
                    <div className='w-full'>
                        {
                            submenu_3 && !isOpen &&
                            (
                                <>
                                    <ul className='w-full mt-[0.4rem] flex flex-col gap-1'>
                                        {
                                            SubMenuList.map((ele) => {
                                                return (
                                                    <li onClick={() => setActiveTabs(ele.id)} key={ele.id} className={`w-auto whitespace-nowrap ${activeTabs === ele.id ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#f2f2f2]'}`} text-left pl-[30px] rounded py-[5px] lg:text-[14px] text-[12px]`}>{ele.list}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </>
                            )
                        }
                    </div>
                </button>

                <button type='button' className={`flex flex-col ${isOpen ? 'justify-center group' : 'justify-between'} items-center w-full mb-[4px] relative`}>
                    <div onClick={() => { setSubmenu_4(!submenu_4) }} className={`flex items-center ${isOpen ? 'justify-center' : 'justify-between'} w-full`}>
                        <div className={`h-[32px] flex items-center gap-[8px]`}>
                            {
                                pathname === suggestPathname ? (
                                    <span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0.5L3.5 7.25H12.5L8 0.5Z" fill={`#FF3E5B`} />
                                            <path d="M0.5 8.75H7.25V15.5H0.5V8.75Z" fill={`#FF3E5B`} />
                                            <path d="M12.125 15.5C13.989 15.5 15.5 13.989 15.5 12.125C15.5 10.261 13.989 8.75 12.125 8.75C10.261 8.75 8.75 10.261 8.75 12.125C8.75 13.989 10.261 15.5 12.125 15.5Z" fill={`#FF3E5B`} />
                                        </svg>
                                    </span>
                                ) : (

                                    <span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0.5L3.5 7.25H12.5L8 0.5Z" fill={`${theme === "dark" ? 'white' : '#0B0B0C'}`} />
                                            <path d="M0.5 8.75H7.25V15.5H0.5V8.75Z" fill={`${theme === "dark" ? 'white' : '#0B0B0C'}`} />
                                            <path d="M12.125 15.5C13.989 15.5 15.5 13.989 15.5 12.125C15.5 10.261 13.989 8.75 12.125 8.75C10.261 8.75 8.75 10.261 8.75 12.125C8.75 13.989 10.261 15.5 12.125 15.5Z" fill={`${theme === "dark" ? 'white' : '#0B0B0C'}`} />
                                        </svg>
                                    </span>
                                )
                            }
                            <span className={`capitalize ${isOpen ? 'hidden' : ''} lg:text-[16px] text-[14px] ${pathname === suggestPathname && 'text-[#FF3E5B]'}`}>Parts</span>
                        </div>
                        {
                            pathname === suggestPathname ? (
                                !isOpen && (
                                    <BsChevronDown size={18} className={`text-[#FF3E5B] ${submenu_4 === true && ('rotate-180 transition-all')} transition-all`} />
                                )
                            ) : (
                                !isOpen && (
                                    <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${submenu_4 === true && ('rotate-180 transition-all')} transition-all`} />
                                )
                            )
                        }
                    </div>

                    {/* show tooltips */}
                    <div className={`group-hover:block hidden rounded-[5px] absolute top-0 left-[46px] w-[200px] h-max z-[99999] border-[1px] ${theme === "dark" ? 'bg-[#242424] border-[#545454]' : 'bg-[#f2f2f2] border-[#E6E6E6]'}`}>
                        {/* right arrow */}
                        <span className='absolute -left-[12px] top-[8px]'>
                            <BsFillCaretLeftFill size={18} className={`${theme === "dark" ? 'text-[#545454]' : 'text-[#f2f2f2]'}`} />
                        </span>
                        {/* list */}
                        <ul className='w-full mt-[0.4rem] flex flex-col gap-1'>
                            <li className={`w-auto whitespace-nowrap ${partsTabs ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white' : 'text-[#342C2C] hover:bg-[#f2f2f2]'}`} text-left pl-[30px] pr-[10px] rounded py-[5px] text-[12px]`}>
                                <div onClick={() => { setMiniTabsOpen(!miniTabsOpen) }} className='w-full flex justify-between items-center'>
                                    <span>Part Ordering</span>
                                    <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${miniTabsOpen === true && ('rotate-180 transition-all')} transition-all`} />
                                </div>
                            </li>
                            {
                                miniTabsOpen === true &&
                                <ul className='w-full pl-[21px] flex flex-col gap-1'>
                                    <li onClick={() => { setInnerTabsActive(1); goToSuggestPage() }} className={`w-auto whitespace-nowrap ${pathname === suggestPathname && `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-[#F2F2F2]'}`} ${innerTabsActive === 1 ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-[#F2F2F2]'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`} text-left pl-[20px] rounded py-[5px] text-[12px]`}>
                                        <span className={`${pathname === suggestPathname && 'text-[#FF3E5B]'}`}>Suggested Order Qty. (SOQ)</span>
                                    </li>
                                    <li onClick={() => setInnerTabsActive(2)} className={`w-auto whitespace-nowrap ${innerTabsActive === 2 ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-[#F2F2F2]'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`} text-left pl-[20px] rounded py-[5px] text-[12px]`}>Purchase Order</li>
                                    <li onClick={() => setInnerTabsActive(3)} className={`w-auto whitespace-nowrap ${innerTabsActive === 3 ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-[#F2F2F2]'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`} text-left pl-[20px] rounded py-[5px] text-[12px]`}>PO-lap</li>
                                </ul>
                            }

                            <li className={`w-auto whitespace-nowrap ${partsTabs ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`} text-left pl-[30px] pr-[10px] rounded py-[5px] text-[12px]`}>
                                <div className='w-full flex justify-between items-center'>
                                    <span>Receive Parts</span>
                                    {/* <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${miniTabsOpen === true && ('rotate-180 transition-all')} transition-all`} /> */}
                                </div>
                            </li>


                            <li className={`w-auto whitespace-nowrap ${partsTabs ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`} text-left pl-[30px] pr-[10px] rounded py-[5px] text-[12px]`}>
                                <div className='w-full flex justify-between items-center'>
                                    <span>Workshop Related</span>
                                    {/* <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${miniTabsOpen === true && ('rotate-180 transition-all')} transition-all`} /> */}
                                </div>
                            </li>


                            <li className={`w-auto whitespace-nowrap ${partsTabs ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`} text-left pl-[30px] pr-[10px] rounded py-[5px] text-[12px]`}>
                                <div className='w-full flex justify-between items-center'>
                                    <span>Branch wise Stock View</span>
                                    {/* <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${miniTabsOpen === true && ('rotate-180 transition-all')} transition-all`} /> */}
                                </div>
                            </li>

                            <li onClick={() => setMiniTabsOpen_2(!miniTabsOpen_2)} className={`w-auto whitespace-nowrap ${partsTabs ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`} text-left pl-[30px] pr-[10px] rounded py-[5px] text-[12px]`}>
                                <div className='w-full flex justify-between items-center'>
                                    <span>Part sales</span>
                                    <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${miniTabsOpen_2 === true && ('rotate-180 transition-all')} transition-all`} />
                                </div>
                            </li>

                            <li onClick={() => setMiniTabsOpen_3(!miniTabsOpen_3)} className={`w-auto whitespace-nowrap ${partsTabs ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`} text-left pl-[30px] pr-[10px] rounded py-[5px] text-[12px]`}>
                                <div className='w-full flex justify-between items-center'>
                                    <span>Stock Transfer</span>
                                    <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${miniTabsOpen_3 === true && ('rotate-180 transition-all')} transition-all`} />
                                </div>
                            </li>

                            <li className={`w-auto whitespace-nowrap ${partsTabs ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`} text-left pl-[30px] pr-[10px] rounded py-[5px] text-[12px]`}>
                                <div className='w-full flex justify-between items-center'>
                                    <span>Stock</span>
                                    {/* <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${miniTabsOpen === true && ('rotate-180 transition-all')} transition-all`} /> */}
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* submenu */}
                    <div className='w-full'>
                        {
                            submenu_4 && !isOpen &&
                            <ul className='w-full mt-[0.4rem] flex flex-col gap-1'>
                                <li className={`w-auto whitespace-nowrap ${partsTabs ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white' : 'text-[#342C2C] hover:bg-[#f2f2f2]'}`} text-left pl-[30px] pr-[10px] rounded py-[5px] text-[12px]`}>
                                    <div onClick={() => { setMiniTabsOpen(!miniTabsOpen) }} className='w-full flex justify-between items-center'>
                                        <span>Part Ordering</span>
                                        <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${miniTabsOpen === true && ('rotate-180 transition-all')} transition-all`} />
                                    </div>
                                </li>
                                {
                                    miniTabsOpen === true &&
                                    <ul className='w-full pl-[21px] flex flex-col gap-1'>
                                        <li onClick={() => { setInnerTabsActive(1); goToSuggestPage() }} className={`w-auto whitespace-nowrap ${pathname === suggestPathname && `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-[#F2F2F2]'}`} ${innerTabsActive === 1 ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-[#F2F2F2]'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`} text-left pl-[20px] rounded py-[5px] text-[12px]`}>
                                            <span className={`${pathname === suggestPathname && 'text-[#FF3E5B]'}`}>Suggested Order Qty. (SOQ)</span>
                                        </li>
                                        <li onClick={() => setInnerTabsActive(2)} className={`w-auto whitespace-nowrap ${innerTabsActive === 2 ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-[#F2F2F2]'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`} text-left pl-[20px] rounded py-[5px] text-[12px]`}>Purchase Order</li>
                                        <li onClick={() => setInnerTabsActive(3)} className={`w-auto whitespace-nowrap ${innerTabsActive === 3 ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-[#F2F2F2]'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`} text-left pl-[20px] rounded py-[5px] text-[12px]`}>PO-lap</li>
                                    </ul>
                                }

                                <li className={`w-auto whitespace-nowrap ${partsTabs ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`} text-left pl-[30px] pr-[10px] rounded py-[5px] text-[12px]`}>
                                    <div className='w-full flex justify-between items-center'>
                                        <span>Receive Parts</span>
                                        {/* <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${miniTabsOpen === true && ('rotate-180 transition-all')} transition-all`} /> */}
                                    </div>
                                </li>


                                <li className={`w-auto whitespace-nowrap ${partsTabs ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`} text-left pl-[30px] pr-[10px] rounded py-[5px] text-[12px]`}>
                                    <div className='w-full flex justify-between items-center'>
                                        <span>Workshop Related</span>
                                        {/* <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${miniTabsOpen === true && ('rotate-180 transition-all')} transition-all`} /> */}
                                    </div>
                                </li>


                                <li className={`w-auto whitespace-nowrap ${partsTabs ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`} text-left pl-[30px] pr-[10px] rounded py-[5px] text-[12px]`}>
                                    <div className='w-full flex justify-between items-center'>
                                        <span>Branch wise Stock View</span>
                                        {/* <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${miniTabsOpen === true && ('rotate-180 transition-all')} transition-all`} /> */}
                                    </div>
                                </li>

                                <li onClick={() => setMiniTabsOpen_2(!miniTabsOpen_2)} className={`w-auto whitespace-nowrap ${partsTabs ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`} text-left pl-[30px] pr-[10px] rounded py-[5px] text-[12px]`}>
                                    <div className='w-full flex justify-between items-center'>
                                        <span>Part sales</span>
                                        <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${miniTabsOpen_2 === true && ('rotate-180 transition-all')} transition-all`} />
                                    </div>
                                </li>

                                <li onClick={() => setMiniTabsOpen_3(!miniTabsOpen_3)} className={`w-auto whitespace-nowrap ${partsTabs ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`} text-left pl-[30px] pr-[10px] rounded py-[5px] text-[12px]`}>
                                    <div className='w-full flex justify-between items-center'>
                                        <span>Stock Transfer</span>
                                        <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${miniTabsOpen_3 === true && ('rotate-180 transition-all')} transition-all`} />
                                    </div>
                                </li>

                                <li className={`w-auto whitespace-nowrap ${partsTabs ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`} text-left pl-[30px] pr-[10px] rounded py-[5px] text-[12px]`}>
                                    <div className='w-full flex justify-between items-center'>
                                        <span>Stock</span>
                                        {/* <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${miniTabsOpen === true && ('rotate-180 transition-all')} transition-all`} /> */}
                                    </div>
                                </li>
                            </ul>
                        }

                    </div>
                </button>

                <button type='button' className={`flex flex-col ${isOpen ? 'justify-center group' : 'justify-between'} items-center w-full mb-[4px] relative`}>
                    <div onClick={() => setSubmenu_5(!submenu_5)} className={`flex items-center ${isOpen ? 'justify-center' : 'justify-between'} w-full`}>
                        <div className={`h-[32px] flex items-center gap-[8px]`}>
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.83323 1.76398C5.06659 0.939867 6.51664 0.5 8 0.5C9.98913 0.5 11.8968 1.29018 13.3033 2.6967C14.7098 4.10322 15.5 6.01088 15.5 8C15.5 9.48336 15.0601 10.9334 14.236 12.1668C13.4119 13.4001 12.2406 14.3614 10.8701 14.9291C9.49968 15.4968 7.99168 15.6453 6.53683 15.3559C5.08197 15.0665 3.7456 14.3522 2.6967 13.3033C1.64781 12.2544 0.933503 10.918 0.644114 9.46318C0.354725 8.00832 0.50325 6.50032 1.07091 5.12987C1.63856 3.75943 2.59986 2.58809 3.83323 1.76398ZM10.6252 11.7479L11.6752 10.6979C11.7439 10.6278 11.7824 10.5335 11.7824 10.4354C11.7824 10.3372 11.7439 10.243 11.6752 10.1729L9.11767 7.61538C9.29619 7.12024 9.31988 6.58252 9.18559 6.07361C9.05131 5.5647 8.76541 5.10867 8.36584 4.76607C7.96628 4.42347 7.47196 4.21051 6.94852 4.15546C6.42507 4.10042 5.89727 4.20589 5.43518 4.45788L7.19768 6.21288L6.14018 7.27038L4.37768 5.50788C4.12569 5.96997 4.02022 6.49777 4.07526 7.02122C4.13031 7.54466 4.34327 8.03898 4.68587 8.43854C5.02847 8.83811 5.4845 9.12401 5.99341 9.25829C6.50232 9.39258 7.04004 9.36889 7.53518 9.19037L10.0927 11.7479C10.1275 11.783 10.169 11.8109 10.2147 11.83C10.2604 11.849 10.3094 11.8588 10.3589 11.8588C10.4084 11.8588 10.4574 11.849 10.5031 11.83C10.5488 11.8109 10.5903 11.783 10.6252 11.7479Z" fill={`${theme === "dark" ? 'white' : '#0B0B0C'}`} />
                                </svg>
                            </span>
                            <span className={`capitalize ${isOpen ? 'hidden' : ''} lg:text-[16px] text-[14px] `}>Service</span>
                        </div>
                        {
                            !isOpen && (
                                <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${submenu_5 === true && ('rotate-180 transition-all')} transition-all`} />
                            )
                        }
                    </div>

                    {/* show tooltips */}
                    <div className={`group-hover:block hidden rounded-[5px] absolute top-0 left-[46px] w-[200px] h-max z-[99999] border-[1px] ${theme === "dark" ? 'bg-[#242424] border-[#545454]' : 'bg-[#f2f2f2] border-[#E6E6E6]'}`}>
                        {/* right arrow */}
                        <span className='absolute -left-[12px] top-[8px]'>
                            <BsFillCaretLeftFill size={18} className={`${theme === "dark" ? 'text-[#545454]' : 'text-[#f2f2f2]'}`} />
                        </span>
                        {/* list */}
                        <ul className='w-full flex flex-col gap-1'>
                            {
                                SubMenuList.map((ele) => {
                                    return (
                                        <li onClick={() => setActiveTabs(ele.id)} key={ele.id} className={`w-auto whitespace-nowrap ${activeTabs === ele.id ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#f2f2f2]'}`} text-left pl-[30px] rounded py-[5px] lg:text-[14px] text-[12px]`}>
                                            {ele.list}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {/* submenu */}
                    <div className='w-full'>
                        {
                            submenu_5 && !isOpen &&
                            (
                                <>
                                    <ul className='w-full mt-[0.4rem] flex flex-col gap-1'>
                                        {
                                            SubMenuList.map((ele) => {
                                                return (
                                                    <li onClick={() => setActiveTabs(ele.id)} key={ele.id} className={`w-auto whitespace-nowrap ${activeTabs === ele.id ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#f2f2f2]'}`} text-left pl-[30px] rounded py-[5px] lg:text-[14px] text-[12px]`}>{ele.list}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </>
                            )
                        }
                    </div>
                </button>

                <button type='button' className={`flex flex-col ${isOpen ? 'justify-center group' : 'justify-between'} items-center w-full mb-[4px] relative`}>
                    <div onClick={() => setSubmenu_6(!submenu_6)} className={`flex items-center ${isOpen ? 'justify-center' : 'justify-between'} w-full`}>
                        <div className={`h-[32px] flex items-center gap-[8px]`}>
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.16667 0.5H13.8333C14.2754 0.5 14.6993 0.675595 15.0118 0.988155C15.3244 1.30072 15.5 1.72464 15.5 2.16667V13.8333C15.4987 14.275 15.3227 14.6981 15.0104 15.0104C14.6981 15.3227 14.275 15.4987 13.8333 15.5H2.16667C1.72464 15.5 1.30072 15.3244 0.988155 15.0118C0.675595 14.6993 0.5 14.2754 0.5 13.8333V2.16667C0.5 1.72464 0.675595 1.30072 0.988155 0.988155C1.30072 0.675595 1.72464 0.5 2.16667 0.5ZM2.16667 13H13.8333V2.99998H2.16667V13Z" fill={`${theme === "dark" ? 'white' : '#0B0B0C'}`} />
                                    <path d="M11.75 8.75H4.25V7.25H11.75V8.75Z" fill={`${theme === "dark" ? 'white' : '#0B0B0C'}`} />
                                </svg>
                            </span>
                            <span className={`capitalize ${isOpen ? 'hidden' : ''} lg:text-[16px] text-[14px] `}>CRM</span>
                        </div>
                        {
                            !isOpen && (
                                <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${submenu_6 === true && ('rotate-180 transition-all')} transition-all`} />
                            )
                        }
                    </div>

                    {/* show tooltips */}
                    <div className={`group-hover:block hidden rounded-[5px] absolute top-0 left-[46px] w-[200px] h-max z-[99999] border-[1px] ${theme === "dark" ? 'bg-[#242424] border-[#545454]' : 'bg-[#f2f2f2] border-[#E6E6E6]'}`}>
                        {/* right arrow */}
                        <span className='absolute -left-[12px] top-[8px]'>
                            <BsFillCaretLeftFill size={18} className={`${theme === "dark" ? 'text-[#545454]' : 'text-[#f2f2f2]'}`} />
                        </span>
                        {/* list */}
                        <ul className='w-full flex flex-col gap-1'>
                            {
                                SubMenuList.map((ele) => {
                                    return (
                                        <li onClick={() => setActiveTabs(ele.id)} key={ele.id} className={`w-auto whitespace-nowrap ${activeTabs === ele.id ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#f2f2f2]'}`} text-left pl-[30px] rounded py-[5px] lg:text-[14px] text-[12px]`}>
                                            {ele.list}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {/* submenu */}
                    <div className='w-full'>
                        {
                            submenu_6 && !isOpen &&
                            (
                                <>
                                    <ul className='w-full mt-[0.4rem] flex flex-col gap-1'>
                                        {
                                            SubMenuList.map((ele) => {
                                                return (
                                                    <li onClick={() => setActiveTabs(ele.id)} key={ele.id} className={`w-auto whitespace-nowrap ${activeTabs === ele.id ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#f2f2f2]'}`} text-left pl-[30px] rounded py-[5px] lg:text-[14px] text-[12px]`}>{ele.list}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </>
                            )
                        }
                    </div>
                </button>

                <button type='button' className={`flex flex-col ${isOpen ? 'justify-center group' : 'justify-between'} items-center w-full mb-[4px] relative`}>
                    <div onClick={() => setSubmenu_7(!submenu_7)} className={`flex items-center ${isOpen ? 'justify-center' : 'justify-between'} w-full`}>
                        <div className={`h-[32px] flex items-center gap-[8px]`}>
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_6411_4811" fill={`${theme === "dark" ? 'white' : '#0B0B0C'}`}>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.76398 3.83323C0.939867 5.06659 0.5 6.51664 0.5 8C0.5 9.98912 1.29018 11.8968 2.6967 13.3033C4.10322 14.7098 6.01087 15.5 8 15.5C9.48336 15.5 10.9334 15.0601 12.1668 14.236C13.4001 13.4119 14.3614 12.2406 14.9291 10.8701C15.4967 9.49968 15.6453 7.99168 15.3559 6.53682C15.0665 5.08197 14.3522 3.7456 13.3033 2.6967C12.2544 1.64781 10.918 0.933503 9.46317 0.644114C8.00832 0.354725 6.50032 0.50325 5.12987 1.07091C3.75943 1.63856 2.58809 2.59986 1.76398 3.83323ZM7.24597 4.295H5.45703V3.5H10.707V4.289H9.30397C9.59009 4.58675 9.77187 5.0045 9.82437 5.588H10.707V6.37625H9.81322C9.66687 7.556 8.91284 8.6495 7.39297 8.663H6.83187L9.7535 12.5H8.36881L5.45703 8.65625V7.6685H7.28665C8.08203 7.6685 8.64312 7.25075 8.77175 6.37625H5.45703V5.588H8.77175C8.63722 4.72625 8.04659 4.295 7.24597 4.295Z" />
                                    </mask>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.76398 3.83323C0.939867 5.06659 0.5 6.51664 0.5 8C0.5 9.98912 1.29018 11.8968 2.6967 13.3033C4.10322 14.7098 6.01087 15.5 8 15.5C9.48336 15.5 10.9334 15.0601 12.1668 14.236C13.4001 13.4119 14.3614 12.2406 14.9291 10.8701C15.4967 9.49968 15.6453 7.99168 15.3559 6.53682C15.0665 5.08197 14.3522 3.7456 13.3033 2.6967C12.2544 1.64781 10.918 0.933503 9.46317 0.644114C8.00832 0.354725 6.50032 0.50325 5.12987 1.07091C3.75943 1.63856 2.58809 2.59986 1.76398 3.83323ZM7.24597 4.295H5.45703V3.5H10.707V4.289H9.30397C9.59009 4.58675 9.77187 5.0045 9.82437 5.588H10.707V6.37625H9.81322C9.66687 7.556 8.91284 8.6495 7.39297 8.663H6.83187L9.7535 12.5H8.36881L5.45703 8.65625V7.6685H7.28665C8.08203 7.6685 8.64312 7.25075 8.77175 6.37625H5.45703V5.588H8.77175C8.63722 4.72625 8.04659 4.295 7.24597 4.295Z" fill={`${theme === "dark" ? 'white' : '#0B0B0C'}`} />
                                    <path d="M1.76398 3.83323L2.59545 4.3888L1.76398 3.83323ZM2.6967 13.3033L1.98959 14.0104H1.98959L2.6967 13.3033ZM14.9291 10.8701L14.0052 10.4874V10.4874L14.9291 10.8701ZM15.3559 6.53682L16.3367 6.34173V6.34173L15.3559 6.53682ZM13.3033 2.6967L14.0104 1.9896V1.98959L13.3033 2.6967ZM9.46317 0.644114L9.65827 -0.336672L9.46317 0.644114ZM5.45703 4.295H4.45703V5.295H5.45703V4.295ZM5.45703 3.5V2.5H4.45703V3.5H5.45703ZM10.707 3.5H11.707V2.5H10.707V3.5ZM10.707 4.289V5.289H11.707V4.289H10.707ZM9.30397 4.289V3.289H6.95613L8.58292 4.98189L9.30397 4.289ZM9.82437 5.588L8.8284 5.67761L8.91031 6.588H9.82437V5.588ZM10.707 5.588H11.707V4.588H10.707V5.588ZM10.707 6.37625V7.37625H11.707V6.37625H10.707ZM9.81322 6.37625V5.37625H8.9296L8.82082 6.25315L9.81322 6.37625ZM7.39297 8.663V9.66304L7.40185 9.66296L7.39297 8.663ZM6.83187 8.663V7.663H4.81354L6.03626 9.2688L6.83187 8.663ZM9.7535 12.5V13.5H11.7718L10.5491 11.8942L9.7535 12.5ZM8.36881 12.5L7.5717 13.1038L7.87181 13.5H8.36881V12.5ZM5.45703 8.65625H4.45703V8.99225L4.65992 9.26009L5.45703 8.65625ZM5.45703 7.6685V6.6685H4.45703V7.6685H5.45703ZM8.77175 6.37625L9.7611 6.52177L9.92959 5.37625H8.77175V6.37625ZM5.45703 6.37625H4.45703V7.37625H5.45703V6.37625ZM5.45703 5.588V4.588H4.45703V5.588H5.45703ZM8.77175 5.588V6.588H9.93997L9.75978 5.43375L8.77175 5.588ZM1.5 8C1.5 6.71442 1.88122 5.45771 2.59545 4.3888L0.932508 3.27766C-0.00148386 4.67547 -0.5 6.31886 -0.5 8H1.5ZM3.40381 12.5962C2.18482 11.3772 1.5 9.72391 1.5 8H-0.5C-0.5 10.2543 0.395533 12.4163 1.98959 14.0104L3.40381 12.5962ZM8 14.5C6.27609 14.5 4.62279 13.8152 3.40381 12.5962L1.98959 14.0104C3.58365 15.6045 5.74566 16.5 8 16.5V14.5ZM11.6112 13.4046C10.5423 14.1188 9.28558 14.5 8 14.5V16.5C9.68114 16.5 11.3245 16.0015 12.7223 15.0675L11.6112 13.4046ZM14.0052 10.4874C13.5132 11.6752 12.6801 12.6903 11.6112 13.4046L12.7223 15.0675C14.1202 14.1335 15.2096 12.806 15.853 11.2528L14.0052 10.4874ZM14.3751 6.73191C14.6259 7.99279 14.4972 9.29972 14.0052 10.4874L15.853 11.2528C16.4963 9.69964 16.6646 7.99057 16.3367 6.34173L14.3751 6.73191ZM12.5962 3.40381C13.5052 4.31285 14.1243 5.47104 14.3751 6.73191L16.3367 6.34173C16.0087 4.6929 15.1991 3.17834 14.0104 1.9896L12.5962 3.40381ZM9.26808 1.6249C10.529 1.8757 11.6871 2.49477 12.5962 3.40381L14.0104 1.98959C12.8217 0.800849 11.3071 -0.00869721 9.65827 -0.336672L9.26808 1.6249ZM5.51256 1.99479C6.70028 1.50282 8.00721 1.3741 9.26808 1.6249L9.65827 -0.336672C8.00943 -0.664646 6.30036 -0.496318 4.74719 0.147027L5.51256 1.99479ZM2.59545 4.3888C3.30968 3.31988 4.32484 2.48676 5.51256 1.99479L4.74719 0.147027C3.19402 0.790372 1.8665 1.87984 0.932508 3.27766L2.59545 4.3888ZM5.45703 5.295H7.24597V3.295H5.45703V5.295ZM4.45703 3.5V4.295H6.45703V3.5H4.45703ZM10.707 2.5H5.45703V4.5H10.707V2.5ZM11.707 4.289V3.5H9.70703V4.289H11.707ZM9.30397 5.289H10.707V3.289H9.30397V5.289ZM10.8203 5.49839C10.7527 4.74686 10.5051 4.09568 10.025 3.59611L8.58292 4.98189C8.6751 5.07782 8.79101 5.26214 8.8284 5.67761L10.8203 5.49839ZM10.707 4.588H9.82437V6.588H10.707V4.588ZM11.707 6.37625V5.588H9.70703V6.37625H11.707ZM9.81322 7.37625H10.707V5.37625H9.81322V7.37625ZM7.40185 9.66296C8.42305 9.65389 9.25554 9.27149 9.84713 8.64152C10.4201 8.0314 10.7126 7.24955 10.8056 6.49935L8.82082 6.25315C8.76754 6.68269 8.60983 7.03747 8.3892 7.27242C8.18722 7.4875 7.88276 7.65861 7.38408 7.66304L7.40185 9.66296ZM6.83187 9.663H7.39297V7.663H6.83187V9.663ZM10.5491 11.8942L7.62748 8.05719L6.03626 9.2688L8.95788 13.1058L10.5491 11.8942ZM8.36881 13.5H9.7535V11.5H8.36881V13.5ZM4.65992 9.26009L7.5717 13.1038L9.16592 11.8962L6.25414 8.05241L4.65992 9.26009ZM4.45703 7.6685V8.65625H6.45703V7.6685H4.45703ZM7.28665 6.6685H5.45703V8.6685H7.28665V6.6685ZM7.78239 6.23073C7.74584 6.47921 7.6671 6.55864 7.63798 6.58298C7.60394 6.61143 7.51097 6.6685 7.28665 6.6685V8.6685C7.85771 8.6685 8.44298 8.51669 8.92049 8.11764C9.40291 7.71448 9.66903 7.14778 9.7611 6.52177L7.78239 6.23073ZM5.45703 7.37625H8.77175V5.37625H5.45703V7.37625ZM4.45703 5.588V6.37625H6.45703V5.588H4.45703ZM8.77175 4.588H5.45703V6.588H8.77175V4.588ZM7.24597 5.295C7.46799 5.295 7.57731 5.35312 7.62702 5.39362C7.67018 5.42878 7.7481 5.51412 7.78372 5.74224L9.75978 5.43375C9.66086 4.80012 9.3762 4.23896 8.89026 3.84307C8.41087 3.4525 7.82457 3.295 7.24597 3.295V5.295Z" fill={`${theme === "dark" ? 'white' : '#0B0B0C'}`} mask="url(#path-1-inside-1_6411_4811)" />
                                </svg>
                            </span>
                            <span className={`capitalize ${isOpen ? 'hidden' : ''} lg:text-[16px] text-[14px] `}>Finance</span>
                        </div>
                        {
                            !isOpen && (
                                <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${submenu_7 === true && ('rotate-180 transition-all')} transition-all`} />
                            )
                        }
                    </div>

                    {/* show tooltips */}
                    <div className={`group-hover:block hidden rounded-[5px] absolute top-0 left-[46px] w-[200px] h-max z-[99999] border-[1px] ${theme === "dark" ? 'bg-[#242424] border-[#545454]' : 'bg-[#f2f2f2] border-[#E6E6E6]'}`}>
                        {/* right arrow */}
                        <span className='absolute -left-[12px] top-[8px]'>
                            <BsFillCaretLeftFill size={18} className={`${theme === "dark" ? 'text-[#545454]' : 'text-[#f2f2f2]'}`} />
                        </span>
                        {/* list */}
                        <ul className='w-full flex flex-col gap-1'>
                            {
                                SubMenuList.map((ele) => {
                                    return (
                                        <li onClick={() => setActiveTabs(ele.id)} key={ele.id} className={`w-auto whitespace-nowrap ${activeTabs === ele.id ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#f2f2f2]'}`} text-left pl-[30px] rounded py-[5px] lg:text-[14px] text-[12px]`}>
                                            {ele.list}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {/* submenu */}
                    <div className='w-full'>
                        {
                            submenu_7 && !isOpen &&
                            (
                                <>
                                    <ul className='w-full mt-[0.4rem] flex flex-col gap-1'>
                                        {
                                            SubMenuList.map((ele) => {
                                                return (
                                                    <li onClick={() => setActiveTabs(ele.id)} key={ele.id} className={`w-auto whitespace-nowrap ${activeTabs === ele.id ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#f2f2f2]'}`} text-left pl-[30px] rounded py-[5px] lg:text-[14px] text-[12px]`}>{ele.list}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </>
                            )
                        }
                    </div>
                </button>

                <button type='button' className={`flex flex-col ${isOpen ? 'justify-center group' : 'justify-between'} items-center w-full mb-[4px] relative`}>
                    <div onClick={() => setSubmenu_8(!submenu_8)} className={`flex items-center ${isOpen ? 'justify-center' : 'justify-between'} w-full`}>
                        <div className={`h-[32px] flex items-center gap-[8px]`}>
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8 0.5C6.51664 0.5 5.06659 0.939867 3.83323 1.76398C2.59986 2.58809 1.63856 3.75943 1.07091 5.12987C0.50325 6.50032 0.354725 8.00832 0.644114 9.46318C0.933503 10.918 1.64781 12.2544 2.6967 13.3033C3.7456 14.3522 5.08197 15.0665 6.53683 15.3559C7.99168 15.6453 9.49968 15.4968 10.8701 14.9291C12.2406 14.3614 13.4119 13.4001 14.236 12.1668C15.0601 10.9334 15.5 9.48336 15.5 8C15.5 6.01088 14.7098 4.10322 13.3033 2.6967C11.8968 1.29018 9.98913 0.5 8 0.5ZM10.7073 5.25489C10.9935 5.25489 11.2734 5.33978 11.5114 5.49883C11.7495 5.65789 11.935 5.88396 12.0446 6.14845C12.1541 6.41295 12.1828 6.70399 12.1269 6.98478C12.0711 7.26557 11.9332 7.52349 11.7308 7.72592C11.5284 7.92836 11.2704 8.06622 10.9896 8.12207C10.7089 8.17793 10.4178 8.14926 10.1533 8.0397C9.88883 7.93014 9.66276 7.74461 9.50371 7.50657C9.34465 7.26853 9.25976 6.98868 9.25976 6.70239C9.25926 6.51216 9.29637 6.32371 9.36893 6.14787C9.4415 5.97203 9.54811 5.81226 9.68262 5.67775C9.81713 5.54323 9.9769 5.43663 10.1527 5.36406C10.3286 5.29149 10.517 5.25439 10.7073 5.25489ZM7.19085 4.36812C6.89977 4.17363 6.55756 4.06982 6.20749 4.06982C5.7383 4.07062 5.28855 4.25735 4.95678 4.58912C4.62502 4.92089 4.43828 5.37063 4.43749 5.83982C4.43749 6.1899 4.5413 6.53211 4.73579 6.82318C4.93028 7.11426 5.20671 7.34112 5.53014 7.47509C5.85356 7.60906 6.20945 7.64411 6.5528 7.57581C6.89614 7.50752 7.21153 7.33894 7.45907 7.0914C7.7066 6.84386 7.87518 6.52848 7.94348 6.18513C8.01177 5.84179 7.97672 5.4859 7.84275 5.16247C7.70879 4.83905 7.48192 4.56261 7.19085 4.36812ZM6.20801 10.9177V13.7302C5.32136 13.4508 4.51167 12.9694 3.84271 12.3239C3.17376 11.6783 2.66381 10.8863 2.35302 10.0102C3.14052 9.17017 5.10551 8.74267 6.20801 8.74267C6.68714 8.75279 7.16425 8.80804 7.63301 8.90767C7.22694 9.0696 6.87637 9.3455 6.62353 9.70213C6.3707 10.0588 6.22639 10.4809 6.20801 10.9177ZM7.40672 13.9698C7.60348 13.9912 7.80131 14.0012 7.99922 13.9998C9.20608 13.9976 10.3843 13.6323 11.3808 12.9515C12.3773 12.2707 13.1459 11.3058 13.5867 10.1823C12.7297 9.62374 11.7297 9.32427 10.7067 9.31982C9.61172 9.31982 7.40672 9.85232 7.40672 10.9173V13.9698Z" fill={`${theme === "dark" ? 'white' : '#0B0B0C'}`} />
                                </svg>
                            </span>
                            <span className={`capitalize ${isOpen ? 'hidden' : ''} lg:text-[16px] text-[14px] `}>HR</span>
                        </div>
                        {
                            !isOpen && (
                                <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${submenu_8 === true && ('rotate-180 transition-all')} transition-all`} />
                            )
                        }
                    </div>

                    {/* show tooltips */}
                    <div className={`group-hover:block hidden rounded-[5px] absolute top-0 left-[46px] w-[200px] h-max z-[99999] border-[1px] ${theme === "dark" ? 'bg-[#242424] border-[#545454]' : 'bg-[#f2f2f2] border-[#E6E6E6]'}`}>
                        {/* right arrow */}
                        <span className='absolute -left-[12px] top-[8px]'>
                            <BsFillCaretLeftFill size={18} className={`${theme === "dark" ? 'text-[#545454]' : 'text-[#f2f2f2]'}`} />
                        </span>
                        {/* list */}
                        <ul className='w-full flex flex-col gap-1'>
                            {
                                SubMenuList.map((ele) => {
                                    return (
                                        <li onClick={() => setActiveTabs(ele.id)} key={ele.id} className={`w-auto whitespace-nowrap ${activeTabs === ele.id ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#f2f2f2]'}`} text-left pl-[30px] rounded py-[5px] lg:text-[14px] text-[12px]`}>
                                            {ele.list}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {/* submenu */}
                    <div className='w-full'>
                        {
                            submenu_8 && !isOpen &&
                            (
                                <>
                                    <ul className='w-full mt-[0.4rem] flex flex-col gap-1'>
                                        {
                                            SubMenuList.map((ele) => {
                                                return (
                                                    <li onClick={() => setActiveTabs(ele.id)} key={ele.id} className={`w-auto whitespace-nowrap ${activeTabs === ele.id ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#f2f2f2]'}`} text-left pl-[30px] rounded py-[5px] lg:text-[14px] text-[12px]`}>{ele.list}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </>
                            )
                        }
                    </div>
                </button>

                <button type='button' className={`flex flex-col ${isOpen ? 'justify-center group' : 'justify-between'} items-center w-full mb-[4px] relative`}>
                    <div onClick={() => setSubmenu_9(!submenu_9)} className={`flex items-center ${isOpen ? 'justify-center' : 'justify-between'} w-full`}>
                        <div className={`h-[32px] flex items-center gap-[8px]`}>
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1667 7.16667C12.4459 7.17059 12.7245 7.19566 13 7.24167V3.225L6.75 0.5L0.5 3.225V7.31667C0.504747 9.17617 1.11837 10.983 2.24703 12.4608C3.3757 13.9386 4.9573 15.006 6.75 15.5C7.20762 15.3887 7.65397 15.2352 8.08333 15.0417C7.55422 14.2939 7.24105 13.415 7.17814 12.5012C7.11523 11.5873 7.30499 10.6738 7.72665 9.86058C8.1483 9.04738 8.78559 8.36589 9.56873 7.89074C10.3519 7.41558 11.2507 7.16508 12.1667 7.16667Z" fill={`${pathname === adminCustomer ? '#FF3E5B' : `${theme === "dark" ? 'white' : '#0B0B0C'}`}`} />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.1666 8.83325C11.5073 8.83325 10.8628 9.02875 10.3147 9.39502C9.76652 9.76129 9.33928 10.2819 9.08699 10.891C8.8347 11.5001 8.76869 12.1703 8.8973 12.8169C9.02592 13.4635 9.34339 14.0574 9.80956 14.5236C10.2757 14.9898 10.8697 15.3073 11.5163 15.4359C12.1629 15.5645 12.8331 15.4985 13.4422 15.2462C14.0513 14.9939 14.5719 14.5666 14.9382 14.0185C15.3044 13.4703 15.4999 12.8259 15.4999 12.1666C15.4999 11.2825 15.1487 10.4347 14.5236 9.80956C13.8985 9.18444 13.0506 8.83325 12.1666 8.83325ZM12.1657 9.98313C12.4129 9.98423 12.6496 10.0829 12.8244 10.2577C12.9992 10.4325 13.0979 10.6693 13.099 10.9165C13.0966 11.1633 12.9975 11.3993 12.823 11.5738C12.6485 11.7483 12.4125 11.8474 12.1657 11.8498C11.9189 11.8474 11.6829 11.7483 11.5083 11.5738C11.3338 11.3993 11.2347 11.1633 11.2323 10.9165C11.2334 10.6693 11.3321 10.4325 11.5069 10.2577C11.6817 10.0829 11.9185 9.98423 12.1657 9.98313ZM11.1132 14.2002C11.4383 14.37 11.7996 14.4585 12.1664 14.4582C12.5331 14.4585 12.8945 14.37 13.2196 14.2002C13.5447 14.0304 13.8238 13.7844 14.0331 13.4832C13.9914 12.8832 12.7747 12.5832 12.1664 12.5832C11.5581 12.5832 10.3414 12.8832 10.2997 13.4832C10.509 13.7844 10.7881 14.0304 11.1132 14.2002Z" fill={`${pathname === adminCustomer ? '#FF3E5B' : `${theme === "dark" ? 'white' : '#0B0B0C'}`}`} />
                                </svg>
                            </span>
                            <span className={`capitalize ${isOpen ? 'hidden' : ''} lg:text-[16px] text-[14px] ${pathname === adminCustomer && 'text-[#FF3E5B]'} `}>Admin</span>
                        </div>
                        {
                            !isOpen && (
                                <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${submenu_9 === true && ('rotate-180 transition-all')} transition-all`} />
                            )
                        }
                    </div>

                    {/* show tooltips */}
                    <div className={`group-hover:block hidden rounded-[5px] absolute top-0 left-[46px] w-[200px] h-max z-[99999] border-[1px] ${theme === "dark" ? 'bg-[#242424] border-[#545454]' : 'bg-[#f2f2f2] border-[#E6E6E6]'}`}>
                        {/* right arrow */}
                        <span className='absolute -left-[12px] top-[8px]'>
                            <BsFillCaretLeftFill size={18} className={`${theme === "dark" ? 'text-[#545454]' : 'text-[#f2f2f2]'}`} />
                        </span>
                        {/* list */}
                        <ul className='w-full mt-[0.4rem] flex flex-col gap-1'>
                            <ul className='w-full mt-[0.4rem] flex flex-col gap-1'>
                                {/* ${pathname === adminCustomer && `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-[#F2F2F2]'}`} */}
                                <li className={`w-auto whitespace-nowrap ${partsTabs ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? `${pathname === adminCustomer ? 'text-[#FF3E5B] bg-[#0B0B0C]' : 'text-white hover:bg-[#0B0B0C]'}` : `${pathname === adminCustomer ? 'text-[#FF3E5B] bg-[#F2F2F2]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`}`}  text-left pl-[30px] pr-[10px] rounded py-[5px] text-[12px]`}>
                                    <div onClick={() => goToAdminCustomerPage()} className={`w-full flex justify-between items-center`}>
                                        <span>Customer Master</span>
                                        {/* <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${miniTabsOpen === true && ('rotate-180 transition-all')} transition-all`} /> */}
                                    </div>
                                </li>

                                <li className={`w-auto whitespace-nowrap ${partsTabs ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`} text-left pl-[30px] pr-[10px] rounded py-[5px] text-[12px]`}>
                                    <div className='w-full flex justify-between items-center'>
                                        <span>List</span>
                                        {/* <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${miniTabsOpen === true && ('rotate-180 transition-all')} transition-all`} /> */}
                                    </div>
                                </li>


                                <li className={`w-auto whitespace-nowrap ${partsTabs ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`} text-left pl-[30px] pr-[10px] rounded py-[5px] text-[12px]`}>
                                    <div className='w-full flex justify-between items-center'>
                                        <span>List</span>
                                        {/* <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${miniTabsOpen === true && ('rotate-180 transition-all')} transition-all`} /> */}
                                    </div>
                                </li>


                                <li className={`w-auto whitespace-nowrap ${partsTabs ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`} text-left pl-[30px] pr-[10px] rounded py-[5px] text-[12px]`}>
                                    <div className='w-full flex justify-between items-center'>
                                        <span>List</span>
                                        {/* <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${miniTabsOpen === true && ('rotate-180 transition-all')} transition-all`} /> */}
                                    </div>
                                </li>
                            </ul>
                        </ul>
                    </div>

                    {/* submenu */}
                    <div className='w-full'>
                        {
                            submenu_9 && !isOpen &&
                            (
                                <>
                                    <ul className='w-full mt-[0.4rem] flex flex-col gap-1'>
                                        <ul className='w-full mt-[0.4rem] flex flex-col gap-1'>
                                            {/* ${pathname === adminCustomer && `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-[#F2F2F2]'}`} */}
                                            <li className={`w-auto whitespace-nowrap ${partsTabs ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? `${pathname === adminCustomer ? 'text-[#FF3E5B] bg-[#0B0B0C]' : 'text-white hover:bg-[#0B0B0C]'}` : `${pathname === adminCustomer ? 'text-[#FF3E5B] bg-[#F2F2F2]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`}`}  text-left pl-[30px] pr-[10px] rounded py-[5px] text-[12px]`}>
                                                <div onClick={() => goToAdminCustomerPage()} className={`w-full flex justify-between items-center`}>
                                                    <span>Customer Master</span>
                                                    {/* <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${miniTabsOpen === true && ('rotate-180 transition-all')} transition-all`} /> */}
                                                </div>
                                            </li>

                                            <li className={`w-auto whitespace-nowrap ${partsTabs ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`} text-left pl-[30px] pr-[10px] rounded py-[5px] text-[12px]`}>
                                                <div className='w-full flex justify-between items-center'>
                                                    <span>List</span>
                                                    {/* <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${miniTabsOpen === true && ('rotate-180 transition-all')} transition-all`} /> */}
                                                </div>
                                            </li>


                                            <li className={`w-auto whitespace-nowrap ${partsTabs ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`} text-left pl-[30px] pr-[10px] rounded py-[5px] text-[12px]`}>
                                                <div className='w-full flex justify-between items-center'>
                                                    <span>List</span>
                                                    {/* <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${miniTabsOpen === true && ('rotate-180 transition-all')} transition-all`} /> */}
                                                </div>
                                            </li>


                                            <li className={`w-auto whitespace-nowrap ${partsTabs ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-[#F2F2F2]'}`} text-left pl-[30px] pr-[10px] rounded py-[5px] text-[12px]`}>
                                                <div className='w-full flex justify-between items-center'>
                                                    <span>List</span>
                                                    {/* <BsChevronDown size={18} className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${miniTabsOpen === true && ('rotate-180 transition-all')} transition-all`} /> */}
                                                </div>
                                            </li>
                                        </ul>
                                    </ul>
                                </>
                            )
                        }
                    </div>
                </button>
            </div>
        </>
    )
}

export default NavTabs