import { DashboardLayout } from '@core/components/layouts/dashboard-layout'
import { useRouteConfig } from '@core/state/hooks/useRouteConfig'

export default function DashInventory() {
  const route = useRouteConfig()
  return (
    <DashboardLayout title={route?.name}>Dashboard Inventory</DashboardLayout>
  )
}
