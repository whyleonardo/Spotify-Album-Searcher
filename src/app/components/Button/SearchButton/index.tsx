'use client'

import { getAlbums } from "@/utils/getAlbums"
import { useArtistDataStore } from '@/store/artistDataStore'
import { useReturnedAlbumsStore } from "@/store/returnedAlbumsStore"

import { Dispatch, SetStateAction } from "react"


interface SearchInputProps {
  setSearchInputValue: Dispatch<SetStateAction<string>>
  searchInputValue: string
}

export const SearchButton = ({ searchInputValue, setSearchInputValue }: SearchInputProps) => {

  const { newArtistData } = useArtistDataStore()
  const { newReturnedAlbums } = useReturnedAlbumsStore()


  async function handleSearchAlbum() {
    const { artistData, returnedAlbums } = await getAlbums(searchInputValue)

    newArtistData(artistData)
    newReturnedAlbums(returnedAlbums)
    setSearchInputValue('')
  }

  return (
    <button
      className="w-full py-4 px-4 bg-green-500 rounded-md tracking-tighter font-semibold text-xl focus:outline-2 focus:outline-black hover:bg-green-600/90 transition-all duration-300 ease-in-out"
      onClick={handleSearchAlbum}
    >
      Search
    </button>
  )
} 