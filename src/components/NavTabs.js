import React, { useState } from 'react'
import { AiOutlineUp } from 'react-icons/ai'
import { dashboardNavTabs } from '../Data'

function NavTabs({ isOpen, theme }) {
    const [submenu, setSubmenu] = useState(false);

    return (
        <>
            <div className={`flex flex-col items-center mt-3 mb-6`}>
                {
                    dashboardNavTabs.map((ele) => (
                        <button key={ele.id} type='button' className={`${isOpen ? 'justify-center' : 'justify-between'} flex flex-col w-full mb-[4px] relative`}>
                            <div onClick={() => ele.id === 1 ? setSubmenu(!submenu) : null} className={`flex items-center justify-between w-full ${theme === 'dark' ? `${ele.setDropdown ? 'text-[#FF3E5B]' : 'text-white'}` : `${ele.setDropdown ? 'text-[#FF3E5B]' : 'text-black'}`}`}>
                                <div className={`h-[32px] flex items-center gap-[14px]`}>
                                    {ele.icons}
                                    <span className={`capitalize ${isOpen ? 'hidden transition-all scale-0' : 'transition-all'} text-[14px]`}>{ele.title}</span>
                                </div>
                                {ele.setDropdown && !isOpen && (
                                    <AiOutlineUp size={16} className={`text-[#FF3E5B] ${submenu && ('rotate-180 transition-all')} transition-all`} />
                                )
                                }
                            </div>
                            {/* submenu */}
                            <div className='w-full'>
                                {ele.setDropdown && !submenu && !isOpen &&
                                    (
                                        <>
                                            <ul className='w-full'>
                                                {
                                                    ele.lists.map((el) => (
                                                        <>
                                                            <li key={el.id} className={`w-auto whitespace-nowrap ${isOpen && 'text-[#FF3E5B]'} ${theme === 'dark' ? `text-white hover:bg-[#0B0B0C] ${el.active && 'bg-[#0B0B0C]'}` : `text-[#342C2C] hover:bg-white ${el.active && 'bg-white'}`} text-left pl-[35px] rounded py-[5px] text-[13px]`}>{el.heading}</li>
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