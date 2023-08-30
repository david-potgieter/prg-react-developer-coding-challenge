import { InventoryCard } from '@core/components/ui/card/inventory-card'
import { useInventory } from '@core/state/hooks/use-inventory'
import { RoomType } from '@core/types/room-types'

export function InventoryCards() {
  const { data, isLoading, isError } = useInventory()

  return data?.map((item: RoomType) => (
    <div key={item.room_number} className="h-full">
      <InventoryCard item={item} />
    </div>
  ))
}
