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
  EDIT = 'edit',
}

export const roomColumnNames = [
  { key: RoomColumns.ROOM_NUMBER, name: 'Number' },
  { key: RoomColumns.IMAGE, name: 'Image' },
  { key: RoomColumns.CATEGORY, name: 'Category' },
  { key: RoomColumns.DESCRIPTION, name: 'Description' },
  { key: RoomColumns.EDIT, name: 'Edit' },
]

export type RoomColumnNameType = { key: RoomColumns; name: string }[]

export interface Table {
  title: string
  description: string
  columns: RoomColumnNameType
}

export type RoomTable = {
  data: RoomType[]
}
