import { generateOccupancyData } from '@core/utils/generateOccupancyData'

export function calcBestDay() {
  const data = generateOccupancyData()
  let maxStandard = -Infinity
  let maxDeluxe = -Infinity
  let maxSuite = -Infinity
  let maxDate = null
  let maxSum = -Infinity
  let maxPercentage = '0'

  data.forEach(item => {
    maxStandard = Math.max(maxStandard, item.Standard)
    maxDeluxe = Math.max(maxDeluxe, item.Deluxe)
    maxSuite = Math.max(maxSuite, item.Suite)
  })

  const overallTotal = maxStandard + maxDeluxe + maxSuite

  data.forEach(item => {
    const sum = item.Standard + item.Deluxe + item.Suite

    if (sum > maxSum) {
      maxSum = sum
      maxDate = item.date
      maxPercentage = ((maxSum / overallTotal) * 100).toFixed(2)
    }
  })

  return {
    maxDate,
    maxSum,
    maxPercentage,
  }
}
