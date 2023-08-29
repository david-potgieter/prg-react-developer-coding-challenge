import { DashboardLayout } from '@core/components/layouts/dashboard-layout'
import { useRouteConfig } from '@core/state/hooks/useRouteConfig'

export default function DashCleaning() {
  const route = useRouteConfig()
  return (
    <DashboardLayout title={route?.name}>Dashboard Cleaning</DashboardLayout>
  )
}
