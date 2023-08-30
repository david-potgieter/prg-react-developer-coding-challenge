import { DashboardLayout } from '@core/components/layouts/dashboard-layout'
import { HideOnMobile } from '@core/components/layouts/hide-on-mobile'
import { ShowOnMobile } from '@core/components/layouts/show-on-mobile'
import { InventoryCards } from '@core/components/ui/card/inventory-cards'
import { InventoryTable } from '@core/components/ui/table/inventory-table'
import { useRouteConfig } from '@core/state/hooks/use-route-config'

export default function DashInventory() {
  const route = useRouteConfig()
  return (
    <DashboardLayout title={route?.name}>
      <ShowOnMobile>
        <InventoryTable />
      </ShowOnMobile>
      <HideOnMobile>
        <InventoryCards />
      </HideOnMobile>
    </DashboardLayout>
  )
}
