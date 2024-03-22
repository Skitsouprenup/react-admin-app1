import '@/styles/adminviewgriditems/piechartbox.css'

import { pieChartData } from '@/data/piechartdata'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const PieChartBox = () => {
  return (
    <div className='pie-chartbox-container'>
      <h2>Leads</h2>

      <div className='pie-chart'>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart >
            <Pie
              data={pieChartData}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {pieChartData.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                background: 'white',
                borderRadius: '5px',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className='pie-chart-label-section'>
        {
          pieChartData.map((item) => (
            <div className='pie-chart-label' key={item.name}>
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '10px',
                  backgroundColor: item.color
                }}
              ></div>

              <p>{item.name}</p>
              <p>{item.value}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PieChartBox