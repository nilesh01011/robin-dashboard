import React, { useState } from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

function UpcomingAccordion({ title, description, id, theme }) {
    const [show, setShow] = useState(false)
    return (
        <>
            {
                id && <div onClick={() => setShow(!show)} className={`items w-full overflow-hidden ${show ? 'h-max' : 'h-[35px]'} py-[10px]`}>
                    <div className={`w-[85%] flex items-center justify-between cursor-pointer`}>
                        <span className={`${theme === 'dark' ? 'text-white' : 'text-dark'} text-[13px] select-none`}>{title}</span>
                        <MdOutlineArrowForwardIos className={`${show ? 'rotate-[270deg] transition-all' : 'rotate-[90deg] transition-all'}`} size={15} />
                    </div>
                    {/* inner content */}
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