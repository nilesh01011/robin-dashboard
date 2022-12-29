import React, { useState } from 'react'
import { AiOutlineUp } from 'react-icons/ai'
import { dashboardNavTabs } from '../Data'

function NavTabs({ isOpen, theme }) {
    const [submenu, setSubmenu] = useState(false);

    return (
        <>
            <div className={`flex flex-col mt-3 gap-[4px] mb-6 z-10 relative`}>
                {
                    dashboardNavTabs.map((ele) => (
                        <button key={ele.id} type='button' className={`flex flex-col ${isOpen ? 'justify-center' : 'justify-between'} items-center w-full mb-[4px] relative`}>
                            <div onClick={() => ele.id === 1 ? setSubmenu(!submenu) : null} className={`flex items-center ${isOpen ? 'justify-center' : 'justify-between'} w-full ${theme === 'dark' ? `${ele.setDropdown ? 'text-[#FF3E5B]' : 'text-white'}` : `${ele.setDropdown ? 'text-[#FF3E5B]' : 'text-black'}`}`}>
                                <div className={`h-[32px] flex items-center gap-[8px]`}>
                                    {ele.icons}
                                    <span className={`capitalize ${isOpen ? 'hidden transition-all scale-0' : 'transition-all'} lg:text-[16px] text-[14px]`}>{ele.title}</span>
                                </div>
                                {ele.setDropdown && !isOpen && (
                                    <AiOutlineUp size={16} className={`text-[#FF3E5B] ${submenu && ('rotate-180 transition-all')} transition-all`} />
                                )
                                }
                            </div>
                            {/* submenu */}
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
                    ))
                }
            </div>
        </>
    )
}

export default NavTabs