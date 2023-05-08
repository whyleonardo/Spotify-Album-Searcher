'use client'

import { SearchButton } from '@/components/Button/SearchButton'
import { SearchInput } from '@/components/Inputs/SearchInput'
import { useState } from 'react'

export const SearchAlbumField = () => {
  const [searchInputValue, setSearchInputValue] = useState('')

  return (
    <div className='flex flex-col gap-2 items-center'>
      <SearchInput searchInputValue={searchInputValue} setSearchInputValue={setSearchInputValue} />
      <SearchButton searchInputValue={searchInputValue} setSearchInputValue={setSearchInputValue} />
    </div>
  )
}