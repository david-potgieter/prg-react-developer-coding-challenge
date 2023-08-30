import { InventoryEdit } from '@core/components/ui/popover/edit-inventory'
import { TableUI } from '@core/components/ui/table/table-ui'
import { useTableData } from '@core/state/hooks/use-table-data'
import { RoomType, Table, roomColumnNames } from '@core/types/room-types'
import { getImageUrl } from '@core/utils/get-image-url'

const inventoryTableConfig: Table = {
  title: 'Inventory',
  description: 'View and manage your inventory',
  columns: roomColumnNames,
}

export function InventoryTable() {
  const { data: tableConfig, isLoading, isError } = useTableData(inventoryTableConfig)

  return (
    <TableUI config={tableConfig}>
      {tableConfig.data.map((item: RoomType) => (
        <tr key={item.room_number}>
          <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
            {item.room_number}
          </td>
          <td className="py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
            <img
              src={getImageUrl(item.image.replace('./images/', ''))}
              alt=""
              className="h-10 w-10 rounded-xl"
            />
          </td>
          <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
            {item.category}
          </td>
          <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
            {item.description}
          </td>

          <td className="py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
            <InventoryEdit />
          </td>
        </tr>
      ))}
    </TableUI>
  )
}
