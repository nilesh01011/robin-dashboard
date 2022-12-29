import React from 'react'

function Footer({ theme }) {
    return (
        <>
            <div className='w-full h-[32px] bg-[#333333] p-[6px] flex items-center justify-center divide-x-[1px] divide-[#525252] lg:static fixed bottom-0 left-0'>
                <span className='sm:px-[1.2rem] px-[0.6rem] sm:text-[12px] text-[10px] text-white'>TERMS OF USE</span>
                <span className='sm:px-[1.2rem] px-[0.6rem] text-[10px] text-white'>ABOUT US</span>
                <span className='sm:px-[1.2rem] px-[0.6rem] text-[10px] text-white'>DISCLAIMER</span>
                <span className='sm:px-[1.2rem] px-[0.6rem] text-[10px] text-white'>CONTACT US</span>
            </div>
        </>
    )
}

export default Footer