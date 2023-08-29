export interface RoomType {
  room_number: string
  category: string
  description: string
  image: string
}

export enum RoomColumns {
  ROOM_NUMBER = 'room_number',
  CATEGORY = 'category',
  DESCRIPTION = 'description',
  IMAGE = 'image',
}

export const roomColumnNames = [
  { key: RoomColumns.ROOM_NUMBER, name: 'Room Number' },
  { key: RoomColumns.CATEGORY, name: 'Category' },
  { key: RoomColumns.DESCRIPTION, name: 'Description' },
  { key: RoomColumns.IMAGE, name: 'Image' },
]
