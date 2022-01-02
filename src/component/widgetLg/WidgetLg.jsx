import './widgetLg.css'

export default function WidgetLg() {
    const Button = ({type}) => {
        return <button className={'widget-lg-btn ' + type}>{type}</button>
    }
    return (
        <div className='widget-lg'>
            <h3 className="widget-lg-title">Lastest Transaction</h3>
            <table className="widget-lg-table">
                <tr className="widget-lg-tr">
                    <th className="widget-lg-th">Customer</th>
                    <th className="widget-lg-th">Date</th>
                    <th className="widget-lg-th">Amount</th>
                    <th className="widget-lg-th">Status</th>
                </tr>
                <tr className="widget-lg-tr">
                    <td className="widget-lg-user">
                        <img src="https://celebmafia.com/wp-content/uploads/2015/09/jessica-alba-narciso-rodriguez-show-at-spring-2016-ny-fashion-week_23.jpg" alt="" className="widget-lg-img" />
                        <span className="widget-lg-name">Susan Carol</span>
                    </td>
                    <td className="widget-lg-date">12/30/2021</td>
                    <td className="widget-lg-amount">$12.60</td>
                    <td className="widget-lg-status"><Button type="Declined"/></td>
                </tr>
                <tr className="widget-lg-tr">
                    <td className="widget-lg-user">
                        <img src="https://celebmafia.com/wp-content/uploads/2015/09/jessica-alba-narciso-rodriguez-show-at-spring-2016-ny-fashion-week_23.jpg" alt="" className="widget-lg-img" />
                        <span className="widget-lg-name">Susan Carol</span>
                    </td>
                    <td className="widget-lg-date">12/30/2021</td>
                    <td className="widget-lg-amount">$12.60</td>
                    <td className="widget-lg-status"><Button type="Success"/></td>
                </tr>
                <tr className="widget-lg-tr">
                    <td className="widget-lg-user">
                        <img src="https://celebmafia.com/wp-content/uploads/2015/09/jessica-alba-narciso-rodriguez-show-at-spring-2016-ny-fashion-week_23.jpg" alt="" className="widget-lg-img" />
                        <span className="widget-lg-name">Susan Carol</span>
                    </td>
                    <td className="widget-lg-date">12/30/2021</td>
                    <td className="widget-lg-amount">$12.60</td>
                    <td className="widget-lg-status"><Button type="Pending"/></td>
                </tr>
                <tr className="widget-lg-tr">
                    <td className="widget-lg-user">
                        <img src="https://celebmafia.com/wp-content/uploads/2015/09/jessica-alba-narciso-rodriguez-show-at-spring-2016-ny-fashion-week_23.jpg" alt="" className="widget-lg-img" />
                        <span className="widget-lg-name">Susan Carol</span>
                    </td>
                    <td className="widget-lg-date">12/30/2021</td>
                    <td className="widget-lg-amount">$12.60</td>
                    <td className="widget-lg-status"><Button type="Success"/></td>
                </tr>
                <tr className="widget-lg-tr">
                    <td className="widget-lg-user">
                        <img src="https://celebmafia.com/wp-content/uploads/2015/09/jessica-alba-narciso-rodriguez-show-at-spring-2016-ny-fashion-week_23.jpg" alt="" className="widget-lg-img" />
                        <span className="widget-lg-name">Susan Carol</span>
                    </td>
                    <td className="widget-lg-date">12/30/2021</td>
                    <td className="widget-lg-amount">$12.60</td>
                    <td className="widget-lg-status"><Button type="Declined"/></td>
                </tr>
            </table>
        </div>
    )
}
