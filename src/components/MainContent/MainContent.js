import React, { useEffect, useState } from 'react'
import ContentBody from './ContentBody'
import MainContentSkelaton from '../loadingSkelaton/MainContentSkelaton';
import TopNav from './TopNav'

function MainContent({ theme }) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    return (
        <>
            {
                isLoading ? (
                    <MainContentSkelaton theme={theme} />
                ) : (
                    <div className={`w-full h-full ${theme === 'dark' ? 'text-white' : 'text-black'} xl:pl-[32px] xs:pl-[20px] xs:pr-[20px] px-[10px]`}>
                        <TopNav theme={theme} />
                        <ContentBody theme={theme} />
                    </div>
                )
            }
        </>
    )
}

export default MainContent