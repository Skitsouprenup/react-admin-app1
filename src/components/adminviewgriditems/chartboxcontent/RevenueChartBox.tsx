import { revenueData } from '@/data/chartboxdata'

import { SlEnergy } from "react-icons/sl";
import { Link } from 'react-router-dom'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'

const RevenueChartBox = () => {
  return (
    <>
    
    <div
        className='chart-info-section'
      >
        <div
          className='chart-info-section-title'
        >
          <SlEnergy />
          <h4>Revenue</h4>
        </div>

        <h2>{revenueData.number}</h2>

        <div>
          <Link 
            to="/" 
            className='chartbox-view-all-link'
          >
            View All
          </Link>
        </div>

      </div>

      <div
        className='chart-section'
      >
        <div
          className='chartbox-tiny-chart'
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={revenueData.chartData}>
              <Line 
                type="monotone" 
                dataKey={revenueData.dataKey} 
                stroke="gold" 
                strokeWidth={1} 
              />
              <Tooltip 
                contentStyle={{
                  background: 'transparent',
                  border: 'none'
                }}
                labelStyle={{
                  display: 'none'
                }}
                position={{x: 5, y: 55}}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div
          className='chart-section-text'
        >
          <span
            className={
              revenueData.percentage > 0 ?
              'chart-section-text-percent-green' :
              'chart-section-text-percent-red'
            }
          >
            {revenueData.percentage + '%'}
          </span>
          <span
            className='chart-section-text-duration'
          >
            This Month
          </span>
        </div>
      </div>
    </>
  )
}

export default RevenueChartBox