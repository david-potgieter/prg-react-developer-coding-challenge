import DashLanding from '@core/routes/dash-landing'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashLanding />,
  },
])
