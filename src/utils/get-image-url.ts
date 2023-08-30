export const getImageUrl = (path: string) => {
  return new URL(`../images/rooms/${path}`, import.meta.url).href
}
