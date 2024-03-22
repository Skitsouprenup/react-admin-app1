import '@/styles/adminviewgriditems/barchartbox.css'
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'

const BarChartBox = ({data}: {data: Record<string, unknown>}) => {
  return (
    <div className='barchartbox-content'>
      <h3>{data.title as string}</h3>
      <div className='bar-chart'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={data?.charData as Array<unknown>}>
            <Bar dataKey={data?.dataKey as string} fill={data?.color as string} />
            <Tooltip
              contentStyle={{
                background: 'white',
                borderRadius: '5px',
              }}
              labelStyle={{display: 'none'}}
              cursor={{fill: 'none'}}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BarChartBox