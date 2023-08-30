import { DashboardLayout } from '@core/components/layouts/dashboard-layout'
import { InventoryCards } from '@core/components/ui/card/inventory-cards'
import { InventoryTable } from '@core/components/ui/table/inventory-table'
import { useRouteConfig } from '@core/state/hooks/use-route-config'

export default function DashInventory() {
  const route = useRouteConfig()
  return (
    <DashboardLayout title={route?.name}>
      <div className="hidden lg:block">
        <InventoryTable />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
        <InventoryCards />
      </div>
    </DashboardLayout>
  )
}
