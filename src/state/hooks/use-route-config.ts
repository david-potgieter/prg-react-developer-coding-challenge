import { routeConfig } from '@core/config/routes'
import { useLocation } from 'react-router-dom'

export function useRouteConfig() {
  const location = useLocation()
  const route =
    routeConfig.filter((route) => route.path === location.pathname)[0] || {}
  return route
}
