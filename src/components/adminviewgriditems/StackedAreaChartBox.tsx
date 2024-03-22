import '@/styles/adminviewgriditems/stackedareachartbox.css'

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { areaChartData } from "@/data/stackedareachartdata"

const StackedAreaChartBox = () => {
  return (
    <div className="area-chart-container">
      <h2>Sales Analytics</h2>
      <div className='area-chart-box'>
        <div className="area-chart">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart 
              data={areaChartData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="devices" stackId="1" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="peripherals" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
              <Area type="monotone" dataKey="others" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default StackedAreaChartBox