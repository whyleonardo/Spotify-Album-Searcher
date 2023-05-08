import { create } from 'zustand'

type Artist = {
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  name: string
  type: string
  uri: string
}

type Image = {
  height: number
  url: string
  width: number
}

export type Album = {
  album_group: string
  album_type: string
  artists: Array<Artist>
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  images: Array<Image>
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}

type Store = {
  returnedAlbums: Album[]
  newReturnedAlbums: (newData: Album[]) => void
}

export const useReturnedAlbumsStore = create<Store>()((set) => ({
  returnedAlbums: [],
  newReturnedAlbums: (newData: Album[]) => set(() => ({ returnedAlbums: newData })),
}))