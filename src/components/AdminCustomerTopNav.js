import React, { useState } from 'react';
import SelectBox from './SelectBox';

function AdminCustomerTopNav({ theme }) {
    const [isActiveTab, setIsActiveTab] = useState(1);
    const tabsList = [
        {
            id: 1,
            name: "Individual",
        },
        {
            id: 2,
            name: "Firm/Corporate",
        }
    ];

    const customersList = [
        {
            id: 1,
            name: 'John Doe',
        },
        {
            id: 2,
            name: 'John micheal'
        },
        {
            id: 4,
            name: 'John Warner',
        },
        {
            id: 5,
            name: 'John Bloom'
        }
    ]
    return (
        <div className={`mt-[30px] border-[1px] ${theme === "dark" ? 'bg-[#242424] border-[#545454]' : 'bg-[#F2F2F2] border-[#E6E6E6]'} rounded-[4px] slg:p-[14px_26px] p-[10px] mb-[20px] flex items-center justify-between`}>
            {/* left side */}
            <div className='slg:w-max w-full flex md:items-center md:flex-row flex-col gap-[16px]'>
                {/* tabs */}
                <div className={`flex items-center gap-[5px] border-[1px] rounded-[6px] ${theme === "dark" ? 'border-[#545454]' : 'border-[#B5B5B6]'} p-[6px]`}>
                    {
                        tabsList.map((ele) => {
                            return (
                                <button type='button' key={ele.id} onClick={() => setIsActiveTab(ele.id)} className={`slg:w-max w-full slg:p-[4px_6px] p-[2px_40px] rounded-[4px] ${isActiveTab === ele.id ? 'bg-[#FF3E5B] text-white' : ''}`}>{ele.name}</button>
                            )
                        })
                    }
                </div>

                {/* input fields */}
                <div className={`w-full border-[1px] ${theme === "dark" ? 'border-[#545454]' : 'border-[#B5B5B6]'} rounded-[4px] flex-1 relative`}>
                    {/* customer select list */}
                    <div className='w-[156px] absolute left-[6px] top-[0.25rem] bottom-0'>
                        <SelectBox height='h-[31px]' padding="p-[3px_6px]" backgroundColorDark='bg-[#242424]' backgroundColorLight="bg-[#E6E6E6]" gap='gap-[10px]' topSideOpen="top-[150%]" theme={theme} items={customersList} placeholder="Customer Name" mandatory="" position="bottom" />
                    </div>
                    {/* inputs */}
                    <div className='slg:w-[400px] w-full'>
                        <input type='search' placeholder='Enter customer name' className={`w-full border-none outline-none flex-1 md:pl-[180px] pl-[174px] pr-[34px] p-[8px] rounded-[4px] md:placeholder:text-[16px] placeholder:text-[14px] ${theme === "dark" ? 'bg-[#545454]' : 'bg-white'}`} />
                    </div>

                    {/* search buttons */}
                    <button type='button' className='w-max h-max flex items-center justify-center absolute top-[0.6rem] right-[8px]'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.43469 0.400024C3.9972 0.400024 0.399902 3.99732 0.399902 8.43481C0.399902 12.8723 3.9972 16.4696 8.43469 16.4696C10.4375 16.4696 12.2691 15.7368 13.6761 14.5248L18.5756 19.4243C18.8099 19.6586 19.1898 19.6586 19.4242 19.4243C19.6585 19.19 19.6585 18.8101 19.4242 18.5758L14.5246 13.6762C15.7367 12.2692 16.4695 10.4376 16.4695 8.43481C16.4695 3.99732 12.8722 0.400024 8.43469 0.400024ZM1.5999 8.43481C1.5999 4.66006 4.65994 1.60002 8.43469 1.60002C12.2094 1.60002 15.2695 4.66006 15.2695 8.43481C15.2695 12.2096 12.2094 15.2696 8.43469 15.2696C4.65994 15.2696 1.5999 12.2096 1.5999 8.43481Z" fill={`#FF3E5B`} />
                        </svg>
                    </button>
                </div>
            </div>
            {/* right side */}
            <div className='w-max slg:block hidden'>
                <button type='button' className='text-[14px] font-bold text-[#FF3E5B]'>View Draft</button>
            </div>
        </div>
    )
}

export default AdminCustomerTopNav