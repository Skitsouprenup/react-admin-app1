import { totalUsersData } from '@/data/chartboxdata'

import { SlPeople } from "react-icons/sl"
import { Link } from 'react-router-dom'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'

const UserChartBox = () => {
  return (
    <>
    
    <div
        className='chart-info-section'
      >
        <div
          className='chart-info-section-title'
        >
          <SlPeople />
          <h4>Total Users</h4>
        </div>

        <h2>{totalUsersData.number}</h2>

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
            <LineChart width={300} height={100} data={totalUsersData.chartData}>
              <Line 
                type="monotone" 
                dataKey={totalUsersData.dataKey} 
                stroke="#8884d8" 
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
                position={{x: 25, y: 55}}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div
          className='chart-section-text'
        >
          <span
            className={
              totalUsersData.percentage > 0 ?
              'chart-section-text-percent-green' :
              'chart-section-text-percent-red'
            }
          >
            {totalUsersData.percentage + '%'}
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

export default UserChartBox