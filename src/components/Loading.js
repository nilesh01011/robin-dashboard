import React, { useEffect, useState } from 'react'

function Loading() {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true)
        }, 2500)
    }, [])
    return (
        <>
            <div className='h-screen w-full overflow-hidden bg-no-repeat bg-cover' style={{ backgroundImage: 'url("./images/mainbg.png")' }}>
                <div className='flex flex-col h-full justify-between'>
                    {/* logo images */}
                    <div className='h-[40px] lg:ml-auto flex items-center justify-center mt-[25px] lg:pr-[25px]'>
                        <img src='./images/logo2.png' className='h-full w-[160px] lg:mx-none mx-auto' alt='logo-images' />
                    </div>
                    {/* loading animations */}
                    <div className='w-full h-full flex items-center justify-center'>
                        <div className='w-[400px] h-[80px] flex items-baseline justify-center'>
                            <img src='./images/R.svg' className={`${isLoading ? 'opacity-1' : 'opacity-0'} duration-400 transition-all h-[49px] w-[35px] mr-[0.25rem]`} alt='logo-images' />
                            <img src='./images/O.svg' className={`${isLoading ? 'opacity-1' : 'opacity-0'} duration-1000 transition-opacity h-[49px] w-[38px]`} alt='logo-images' />
                            <img src='./images/B_dark_theme.svg' className='h-[57px] w-[37px]' alt='logo-images' />
                            <img src='./images/i.svg' className={`${isLoading ? 'opacity-1' : 'opacity-0'} duration-[1500ms] transition-all h-[47px] w-[16px] mx-[0.25rem]`} alt='logo-images' />
                            <img src='./images/N.svg' className={`${isLoading ? 'opacity-1' : 'opacity-0'} duration-[2000ms] transition-all h-[47px] w-[35px]`} alt='logo-images' />
                        </div>
                    </div>
                    {/* bottom logo */}
                    <div className='w-full h-[100px] flex items-center justify-center'>
                        <img src='./images/adc.png' className='h-full w-[100px] my-auto' alt='logo-images' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading