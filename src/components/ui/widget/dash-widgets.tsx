import { CleaningWidget } from '@core/components/ui/widget/cleaning-widget'
import { InventoryWidget } from '@core/components/ui/widget/inventory-widget'
import { OccupancyWidget } from '@core/components/ui/widget/occupancy-widget'

export function DashWidgets() {
  return (
    <div>
      <h3 className="text-base font-semibold leading-6 text-gray-900">Property Snapshot</h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <InventoryWidget />
        <CleaningWidget />
        <OccupancyWidget />
      </dl>
    </div>
  )
}
