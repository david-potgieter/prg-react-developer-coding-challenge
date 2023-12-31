import { formatDate } from '@core/utils/format-date'
import { generateOccupancyData } from '@core/utils/generateOccupancyData'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export const xAxisTick = (props: any) => {
  const { x, y, payload } = props

  return (
    <g>
      <text x={x} y={y} fill="#666" fontSize={12} textAnchor="middle" dy={15}>
        {formatDate(payload.value, 'dd MMM')}
      </text>
    </g>
  )
}
export const yAxisTick = (props: any) => {
  const { x, y, payload } = props

  return (
    <g>
      <text x={x} y={y} fill="#666" fontSize={12} textAnchor="middle" dx={-10} dy={4}>
        {payload.value}
      </text>
    </g>
  )
}

export function OccupancyGraph() {
  const rawData = generateOccupancyData()

  return (
    <div className="w-full h-screen max-h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={rawData}
          margin={{
            top: 15,
            right: 0,
            left: -30,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={xAxisTick} />
          <YAxis tick={yAxisTick} />
          <Tooltip />
          <Legend wrapperStyle={{ bottom: -15 }} />
          <Line type="monotone" dataKey="Standard" stroke="#8b5cf6" />
          <Line type="monotone" dataKey="Deluxe" stroke="#0ea5e9" />
          <Line type="monotone" dataKey="Suite" stroke="#eab308" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
