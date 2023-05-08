'use client'

import { SearchAlbumField } from "@/components/ui/SearchAlbumField"
import { AlbumsGrid } from "@/components/ui/AlbumsGrid"
import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react'
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col pt-8 px-8 justify-center items-center min-h-screen w-full bg-zinc-900 text-white">
      <div className="flex flex-col gap-4">
        <h1 className='tracking-tighter leading-tighter text-5xl font-bold bg-gradient-to-t text-center from-green-200 to-green-600 text-transparent bg-clip-text'
        >
          Spotify Album Searcher
        </h1>

        {/* @ts-ignore - Server Component */}
        <SearchAlbumField />
        <AlbumsGrid/>
      </div>

      <div className="flex flex-col items-center my-6 gap-2">
        <span className="text-xl tracking-tighter underline">Christian Leonardo - 2023</span>

        <div className="flex gap-2">
          <Link href='https://linkedin.com/in/christianlsb'>
            <LinkedinLogo className="text-blue-500 hover:text-white transition-colors duration-300" size={36}/>
          </Link>


          <Link href='https://github.com/whyleonardo'>
            <GithubLogo className="text-orange-500 hover:text-white transition-colors duration-300" size={36}/>
          </Link>

        </div>

      </div>
   </div>
  )
}
