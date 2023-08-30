import { OccupancyAveragesCard } from '@core/components/ui/widget/occupancy-widget'
import { calcAveragesByRoom } from '@core/utils/calc-averages-by-room'
import { generateOccupancyData } from '@core/utils/generateOccupancyData'

export function OccupancyAverages() {
  const data = generateOccupancyData()
  const roomAverages = calcAveragesByRoom(data)
  return (
    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {roomAverages.map(item => (
        <OccupancyAveragesCard key={item.name} item={item} />
      ))}
    </dl>
  )
}
