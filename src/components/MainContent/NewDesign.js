import React from 'react'

function NewDesign({ theme }) {
    return (
        <>
            <div className={`w-full h-max ${theme === "dark" ? 'text-white' : 'text-black'}`}>
                <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start sm:gap-x-[40px] sm:gap-y-[20px] gap-[20px] w-full h-full'>
                    {/* =================== One contents ======================= */}
                    <div className={`w-full h-max rounded-[10px] border-[1px] ${theme === "dark" ? 'border-[#545454]' : 'border-[#E6E6E6]'}`}>
                        {/* headers */}
                        <div className={`w-full h-[50px] p-[16px_20px] flex gap-[10px] items-center rounded-[10px_10px_0_0] ${theme === "dark" ? 'bg-[#545454]' : 'bg-[#E6E6E6]'}`}>
                            {/* icons */}
                            <span>
                                <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 0.996094C4.70094 0.996094 0 5.60332 0 11.2868C0 13.1734 0.519531 14.9407 1.42406 16.4607C1.62859 16.8044 2.01833 17.0038 2.42448 17.0038H18.5755C18.9817 17.0038 19.3714 16.8044 19.5759 16.4607C20.4805 14.9407 21 13.1734 21 11.2868C21 5.60332 16.2991 0.996094 10.5 0.996094ZM10.5 3.28291C11.0363 3.28291 11.4691 3.64487 11.6054 4.12796C11.5649 4.20872 11.5092 4.27911 11.4796 4.36629L11.1435 5.35498C10.9565 5.47969 10.7435 5.56973 10.5004 5.56973C9.85615 5.56973 9.3337 5.0577 9.3337 4.42632C9.3337 3.79495 9.85578 3.28291 10.5 3.28291ZM3.5 13.5736C2.85578 13.5736 2.33333 13.0616 2.33333 12.4302C2.33333 11.7988 2.85578 11.2868 3.5 11.2868C4.14422 11.2868 4.66667 11.7988 4.66667 12.4302C4.66667 13.0616 4.14422 13.5736 3.5 13.5736ZM5.25 7.85655C4.60578 7.85655 4.08333 7.34452 4.08333 6.71314C4.08333 6.08176 4.60578 5.56973 5.25 5.56973C5.89422 5.56973 6.41667 6.08176 6.41667 6.71314C6.41667 7.34452 5.89422 7.85655 5.25 7.85655ZM14.2468 5.26923L12.0108 11.8438C12.5099 12.2633 12.8333 12.8783 12.8333 13.5736C12.8333 13.9924 12.7101 14.3793 12.5096 14.717H8.49042C8.2899 14.3793 8.16667 13.9924 8.16667 13.5736C8.16667 12.3609 9.13281 11.3786 10.3505 11.3014L12.5869 4.72647C12.7389 4.27768 13.2333 4.03149 13.6937 4.18442C14.152 4.33413 14.3992 4.82008 14.2468 5.26923ZM14.7813 7.31307L15.3471 5.64977C15.4736 5.60368 15.6071 5.57009 15.75 5.57009C16.3942 5.57009 16.9167 6.08212 16.9167 6.7135C16.9167 7.34487 16.3942 7.85691 15.75 7.85691C15.3351 7.85655 14.9884 7.63251 14.7813 7.31307ZM17.5 13.5736C16.8558 13.5736 16.3333 13.0616 16.3333 12.4302C16.3333 11.7988 16.8558 11.2868 17.5 11.2868C18.1442 11.2868 18.6667 11.7988 18.6667 12.4302C18.6667 13.0616 18.1442 13.5736 17.5 13.5736Z" fill={`${theme === "dark" ? 'white' : 'black'}`} />
                                </svg>
                            </span>

                            {/* titles */}
                            <span>Dashboard</span>
                        </div>

                        {/* contents */}
                        <div className={`divide-y-[1px] rounded-[0_0_10px_10px] ${theme === "dark" ? 'bg-[#232324] divide-[#545454]' : 'bg-white divide-[#E6E6E6]'} w-full h-max`}>
                            <div className={`w-full grid grid-cols-2 divide-x-[1px] ${theme === "dark" ? 'divide-[#545454]' : 'divide-[#E6E6E6]'} p-[17px_36px]`}>
                                {/* graph one */}
                                <div className='w-full h-full flex items-center'>
                                    <svg width="60" height="42" viewBox="0 0 60 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M39 27.8014H43.5C44.25 27.8014 45 27.118 45 26.4347V12.0847C45 11.4014 44.25 10.718 43.5 10.718H39C38.25 10.718 37.5 11.4014 37.5 12.0847V26.4347C37.5 27.118 38.25 27.8014 39 27.8014ZM50.25 27.8014H54.75C55.5 27.8014 56.25 27.118 56.25 26.4347V1.83468C56.25 1.15135 55.5 0.468018 54.75 0.468018H50.25C49.5 0.468018 48.75 1.15135 48.75 1.83468V26.4347C48.75 27.118 49.5 27.8014 50.25 27.8014ZM16.5 27.8014H21C21.75 27.8014 22.5 27.118 22.5 26.4347V18.918C22.5 18.2347 21.75 17.5514 21 17.5514H16.5C15.75 17.5514 15 18.2347 15 18.918V26.4347C15 27.118 15.75 27.8014 16.5 27.8014ZM27.75 27.8014H32.25C33 27.8014 33.75 27.118 33.75 26.4347V5.25135C33.75 4.56802 33 3.88468 32.25 3.88468H27.75C27 3.88468 26.25 4.56802 26.25 5.25135V26.4347C26.25 27.118 27 27.8014 27.75 27.8014ZM58.125 34.6347H7.5V2.17635C7.5 1.2325 6.66094 0.468018 5.625 0.468018H1.875C0.839063 0.468018 0 1.2325 0 2.17635V38.0514C0 39.938 1.6793 41.468 3.75 41.468H58.125C59.1609 41.468 60 40.7035 60 39.7597V36.343C60 35.3992 59.1609 34.6347 58.125 34.6347Z" fill="#007BFF" />
                                    </svg>
                                </div>

                                {/* graph two */}
                                <div className='w-full h-full'>
                                    <div className='w-full h-full flex items-center justify-end'>
                                        <svg width="60" height="56" viewBox="0 0 60 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M58.2122 31.464H32.0406L49.4703 48.729C50.1365 49.3889 51.2328 49.4424 51.9177 48.8033C56.1861 44.82 59.1221 39.4503 59.9835 33.4141C60.1313 32.3806 59.2655 31.464 58.2122 31.464ZM56.4662 24.3845C55.5574 11.3333 45.0288 0.904182 31.8531 0.00395054C30.8472 -0.0648778 30.0001 0.775265 30.0001 1.77382V26.2199H54.6806C55.6887 26.2199 56.5357 25.3809 56.4662 24.3845ZM24.706 31.464V5.53972C24.706 4.49637 23.7807 3.63874 22.7384 3.78514C9.5947 5.62493 -0.451963 16.9991 0.0156822 30.6304C0.496563 44.6299 12.6653 56.11 26.8049 55.9341C32.3637 55.8653 37.5001 54.091 41.7233 51.1238C42.5946 50.512 42.6519 49.2414 41.8964 48.493L24.706 31.464Z" fill="#FF3E5B" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className={`w-full grid grid-cols-2 divide-x-[1px] ${theme === "dark" ? 'divide-[#545454]' : 'divide-[#E6E6E6]'} p-[17px_36px]`}>
                                {/* graph three */}
                                <div className='w-full h-full flex items-center'>
                                    <svg width="60" height="47" viewBox="0 0 60 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M58.125 38.7143H7.5V2.55556C7.5 1.5041 6.66094 0.652466 5.625 0.652466H1.875C0.839062 0.652466 0 1.5041 0 2.55556V42.5205C0 44.6222 1.6793 46.3267 3.75 46.3267H58.125C59.1609 46.3267 60 45.4751 60 44.4236V40.6174C60 39.566 59.1609 38.7143 58.125 38.7143ZM54.375 4.45865H40.5398C38.0344 4.45865 36.7793 7.53334 38.5512 9.33176L42.348 13.1855L33.75 21.9136L25.152 13.1867C23.6871 11.6999 21.3129 11.6999 19.8492 13.1867L11.7996 21.3569C11.0672 22.1003 11.0672 23.3052 11.7996 24.0486L14.4504 26.7391C15.1828 27.4825 16.3699 27.4825 17.1023 26.7391L22.5 21.2594L31.098 29.9863C32.5629 31.4731 34.9371 31.4731 36.4008 29.9863L47.6508 18.5677L51.4477 22.4215C53.2195 24.2199 56.2488 22.946 56.2488 20.403V6.36174C56.25 5.31029 55.4109 4.45865 54.375 4.45865Z" fill="#FFC107" />
                                    </svg>
                                </div>

                                {/* graph four */}
                                <div className='w-full h-full'>
                                    <div className='w-full h-full flex items-center justify-end'>
                                        <svg width="60" height="47" viewBox="0 0 60 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 46.9792H60V42.6092H4.68624V0H0V46.9792ZM8.20227 38.3964H59.751V3.90307L48.8708 13.19L38.7459 9.75643L28.0345 21.151L17.0713 17.4827L8.19959 26.0679V38.3989L8.20227 38.3964Z" fill="#28A745" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* buttons */}
                            <div className='w-full h-full flex items-center justify-center pt-[10px] pb-[16px]'>
                                <button type='button' className='font-[700] rounded-[4px] w-max h-[33px] p-[5px_16px] bg-[#FF3E5B] text-white text-[14px]'>
                                    {/* <a href='/dashboard.pdf' download='dashboardView'> */}
                                    View Dashboard
                                    {/* </a> */}
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* =================== Two contents ======================= */}
                    <div className={`w-full h-max rounded-[10px] border-[1px] ${theme === "dark" ? 'border-[#545454]' : 'border-[#E6E6E6]'}`}>
                        {/* headers */}
                        <div className={`w-full h-[50px] p-[16px_20px] flex gap-[10px] items-center rounded-[10px_10px_0_0] ${theme === "dark" ? 'bg-[#545454]' : 'bg-[#E6E6E6]'}`}>
                            {/* icons */}
                            <span>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0C4.02823 0 0 4.02823 0 9C0 13.9718 4.02823 18 9 18C13.9718 18 18 13.9718 18 9C18 4.02823 13.9718 0 9 0ZM11.0722 12.7052L7.87137 10.379C7.75887 10.2956 7.69355 10.1649 7.69355 10.027V3.91935C7.69355 3.67984 7.88952 3.48387 8.12903 3.48387H9.87097C10.1105 3.48387 10.3065 3.67984 10.3065 3.91935V8.91653L12.6109 10.5931C12.8069 10.7347 12.8468 11.0069 12.7052 11.2028L11.6819 12.6109C11.5403 12.8032 11.2681 12.8468 11.0722 12.7052Z" fill={`${theme === "dark" ? 'white' : 'black'}`} />
                                </svg>
                            </span>

                            {/* titles */}
                            <span>Action Items</span>
                        </div>

                        {/* contents */}
                        <div className={`divide-y-[1px] rounded-[0_0_10px_10px] ${theme === "dark" ? 'bg-[#232324] divide-[#545454]' : 'bg-white divide-[#E6E6E6]'} w-full h-max`}>
                            <div className={`w-full divide-y-[1px] ${theme === "dark" ? 'divide-[#545454]' : 'divide-[#E6E6E6]'} p-[0_20px]`}>
                                <div className='w-full flex items-center justify-between py-[8px]'>
                                    <span className='text-[14px]'>
                                        Enquiries to be followed
                                    </span>
                                    <span className={`w-max p-[2px_5px] rounded-[4px] bg-[#FF3E5B] text-[10px] flex items-center justify-center text-white`}>10</span>
                                </div>
                                <div className='w-full flex items-center justify-between py-[8px]'>
                                    <span className='text-[14px]'>
                                        Scorpio-N review is pending
                                    </span>
                                    <span className={`w-max p-[2px_5px] rounded-[4px] bg-[#FF3E5B] text-[10px] flex items-center justify-center text-white`}>10</span>
                                </div>
                                <div className='w-full flex items-center justify-between py-[8px]'>
                                    <span className='text-[14px]'>
                                        Branch details need to be updated
                                    </span>
                                    <span className={`w-max p-[2px_5px] rounded-[4px] bg-[#FF3E5B] text-[10px] flex items-center justify-center text-white`}>10</span>
                                </div>
                                <div className='w-full flex items-center justify-between py-[8px]'>
                                    <span className='text-[14px]'>
                                        Pending POs to be released
                                    </span>
                                    <span className={`w-max p-[2px_5px] rounded-[4px] bg-[#FF3E5B] text-[10px] flex items-center justify-center text-white`}>10</span>
                                </div>

                                <div className='w-full flex items-center justify-between py-[7px]'>
                                    <span className='text-[14px]'>
                                        Pending POs to be released
                                    </span>
                                    <span className={`w-max p-[2px_5px] rounded-[4px] bg-[#FF3E5B] text-[10px] flex items-center justify-center text-white`}>10</span>
                                </div>

                                <div className='w-full flex items-center justify-between py-[8px]'>
                                    <span className='text-[14px]'>
                                        Pending POs to be released
                                    </span>
                                    <span className={`w-max p-[2px_5px] rounded-[4px] bg-[#FF3E5B] text-[10px] flex items-center justify-center text-white`}>10</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* =================== Three contents ======================= */}
                    <div className={`w-full h-max rounded-[10px] border-[1px] ${theme === "dark" ? 'border-[#545454]' : 'border-[#E6E6E6]'}`}>
                        {/* headers */}
                        <div className={`w-full h-[50px] p-[16px_20px] flex gap-[10px] items-center rounded-[10px_10px_0_0] ${theme === "dark" ? 'bg-[#545454]' : 'bg-[#E6E6E6]'}`}>
                            {/* icons */}
                            <span>
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 13.61C14.4 13.08 14.8 12.54 15.2 12C16.16 12.72 17.41 13.66 18.4 14.4C18 14.93 17.6 15.47 17.2 16C16.21 15.26 14.96 14.32 14 13.61ZM3 15V11H2C1.47005 10.9984 0.962265 10.7872 0.587535 10.4125C0.212805 10.0377 0.00158273 9.52995 0 9L0 7C0.00158273 6.47005 0.212805 5.96227 0.587535 5.58753C0.962265 5.2128 1.47005 5.00158 2 5H6L11 2V14L6 11H5V15H3ZM12 4.65C12.4719 5.07019 12.8495 5.58546 13.1081 6.16197C13.3667 6.73847 13.5003 7.36316 13.5003 7.995C13.5003 8.62684 13.3667 9.25153 13.1081 9.82803C12.8495 10.4045 12.4719 10.9198 12 11.34V4.65ZM16 9V7H20V9H16ZM14 2.4C14.96 1.68 16.21 0.74 17.2 0C17.6 0.53 18 1.07 18.4 1.6C17.41 2.35 16.161 3.279 15.2 4C14.8 3.47 14.4 2.93 14 2.4Z" fill={`${theme === "dark" ? 'white' : 'black'}`} />
                                </svg>
                            </span>

                            {/* titles */}
                            <span>News</span>
                        </div>

                        {/* contents */}
                        <div className={`h-max divide-y-[1px] rounded-[0_0_10px_10px] ${theme === "dark" ? 'bg-[#232324] divide-[#545454]' : 'bg-white divide-[#E6E6E6]'} w-full`}>
                            <div className='w-full h-full p-[20px]'>
                                <h4 className='text-[16px] font-bold mb-[12px]'>XUV400 News</h4>
                                <p className='text-[14px] leading-[24px] mb-[16px] text-justify'>Mahindra XUV400 records 10,000+ bookings on the Extended Republic Day
                                    Weekend </p>
                            </div>

                            {/* buttons */}
                            <div className='w-full h-full flex items-center justify-center pt-[10px] pb-[16px]'>
                                <button type='button' className='font-[700] rounded-[4px] w-[135px] h-[33px] p-[5px_16px] bg-[#FF3E5B] text-white text-[14px]'>
                                    View More
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Two contents */}
                    <div className={`w-full h-max rounded-[10px] border-[1px] ${theme === "dark" ? 'border-[#545454]' : 'border-[#E6E6E6]'}`}>
                        {/* headers */}
                        <div className={`w-full h-[50px] p-[16px_20px] flex gap-[10px] items-center rounded-[10px_10px_0_0] ${theme === "dark" ? 'bg-[#545454]' : 'bg-[#E6E6E6]'}`}>
                            {/* icons */}
                            <span>
                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.1595 4.25961L17.7495 2.84961L14.1895 6.39961L15.5995 7.80961C15.5995 7.80961 19.0495 4.28961 19.1595 4.25961Z" fill={`${theme === "dark" ? 'white' : 'black'}`} />
                                    <path d="M11 0H9V5H11V0Z" fill={`${theme === "dark" ? 'white' : 'black'}`} />
                                    <path d="M4.39984 7.80984L5.80984 6.39984L2.25984 2.83984L0.839844 4.25984C0.949844 4.28984 4.39984 7.80984 4.39984 7.80984Z" fill={`${theme === "dark" ? 'white' : 'black'}`} />
                                    <path d="M18 9H13C13 9.79565 12.6839 10.5587 12.1213 11.1213C11.5587 11.6839 10.7956 12 10 12C9.20435 12 8.44129 11.6839 7.87868 11.1213C7.31607 10.5587 7 9.79565 7 9H2C1.47005 9.00158 0.962265 9.2128 0.587535 9.58753C0.212805 9.96227 0.00158273 10.4701 0 11L0 16C0.00158273 16.5299 0.212805 17.0377 0.587535 17.4125C0.962265 17.7872 1.47005 17.9984 2 18H18C18.5299 17.9984 19.0377 17.7872 19.4125 17.4125C19.7872 17.0377 19.9984 16.5299 20 16V11C19.9984 10.4701 19.7872 9.96227 19.4125 9.58753C19.0377 9.2128 18.5299 9.00158 18 9V9Z" fill={`${theme === "dark" ? 'white' : 'black'}`} />
                                </svg>
                            </span>

                            {/* titles */}
                            <span>Upcoming Training</span>
                        </div>

                        {/* contents */}
                        <div className={`h-max divide-y-[1px] rounded-[0_0_10px_10px] ${theme === "dark" ? 'bg-[#232324] divide-[#545454]' : 'bg-white divide-[#E6E6E6]'} w-full`}>
                            <div className='w-full h-full p-[16px_20px]'>
                                <h4 className='text-[16px] font-bold'>Mahindra Powertrain </h4>
                                <p className={`${theme === "dark" ? 'text-[#B5B5B6]' : 'text-[#342C2C]'} text-[14px]`}>Greeting and welcoming the customer.</p>
                            </div>

                            <div className='w-full h-full p-[16px_20px]'>
                                <h4 className='text-[16px] font-bold'>Mahindra Powertrain </h4>
                                <p className={`${theme === "dark" ? 'text-[#B5B5B6]' : 'text-[#342C2C]'} text-[14px]`}>Greeting and welcoming the customer.</p>
                            </div>

                            {/* buttons */}
                            <div className='w-full h-full flex items-center justify-center pt-[10px] pb-[16px]'>
                                <button type='button' className='rounded-[4px] font-[700] w-[135px] h-[33px] p-[5px_16px] bg-[#FF3E5B] text-white text-[14px]'>
                                    View More
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* =================== Two contents ======================= */}
                    <div className={`w-full rounded-[10px] border-[1px] ${theme === "dark" ? 'border-[#545454]' : 'border-[#E6E6E6]'}`}>
                        {/* headers */}
                        <div className={`w-full h-[50px] p-[16px_20px] flex gap-[10px] items-center rounded-[10px_10px_0_0] ${theme === "dark" ? 'bg-[#545454]' : 'bg-[#E6E6E6]'}`}>
                            {/* icons */}
                            <span>
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.4167 2.75033H14.5V0.916992H12.6667V2.75033H5.33333V0.916992H3.5V2.75033H2.58333C2.34304 2.75044 2.10514 2.79801 1.88328 2.8903C1.66141 2.98259 1.45996 3.11778 1.29047 3.28812C1.12099 3.45846 0.986806 3.66059 0.895631 3.88291C0.804456 4.10523 0.75808 4.34337 0.759167 4.58366L0.75 17.417C0.75 17.9032 0.943154 18.3695 1.28697 18.7134C1.63079 19.0572 2.0971 19.2503 2.58333 19.2503H15.4167C15.9025 19.2489 16.3679 19.0553 16.7114 18.7118C17.0549 18.3683 17.2485 17.9028 17.25 17.417V4.58366C17.2485 4.09787 17.0549 3.6324 16.7114 3.2889C16.3679 2.9454 15.9025 2.75178 15.4167 2.75033V2.75033Z" fill={`${theme === "dark" ? 'white' : '#342C2C'}`} />
                                    <path d="M15.4168 17.4173H2.5835V7.33398H15.4168V17.4173Z" fill={`${theme === "dark" ? 'black' : 'white'}`} />
                                    <path d="M4.4165 9.16699H8.99984V13.7503H4.4165V9.16699Z" fill={`${theme === "dark" ? 'white' : '#342C2C'}`} />
                                </svg>
                            </span>

                            {/* titles */}
                            <h4>Birthday Calendar</h4>
                        </div>

                        {/* contents */}
                        <div className={`h-max divide-y-[1px] rounded-[0_0_10px_10px] ${theme === "dark" ? 'bg-[#232324] divide-[#545454]' : 'bg-white divide-[#E6E6E6]'} w-full`}>
                            <div className='w-full h-full flex items-center gap-[16px] p-[14px_20px]'>
                                <div className=''>
                                    {/* <img src='/userProfile.png' className='w-[36px] h-[36px] rounded-full' alt='user-images' /> */}
                                    <div className={`w-[36px] h-[36px] rounded-full border-[1px] ${theme === "dark" ? 'border-[#545454] text-black bg-white' : 'border-[#E6E6E6] text-black'} font-black text-[12px] flex items-center justify-center`}>
                                        BM
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <h4 className='text-[14px] font-bold'>Bhavin Metha</h4>
                                    <p className='text-[14px] text-[#FF3E5B]'>Today, 18th April 2023</p>
                                </div>
                            </div>

                            <div className='w-full h-full flex items-center gap-[16px] p-[14px_20px]'>
                                <div className=''>
                                    {/* <img src='/userProfile.png' className='w-[36px] h-[36px] rounded-full' alt='user-images' /> */}
                                    <div className={`w-[36px] h-[36px] rounded-full border-[1px] ${theme === "dark" ? 'border-[#545454] text-black bg-white' : 'border-[#E6E6E6] text-black'} font-black text-[12px] flex items-center justify-center`}>
                                        SS
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <h4 className='text-[14px] font-bold'>Satya Swaroop</h4>
                                    <p className='text-[14px] text-[#FF3E5B]'>Today, 18th April 2023</p>
                                </div>
                            </div>

                            <div className='w-full h-full flex items-center gap-[16px] p-[14px_20px]'>
                                <div className=''>
                                    {/* <img src='/userProfile.png' className='w-[36px] h-[36px] rounded-full' alt='user-images' /> */}
                                    <div className={`w-[36px] h-[36px] rounded-full border-[1px] ${theme === "dark" ? 'border-[#545454] text-black bg-white' : 'border-[#E6E6E6] text-black'} font-black text-[12px] flex items-center justify-center`}>
                                        MB
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <h4 className='text-[14px] font-bold'>Mohan Banoth</h4>
                                    <p className='text-[14px] text-[#FF3E5B]'>Today, 18th April 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* =================== Three contents ======================= */}
                    <div className={`w-full h-max rounded-[10px] border-[1px] ${theme === "dark" ? 'border-[#545454]' : 'border-[#E6E6E6]'}`}>
                        {/* headers */}
                        <div className={`w-full h-[50px] p-[16px_20px] flex gap-[10px] items-center rounded-[10px_10px_0_0] ${theme === "dark" ? 'bg-[#545454]' : 'bg-[#E6E6E6]'}`}>
                            {/* icons */}
                            <span>
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.8274 0.501818C16.9246 0.605947 13.1426 0.984963 10.8078 2.36308C10.6467 2.45817 10.5554 2.62725 10.5554 2.80404V14.9871C10.5554 15.3738 10.9939 15.6183 11.3637 15.4388C13.7659 14.273 17.2399 13.9549 18.9576 13.8678C19.5441 13.838 20 13.3847 20 12.8413V1.52972C20.0003 0.936749 19.467 0.466997 18.8274 0.501818ZM9.19217 2.36308C6.85776 0.984963 3.07575 0.606282 1.17294 0.501818C0.533342 0.466997 0 0.936749 0 1.52972V12.8416C0 13.3854 0.455911 13.8387 1.04238 13.8682C2.76081 13.9552 6.23657 14.2736 8.63869 15.4401C9.00745 15.6193 9.44461 15.3752 9.44461 14.9895V2.79801C9.44461 2.62089 9.35363 2.45851 9.19217 2.36308Z" fill={`${theme === "dark" ? 'white' : 'black'}`} />
                                </svg>
                            </span>

                            {/* titles */}
                            <h4>Knowledge Center</h4>
                        </div>

                        {/* contents */}
                        <div className={`h-max divide-y-[1px] rounded-[0_0_10px_10px] ${theme === "dark" ? 'bg-[#232324] divide-[#545454]' : 'bg-white divide-[#E6E6E6]'} w-full`}>
                            <div className='w-full h-full p-[16px_20px]'>
                                <h4 className='text-[16px] font-bold'>XUV700 Service Traning </h4>
                                <p className={`${theme === "dark" ? 'text-[#B5B5B6]' : 'text-[#342C2C]'} text-[14px]`}>Please click to view traning schedule</p>
                            </div>

                            <div className='w-full h-full p-[16px_20px]'>
                                <h4 className='text-[16px] font-bold'>Scorpio-N Service Traning </h4>
                                <p className={`${theme === "dark" ? 'text-[#B5B5B6]' : 'text-[#342C2C]'} text-[14px]`}>Please click to view traning schedule</p>
                            </div>

                            {/* buttons */}
                            <div className='w-full h-full flex items-center justify-center pt-[10px] pb-[16px]'>
                                <button type='button' className='rounded-[4px] font-[700] w-[135px] h-[33px] p-[5px_16px] bg-[#FF3E5B] text-white text-[14px]'>
                                    View More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewDesign