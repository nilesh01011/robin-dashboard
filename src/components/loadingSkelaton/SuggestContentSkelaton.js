import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SuggestContentSkelaton({ theme }) {
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

                    <div className='w-full h-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center md:gap-[40px] gap-[20px]'>
                        <div className='rounded-[10px]'>
                            <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                <Skeleton height={50} />
                            </SkeletonTheme>
                        </div>

                        <div className='rounded-[10px]'>
                            <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                <Skeleton height={50} />
                            </SkeletonTheme>
                        </div>

                        <div className='rounded-[10px]'>
                            <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                <Skeleton height={50} />
                            </SkeletonTheme>
                        </div>

                        <div className='rounded-[10px]'>
                            <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                <Skeleton height={50} />
                            </SkeletonTheme>
                        </div>
                    </div>

                    <div className='flex flex-col items-start md:gap-[40px] gap-[20px] md:mt-[40px] mt-[20px] w-full h-full'>
                        <div className='w-full rounded-[10px]'>
                            <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                <Skeleton height={360} />
                            </SkeletonTheme>
                        </div>

                        <div className='w-full flex items-center justify-between'>
                            <div className='w-[180px]'>
                                <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                    <Skeleton height={42} />
                                </SkeletonTheme>
                            </div>

                            <div className='w-full flex items-center justify-end gap-[15px]'>
                                <div className='rounded-[6px] w-[135px]'>
                                    <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                        <Skeleton height={42} />
                                    </SkeletonTheme>
                                </div>

                                <div className='rounded-[6px] w-[135px]'>
                                    <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                        <Skeleton height={42} />
                                    </SkeletonTheme>
                                </div>
                            </div>
                        </div>

                        <div className='w-full flex items-center justify-end'>
                            <div className='w-[135px]'>
                                <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                                    <Skeleton height={20} />
                                </SkeletonTheme>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SuggestContentSkelaton