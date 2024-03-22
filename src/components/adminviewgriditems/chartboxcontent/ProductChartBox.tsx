import { productsData } from '@/data/chartboxdata'

import { SlHandbag } from "react-icons/sl"
import { Link } from 'react-router-dom'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'

const ProductChartBox = () => {
  return (
    <>
    
    <div
        className='chart-info-section'
      >
        <div
          className='chart-info-section-title'
        >
          <SlHandbag />
          <h4>Products</h4>
        </div>

        <h2>{productsData.number}</h2>

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
            <LineChart width={300} height={100} data={productsData.chartData}>
              <Line 
                type="monotone" 
                dataKey={productsData.dataKey} 
                stroke="teal" 
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
                position={{x: 5, y: 50}}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div
          className='chart-section-text'
        >
          <span
            className={
              productsData.percentage > 0 ?
              'chart-section-text-percent-green' :
              'chart-section-text-percent-red'
            }
          >
            {productsData.percentage + '%'}
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

export default ProductChartBox