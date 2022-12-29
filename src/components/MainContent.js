import React from 'react'
import ContentBody from './ContentBody'
import TopNav from './TopNav'

function MainContent({ theme }) {
    return (
        <>
            <div className={`w-full h-full ${theme === 'dark' ? 'text-white' : 'text-black'} xl:pl-[32px] xs:pl-[20px] xs:pr-[20px] px-[10px]`}>
                <TopNav theme={theme} />
                <ContentBody theme={theme} />
            </div>
        </>
    )
}

export default MainContent