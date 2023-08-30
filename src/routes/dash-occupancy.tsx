import { DashboardLayout } from '@core/components/layouts/dashboard-layout'
import { OccupancyGraph } from '@core/components/ui/chart/occupancy-graph'
import { useRouteConfig } from '@core/state/hooks/use-route-config'
import { OccupancyAverages } from '../components/ui/widget/occupancy-averages'

export default function DashOccupancy() {
  const route = useRouteConfig()
  return (
    <DashboardLayout title={route?.name}>
      <OccupancyGraph />
      <OccupancyAverages />
    </DashboardLayout>
  )
}
