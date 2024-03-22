import '@/styles/adminviewgrid.css'
import TopDealsSection from './adminviewgriditems/TopDealsSection'
import ChartBox from './adminviewgriditems/ChartBox'
import UserChartBox from './adminviewgriditems/chartboxcontent/UserChartBox'
import ConversionChartBox from './adminviewgriditems/chartboxcontent/ConversionChartBox'
import ProductChartBox from './adminviewgriditems/chartboxcontent/ProductChartBox'
import RevenueChartBox from './adminviewgriditems/chartboxcontent/RevenueChartBox'
import BarChartBox from './adminviewgriditems/BarChartBox'

import { visitBarChartData, visitRevBarChartData } from '@/data/barchartdata'
import PieChartBox from './adminviewgriditems/PieChartBox'
import StackedAreaChartBox from './adminviewgriditems/StackedAreaChartBox'

const AdminViewContent = () => {
  return (
    <div className='admin-view-grid'>
      <div 
        className='grid-item top-deals-section'>
          <TopDealsSection />
      </div>
      <div className='grid-item user-chart-section'>
        <ChartBox>
          <UserChartBox />
        </ChartBox>
      </div>
      <div className='grid-item conv-chart-section'>
        <ChartBox>
          <ConversionChartBox />
        </ChartBox>
      </div>
      <div className='grid-item pie-chart'>
        <PieChartBox />
      </div>
      <div className='grid-item prod-chart-section'>
        <ChartBox>
          <ProductChartBox />
        </ChartBox>
      </div>
      <div className='grid-item rev-chart-section'>
        <ChartBox>
          <RevenueChartBox />
        </ChartBox>
      </div>
      <div className='grid-item stacked-area-chart'>
        <StackedAreaChartBox />
      </div>
      <div className='grid-item bar-chart-visit'>
        <BarChartBox data={visitBarChartData}/>
      </div>
      <div className='grid-item bar-chart-rev'>
        <BarChartBox data={visitRevBarChartData}/>
      </div>
    </div>
  )
}

export default AdminViewContent