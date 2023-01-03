import React, { useState } from 'react'
import { AiFillCar } from 'react-icons/ai'
import { BiUserPin } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';
import { FaShapes } from 'react-icons/fa';
import { HiCurrencyRupee, HiUsers } from 'react-icons/hi';
import { MdAdminPanelSettings, MdStars } from 'react-icons/md';
// import { dashboardNavTabs } from '../Data'

function NavTabs({ isOpen, theme }) {
    const [submenu, setSubmenu] = useState(false);

    const SubMenuList = [
        {
            id: 1,
            list: 'Dashboard',
        },
        {
            id: 2,
            list: 'Terms and Conditions',
        },
        {
            id: 3,
            list: 'Manufacturer Hierarchy',
        },
        {
            id: 4,
            list: 'Customer Master',
        }
    ]

    const [activeTabs, setActiveTabs] = useState(1)

    return (
        <>
            <div className={`flex flex-col mt-3 1x1:gap-[8px] gap-[6px] mb-6 z-10 relative`}>
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
                    <div onClick={() => setSubmenu(!submenu)} className={`flex items-center ${isOpen ? 'justify-center' : 'justify-between'} w-full text-[#FF3E5B]`}>
                        <div className={`h-[32px] flex items-center gap-[8px]`}>
                            <MdStars className='text-[#FF3E5B]' size={22} />
                            <span className={`capitalize ${isOpen ? 'hidden' : 'transition-all'} lg:text-[16px] text-[14px] uppercase`}>FAVORITES</span>
                        </div>
                        {!isOpen && (
                            <BsChevronDown size={18} className={`text-[#FF3E5B] ${submenu && ('rotate-180 transition-all')} transition-all`} />
                        )
                        }
                    </div>
                    {/* submenu */}
                    <div className='w-full'>
                        {!submenu && !isOpen &&
                            (
                                <>
                                    <ul className='w-full'>
                                        {
                                            SubMenuList.map((ele) => {
                                                return (
                                                    <li onClick={() => setActiveTabs(ele.id)} key={ele.id} className={`w-auto whitespace-nowrap ${activeTabs === ele.id ? `text-[#FF3E5B] ${theme === 'dark' ? 'bg-[#0B0B0C]' : 'bg-white'}` : `${theme === 'dark' ? 'text-white hover:bg-[#0B0B0C]' : 'text-[#342C2C] hover:bg-white'}`} text-left pl-[30px] rounded py-[5px] lg:text-[14px] text-[12px]`}>{ele.list}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </>
                            )
                        }
                    </div>
                </button>

                <button type='button' className={`flex flex-col ${isOpen ? 'justify-center' : 'justify-between'} items-center w-full mb-[4px] relative`}>
                    <div className={`flex items-center ${isOpen ? 'justify-center' : 'justify-between'} w-full ${theme === 'dark' ? ` text-white` : `text-black`}`}>
                        <div className={`h-[32px] flex items-center gap-[8px]`}>
                            <BiUserPin size={22} />
                            <span className={`capitalize ${isOpen ? 'hidden' : 'transition-all'} lg:text-[16px] text-[14px] uppercase`}>PRE SALES</span>
                        </div>
                    </div>
                </button>

                <button type='button' className={`flex flex-col ${isOpen ? 'justify-center' : 'justify-between'} items-center w-full mb-[4px] relative`}>
                    <div className={`flex items-center ${isOpen ? 'justify-center' : 'justify-between'} w-full ${theme === 'dark' ? ` text-white` : `text-black`}`}>
                        <div className={`h-[32px] flex items-center gap-[8px]`}>
                            <AiFillCar size={22} />
                            <span className={`capitalize ${isOpen ? 'hidden' : 'transition-all'} lg:text-[16px] text-[14px] uppercase`}>SALES</span>
                        </div>
                    </div>
                </button>

                <button type='button' className={`flex flex-col ${isOpen ? 'justify-center' : 'justify-between'} items-center w-full mb-[4px] relative`}>
                    <div className={`flex items-center ${isOpen ? 'justify-center' : 'justify-between'} w-full ${theme === 'dark' ? ` text-white` : `text-black`}`}>
                        <div className={`h-[32px] flex items-center gap-[8px]`}>
                            <FaShapes size={20} />
                            <span className={`capitalize ${isOpen ? 'hidden' : 'transition-all'} lg:text-[16px] text-[14px] uppercase`}>PARTS</span>
                        </div>
                    </div>
                </button>

                <button type='button' className={`flex flex-col ${isOpen ? 'justify-center' : 'justify-between'} items-center w-full mb-[4px] relative`}>
                    <div className={`flex items-center ${isOpen ? 'justify-center' : 'justify-between'} w-full ${theme === 'dark' ? ` text-white` : `text-black`}`}>
                        <div className={`h-[32px] flex items-center gap-[8px]`}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 20 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.07239 4.37937C1.15671 5.74978 0.667969 7.36094 0.667969 9.00912C0.667969 11.2193 1.54594 13.3389 3.10875 14.9017C4.67155 16.4645 6.79116 17.3425 9.0013 17.3425C10.6495 17.3425 12.2606 16.8537 13.6311 15.938C15.0015 15.0224 16.0696 13.7209 16.7003 12.1981C17.331 10.6754 17.4961 8.99987 17.1745 7.38337C16.853 5.76686 16.0593 4.282 14.8939 3.11656C13.7284 1.95112 12.2436 1.15745 10.6271 0.835908C9.01055 0.514364 7.33499 0.679392 5.81227 1.31012C4.28956 1.94085 2.98807 3.00896 2.07239 4.37937ZM11.9185 13.0846L13.0852 11.918C13.1615 11.8401 13.2043 11.7354 13.2043 11.6263C13.2043 11.5172 13.1615 11.4125 13.0852 11.3346L10.2435 8.49297C10.4418 7.94282 10.4682 7.34535 10.319 6.7799C10.1698 6.21444 9.85208 5.70774 9.40812 5.32707C8.96416 4.94641 8.41492 4.70978 7.83331 4.64862C7.25171 4.58746 6.66526 4.70465 6.15182 4.98464L8.11016 6.93464L6.93516 8.10964L4.97682 6.1513C4.69684 6.66474 4.57965 7.25119 4.64081 7.83279C4.70197 8.4144 4.93859 8.96364 5.31926 9.4076C5.69992 9.85156 6.20662 10.1692 6.77208 10.3184C7.33754 10.4676 7.93501 10.4413 8.48516 10.243L11.3268 13.0846C11.3656 13.1237 11.4116 13.1547 11.4624 13.1758C11.5132 13.197 11.5677 13.2079 11.6227 13.2079C11.6777 13.2079 11.7321 13.197 11.7829 13.1758C11.8337 13.1547 11.8798 13.1237 11.9185 13.0846Z" fill={`${theme === 'dark' ? 'white' : 'black'}`} />
                                </svg>
                            </div>
                            <span className={`capitalize ${isOpen ? 'hidden' : 'transition-all'} lg:text-[16px] text-[14px] uppercase`}>SERVICE</span>
                        </div>
                    </div>
                </button>

                <button type='button' className={`flex flex-col ${isOpen ? 'justify-center' : 'justify-between'} items-center w-full mb-[4px] relative`}>
                    <div className={`flex items-center ${isOpen ? 'justify-center' : 'justify-between'} w-full ${theme === 'dark' ? ` text-white` : `text-black`}`}>
                        <div className={`h-[32px] flex items-center gap-[8px]`}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 20 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H15.8333C16.275 17.4987 16.6981 17.3227 17.0104 17.0104C17.3227 16.6981 17.4987 16.275 17.5 15.8333V4.16667C17.5 3.72464 17.3244 3.30072 17.0118 2.98816C16.6993 2.67559 16.2754 2.5 15.8333 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118ZM4.16797 15.834H15.8346V5.83398H4.16797V15.834Z" fill={`${theme === 'dark' ? 'white' : 'black'}`} />
                                    <path d="M14.1654 9.99967H5.83203V8.33301H14.1654V9.99967Z" fill={`${theme === 'dark' ? 'white' : 'black'}`} />
                                    <path d="M10.832 13.3337H5.83203V11.667H10.832V13.3337Z" fill={`${theme === 'dark' ? 'white' : 'black'}`} />
                                </svg>
                            </div>
                            <span className={`capitalize ${isOpen ? 'hidden' : 'transition-all'} lg:text-[16px] text-[14px] uppercase`}>CRM</span>
                        </div>
                    </div>
                </button>

                <button type='button' className={`flex flex-col ${isOpen ? 'justify-center' : 'justify-between'} items-center w-full mb-[4px] relative`}>
                    <div className={`flex items-center ${isOpen ? 'justify-center' : 'justify-between'} w-full ${theme === 'dark' ? ` text-white` : `text-black`}`}>
                        <div className={`h-[32px] flex items-center gap-[8px]`}>
                            <HiCurrencyRupee size={22} />
                            <span className={`capitalize ${isOpen ? 'hidden' : 'transition-all'} lg:text-[16px] text-[14px] uppercase`}>FINANCE</span>
                        </div>
                    </div>
                </button>

                <button type='button' className={`flex flex-col ${isOpen ? 'justify-center' : 'justify-between'} items-center w-full mb-[4px] relative`}>
                    <div className={`flex items-center ${isOpen ? 'justify-center' : 'justify-between'} w-full ${theme === 'dark' ? ` text-white` : `text-black`}`}>
                        <div className={`h-[32px] flex items-center gap-[8px]`}>
                            <HiUsers size={22} />
                            <span className={`capitalize ${isOpen ? 'hidden' : 'transition-all'} lg:text-[16px] text-[14px] uppercase`}>HR</span>
                        </div>
                    </div>
                </button>

                <button type='button' className={`flex flex-col ${isOpen ? 'justify-center' : 'justify-between'} items-center w-full mb-[4px] relative`}>
                    <div className={`flex items-center ${isOpen ? 'justify-center' : 'justify-between'} w-full ${theme === 'dark' ? ` text-white` : `text-black`}`}>
                        <div className={`h-[32px] flex items-center gap-[8px]`}>
                            <MdAdminPanelSettings size={22} />
                            <span className={`capitalize ${isOpen ? 'hidden' : 'transition-all'} lg:text-[16px] text-[14px] uppercase`}>ADMIN</span>
                        </div>
                    </div>
                </button>
            </div>
        </>
    )
}

export default NavTabs