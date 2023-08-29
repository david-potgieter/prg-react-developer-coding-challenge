import { DashboardLayout } from '@core/components/layouts/dashboard-layout'
import { TableUI } from '@core/components/ui/table/table-ui'
import { useRouteConfig } from '@core/state/hooks/useRouteConfig'
import { roomColumnNames } from '@core/types/room-types'
import { getImageUrl } from '@core/utils/getimageUrl'

export function RoomsTable() {
  const tableConfig = {
    title: 'Users',
    description: 'Description of the table',
    columns: roomColumnNames,
    data: [
      {
        room_number: '101',
        category: 'Standard',
        description: 'A cozy and comfortable room with a queen-sized bed and a private bathroom.',
        image: './images/1.jpg',
      },
      {
        room_number: '102',
        category: 'Standard',
        description: 'A spacious room with two twin-sized beds and a private bathroom.',
        image: './images/2.jpg',
      },
      {
        room_number: '103',
        category: 'Standard',
        description:
          'A bright and airy room with a king-sized bed and a private balcony overlooking the garden.',
        image: './images/3.jpg',
      },
      {
        room_number: '201',
        category: 'Deluxe',
        description:
          'A luxurious room with a king-sized bed, a sitting area, and a private bathroom with a jacuzzi.',
        image: './images/4.jpg',
      },
    ],
  }

  return (
    <TableUI config={tableConfig}>
      {tableConfig.data.map(item => (
        <tr key={item.room_number}>
          <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
            {item.room_number}
          </td>
          <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
            {item.category}
          </td>
          <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
            {item.description}
          </td>
          <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
            <img
              src={getImageUrl(item.image.replace('./images/', ''))}
              alt=""
              className="h-10 w-10 rounded-xl"
            />
          </td>
        </tr>
      ))}
    </TableUI>
  )
}

export default function DashLanding() {
  const route = useRouteConfig()
  return (
    <DashboardLayout title={route?.name}>
      <RoomsTable />
    </DashboardLayout>
  )
}

// {
//   tableConfig.columns.map((column, index) => {
//     console.log(item, column, item[column.key])
//     return (
//       <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 truncate">
//         {item[column.key]}
//       </td>
//     )
//   })
// }
