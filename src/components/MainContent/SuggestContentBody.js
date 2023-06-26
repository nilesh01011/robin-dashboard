import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SelectBox from '../SelectBox'

function SuggestContentBody({ theme }) {
    const locationItems = [
        {
            id: 1,
            name: 'items'
        },
        {
            id: 2,
            name: 'items 1'
        },
        {
            id: 3,
            name: 'items 2'
        }
    ]

    const SpareItems = [
        {
            id: 1,
            name: 'Spare items'
        },
        {
            id: 2,
            name: 'Spare items 1'
        },
        {
            id: 3,
            name: 'Spare items 2'
        }
    ];

    const modelItems = [
        {
            id: 1,
            name: 'XUV300'
        },
        {
            id: 2,
            name: 'Scorpio-N'
        },
        {
            id: 3,
            name: 'XUV700'
        },
        {
            id: 4,
            name: 'XUV400'
        }
    ]

    // const tableContents = [
    //     {
    //         id: 1,
    //         customerName: 'Ashish Y',
    //         partName: 'Brake Pad Kit',
    //         partNumber: '0603BAB0080KT',
    //         qty: 1,
    //     },
    //     {
    //         id: 2,
    //         customerName: 'Rahul Patel',
    //         partName: 'Brake Pad Kit',
    //         partNumber: '0603BAB0090AT',
    //         qty: 1,
    //     },
    //     {
    //         id: 3,
    //         customerName: 'Kirtan Panchal',
    //         partName: 'Brake Pad Kit',
    //         partNumber: '0603BAB0070RT',
    //         qty: 1,
    //     },
    //     {
    //         id: 4,
    //         customerName: 'Ashish Y',
    //         partName: 'Brake Pad Kit',
    //         partNumber: '0603BAB0070RT',
    //         qty: 1,
    //     },
    //     {
    //         id: 5,
    //         customerName: 'Ashish Y',
    //         partName: 'Brake Pad Kit',
    //         partNumber: '0603BAB0070RT',
    //         qty: 1,
    //     }
    // ]

    // const [totalQty, setTotalQty] = useState(0);

    const [allChecked, setAllChecked] = useState(0);
    const [checked_1, setChecked_1] = useState(false);
    const [checked_2, setChecked_2] = useState(false);
    const [checked_3, setChecked_3] = useState(false);
    const [checked_4, setChecked_4] = useState(false);
    const [checked_5, setChecked_5] = useState(false);

    // countes

    const [counters, setCounters] = useState([]);

    const handleCheckboxChange = (itemId) => {
        // setChecked(itemId)
        if (counters.includes(itemId)) {
            setCounters(counters.filter(id => id !== itemId));
        } else {
            setCounters([...counters, itemId]);
        }
    }

    // all counter clicks events

    const allCounters = () => {
        if (checked_1 === false || checked_2 === false || checked_3 === false || checked_4 === false || checked_5 === false) {
            setCounters([1, 2, 3, 4, 5]);

            setChecked_1(true)
            setChecked_2(true)
            setChecked_3(true)
            setChecked_4(true)
            setChecked_5(true)
        } else {
            setCounters([]);
            setChecked_1(false)
            setChecked_2(false)
            setChecked_3(false)
            setChecked_4(false)
            setChecked_5(false)
        }
    }

    const addTooltip = () => {
        const tooltip = true;
        localStorage.setItem('showTooltip', tooltip);
    }

    const clearAllChecks = () => {
        setCounters([]);
        setChecked_1(false)
        setChecked_2(false)
        setChecked_3(false)
        setChecked_4(false)
        setChecked_5(false)
    }

    return (
        <>
            <div className='w-full h-full 1x1:pb-[15px]'>
                {/* title */}
                <div className={`w-full border-b-[1px] ${theme === 'dark' ? 'border-[#635D5D]' : 'border-[#DEDEDE]'}`}>
                    <h1 className='pb-[8px] relative w-max flex items-center gap-[10px] font-semibold text-[18px]'>
                        Suggested Order Qty. (SOQ)

                        {/* bottoms line */}
                        <span className='absolute bottom-0 left-0 bg-gradient-to-r from-[#FF3E5B] to-[#FFE1D8] w-full h-[4px] rounded'></span>
                    </h1>
                </div>

                {/* main content body */}
                <div className='w-full h-full flex my-[25px] items-start justify-between flex-wrap xl:flex-row'>
                    <div className='w-full h-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center md:gap-[40px] gap-[20px]'>
                        <div>
                            <h6 className={`mb-[6px] text-[14px] ${theme === "dark" ? 'text-white' : 'text-black'}`}>Location</h6>
                            <SelectBox theme={theme} items={locationItems} placeholder="NBS-Goregaon" mandatory="" />
                        </div>
                        <div>
                            <h6 className={`mb-[6px] text-[14px] ${theme === "dark" ? 'text-white' : 'text-black'}`}>Model</h6>
                            <SelectBox theme={theme} items={modelItems} placeholder="XUV700" mandatory="" />
                        </div>
                        <div>
                            <h6 className={`mb-[6px] text-[14px] ${theme === "dark" ? 'text-white' : 'text-black'}`}>Part Category</h6>
                            <SelectBox theme={theme} items={SpareItems} placeholder="Spares" mandatory="" />
                        </div>
                        <div>
                            <h6 className={`mb-[6px] text-[14px] ${theme === "dark" ? 'text-white' : 'text-black'}`}>Current Stock</h6>
                            {/* <SelectBox disabled={true} theme={theme} items={SpareItems} placeholder="1" mandatory="" /> */}
                            <input disabled className={`w-full h-max ${theme === "dark" ? 'bg-[#242424]' : 'bg-[#F4F4F4]'} p-[12px_16px] rounded-[5px]`} placeholder='1' />
                        </div>
                    </div>

                    {/* tables contents */}
                    <div className='mt-[25px] w-full h-full flex flex-col justify-between'>
                        {/* <TableContents theme={theme} data={tableContents} /> */}
                        <div id="overFlowNone" className='w-full lg:h-[380px] h-full overflow-scroll'>
                            <table className='sm:w-full w-[992px] h-full'>
                                <thead className='whitespace-nowrap'>
                                    <tr className={`w-full divide-x-[1px] ${theme === "dark" ? 'bg-[#545454] divide-[#232324]' : 'bg-[#F4F4F4] divide-white'} h-[60px] p-[18px_20px]`}>
                                        <th className='rounded-[10px_0_0_0]'>
                                            <div className='w-full h-full flex items-center justify-center gap-[8px]'>
                                                SR. No.
                                                <span>
                                                    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 9L5 14L0 9H10Z" fill="#8E8585" />
                                                        <path d="M10 5L5 0L0 5L10 5Z" fill="#8E8585" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </th>
                                        <th className=''>
                                            <div className='flex items-center justify-center gap-[8px]'>
                                                Customer Name
                                                <span>
                                                    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 9L5 14L0 9H10Z" fill="#8E8585" />
                                                        <path d="M10 5L5 0L0 5L10 5Z" fill="#8E8585" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </th>
                                        <th className=''>
                                            <div className='flex items-center justify-center gap-[8px]'>
                                                Model
                                                <span>
                                                    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 9L5 14L0 9H10Z" fill="#8E8585" />
                                                        <path d="M10 5L5 0L0 5L10 5Z" fill="#8E8585" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </th>
                                        <th className=''>
                                            <div className='flex items-center justify-center gap-[8px]'>
                                                Part Name
                                                <span>
                                                    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 9L5 14L0 9H10Z" fill="#8E8585" />
                                                        <path d="M10 5L5 0L0 5L10 5Z" fill="#8E8585" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </th>
                                        <th className=''>
                                            <div className='flex items-center justify-center gap-[8px]'>
                                                Part Number
                                                <span>
                                                    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 9L5 14L0 9H10Z" fill="#8E8585" />
                                                        <path d="M10 5L5 0L0 5L10 5Z" fill="#8E8585" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </th>
                                        <th className=''>
                                            <div className='flex items-center justify-center gap-[8px]'>
                                                Qty
                                                <span>
                                                    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 9L5 14L0 9H10Z" fill="#8E8585" />
                                                        <path d="M10 5L5 0L0 5L10 5Z" fill="#8E8585" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </th>
                                        <th className='rounded-[_0_10px_0_0]'>
                                            <div className='flex items-center justify-center gap-[8px]'>

                                                {/* checkbox 2 */}
                                                <div className='w-max flex items-center gap-[12px]'>
                                                    {/* customs checkbox */}
                                                    <div onClick={() => { setAllChecked(!allChecked); allCounters() }} className={`w-[18px] h-[17px] flex items-center justify-center cursor-pointer rounded-[5px] border-[1px] border-[#B2B2B2] bg-[#F4F4F4]`}>
                                                        <input type="checkbox" className={`appearance-none rounded-[5px] border-[1px] ${theme === "dark" ? 'border-0' : 'border-[#DEDEDE]'}`} />
                                                        <span className={`${allChecked ? 'opacity-1' : 'opacity-0'} relative`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
                                                                <path d="M3.66976 7.44002C3.48551 7.44083 3.30837 7.36897 3.17676 7.24002L0.87676 4.94002C0.803483 4.87726 0.743968 4.80004 0.701952 4.7132C0.659936 4.62635 0.636325 4.53176 0.632602 4.43536C0.628878 4.33895 0.645122 4.24282 0.680314 4.15299C0.715506 4.06316 0.768886 3.98158 0.837105 3.91336C0.905323 3.84514 0.986907 3.79176 1.07673 3.75657C1.16656 3.72138 1.26269 3.70514 1.3591 3.70886C1.4555 3.71258 1.55009 3.73619 1.63694 3.77821C1.72378 3.82023 1.80101 3.87974 1.86376 3.95302L3.65776 5.74702L9.02876 0.447018C9.0933 0.381741 9.17015 0.329917 9.25487 0.294548C9.33958 0.259179 9.43046 0.240967 9.52226 0.240967C9.61406 0.240967 9.70494 0.259179 9.78966 0.294548C9.87437 0.329917 9.95122 0.381741 10.0158 0.447018C10.1461 0.578172 10.2193 0.755588 10.2193 0.940518C10.2193 1.12545 10.1461 1.30286 10.0158 1.43402L4.15176 7.22802C4.09016 7.2944 4.01561 7.34746 3.93271 7.38392C3.84981 7.42038 3.76032 7.43947 3.66976 7.44002Z" fill="#EA3A51" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>

                                                All
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='w-full whitespace-nowrap'>
                                    <tr className="w-full">
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {index + 1} */}1
                                            </div>
                                        </td>
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.customerName} */}Ashish Y
                                            </div>
                                        </td>
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.customerName} */}XUV700
                                            </div>
                                        </td>
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.partName} */}Brake Pad Kit
                                            </div>
                                        </td>
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.partNumber} */}0603BAB0080KT
                                            </div>
                                        </td>
                                        <td className={`text-left border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.qty} */}1
                                            </div>
                                        </td>
                                        <td className={`text-left border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* checkbox 2 */}
                                                <div className='w-max flex items-center gap-[12px]'>
                                                    {/* customs checkbox */}
                                                    <div onClick={() => { setChecked_1(!checked_1); handleCheckboxChange(1) }} className={`w-[18px] h-[17px] flex items-center justify-center cursor-pointer rounded-[5px] border-[1px] border-[#B2B2B2] bg-[#F4F4F4]`}>
                                                        <input type="checkbox" className={`appearance-none rounded-[5px] border-[1px] ${theme === "dark" ? 'border-0' : 'border-[#DEDEDE]'}`} />
                                                        <span className={`${checked_1 === true ? 'opacity-1' : 'opacity-0'} relative`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
                                                                <path d="M3.66976 7.44002C3.48551 7.44083 3.30837 7.36897 3.17676 7.24002L0.87676 4.94002C0.803483 4.87726 0.743968 4.80004 0.701952 4.7132C0.659936 4.62635 0.636325 4.53176 0.632602 4.43536C0.628878 4.33895 0.645122 4.24282 0.680314 4.15299C0.715506 4.06316 0.768886 3.98158 0.837105 3.91336C0.905323 3.84514 0.986907 3.79176 1.07673 3.75657C1.16656 3.72138 1.26269 3.70514 1.3591 3.70886C1.4555 3.71258 1.55009 3.73619 1.63694 3.77821C1.72378 3.82023 1.80101 3.87974 1.86376 3.95302L3.65776 5.74702L9.02876 0.447018C9.0933 0.381741 9.17015 0.329917 9.25487 0.294548C9.33958 0.259179 9.43046 0.240967 9.52226 0.240967C9.61406 0.240967 9.70494 0.259179 9.78966 0.294548C9.87437 0.329917 9.95122 0.381741 10.0158 0.447018C10.1461 0.578172 10.2193 0.755588 10.2193 0.940518C10.2193 1.12545 10.1461 1.30286 10.0158 1.43402L4.15176 7.22802C4.09016 7.2944 4.01561 7.34746 3.93271 7.38392C3.84981 7.42038 3.76032 7.43947 3.66976 7.44002Z" fill="#EA3A51" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="w-full">
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {index + 1} */}2
                                            </div>
                                        </td>
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.customerName} */}Rahul Patel
                                            </div>
                                        </td>
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.customerName} */}XUV700
                                            </div>
                                        </td>
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.partName} */}Brake Pad Kit
                                            </div>
                                        </td>
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.partNumber} */}0603BAB0090AT
                                            </div>
                                        </td>
                                        <td className={`text-left border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.qty} */}1
                                            </div>
                                        </td>
                                        <td className={`text-left border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* checkbox 2 */}
                                                <div className='w-max flex items-center gap-[12px]'>
                                                    {/* customs checkbox */}
                                                    <div onClick={() => { setChecked_2(!checked_2); handleCheckboxChange(2) }} className={`w-[18px] h-[17px] flex items-center justify-center cursor-pointer rounded-[5px] border-[1px] border-[#B2B2B2] bg-[#F4F4F4]`}>
                                                        <input type="checkbox" className={`appearance-none rounded-[5px] border-[1px] ${theme === "dark" ? 'border-0' : 'border-[#DEDEDE]'}`} />
                                                        <span className={`${checked_2 === true ? 'opacity-1' : 'opacity-0'} relative`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
                                                                <path d="M3.66976 7.44002C3.48551 7.44083 3.30837 7.36897 3.17676 7.24002L0.87676 4.94002C0.803483 4.87726 0.743968 4.80004 0.701952 4.7132C0.659936 4.62635 0.636325 4.53176 0.632602 4.43536C0.628878 4.33895 0.645122 4.24282 0.680314 4.15299C0.715506 4.06316 0.768886 3.98158 0.837105 3.91336C0.905323 3.84514 0.986907 3.79176 1.07673 3.75657C1.16656 3.72138 1.26269 3.70514 1.3591 3.70886C1.4555 3.71258 1.55009 3.73619 1.63694 3.77821C1.72378 3.82023 1.80101 3.87974 1.86376 3.95302L3.65776 5.74702L9.02876 0.447018C9.0933 0.381741 9.17015 0.329917 9.25487 0.294548C9.33958 0.259179 9.43046 0.240967 9.52226 0.240967C9.61406 0.240967 9.70494 0.259179 9.78966 0.294548C9.87437 0.329917 9.95122 0.381741 10.0158 0.447018C10.1461 0.578172 10.2193 0.755588 10.2193 0.940518C10.2193 1.12545 10.1461 1.30286 10.0158 1.43402L4.15176 7.22802C4.09016 7.2944 4.01561 7.34746 3.93271 7.38392C3.84981 7.42038 3.76032 7.43947 3.66976 7.44002Z" fill="#EA3A51" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="w-full">
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {index + 1} */}3
                                            </div>
                                        </td>
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.customerName} */}Kirtan Panchal
                                            </div>
                                        </td>
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.customerName} */}XUV700
                                            </div>
                                        </td>
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.partName} */}Brake Pad Kit
                                            </div>
                                        </td>
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.partNumber} */}0603BAB0070RT
                                            </div>
                                        </td>
                                        <td className={`text-left border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.qty} */}1
                                            </div>
                                        </td>
                                        <td className={`text-left border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* checkbox 2 */}
                                                <div className='w-max flex items-center gap-[12px]'>
                                                    {/* customs checkbox */}
                                                    <div onClick={() => { setChecked_3(!checked_3); handleCheckboxChange(3) }} className={`w-[18px] h-[17px] flex items-center justify-center cursor-pointer rounded-[5px] border-[1px] border-[#B2B2B2] bg-[#F4F4F4]`}>
                                                        <input type="checkbox" className={`appearance-none rounded-[5px] border-[1px] ${theme === "dark" ? 'border-0' : 'border-[#DEDEDE]'}`} />
                                                        <span className={`${checked_3 === true ? 'opacity-1' : 'opacity-0'} relative`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
                                                                <path d="M3.66976 7.44002C3.48551 7.44083 3.30837 7.36897 3.17676 7.24002L0.87676 4.94002C0.803483 4.87726 0.743968 4.80004 0.701952 4.7132C0.659936 4.62635 0.636325 4.53176 0.632602 4.43536C0.628878 4.33895 0.645122 4.24282 0.680314 4.15299C0.715506 4.06316 0.768886 3.98158 0.837105 3.91336C0.905323 3.84514 0.986907 3.79176 1.07673 3.75657C1.16656 3.72138 1.26269 3.70514 1.3591 3.70886C1.4555 3.71258 1.55009 3.73619 1.63694 3.77821C1.72378 3.82023 1.80101 3.87974 1.86376 3.95302L3.65776 5.74702L9.02876 0.447018C9.0933 0.381741 9.17015 0.329917 9.25487 0.294548C9.33958 0.259179 9.43046 0.240967 9.52226 0.240967C9.61406 0.240967 9.70494 0.259179 9.78966 0.294548C9.87437 0.329917 9.95122 0.381741 10.0158 0.447018C10.1461 0.578172 10.2193 0.755588 10.2193 0.940518C10.2193 1.12545 10.1461 1.30286 10.0158 1.43402L4.15176 7.22802C4.09016 7.2944 4.01561 7.34746 3.93271 7.38392C3.84981 7.42038 3.76032 7.43947 3.66976 7.44002Z" fill="#EA3A51" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="w-full">
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {index + 1} */}4
                                            </div>
                                        </td>
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.customerName} */}Jay Parekh
                                            </div>
                                        </td>
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.customerName} */}XUV700
                                            </div>
                                        </td>
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.partName} */}Brake Pad Kit
                                            </div>
                                        </td>
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.partNumber} */}0903BYB0070RT
                                            </div>
                                        </td>
                                        <td className={`text-left border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.qty} */}1
                                            </div>
                                        </td>
                                        <td className={`text-left border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* checkbox 2 */}
                                                <div className='w-max flex items-center gap-[12px]'>
                                                    {/* customs checkbox */}
                                                    <div onClick={() => { setChecked_4(!checked_4); handleCheckboxChange(4) }} className={`w-[18px] h-[17px] flex items-center justify-center cursor-pointer rounded-[5px] border-[1px] border-[#B2B2B2] bg-[#F4F4F4]`}>
                                                        <input type="checkbox" className={`appearance-none rounded-[5px] border-[1px] ${theme === "dark" ? 'border-0' : 'border-[#DEDEDE]'}`} />
                                                        <span className={`${checked_4 === true ? 'opacity-1' : 'opacity-0'} relative`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
                                                                <path d="M3.66976 7.44002C3.48551 7.44083 3.30837 7.36897 3.17676 7.24002L0.87676 4.94002C0.803483 4.87726 0.743968 4.80004 0.701952 4.7132C0.659936 4.62635 0.636325 4.53176 0.632602 4.43536C0.628878 4.33895 0.645122 4.24282 0.680314 4.15299C0.715506 4.06316 0.768886 3.98158 0.837105 3.91336C0.905323 3.84514 0.986907 3.79176 1.07673 3.75657C1.16656 3.72138 1.26269 3.70514 1.3591 3.70886C1.4555 3.71258 1.55009 3.73619 1.63694 3.77821C1.72378 3.82023 1.80101 3.87974 1.86376 3.95302L3.65776 5.74702L9.02876 0.447018C9.0933 0.381741 9.17015 0.329917 9.25487 0.294548C9.33958 0.259179 9.43046 0.240967 9.52226 0.240967C9.61406 0.240967 9.70494 0.259179 9.78966 0.294548C9.87437 0.329917 9.95122 0.381741 10.0158 0.447018C10.1461 0.578172 10.2193 0.755588 10.2193 0.940518C10.2193 1.12545 10.1461 1.30286 10.0158 1.43402L4.15176 7.22802C4.09016 7.2944 4.01561 7.34746 3.93271 7.38392C3.84981 7.42038 3.76032 7.43947 3.66976 7.44002Z" fill="#EA3A51" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="w-full">
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {index + 1} */}5
                                            </div>
                                        </td>
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.customerName} */}Shardul Rao
                                            </div>
                                        </td>
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.customerName} */}XUV700
                                            </div>
                                        </td>
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.partName} */}Brake Pad Kit
                                            </div>
                                        </td>
                                        <td className={`text-left py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.partNumber} */}0903BYB0070RT
                                            </div>
                                        </td>
                                        <td className={`text-left border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.qty} */}1
                                            </div>
                                        </td>
                                        <td className={`text-left border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>
                                            <div className='flex items-center justify-center'>
                                                {/* checkbox 2 */}
                                                <div className='w-max flex items-center gap-[12px]'>
                                                    {/* customs checkbox */}
                                                    <div onClick={() => { setChecked_5(!checked_5); handleCheckboxChange(5) }} className={`w-[18px] h-[17px] flex items-center justify-center cursor-pointer rounded-[5px] border-[1px] border-[#B2B2B2] bg-[#F4F4F4]`}>
                                                        <input type="checkbox" className={`appearance-none rounded-[5px] border-[1px] ${theme === "dark" ? 'border-0' : 'border-[#DEDEDE]'}`} />
                                                        <span className={`${checked_5 === true ? 'opacity-1' : 'opacity-0'} relative`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
                                                                <path d="M3.66976 7.44002C3.48551 7.44083 3.30837 7.36897 3.17676 7.24002L0.87676 4.94002C0.803483 4.87726 0.743968 4.80004 0.701952 4.7132C0.659936 4.62635 0.636325 4.53176 0.632602 4.43536C0.628878 4.33895 0.645122 4.24282 0.680314 4.15299C0.715506 4.06316 0.768886 3.98158 0.837105 3.91336C0.905323 3.84514 0.986907 3.79176 1.07673 3.75657C1.16656 3.72138 1.26269 3.70514 1.3591 3.70886C1.4555 3.71258 1.55009 3.73619 1.63694 3.77821C1.72378 3.82023 1.80101 3.87974 1.86376 3.95302L3.65776 5.74702L9.02876 0.447018C9.0933 0.381741 9.17015 0.329917 9.25487 0.294548C9.33958 0.259179 9.43046 0.240967 9.52226 0.240967C9.61406 0.240967 9.70494 0.259179 9.78966 0.294548C9.87437 0.329917 9.95122 0.381741 10.0158 0.447018C10.1461 0.578172 10.2193 0.755588 10.2193 0.940518C10.2193 1.12545 10.1461 1.30286 10.0158 1.43402L4.15176 7.22802C4.09016 7.2944 4.01561 7.34746 3.93271 7.38392C3.84981 7.42038 3.76032 7.43947 3.66976 7.44002Z" fill="#EA3A51" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* bottom qty and buttons */}
                        <div className='w-full flex items-center justify-between mt-[45px]'>
                            {/* qty counts */}
                            <div>
                                <h6>Total Quantity: <span className='font-bold'>{counters.length}</span></h6>
                            </div>
                            {/* buttons */}
                            <div className='w-max h-[38px] flex items-center gap-[15px]'>
                                {/* buttons 1 */}
                                <button onClick={() => clearAllChecks()} type='button' className='w-[138px] h-full rounded-[5px] text-[#FF3E5B] capitalize font-bold text-[14px]' style={{ border: '1px solid #FF3E5B' }}>clear</button>

                                {/* buttons 2 */}
                                {/* ${counters.length === 0 ? 'bg-[#FF3E5B]/60 cursor-not-allowed' : 'bg-[#FF3E5B]'} */}
                                {
                                    counters.length === 0 ? (
                                        <button onClick={() => addTooltip()} type='button' disabled={true} className={`w-[138px] h-full rounded-[5px] bg-[#FF3E5B]/60 cursor-not-allowed text-white capitalize font-bold text-[14px]`}>
                                            place order
                                        </button>
                                    ) : (
                                        <button onClick={() => addTooltip()} type='button' className={`w-[138px] h-full rounded-[5px bg-[#FF3E5B] text-white capitalize font-bold text-[14px]`}>
                                            <Link to='/dashboard'>
                                                place order
                                            </Link>
                                        </button>
                                    )
                                }
                                {/* ${counters.length === 0 ? 'bg-[#FF3E5B]/60' : 'bg-[#FF3E5B]'} */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* footer sections */}

                <div className='w-full mt-[10px] text-right'>
                    <span className={`${theme === "dark" ? 'text-[#B5B5B6]' : 'text-[#B5B5B6]'} text-[12px]`}>
                        Copyright © 2023 ROBIN.
                    </span>
                </div>
            </div>
        </>
    )
}

export default SuggestContentBody