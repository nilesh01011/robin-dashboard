import React from 'react'
import DesktopSidebar from './DesktopSidebar';
import MobileSidebar from './MobileSidebar';

function Navbar({ theme, handleTheme }) {

    return (
        <>
            <div className='w-max'>
                {/* desktop view sidebar */}
                <div className='slg:block hidden h-full'>
                    <DesktopSidebar theme={theme} handleTheme={handleTheme} />
                </div>
                {/* mobile view sidebar */}
                <div className='slg:hidden block h-full'>
                    <MobileSidebar theme={theme} handleTheme={handleTheme} />
                </div>
            </div>
        </>
    )
}

export default Navbar