import React from 'react'

function Footer({ theme }) {
    return (
        <>
            <div className='w-full h-[32px] bg-[#333333] p-[6px] flex items-center justify-center divide-x-[1px] divide-[#525252] lg:static fixed bottom-0 left-0'>
                <span className='px-[1.2rem] text-xs'>TERMS OF USE</span>
                <span className='px-[1.2rem] text-xs'>ABOUT US</span>
                <span className='px-[1.2rem] text-xs'>DISCLAIMER</span>
                <span className='px-[1.2rem] text-xs'>CONTACT US</span>
            </div>
        </>
    )
}

export default Footer