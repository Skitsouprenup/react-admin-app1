import { conversionRateData } from '@/data/chartboxdata'

import { SlRefresh } from "react-icons/sl";
import { Link } from 'react-router-dom'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'

const ConversionChartBox = () => {
  return (
    <>
    
    <div
        className='chart-info-section'
      >
        <div
          className='chart-info-section-title'
        >
          <SlRefresh />
          <h4>Conversion</h4>
        </div>

        <h2>{conversionRateData.number}</h2>

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
            <LineChart width={300} height={100} data={conversionRateData.chartData}>
              <Line 
                type="monotone" 
                dataKey={conversionRateData.dataKey} 
                stroke="green" 
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
                position={{x: 25, y: 50}}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div
          className='chart-section-text'
        >
          <span
            className={
              conversionRateData.percentage > 0 ?
              'chart-section-text-percent-green' :
              'chart-section-text-percent-red'
            }
          >
            {conversionRateData.percentage + '%'}
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

export default ConversionChartBox