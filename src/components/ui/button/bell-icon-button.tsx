import { AppRoutes } from '@core/config/routes'
import { useInventory } from '@core/state/hooks/use-inventory'
import { RoomType } from '@core/types/room-types'
import { filterAndSortFlaggedRooms } from '@core/utils/filter-sort-flagged-rooms'
import { IconFlag, IconFlagPlus } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

export function BellIconButton() {
  const select = (data: RoomType[]) => filterAndSortFlaggedRooms(data)
  const { data } = useInventory(select)
  const size = data?.length || 0
  return (
    <Link
      to={AppRoutes.DASH_CLEANING}
      className="transition ease-in-out delay-100 relative rounded-full bg-gray-100 dark:bg-gray-800 p-1 text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-white focus:outline-none">
      <span className="absolute -inset-1.5" />
      <span className="sr-only">View notifications</span>
      {size > 0 ? (
        <IconFlagPlus className="h-6 w-6 text-violet-500" aria-hidden="true" />
      ) : (
        <IconFlag className="h-6 w-6" aria-hidden="true" />
      )}
    </Link>
  )
}
