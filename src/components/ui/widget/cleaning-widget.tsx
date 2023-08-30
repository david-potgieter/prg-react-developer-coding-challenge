import { DashWidget } from '@core/components/ui/widget/dash-widget'
import { AppRoutes } from '@core/config/routes'
import { useWidget } from '@core/state/hooks/use-widget-data'
import { RoomType } from '@core/types/room-types'
import { IconFlag } from '@tabler/icons-react'

export function CleaningWidget() {
  const initialConfig = {
    name: 'Flagged for Cleaning',
    icon: IconFlag,
    showChange: false,
    path: AppRoutes.DASH_CLEANING,
    select: (data: RoomType[]) => data.filter((room: RoomType) => room.flagged),
  }
  const { data, isLoading, isError } = useWidget(initialConfig)
  return <DashWidget item={data} />
}
