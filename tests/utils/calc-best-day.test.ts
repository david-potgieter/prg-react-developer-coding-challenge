import { describe, expect, it } from 'vitest'
import { calcBestDay } from '../../src/utils/calc-best-day'

describe('calcBestDay', () => {
  it('should calculate highest occupancy date correctly', () => {
    const data = [
      { date: '2023-06-01', Standard: 71, Deluxe: 11, Suite: 58 },
      { date: '2023-06-02', Standard: 80, Deluxe: 10, Suite: 45 },
      { date: '2023-06-03', Standard: 60, Deluxe: 15, Suite: 70 },
    ]

    const result = calcBestDay(data)

    expect(result).toEqual({
      maxDate: '2023-06-03',
      maxSum: 145,
      maxPercentage: '87.88',
    })
  })
})
