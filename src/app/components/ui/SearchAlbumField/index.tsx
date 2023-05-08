'use client'

import { useState } from 'react'

import { SearchButton } from '@/components/Button/SearchButton'
import { SearchInput } from '@/components/Inputs/SearchInput'

export const SearchAlbumField = () => {
	const [searchInputValue, setSearchInputValue] = useState('')

	return (
		<div className="flex w-full flex-col items-center gap-2">
			<SearchInput
				searchInputValue={searchInputValue}
				setSearchInputValue={setSearchInputValue}
			/>
			<SearchButton
				searchInputValue={searchInputValue}
				setSearchInputValue={setSearchInputValue}
			/>
		</div>
	)
}
