import { RoomImage } from '@core/components/ui/image/room-image'
import { InventoryEdit } from '@core/components/ui/popover/edit-inventory'
import { RoomType } from '@core/types/room-types'

export function InventoryCard({ item }: { item: RoomType }) {
  return (
    <div className="col-span-1 rounded-lg bg-white shadow p-4 space-y-4">
      <div className="flex justify-between items-center align-middle">
        <div>{item.category}</div>
        <div>{item.room_number}</div>
      </div>
      <div className="flex justify-between items-center align-middle space-x-2">
        <div className="w-[125px]">
          <RoomImage src={item.image} />
        </div>
        <div className="truncate">{item.description}</div>
      </div>
      <div className="flex justify-between items-center align-middle">
        <div>flag</div>
        <div>
          <InventoryEdit item={item} />
        </div>
      </div>
    </div>
  )
}
