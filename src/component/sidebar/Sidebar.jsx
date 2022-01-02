import './sidebar.css'
import { MdLineStyle, MdTimeline, MdTrendingUp, MdProductionQuantityLimits, MdOutlineAttachMoney, MdDynamicFeed, MdReport } from 'react-icons/md'
import { FaRegUser } from 'react-icons/fa'
import { VscGraph } from 'react-icons/vsc'
import { GoMail } from 'react-icons/go'
import { BsChatRight, BsBriefcase } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Dashbord</h3>
                    <ul className="sidebar-list">
                        <Link to='/' className='link'>
                            <li className="sidebar-list-item active">
                            <MdLineStyle className='sidebar-icon'/>Home
                            </li>
                        </Link>
                        <Link to="/analytics" className='link'>
                            <li className="sidebar-list-item">
                            <MdTimeline className='sidebar-icon'/>Analytics
                            </li>
                        </Link>
                        <Link to="/sales" className='link'>
                            <li className="sidebar-list-item">
                            <MdTrendingUp className='sidebar-icon'/>Sales
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Quick Menu</h3>
                    <ul className="sidebar-list">
                        <Link to='/users' className='link'>
                            <li className="sidebar-list-item">
                            <FaRegUser className='sidebar-icon'/>User
                            </li>
                        </Link>
                        <Link to="/products" className='link'>
                            <li className="sidebar-list-item">
                            <MdProductionQuantityLimits className='sidebar-icon'/>Products
                            </li>
                        </Link>
                        <Link to="/transactions" className='link'>
                            <li className="sidebar-list-item">
                            <MdOutlineAttachMoney className='sidebar-icon'/>Transactions
                            </li>
                        </Link>
                        <Link to="/report" className='link'>
                            <li className="sidebar-list-item">
                            <VscGraph className='sidebar-icon'/>Report
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Notification</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                        <GoMail className='sidebar-icon'/>Mail
                        </li>
                        <li className="sidebar-list-item">
                        <MdDynamicFeed className='sidebar-icon'/>FeedBack
                        </li>
                        <li className="sidebar-list-item">
                        <BsChatRight className='sidebar-icon'/>Massages
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Others</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                        <BsBriefcase className='sidebar-icon'/>Manage
                        </li>
                        <li className="sidebar-list-item">
                        <MdTimeline className='sidebar-icon'/>Analytics
                        </li>
                        <li className="sidebar-list-item">
                        <MdReport className='sidebar-icon'/>Report
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
