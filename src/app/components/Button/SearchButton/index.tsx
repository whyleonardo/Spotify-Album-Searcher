'use client'

import { Dispatch, SetStateAction } from 'react'

import { useArtistDataStore } from '@/store/artistDataStore'
import { useReturnedAlbumsStore } from '@/store/returnedAlbumsStore'
import { getAlbums } from '@/utils/getAlbums'

interface SearchInputProps {
	setSearchInputValue: Dispatch<SetStateAction<string>>
	searchInputValue: string
}

export const SearchButton = ({
	searchInputValue,
	setSearchInputValue
}: SearchInputProps) => {
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
			className="w-full rounded-md bg-green-500 p-4 text-xl font-semibold tracking-tighter transition-all duration-300 ease-in-out hover:bg-green-600/90 focus:outline-2 focus:outline-black md:w-96"
			onClick={handleSearchAlbum}
		>
			Search
		</button>
	)
}
