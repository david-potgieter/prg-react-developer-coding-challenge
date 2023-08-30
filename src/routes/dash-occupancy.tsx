import { DashboardLayout } from '@core/components/layouts/dashboard-layout'
import { useRouteConfig } from '@core/state/hooks/use-route-config'
import { OccupancyGraph } from '../components/ui/chart/occupancy-graph'

export default function DashOccupancy() {
  const route = useRouteConfig()
  return (
    <DashboardLayout title={route?.name}>
      <div className="w-full h-screen max-h-72">
        <OccupancyGraph />
      </div>
    </DashboardLayout>
  )
}
