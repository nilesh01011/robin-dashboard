import React from 'react'

function Loading() {
    return (
        <>
            <div className='h-screen w-full overflow-hidden bg-no-repeat bg-cover' style={{ backgroundImage: 'url("./images/mainbg.png")' }}>
                <div className='flex flex-col h-full justify-between'>
                    {/* logo images */}
                    <div className='h-[30px] lg:ml-auto flex items-center justify-center mt-[25px] lg:pr-[25px]'>
                        <img src='./images/logo2.png' className='h-full w-[160px] lg:mx-none mx-auto' alt='logo-images' />
                    </div>
                    {/* loading animations */}
                    <div className='w-full h-full flex items-center justify-center'>
                        <div className='w-[400px] h-[60px] flex items-center gap-1 justify-center'>
                            <img src='./images/R.svg' className='h-[40px] w-[30px]' alt='logo-images' />
                            <img src='./images/O.svg' className='h-[40px] w-[30px]' alt='logo-images' />
                            <img src='./images/B_dark_theme.svg' className='h-[40px] w-[30px]' alt='logo-images' />
                            <img src='./images/i.svg' className='h-[40px] w-[20px]' alt='logo-images' />
                            <img src='./images/N.svg' className='h-[40px] w-[30px]' alt='logo-images' />
                        </div>
                    </div>
                    {/* bottom logo */}
                    <div className='w-full h-[80px] flex items-center justify-center'>
                        <img src='./images/adc.png' className='h-[50px] w-[70px] my-auto' alt='logo-images' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading