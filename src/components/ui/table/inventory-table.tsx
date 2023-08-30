import { RoomImage } from '@core/components/ui/image/room-image'
import { InventoryEdit } from '@core/components/ui/popover/edit-inventory'
import { TableUI } from '@core/components/ui/table/table-ui'
import { useTableData } from '@core/state/hooks/use-table-data'
import { RoomType, Table, inventoryColumnNames } from '@core/types/room-types'
import { IconFlag } from '@tabler/icons-react'

const inventoryTableConfig: Table = {
  title: 'Inventory',
  description: 'View and manage your inventory',
  columns: inventoryColumnNames,
}

export function InventoryTable() {
  const { data: tableConfig, isLoading, isError } = useTableData(inventoryTableConfig)

  return (
    <TableUI config={tableConfig}>
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
            {item.category}
          </td>
          <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
            {item.description}
          </td>

          <td className="py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
            <InventoryEdit item={item} />
          </td>
        </tr>
      ))}
    </TableUI>
  )
}
