import React from 'react'
import './topbar.css'
import { IoMdNotificationsOutline } from "react-icons/io"
import { MdSettings, MdLanguage } from "react-icons/md"


function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbar-wrapper">
                <div className="topleft">
                    <span className="logo">Netflix</span>
                </div>
                <div className="topright">
                    <div className="topbar-icon-container">
                        <IoMdNotificationsOutline />
                        <span className="top-icon-bag">2</span>
                    </div>
                    <div className="topbar-icon-container">
                        <MdLanguage />
                        <span className="top-icon-bag">2</span>
                    </div>
                    <div className="topbar-icon-container">
                        <MdSettings />
                    </div>
                    <img src="https://celebmafia.com/wp-content/uploads/2014/05/christina-hendricks-photocall-for-lost-river-2014-cannes-film-festival_13.jpg" alt="" className="top-avatar" />
                </div>
            </div>
        </div>
    )
}
export default Topbar;