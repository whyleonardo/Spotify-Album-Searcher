import { create } from 'zustand'

type Artist = {
  id: string
  name: string
}

type Store = {
  artistData: Artist
  newArtistData: (newData: Artist) => void
}

export const useArtistDataStore = create<Store>()((set) => ({
  artistData: {} as Artist,
  newArtistData: (newData: Artist) => set(() => ({ artistData: newData })),
}))