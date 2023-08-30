import { router } from '@core/config/routes'
import { RouterProvider } from 'react-router-dom'

export function RouteProvider() {
  return <RouterProvider router={router} />
}
