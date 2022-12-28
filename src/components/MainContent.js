import React from 'react'
import ContentBody from './ContentBody'
import TopNav from './TopNav'

function MainContent({ theme }) {
    return (
        <>
            <div className={`w-full h-full ${theme === 'dark' ? 'text-white' : 'text-black'} xl:pl-[32px] pl-[20px] pr-[20px]`}>
                <TopNav theme={theme} />
                <ContentBody theme={theme} />
            </div>
        </>
    )
}

export default MainContent