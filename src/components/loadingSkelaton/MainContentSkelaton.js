import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function MainContentSkelaton({ theme }) {
    return (
        <>
            <div className={`w-full h-max ${theme === 'dark' ? 'text-white' : 'text-black'} xs:pl-[20px] xs:pr-[20px] px-[10px] mb-[25px]`}>
                {/* top navbar */}
                <div className='max-h-[70px] py-[17px] flex items-center justify-end'>
                    <div className='flex items-center gap-6'>
                        {/* notification icons */}
                        <div className='h-[22px] w-[22px] rounded-[5px]'>
                            <SkeletonTheme>
                                <Skeleton height={20} />
                            </SkeletonTheme>
                        </div>
                        {/* help desk */}
                        <div className='flex items-center gap-[5px]'>
                            <div className='h-[22px] w-[22px] rounded-[5px]'>
                                <Skeleton height={20} />
                            </div>
                            <div className='leading-[10px]'>
                                <div className=' w-[40px]'>
                                    <Skeleton height={3} />
                                </div>
                                <div className=' w-[57px]'>
                                    <Skeleton height={3} />
                                </div>
                            </div>
                        </div>
                        {/* user profile */}
                        <div className='flex items-center gap-[5px]'>
                            <div className='h-[22px] w-[22px] rounded-[5px]'>
                                <Skeleton height={20} />
                            </div>
                            <div className='leading-[10px]'>
                                <div className=' w-[40px]'>
                                    <Skeleton height={3} />
                                </div>
                                <div className='w-[57px]'>
                                    <Skeleton height={3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* main content box */}
                <div className='w-full mt-[15px]'>
                    {/* DASHBOARD title */}
                    <div className='w-[100px]'>
                        <Skeleton height={30} />
                    </div>
                    <div className='flex justify-between'>
                        {/* left sides */}
                        <div className='xl:w-[69%] w-full'>
                            <div>
                                {/* main title */}
                                <div className='w-[200px] my-[1rem]'>
                                    <Skeleton height={30} />
                                </div>
                                {/* main box content */}
                                <div className='flex flex-col gap-[22px] h-max w-full'>
                                    {/* 1 */}
                                    <div className='h-[164px] rounded-lg'>
                                        <SkeletonTheme>
                                            <Skeleton height={164} />
                                        </SkeletonTheme>
                                    </div>
                                    {/* 2 */}
                                    <div className='h-[164px] rounded-lg'>
                                        <SkeletonTheme>
                                            <Skeleton height={164} />
                                        </SkeletonTheme>
                                    </div>
                                    {/* 3 */}
                                    <div className='h-[164px] rounded-lg'>
                                        <SkeletonTheme>
                                            <Skeleton height={164} />
                                        </SkeletonTheme>
                                    </div>
                                    {/* 4 */}
                                    <div className='h-[164px] rounded-lg'>
                                        <SkeletonTheme>
                                            <Skeleton height={164} />
                                        </SkeletonTheme>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* right sides */}
                        <div className='xl:w-[28%] w-full xl:mt-0 mt-[20px] lg:mb-0 mb-[25px]'>
                            {/* configuration */}
                            <div className='flex items-center justify-between'>
                                <div className='w-[135px] rounded-lg'>
                                    <Skeleton height={40} />
                                </div>
                                <div className='w-[100px]'>
                                    <Skeleton height={20} />
                                </div>
                            </div>

                            <div className='mt-[1.4rem] flex flex-col gap-[20px]'>
                                {/* action box */}
                                <div className='w-full rounded-lg'>
                                    <Skeleton height={162} />
                                </div>
                                {/* news box */}
                                <div className='w-full rounded-lg'>
                                    <Skeleton height={166} />
                                </div>
                                {/* upcoming news box */}
                                <div className='w-full rounded-lg'>
                                    <Skeleton height={220} />
                                </div>
                                {/* calendar box */}
                                <div className='w-full rounded-lg'>
                                    <Skeleton height={48} />
                                </div>
                                {/* upcoming news box */}
                                <div className='w-full rounded-lg'>
                                    <Skeleton height={48} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContentSkelaton