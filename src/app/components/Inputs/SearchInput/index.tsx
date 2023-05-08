import { Dispatch, SetStateAction } from 'react'

interface SearchInputProps {
	setSearchInputValue: Dispatch<SetStateAction<string>>
	searchInputValue: string
}

export const SearchInput = ({
	setSearchInputValue,
	searchInputValue
}: SearchInputProps) => {
	return (
		<input
			className="w-full rounded-md border border-zinc-500 bg-zinc-700 p-4 outline-2 outline-green-300 placeholder:text-zinc-300/30 focus:outline md:w-96"
			value={searchInputValue}
			placeholder="Type an artist name"
			onChange={(e) => setSearchInputValue(e.target.value)}
		/>
	)
}
