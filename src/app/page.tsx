/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client'

import Link from 'next/link'

import { AlbumsGrid } from '@/components/ui/AlbumsGrid'
import { SearchAlbumField } from '@/components/ui/SearchAlbumField'

import { useArtistDataStore } from '@/store/artistDataStore'
import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react'

export default function Home() {
	const { artistData } = useArtistDataStore()

	const currentYear = new Date().getFullYear()

	return (
		<div className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-900 px-8 pt-8 text-white">
			<div className="flex flex-col gap-4">
				<h1 className="bg-gradient-to-t from-green-200 to-green-600 bg-clip-text text-center text-5xl font-bold leading-tight tracking-tighter text-transparent">
					Spotify Album Searcher
				</h1>

				{/* @ts-ignore - Server Component */}
				<SearchAlbumField />

				{artistData.name && (
					<h1 className="my-8 text-center text-4xl tracking-tighter ">
						Your results for:
						<span className="block text-center">{artistData.name}</span>
					</h1>
				)}

				<AlbumsGrid />
			</div>

			<div className="my-6 flex flex-col items-center gap-2">
				<span className="text-xl tracking-tighter text-white">
					Christian Leonardo - {currentYear}
				</span>

				<div className="flex gap-2">
					<Link href="https://linkedin.com/in/christianlsb">
						<LinkedinLogo
							className="text-blue-500 transition-colors duration-300 hover:text-white"
							size={36}
						/>
					</Link>

					<Link href="https://github.com/whyleonardo">
						<GithubLogo
							className="text-orange-500 transition-colors duration-300 hover:text-white"
							size={36}
						/>
					</Link>
				</div>
			</div>
		</div>
	)
}
