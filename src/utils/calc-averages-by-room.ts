import { generateOccupancyData } from '@core/utils/generateOccupancyData'

export function calcAveragesByRoom() {
  const data = generateOccupancyData()
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
    { name: 'Standard', stat: avgStandard },
    { name: 'Deluxe', stat: avgDeluxe },
    { name: 'Suite', stat: avgSuite },
  ]
}
