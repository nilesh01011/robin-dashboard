import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function MainContentSkelaton({ theme }) {
    return (
        <>
            <div className={`w-full h-max ${theme === 'dark' ? 'text-white' : 'text-black'} xs:pl-[20px] xs:pr-[20px] px-[10px] mb-[25px] -z-[1]`}>
                {/* top navbar */}
                <div className='max-h-[62px] py-[17px] flex items-center justify-between'>
                    {/* main title */}
                    <div className='lg:w-[220px] w-[180px]'>
                        <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                            <Skeleton height={20} />
                            <div className='flex items-center gap-[10px]'>
                                <Skeleton width={105} height={10} />
                                {/* <Skeleton width={103} height={10} /> */}
                            </div>
                        </SkeletonTheme>
                    </div>
                    {/* <div className='1x1:w-[360px] w-[329px] h-[32px]'>
                        <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                            <Skeleton height={32} />
                        </SkeletonTheme>
                    </div> */}
                    <div className='flex items-center gap-6'>
                        {/* notification icons */}
                        <div className='h-[30px] w-[30px] rounded-[5px]'>
                            <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                <Skeleton height={30} />
                            </SkeletonTheme>
                        </div>
                        {/* help desk */}
                        <div className='flex items-center gap-[5px]'>
                            <div className='h-[30px] w-[30px] rounded-[5px]'>
                                <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                    <Skeleton height={30} />
                                </SkeletonTheme>
                            </div>
                            <div className='leading-[15px] sm:block hidden'>
                                <div className='w-max'>
                                    <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                        <Skeleton height={8} width={120} />
                                    </SkeletonTheme>
                                </div>
                                {/* <div className=' w-[57px]'>
                                    <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                        <Skeleton height={6} />
                                    </SkeletonTheme>
                                </div> */}
                            </div>
                        </div>
                        {/* user profile */}
                        <div className=' flex items-center gap-[5px]'>
                            <div className='h-[30px] w-[30px] rounded-full'>
                                <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                    <Skeleton height={30} />
                                </SkeletonTheme>
                            </div>
                            <div className='leading-[10px] sm:block hidden'>
                                <div className='w-[80px]'>
                                    <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                        <Skeleton height={6} />
                                    </SkeletonTheme>
                                </div>
                                <div className='w-[120px]'>
                                    <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                        <Skeleton height={6} />
                                    </SkeletonTheme>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* main content box */}
                <div className='w-full mt-[15px]'>
                    {/* DASHBOARD title */}
                    <div className='w-[150px] mb-[1rem]'>
                        <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                            <Skeleton height={30} />
                        </SkeletonTheme>
                    </div>
                    {/* <div className='flex xl:flex-row flex-col justify-between'>
                        left sides
                        <div className='xl:w-[69%] w-full'>
                            <div>
                                main box content
                                <div className='flex flex-col gap-[22px] h-max w-full'>
                                    1
                                    <div className='h-[164px] rounded-lg'>
                                        <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                            <Skeleton height={164} />
                                        </SkeletonTheme>
                                    </div>
                                    2
                                    <div className='h-[164px] rounded-lg'>
                                        <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                            <Skeleton height={164} />
                                        </SkeletonTheme>
                                    </div>
                                    3
                                    <div className='h-[164px] rounded-lg'>
                                        <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                            <Skeleton height={164} />
                                        </SkeletonTheme>
                                    </div>
                                    4
                                    <div className='h-[164px] rounded-lg'>
                                        <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                            <Skeleton height={164} />
                                        </SkeletonTheme>
                                    </div>
                                </div>
                            </div>
                        </div>
                        right sides
                        <div className='xl:w-[28%] w-full xl:mt-0 mt-[20px] lg:mb-0 mb-[25px]'>
                            configuration
                            <div className='flex items-center justify-between'>
                                <div className='w-[135px] rounded-lg'>
                                    <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                        <Skeleton height={40} />
                                    </SkeletonTheme>
                                </div>
                                <div className='w-[100px]'>
                                    <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                        <Skeleton height={20} />
                                    </SkeletonTheme>
                                </div>
                            </div>

                            <div className='mt-[1.4rem] flex flex-col gap-[20px]'>
                                action box
                                <div className='w-full rounded-lg'>
                                    <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                        <Skeleton height={162} />
                                    </SkeletonTheme>
                                </div>
                                news box
                                <div className='w-full rounded-lg'>
                                    <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                        <Skeleton height={166} />
                                    </SkeletonTheme>
                                </div>
                                upcoming news box
                                <div className='w-full rounded-lg'>
                                    <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                        <Skeleton height={220} />
                                    </SkeletonTheme>
                                </div>
                                calendar box
                                <div className='w-full rounded-lg'>
                                    <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                        <Skeleton height={48} />
                                    </SkeletonTheme>
                                </div>
                                upcoming news box
                                <div className='w-full rounded-lg'>
                                    <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                        <Skeleton height={48} />
                                    </SkeletonTheme>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start sm:gap-[40px] gap-[20px] w-full h-full'>
                        <div className='rounded-[10px]'>
                            <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                <Skeleton height={280} />
                            </SkeletonTheme>
                        </div>

                        <div className='rounded-[10px]'>
                            <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                <Skeleton height={280} />
                            </SkeletonTheme>
                        </div>

                        <div className='rounded-[10px]'>
                            <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                <Skeleton height={280} />
                            </SkeletonTheme>
                        </div>

                        <div className='rounded-[10px]'>
                            <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                <Skeleton height={280} />
                            </SkeletonTheme>
                        </div>

                        <div className='rounded-[10px]'>
                            <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                <Skeleton height={280} />
                            </SkeletonTheme>
                        </div>

                        <div className='rounded-[10px]'>
                            <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                <Skeleton height={280} />
                            </SkeletonTheme>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContentSkelaton