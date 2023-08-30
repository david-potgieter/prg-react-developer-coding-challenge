import { DashboardLayout } from '@core/components/layouts/dashboard-layout'
import { useRouteConfig } from '@core/state/hooks/use-route-config'

export default function DashOccupancy() {
  const route = useRouteConfig()
  return <DashboardLayout title={route?.name}>Dashboard occupancy</DashboardLayout>
}
