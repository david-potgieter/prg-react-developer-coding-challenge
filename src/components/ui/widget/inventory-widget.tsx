import { DashWidget } from '@core/components/ui/widget/dash-widget'
import { AppRoutes } from '@core/config/routes'
import { useWidget } from '@core/state/hooks/use-widget-data'
import { IconHotelService } from '@tabler/icons-react'

export function InventoryWidget() {
  const initialConfig = {
    name: 'Total Rooms',
    icon: IconHotelService,
    path: AppRoutes.DASH_INVENTORY,
    showChange: false,
  }
  const { data, isLoading, isError } = useWidget(initialConfig)
  return <DashWidget item={data} />
}
