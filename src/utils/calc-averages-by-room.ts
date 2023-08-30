import { OccupancyData } from '@core/types/room-types'

export function calcAveragesByRoom(data: OccupancyData[]) {
  let sumStandard = 0
  let sumDeluxe = 0
  let sumSuite = 0
  let totalDays = 0

  data.forEach(item => {
    sumStandard += item.Standard
    sumDeluxe += item.Deluxe
    sumSuite += item.Suite
    totalDays++
  })

  const avgStandard = (sumStandard / totalDays).toFixed(2)
  const avgDeluxe = (sumDeluxe / totalDays).toFixed(2)
  const avgSuite = (sumSuite / totalDays).toFixed(2)

  return [
    { name: 'Standard', stat: avgStandard, color: 'text-violet-500' },
    { name: 'Deluxe', stat: avgDeluxe, color: 'text-sky-500' },
    { name: 'Suite', stat: avgSuite, color: 'text-yellow-500' },
  ]
}
