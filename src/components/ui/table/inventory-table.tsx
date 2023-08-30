import { RoomImage } from '@core/components/ui/image/room-image'
import { InventoryEdit } from '@core/components/ui/popover/edit-inventory'
import { TableUI } from '@core/components/ui/table/table-ui'
import { useTableData } from '@core/state/hooks/use-table-data'
import { RoomType, Table, roomColumnNames } from '@core/types/room-types'

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
            <RoomImage src={item.image} />
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
