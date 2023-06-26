import React, { useEffect, useState } from 'react'
import NewDesign from './NewDesign'

function ContentBody({ theme }) {
    const [addTooltip, setAddTooltip] = useState(false);
    const [isAnimation, setIsAnimation] = useState(false);
    const [isLeftSide, setIsLeftSide] = useState(false);

    useEffect(() => {
        const getTooltip = localStorage.getItem('showTooltip');


        if (getTooltip === 'true') {
            setAddTooltip(true);
            setIsAnimation(true)
        } else {
            setAddTooltip(false);
            setIsAnimation(false);
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsAnimation(false);
            setIsLeftSide(true);
            localStorage.removeItem('showTooltip');
        }, 3000);
    }, [])

    return (
        <>
            <div className='w-full h-full 1x1:pb-[15px] relative'>
                {/* tooltips */}
                {
                    addTooltip === true &&
                    <div className='fixed top-[16px] right-[16px]'>
                        <div className='relative'>
                            {/* ${isAnimation === true ? 'right-[5px]' : ''} */}
                            <div id={`${isAnimation === true ? 'right-to-left' : `${isLeftSide === true && 'left-to-right'}`}`} className={`absolute transition-all flex items-start gap-[11px] bg-[#D9FFDD] border-[1px] border-[#00A310] p-[11px_17px] rounded-[6px] z-50 w-[320px] h-[82px]`}>
                                {/* left side icons */}
                                <span>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6523 5.89392H11.7363C11.5371 5.89392 11.3476 5.98962 11.2304 6.15369L8.1601 10.4115L6.76947 8.48181C6.65229 8.3197 6.46479 8.22205 6.26361 8.22205H5.3476C5.22065 8.22205 5.14643 8.36658 5.22065 8.47009L7.65424 11.8451C7.71173 11.9253 7.78752 11.9907 7.87532 12.0358C7.96312 12.0809 8.06041 12.1045 8.15912 12.1045C8.25783 12.1045 8.35512 12.0809 8.44293 12.0358C8.53073 11.9907 8.60651 11.9253 8.66401 11.8451L12.7773 6.14197C12.8535 6.03845 12.7792 5.89392 12.6523 5.89392Z" fill="#00A310" />
                                        <path d="M9 0.25C4.16797 0.25 0.25 4.16797 0.25 9C0.25 13.832 4.16797 17.75 9 17.75C13.832 17.75 17.75 13.832 17.75 9C17.75 4.16797 13.832 0.25 9 0.25ZM9 16.2656C4.98828 16.2656 1.73438 13.0117 1.73438 9C1.73438 4.98828 4.98828 1.73438 9 1.73438C13.0117 1.73438 16.2656 4.98828 16.2656 9C16.2656 13.0117 13.0117 16.2656 9 16.2656Z" fill="#00A310" />
                                    </svg>
                                </span>
                                {/* right side contents */}
                                <div>
                                    {/* headers */}
                                    <div className='flex items-center justify-between w-full'>
                                        <h4 className='text-[#00A310] text-[14px] font-bold'>Order Placed Successfully</h4>

                                        <span onClick={() => setIsLeftSide(true)} className='cursor-pointer'>
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M4.11111 5L1.12698 2.01587C0.817392 1.70628 0.675533 1.56442 0.681213 1.42874C0.686016 1.31398 0.796351 1.20365 1 0.999999C1.20365 0.796349 1.31399 0.686014 1.42874 0.681211C1.56442 0.675531 1.70628 0.81739 2.01587 1.12698L5 4.11111L7.98413 1.12698C8.29372 0.817389 8.43558 0.67553 8.57126 0.68121C8.68601 0.686014 8.79635 0.796349 9 0.999998C9.20365 1.20365 9.31398 1.31398 9.31879 1.42874C9.32447 1.56442 9.18261 1.70628 8.87301 2.01587L5.88889 5L8.87302 7.98413C9.18261 8.29372 9.32447 8.43558 9.31879 8.57126C9.31399 8.68601 9.20365 8.79635 9 9C8.79635 9.20365 8.68602 9.31398 8.57126 9.31879C8.43558 9.32447 8.29372 9.18261 7.98413 8.87302L5 5.88889L2.01587 8.87301C1.70628 9.18261 1.56442 9.32447 1.42874 9.31879C1.31398 9.31398 1.20365 9.20365 0.999999 9C0.796349 8.79635 0.686014 8.68601 0.68121 8.57126C0.67553 8.43558 0.81739 8.29372 1.12698 7.98413L4.11111 5Z" fill="#00A310" />
                                            </svg>
                                        </span>
                                    </div>

                                    <p className='text-[12px] text-black'>
                                        The order for a "Brake Pad Kit" consisting of 5 units has been placed successfully.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {/* title */}
                <div className={`w-full border-b-[1px] ${theme === 'dark' ? 'border-[#635D5D]' : 'border-[#DEDEDE]'}`}>
                    <h1 className='pb-[8px] relative w-max flex items-center gap-[10px] font-semibold text-[18px]'>
                        HOME
                        {/* <span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.3289 14L7 11.2538L2.67105 14L3.81725 8.82L0 5.34154L5.03509 4.88923L7 0L8.96491 4.87846L14 5.33077L10.1827 8.80923L11.3289 14Z" fill="#FF3E5B" />
                            </svg>
                        </span> */}

                        {/* bottoms line */}
                        <span className='absolute bottom-0 left-0 bg-gradient-to-r from-[#FF3E5B] to-[#FFE1D8] w-full h-[4px] rounded'></span>
                    </h1>
                </div>

                {/* main content body h-[560px] overflow-scroll */}
                <div id="overFlowNone" className='w-full h-full flex my-[25px] items-start justify-between flex-wrap xl:flex-row'>
                    {/* <LeftContentBody theme={theme} />
                    <RightContentBody theme={theme} /> */}
                    <NewDesign theme={theme} />
                </div>

                {/* footer sections */}

                <div className='w-full lg:mt-[13px] mt-[35px] text-right'>
                    <span className={`${theme === "dark" ? 'text-[#B5B5B6]' : 'text-[#B5B5B6]'} text-[12px]`}>
                        Copyright © 2023 ROBIN.
                    </span>
                </div>
            </div>
        </>
    )
}

export default ContentBody