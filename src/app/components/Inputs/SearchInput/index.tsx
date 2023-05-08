import { Dispatch, SetStateAction } from "react"

interface SearchInputProps {
  setSearchInputValue: Dispatch<SetStateAction<string>>
  searchInputValue: string
}

export const SearchInput = ({ setSearchInputValue, searchInputValue }: SearchInputProps) => {
  return (
    <input
      className="rounded-md w-full py-4 px-4 bg-zinc-700 border border-zinc-500 outline-green-300 outline-2 focus:outline placeholder:text-zinc-300/30"
      value={searchInputValue}
      placeholder="Type an artist name"
      onChange={(e) => setSearchInputValue(e.target.value)}
    />
  )
}