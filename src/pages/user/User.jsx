import './user.css'
import { MdPermIdentity, MdOutlineEditCalendar, MdPhone, MdOutlineMail, MdLocationCity, MdPublish } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function User() {
    return (
        <div className='user'>
            <div className="user-title-container">
                <h1 className="user-title">Edit user</h1>
                <Link to="/newUser">
                    <button className="user-add-btn">Create</button>
                </Link>
            </div>
            <div className="user-container">
                <div className="user-show">
                    <div className="user-show-top">
                        <img src="http://4.bp.blogspot.com/-zRePsYRNSV8/UoSk05jkUhI/AAAAAAAAGc8/KPoX0F-18PA/s1600/scarlett-johansson-unseen-hot-pic-Fashion.jpg" alt="" className="user-show-img" />
                        <div className="user-show-top-title">
                            <span className="user-show-username">Aanna Backlin</span>
                            <span className="user-show-usertitle">Software developer</span>
                        </div>
                    </div>
                    <div className="user-show-buttom">
                        <span className="user-show-title">Account Detail</span>
                        <div className="user-show-info">
                            <MdPermIdentity className='user-show-icon' />
                            <span className="user-show-info-title">annaback88</span>
                        </div>
                        <div className="user-show-info">
                            <MdOutlineEditCalendar className='user-show-icon' />
                            <span className="user-show-info-title">15-may-1992</span>
                        </div>
                        <span className="user-show-title">Contact Detail</span>
                        <div className="user-show-info">
                            <MdPhone className='user-show-icon' />
                            <span className="user-show-info-title">+91 9234 352 666</span>
                        </div>
                        <div className="user-show-info">
                            <MdOutlineMail className='user-show-icon' />
                            <span className="user-show-info-title">annaback88@yahoo.com</span>
                        </div>
                        <div className="user-show-info">
                            <MdLocationCity className='user-show-icon' />
                            <span className="user-show-info-title">Shilong | India</span>
                        </div>
                    </div>
                </div>
                <div className="user-update">
                    <span className="user-update-title">Edit detials</span>
                    <form action="" className="user-update-form">
                        <div className="user-update-left">
                            <div className="user-update-item">
                                <label>Username</label>
                                <input type="text" placeholder="annaback88" className="user-update-input" />
                            </div>
                            <div className="user-update-item">
                                <label>Full Name</label>
                                <input type="text" placeholder="Aanna Backlin" className="user-update-input" />
                            </div>
                            <div className="user-update-item">
                                <label>DOB</label>
                                <input type="text" placeholder="15-may-1992" className="user-update-input" />
                            </div>
                            <div className="user-update-item">
                                <label>Email</label>
                                <input type="text" placeholder="annaback88@yahoo.com" className="user-update-input" />
                            </div>
                            <div className="user-update-item">
                                <label>Phone</label>
                                <input type="text" placeholder="+91 9234 352 666" className="user-update-input" />
                            </div>
                            <div className="user-update-item">
                                <label>Address</label>
                                <input type="text" placeholder="Shilong | India" className="user-update-input" />
                            </div>
                        </div>
                        <div className="user-update-right">
                            <div className="user-update-upload">
                                <img src="http://4.bp.blogspot.com/-zRePsYRNSV8/UoSk05jkUhI/AAAAAAAAGc8/KPoX0F-18PA/s1600/scarlett-johansson-unseen-hot-pic-Fashion.jpg" alt="" className="user-update-img" />
                                <label htmlFor="file">
                                    <MdPublish className='user-update-icon' />
                                </label>
                                <input type="file" id="file" style={{ display: 'none' }} />
                            </div>
                            <button className="user-update-btn">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
