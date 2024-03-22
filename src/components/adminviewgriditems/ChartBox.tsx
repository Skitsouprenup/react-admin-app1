import '@/styles/adminviewgriditems/chartbox.css'
import { ReactNode } from 'react'

const ChartBox = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className='chartbox-content'
    >
      {children}
    </div>
  )
}

export default ChartBox