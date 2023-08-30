import { QueryProvider } from '@core/state/providers/query-provider'
import { RouteProvider } from '@core/state/providers/route-provider'
import '@core/styles/index.css'

export function AppProvider() {
  return (
    <QueryProvider>
      <RouteProvider />
    </QueryProvider>
  )
}
