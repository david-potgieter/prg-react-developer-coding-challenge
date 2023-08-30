import { describe, expect, it } from 'vitest'
import { calcAveragesByRoom } from '../../src/utils/calc-averages-by-room'

describe('calcAveragesByRoom', () => {
  it('should calculate averages correctly', () => {
    const mockedData = [
      { date: '2023-06-01', Standard: 71, Deluxe: 11, Suite: 58 },
      { date: '2023-06-02', Standard: 80, Deluxe: 10, Suite: 45 },
      { date: '2023-06-03', Standard: 60, Deluxe: 15, Suite: 70 },
    ]

    const result = calcAveragesByRoom(mockedData)

    expect(result).toEqual([
      { name: 'Standard', stat: '70.33', color: 'text-violet-500' },
      { name: 'Deluxe', stat: '12.00', color: 'text-sky-500' },
      { name: 'Suite', stat: '57.67', color: 'text-yellow-500' },
    ])
  })
})
