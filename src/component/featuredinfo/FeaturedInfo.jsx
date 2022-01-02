import './featuredInfo.css'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'

export default function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className="featured-item">
                <span className="featured-title">Revenue</span>
                <div className="featured-money-container">
                    <span className="featured-money">$2,415</span>
                    <span className="featured-money-rate">-11.4 <BsArrowDown className='featured-icon negative'/></span>
                </div>
                <span className="featured-sub">Compaired to last month</span>
            </div>
            <div className="featured-item">
                <span className="featured-title">Sales</span>
                <div className="featured-money-container">
                    <span className="featured-money">$2,415</span>
                    <span className="featured-money-rate">-11.4 <BsArrowDown className='featured-icon negative'/></span>
                </div>
                <span className="featured-sub">Compaired to last month</span>
            </div>
            <div className="featured-item">
                <span className="featured-title">Cost</span>
                <div className="featured-money-container">
                    <span className="featured-money">$2,415</span>
                    <span className="featured-money-rate">+3.4 <BsArrowUp className='featured-icon'/></span>
                </div>
                <span className="featured-sub">Compaired to last month</span>
            </div>
        </div>
    )
}
