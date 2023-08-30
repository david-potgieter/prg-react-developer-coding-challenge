import { DashboardLayout } from '@core/components/layouts/dashboard-layout'
import { HideOnMobile } from '@core/components/layouts/hide-on-mobile'
import { ShowOnMobile } from '@core/components/layouts/show-on-mobile'
import { CleaningCards } from '@core/components/ui/card/cleaning-cards'
import { CleaningTable } from '@core/components/ui/table/cleaning-table'
import { useRouteConfig } from '@core/state/hooks/use-route-config'

export default function DashCleaning() {
  const route = useRouteConfig()
  return (
    <DashboardLayout title={route?.name}>
      <ShowOnMobile>
        <CleaningTable />
      </ShowOnMobile>
      <HideOnMobile>
        <CleaningCards />
      </HideOnMobile>
    </DashboardLayout>
  )
}
