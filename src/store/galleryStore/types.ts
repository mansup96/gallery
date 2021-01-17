export type TUser = {
  id: number,
  name: string,
  email: string,
}

export type TAlbum = {
  id: number,
  userId: number,
  title: string
}

export type TPhoto = {
  id: number,
  albumId: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

export type galleryState = {
  users: TUser[] | null,
  albums: TAlbum[] | null,
  photos: TPhoto[] | null,
}