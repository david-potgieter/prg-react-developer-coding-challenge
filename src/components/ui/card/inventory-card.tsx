import { RoomImage } from '@core/components/ui/image/room-image'
import { InventoryEdit } from '@core/components/ui/popover/edit-inventory'
import { RoomClasses } from '@core/config/query-keys'
import { RoomType } from '@core/types/room-types'
import { cn } from '@core/utils/cn'
import { IconFlag } from '@tabler/icons-react'

export function HoldingCard({ text }: { text: string }) {
  return (
    <div className="col-span-1 rounded-lg bg-white shadow p-4 space-y-4">
      <div className="flex justify-between items-center align-middle space-x-2">{text}</div>
    </div>
  )
}

export function InventoryCard({ item }: { item: RoomType }) {
  return (
    <div className="col-span-1 rounded-lg bg-white shadow p-4 space-y-4">
      <div className="flex justify-between items-center align-middle">
        <div
          className={cn(
            'text-xs px-2 py-1 rounded-2xl text-white',
            'bg-gray-400',
            item.category === RoomClasses.STANDARD && 'bg-violet-500',
            item.category === RoomClasses.DELUXE && 'bg-sky-500',
            item.category === RoomClasses.SUITE && 'bg-yellow-500',
          )}>
          {item.category}
        </div>
        <div className="text-xs">#{item.room_number}</div>
      </div>
      <div className="flex justify-between items-center align-middle space-x-2">
        <div className="w-[125px]">
          <RoomImage src={item.image} />
        </div>
        <div className="truncate">{item.description}</div>
      </div>
      <div className="flex justify-between items-center align-middle">
        <div>{item?.flagged ? <IconFlag className="w-5 h-5 text-violet-600" /> : null}</div>
        <div>
          <InventoryEdit item={item} />
        </div>
      </div>
    </div>
  )
}
