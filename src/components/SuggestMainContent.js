import React, { useEffect, useState } from 'react'
// import MainContentSkelaton from './loadingSkelaton/MainContentSkelaton';
import SuggestContentSkelaton from './loadingSkelaton/SuggestContentSkelaton';
// import ContentBody from './MainContent/ContentBody';
import SuggestContentBody from './MainContent/SuggestContentBody';
import TopNav from './MainContent/TopNav';

function SuggestMainContent({ theme }) {
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
                    <SuggestContentSkelaton theme={theme} />
                ) : (
                    <div className={`w-full h-full ${theme === 'dark' ? 'text-white' : 'text-black'} xl:pl-[32px] xs:pl-[20px] xs:pr-[20px] px-[10px]`}>
                        <TopNav theme={theme} />
                        <SuggestContentBody theme={theme} />
                    </div>
                )
            }
        </>
    )
}

export default SuggestMainContent