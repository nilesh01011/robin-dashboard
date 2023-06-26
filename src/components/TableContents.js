import React from 'react'

function TableContents({ data, theme }) {
    return (
        <table className='w-full h-full table'>
            <thead className=''>
                <tr className={`w-full divide-x-[1px] ${theme === "dark" ? 'bg-[#545454] divide-[#232324]' : 'bg-[#F4F4F4] divide-white'} h-[60px] p-[18px_20px]`}>
                    <th className='rounded-[10px_0_0_0]'>SR. No.</th>
                    <th>Customer Name</th>
                    <th>Part Name</th>
                    <th>Part Number</th>
                    <th>Qty</th>
                    <th className='rounded-[_0_10px_0_0]'>
                        All
                    </th>
                </tr>
            </thead>
            <tbody className='w-full'>
                {data.map((item, index) => (
                    <tr key={index} className="w-full">
                        <td className={`text-center pr-[40px] py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>{index + 1}</td>
                        <td className={`text-center pr-[55px] py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>{item.customerName}</td>
                        <td className={`text-center pl-[20px] py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>{item.partName}</td>
                        <td className={`text-center pl-[30px] py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>{item.partNumber}</td>
                        <td className={`text-center pr-[20px] py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>{item.qty}</td>
                        <td className={`text-center pr-[20px] py-[23px] border-b-[1px] ${theme === "dark" ? 'border-[#232324]' : 'border-[#DEDEDE]'}`}>{index + 1}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TableContents