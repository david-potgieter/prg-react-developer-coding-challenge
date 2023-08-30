import { DashboardLayout } from '@core/components/layouts/dashboard-layout'
import { InventoryTable } from '@core/components/ui/table/inventory-table'
import { useRouteConfig } from '@core/state/hooks/use-route-config'

export default function DashInventory() {
  const route = useRouteConfig()
  return (
    <DashboardLayout title={route?.name}>
      <InventoryTable />
    </DashboardLayout>
  )
}
