import ErrorPage from '@core/components/layouts/error-layout'
import DashCleaning from '@core/routes/dash-cleaning'
import DashInventory from '@core/routes/dash-inventory'
import DashLanding from '@core/routes/dash-landing'
import DashOccupancy from '@core/routes/dash-occupancy'
import { createBrowserRouter } from 'react-router-dom'

export enum AppRoutes {
  DASH_LANDING = '/',
  DASH_OCCUPANCY = '/occupancy',
  DASH_CLEANING = '/cleaning',
  DASH_INVENTORY = '/inventory',
}

export enum AppRouteNames {
  DASH_LANDING = 'Dashboard',
  DASH_OCCUPANCY = 'Occupancy',
  DASH_CLEANING = 'Cleaning',
  DASH_INVENTORY = 'Inventory',
}

export const routeConfig = [
  {
    name: AppRouteNames.DASH_LANDING,
    path: AppRoutes.DASH_LANDING,
    element: <DashLanding />,
    errorElement: <ErrorPage />,
  },
  {
    name: AppRouteNames.DASH_OCCUPANCY,
    path: AppRoutes.DASH_OCCUPANCY,
    element: <DashOccupancy />,
  },
  {
    name: AppRouteNames.DASH_CLEANING,
    path: AppRoutes.DASH_CLEANING,
    element: <DashCleaning />,
  },
  {
    name: AppRouteNames.DASH_INVENTORY,
    path: AppRoutes.DASH_INVENTORY,
    element: <DashInventory />,
  },
]

export const router = createBrowserRouter(routeConfig)
