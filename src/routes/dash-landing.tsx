import { DashboardLayout } from '@core/components/layouts/dashboard-layout'
import { useRouteConfig } from '@core/state/hooks/use-route-config'
import { DashWidgets } from '../components/ui/widget/dash-widgets'

export default function DashLanding() {
  const route = useRouteConfig()
  return (
    <DashboardLayout title={route?.name}>
      <DashWidgets />
    </DashboardLayout>
  )
}
