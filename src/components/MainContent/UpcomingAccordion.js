import React, { useState } from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

function UpcomingAccordion({ title, description, id, theme, onlyone }) {
    const [show, setShow] = useState(false)
    return (
        <>
            {
                onlyone && <div className={`items w-full overflow-hidden ${show ? 'h-max' : 'h-[34px]'} py-[10px] ${id === 3 && 'pb-0'}`}>
                    <div onClick={() => setShow(!show)} className={`w-[90%] flex items-center gap-[20px] cursor-pointer`}>
                        <span className={`${theme === 'dark' ? `${show ? 'text-[#FF3E5B]' : 'text-white'}` : `${show ? 'text-[#FF3E5B]' : 'text-black'}`} text-[14px] select-none`}>{title}</span>
                        <MdOutlineArrowForwardIos className={`${show ? 'rotate-[270deg] transition-all' : 'rotate-[90deg] transition-all'}`} size={15} />
                    </div>
                    {
                        show &&
                        <div className='w-full h-max mt-[10px]'>
                            <p className={`text-[12px]`}>{description}</p>
                            <div className='w-full mt-[6px]'>
                                <button type='button' className='h-[25px] rounded-[5px] text-[#FF3E5B] text-[14px] bg-white px-[8px]' style={{ border: `1px solid #DEDEDE` }}>Read more</button>
                            </div>
                        </div>
                    }
                </div>
            }
        </>
    )
}

export default UpcomingAccordion