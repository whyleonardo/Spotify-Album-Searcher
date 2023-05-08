import Image from 'next/image'
import Link from 'next/link'

import { Album } from '@/store/returnedAlbumsStore'
import {
	SpotifyLogo,
	IdentificationBadge,
	Calendar
} from '@phosphor-icons/react'

export const AlbumCard = ({ album }: { album: Album }) => {
	return (
		<div className="flex w-full flex-col items-center justify-between gap-2 rounded-xl border-2 border-zinc-600/20 bg-zinc-700/20 p-6 shadow-xl md:w-[23%]">
			<h1 className="text-center text-2xl font-semibold leading-7 tracking-tighter">
				{album.name}
			</h1>

			<div className="flex flex-col gap-2">
				<Image
					className="my-2 h-auto w-full rounded-md"
					src={album.images[0].url}
					alt={album.name}
					width={0}
					height={0}
					sizes="100vw"
				/>

				<div className="flex items-center gap-1">
					<IdentificationBadge size={24} />
					<h2 className="text-xl font-semibold tracking-tighter">
						{album.artists[0].name}
					</h2>
				</div>

				<div className="flex items-center gap-1">
					<Calendar size={24} />
					<h3 className="text-xl font-semibold tracking-tighter">
						{' '}
						{new Date(album.release_date).getFullYear()}
					</h3>
				</div>

				<div className="flex items-center gap-1">
					<SpotifyLogo size={24} className="text-green-500" />
					<Link
						className="text-xl font-semibold tracking-tighter underline"
						href={album.external_urls.spotify}
						target="_blank"
					>
						Listen on Spotify
					</Link>
				</div>
			</div>
		</div>
	)
}
