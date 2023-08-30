import { getImageUrl } from '@core/utils/get-image-url'

export function RoomImage({ src }: { src: string }) {
  return (
    <img src={getImageUrl(src.replace('./images/', ''))} alt="" className="h-10 w-10 rounded-xl" />
  )
}
