import { DashWidget } from '@core/components/ui/widget/dash-widget'
import { AppRoutes } from '@core/config/routes'
import { useWidget } from '@core/state/hooks/use-widget-data'
import { AveragesWidget } from '@core/types/room-types'
import { calcBestDay } from '@core/utils/calc-best-day'
import { cn } from '@core/utils/cn'
import { formatDate } from '@core/utils/format-date'
import { generateOccupancyData } from '@core/utils/generateOccupancyData'
import { IconBed } from '@tabler/icons-react'

export function OccupancyWidget() {
  const data = generateOccupancyData()
  const bestDate = calcBestDay(data)
  const initialConfig = {
    name: 'Highest Occupancy',
    icon: IconBed,
    path: AppRoutes.DASH_OCCUPANCY,
    showChange: true,
    stat: formatDate(bestDate?.maxDate || undefined, 'dd MMM'),
    change: `${bestDate.maxPercentage}%`,
    changeType: 'increase',
  }
  const { data: item, isLoading, isError } = useWidget(initialConfig)
  return <DashWidget item={item} />
}

export function OccupancyAveragesCard({ item }: { item: AveragesWidget }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 mt-10">
      <dt className={cn('truncate text-sm font-medium', item.color)}>{item.name}</dt>
      <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-700">{item.stat}%</dd>
    </div>
  )
}
