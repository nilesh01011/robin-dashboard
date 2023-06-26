import React, { useEffect, useState } from 'react'

function Loading() {
    const [isLoading, setIsLoading] = useState(false);
    const [showB, setShowB] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true)
        }, 1500)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setShowB(true)
        }, 500)
    }, [])
    return (
        <>
            <div className='h-screen w-full overflow-hidden bg-no-repeat bg-cover' style={{ backgroundImage: 'url("./images/mainbg.png")' }}>
                <div className='flex flex-col h-full justify-between'>
                    {/* logo images */}
                    <div className='lg:h-[40px] h-[30px] 1x1:w-[220px] w-[160px] lg:ml-auto lg:mx-0 mx-auto flex items-center justify-center mt-[23px] lg:pr-[25px]'>
                        <img width={220} height={40} src='./Logo.svg' className='h-full w-full object-contain scale-[1.1]' alt='logo-images' />
                    </div>
                    {/* loading animations */}
                    <div className='w-full h-full flex items-center flex-col justify-center'>
                        <div className='w-[400px] h-[80px] flex items-baseline justify-center'>
                            <img src='./images/R.svg' className={`${isLoading ? 'opacity-1' : 'opacity-0'} duration-200 transition-opacity h-[49px] w-[35px] mr-[0.25rem]`} width={35} height={49} alt='logo-images' />
                            <img src='./images/O.svg' className={`${isLoading ? 'opacity-1' : 'opacity-0'} duration-1000 transition-opacity h-[49px] w-[38px]`} width={38} height={49} alt='logo-images' />
                            <img src='./images/B_dark_theme.svg' className={`${showB ? 'opacity-1' : 'opacity-0'} delay-800 h-[57px] transition-opacity w-[37px]`} width={37} height={57} alt='logo-images' />
                            <img src='/images/I.svg' className={`${isLoading ? 'opacity-1' : 'opacity-0'} duration-[1400ms] transition-opacity h-[47px] w-[16px] mx-[0.25rem]`} width={16} height={47} alt='logo-images' />
                            <img src='./images/N.svg' className={`${isLoading ? 'opacity-1' : 'opacity-0'} duration-[1900ms] transition-opacity h-[47px] w-[35px]`} width={35} height={47} alt='logo-images' />
                        </div>

                        <span className='w-[300px] h-[1px] animate-[scaling_2s_ease-out]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="319" height="3" viewBox="0 0 319 3" fill="none">
                                <line opacity="0.5" y1="1.5" x2="319" y2="1.5" stroke="url(#paint0_radial_625_2022)" strokeWidth="3" />
                                <defs>
                                    <radialGradient id="paint0_radial_625_2022" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(153.324 9.352) scale(134.763 2921.3)">
                                        <stop stopColor="white" />
                                        <stop offset="1" stopColor="white" stopOpacity="0" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </span>
                    </div>
                    {/* bottom logo */}
                    <div className='w-[100px] h-[100px] mx-auto mb-[30px]'>
                        <span className='text-[10px] text-white text-left w-full'>Powered by</span>
                        <img width={100} height={67} src='./images/adc.png' className='h-[67px] w-full object-contain my-auto' alt='logo-images' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading