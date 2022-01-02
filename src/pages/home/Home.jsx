import Chart from '../../component/chart/Chart'
import FeaturedInfo from '../../component/featuredinfo/FeaturedInfo'
import './home.css'
import { userData } from '../../dummyData'
import WidgetSm from '../../component/widgetSmall/WidgetSm'
import WidgetLg from '../../component/widgetLg/WidgetLg'

export default function Home() {
    return (
        <div className='home'> 
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="active user"/>
            <div className="home-widget">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
