import React from 'react'

function NewsContent({ title, description, id, currentNews }) {
    return (
        <>
            {
                currentNews ? (
                    <div key={id} className='w-[290px] text-left mt-[12px] flex flex-col h-full'>
                        <div className='w-full'>
                            <span className='text-[14px] font-bold'>{title}</span>
                        </div>
                        <div className='w-full'>
                            <span className='text-[12px]'>{description}</span>
                        </div>
                        <div className='w-full mt-[12px]'>
                            <button type='button' className='h-[25px] rounded-[5px] text-[#FF3E5B] text-[14px] bg-white px-[8px]' style={{ border: `1px solid #DEDEDE` }}>Read more</button>
                        </div>
                    </div>
                ) : ('')

            }
        </>
    )
}

export default NewsContent