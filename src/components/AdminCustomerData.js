import React, { useState } from 'react'
import { data } from '../Data';
import TopNav from './MainContent/TopNav';
import AdminTableContent from './AdminTableContent';
import AdminMobileViewTable from './AdminMobileViewTable';
import AdminSidebarContent from './AdminSidebarContent';
import AdminCustomerTopNav from './AdminCustomerTopNav';

function AdminCustomerData({ theme }) {

    const [getUserData, setGetUserData] = useState([]);
    const [rotateIcon, setRotateIcon] = useState(false);

    const [isRightSideOpen, setIsRightSideOpen] = useState(false)

    const handleDateView = (id) => {
        if (id !== 0) {
            data.map((ele) => {
                if (ele.id === id) {
                    setGetUserData(ele);
                    setIsRightSideOpen(true)
                }
            })
        }
    }

    return (
        <div className={`w-full h-full ${theme === 'dark' ? 'text-white' : 'text-black'} xl:pl-[32px] xs:pl-[20px] xs:pr-[20px] px-[10px] 1x1:pb-[15px]`}>
            <AdminSidebarContent theme={theme} getUserData={getUserData} isRightSideOpen={isRightSideOpen} setIsRightSideOpen={setIsRightSideOpen} />

            {/* navbar section */}
            <TopNav theme={theme} />

            {/* title */}
            <div className={`w-full border-b-[1px] ${theme === 'dark' ? 'border-[#635D5D]' : 'border-[#DEDEDE]'}`}>
                <h1 className='pb-[8px] relative w-max flex items-center gap-[10px] font-semibold text-[18px]'>
                    Customer Master

                    {/* bottoms line */}
                    <span className='absolute bottom-0 left-0 bg-gradient-to-r from-[#FF3E5B] to-[#FFE1D8] w-full h-[4px] rounded'></span>
                </h1>
            </div>

            {/* topNav */}
            <AdminCustomerTopNav theme={theme} />

            {/* Table lists */}
            <AdminTableContent theme={theme} handleDateView={handleDateView} />

            {/* Paginations */}
            <div className='w-full slg:flex hidden items-center justify-between mt-[20px]'>
                {/* left side */}
                <div className='flex items-center gap-[16px]'>
                    <span className='text-[14px] w-max whitespace-nowrap'>Total 85 items</span>
                    {/* select box */}
                    <div className='w-full'>
                        {/* <SelectBox theme={theme} items={pages} placeholder="10 / Page" mandatory="" position="top" /> */}

                        <div onClick={() => setRotateIcon(!rotateIcon)} className='w-full select-none py-[4px] px-[12px] h-full flex gap-[6px] items-center justify-between cursor-pointer rounded-[4px] border-[1px] border-[#B5B5B6] dark:border-[#545454]'>
                            10 / Page

                            <span className={`h-[14px] flex items-center justify-center ${rotateIcon && "rotate-180 transition-all"} transition-all ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 11" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.058 0.571661C15.2393 0.741639 15.2485 1.02642 15.0785 1.20773L8.32849 8.40773C8.24342 8.49847 8.12458 8.54995 8.00019 8.54995C7.87581 8.54995 7.75697 8.49847 7.6719 8.40773L0.921904 1.20773C0.751924 1.02641 0.761111 0.741639 0.942422 0.57166C1.12373 0.401682 1.40851 0.410868 1.57849 0.592179L8.00019 7.442L14.4219 0.592179C14.5919 0.410869 14.8767 0.401682 15.058 0.571661Z" fill={`${theme === 'dark' ? '#DEDEDE' : '#635D5D'}`} />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>

                {/* right side pages numbers */}
                <div className='flex items-center gap-[8px]'>
                    <span className={`${theme === "dark" ? 'text-white border-[#545454]' : 'text-[#B5B5B6] border-[#B5B5B6]'} cursor-pointer flex items-center justify-center p-[10px_12px] border-[1px] rounded-[4px] h-[32px] w-[32px]`}>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.83962 1.56621V0.530944C6.83962 0.441211 6.7365 0.391658 6.66685 0.446568L0.629351 5.16219C0.578054 5.20209 0.536546 5.25317 0.507994 5.31154C0.479442 5.36992 0.4646 5.43404 0.4646 5.49902C0.4646 5.56401 0.479442 5.62813 0.507994 5.68651C0.536546 5.74488 0.578054 5.79596 0.629351 5.83585L6.66685 10.5515C6.73783 10.6064 6.83962 10.5568 6.83962 10.4671V9.43184C6.83962 9.36621 6.80882 9.30327 6.75792 9.26309L1.93649 5.49969L6.75792 1.73496C6.80882 1.69478 6.83962 1.63184 6.83962 1.56621Z" fill={`${theme === "dark" ? 'white' : '#B5B5B6'}`} />
                        </svg>
                    </span>

                    <span className={`cursor-pointer text-[14px] flex items-center justify-center  ${theme === "dark" ? 'text-white border-[#545454]' : 'text-[#B5B5B6] border-[#B5B5B6]'} p-[10px_12px] border-[1px] rounded-[4px] h-[32px] w-[32px]`}>
                        1
                    </span>

                    <span className={`cursor-pointer text-[14px] flex items-center justify-center  ${theme === "dark" ? 'text-white border-[#545454]' : 'text-[#B5B5B6] border-[#B5B5B6]'} p-[10px_12px] border-[1px] rounded-[4px] h-[32px] w-[32px]`}>
                        •••
                    </span>

                    <span className={`cursor-pointer text-[14px] flex items-center justify-center  ${theme === "dark" ? 'text-white border-[#545454]' : 'text-[#B5B5B6] border-[#B5B5B6]'} p-[10px_12px] border-[1px] rounded-[4px] h-[32px] w-[32px]`}>
                        4
                    </span>
                    <span className={`cursor-pointer text-[14px] flex items-center justify-center  ${theme === "dark" ? 'text-white border-[#545454]' : 'text-[#B5B5B6] border-[#B5B5B6]'} p-[10px_12px] border-[1px] rounded-[4px] h-[32px] w-[32px]`}>
                        5
                    </span>
                    <span className={`cursor-pointer text-[14px] flex items-center justify-center  ${theme === "dark" ? 'text-white border-[#545454]' : 'text-[#B5B5B6] border-[#B5B5B6]'} p-[10px_12px] border-[1px] rounded-[4px] h-[32px] w-[32px]`}>
                        6
                    </span>
                    <span className={`cursor-pointer text-[14px] flex items-center justify-center  ${theme === "dark" ? 'text-white border-[#545454]' : 'text-[#B5B5B6] border-[#B5B5B6]'} p-[10px_12px] border-[1px] rounded-[4px] h-[32px] w-[32px]`}>
                        7
                    </span>
                    <span className={`cursor-pointer text-[14px] flex items-center justify-center  ${theme === "dark" ? 'text-white border-[#545454]' : 'text-[#B5B5B6] border-[#B5B5B6]'} p-[10px_12px] border-[1px] rounded-[4px] h-[32px] w-[32px]`}>
                        8
                    </span>

                    <span className={`cursor-pointer text-[14px] flex items-center justify-center  ${theme === "dark" ? 'text-white border-[#545454]' : 'text-[#B5B5B6] border-[#B5B5B6]'} p-[10px_12px] border-[1px] rounded-[4px] h-[32px] w-[32px]`}>
                        •••
                    </span>

                    <span className={`cursor-pointer text-[14px] flex items-center justify-center  ${theme === "dark" ? 'text-white border-[#545454]' : 'text-[#B5B5B6] border-[#B5B5B6]'} p-[10px_12px] border-[1px] rounded-[4px] h-[32px] w-[32px]`}>
                        50
                    </span>

                    <span className={`${theme === "dark" ? 'text-white border-[#545454]' : 'text-[#B5B5B6] border-[#B5B5B6]'} cursor-pointer flex items-center justify-center p-[10px_12px] border-[1px] rounded-[4px] h-[32px] w-[32px]`}>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.39777 5.16281L0.360269 0.447189C0.344493 0.434768 0.325533 0.42705 0.305568 0.424919C0.285603 0.422788 0.265441 0.426332 0.247399 0.435143C0.229357 0.443955 0.214166 0.457676 0.203571 0.474732C0.192976 0.491787 0.187406 0.511485 0.187501 0.531564V1.56683C0.187501 1.63246 0.218305 1.6954 0.269198 1.73558L5.09063 5.50031L0.269198 9.26505C0.216966 9.30522 0.187501 9.36817 0.187501 9.4338V10.4691C0.187501 10.5588 0.290626 10.6083 0.360269 10.5534L6.39777 5.83781C6.44908 5.79779 6.4906 5.74658 6.51915 5.6881C6.5477 5.62962 6.56254 5.56539 6.56254 5.50031C6.56254 5.43523 6.5477 5.37101 6.51915 5.31253C6.4906 5.25404 6.44908 5.20284 6.39777 5.16281Z" fill={`${theme === "dark" ? 'white' : '#B5B5B6'}`} />
                        </svg>
                    </span>
                </div>
            </div>

            {/* mobile view table list */}
            <AdminMobileViewTable theme={theme} handleDateView={handleDateView} />

            {/* footer sections */}
            <div className='w-full mt-[10px] text-right'>
                <span className={`${theme === "dark" ? 'text-[#B5B5B6]' : 'text-[#B5B5B6]'} text-[12px]`}>
                    Copyright © 2023 ROBIN.
                </span>
            </div>
        </div>
    )
}

export default AdminCustomerData