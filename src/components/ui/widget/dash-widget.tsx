import { Widget } from '@core/types/room-types'
import { cn } from '@core/utils/cn'
import { IconArrowDown, IconArrowUp } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

export function DashWidget({ item }: { item: Widget }) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
      <dt>
        <div className="absolute rounded-md bg-indigo-500 p-3">
          <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
      </dt>
      <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
        <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
        {item?.showChange ? (
          <p
            className={cn(
              item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
              'ml-2 flex items-baseline text-sm font-semibold',
            )}>
            {item.changeType === 'increase' ? (
              <IconArrowUp
                className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                aria-hidden="true"
              />
            ) : (
              <IconArrowDown
                className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                aria-hidden="true"
              />
            )}

            <span className="sr-only">
              {' '}
              {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by{' '}
            </span>
            {item.change}
          </p>
        ) : null}
        <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
          <div className="text-sm">
            <Link to={item.path} className="font-medium text-indigo-600 hover:text-indigo-500">
              View all<span className="sr-only"> {item.name} stats</span>
            </Link>
          </div>
        </div>
      </dd>
    </div>
  )
}
