import { RoomImage } from '@core/components/ui/image/room-image'
import { InventoryEdit } from '@core/components/ui/popover/edit-inventory'
import { TableUI } from '@core/components/ui/table/table-ui'
import { RoomClasses } from '@core/config/query-keys'
import { useTableData } from '@core/state/hooks/use-table-data'
import { RoomType, Table, cleaningColumnNames } from '@core/types/room-types'
import { cn } from '@core/utils/cn'
import { filterAndSortFlaggedRooms } from '@core/utils/filter-sort-flagged-rooms'
import { formatTime } from '@core/utils/format-time'
import { IconFlag } from '@tabler/icons-react'

const cleaningTableConfig: Table = {
  title: 'Cleaning Queue',
  description: 'List of rooms queued for cleaning',
  columns: cleaningColumnNames,
  select: (data: RoomType[]) => filterAndSortFlaggedRooms(data),
}

export function CleaningTable() {
  const { data: tableConfig, isLoading, isError } = useTableData(cleaningTableConfig)

  return (
    <TableUI config={tableConfig}>
      {isLoading ? (
        <tr>
          <td
            className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
            colSpan={cleaningColumnNames.length}>
            Loading...
          </td>
        </tr>
      ) : null}
      {tableConfig.data.map((item: RoomType) => (
        <tr key={item.room_number}>
          <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
            <div className="flex justify-start items-center align-middle space-x-4">
              {item?.flagged ? <IconFlag className="w-5 h-5 text-violet-600" /> : null}
              {item.room_number}
            </div>
          </td>
          <td className="py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
            <RoomImage src={item.image} />
          </td>
          <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
            <div className="flex justify-start align-middle items-center">
              <div
                className={cn(
                  'bg-gray-400 p-2 w-2 h-2 rounded-full mr-2',
                  item.category === RoomClasses.STANDARD && 'bg-violet-500',
                  item.category === RoomClasses.DELUXE && 'bg-sky-500',
                  item.category === RoomClasses.SUITE && 'bg-yellow-500',
                )}
              />
              {item.category}
            </div>
          </td>
          <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
            {formatTime(item.flagged_date)}
          </td>

          <td className="py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
            <InventoryEdit item={item} />
          </td>
        </tr>
      ))}
    </TableUI>
  )
}
