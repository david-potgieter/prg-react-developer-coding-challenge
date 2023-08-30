import { DashWidget } from '@core/components/ui/widget/dash-widget'
import { AppRoutes } from '@core/config/routes'
import { useWidget } from '@core/state/hooks/use-widget-data'
import { calcBestDay } from '@core/utils/calc-best-day'
import { formatDate } from '@core/utils/format-date'
import { IconBed } from '@tabler/icons-react'

export function OccupancyWidget() {
  const bestDate = calcBestDay()
  const initialConfig = {
    name: 'Highest Occupancy',
    icon: IconBed,
    path: AppRoutes.DASH_OCCUPANCY,
    showChange: true,
    stat: formatDate(bestDate?.maxDate || undefined, 'dd MMM'),
    change: `${bestDate.maxPercentage}%`,
    changeType: 'increase',
  }
  const { data, isLoading, isError } = useWidget(initialConfig)
  return <DashWidget item={data} />
}
