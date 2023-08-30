import { useLocation } from 'react-router-dom'

export function isPathCurrent(path: string) {
  const location = useLocation()
  return location.pathname === path
}
