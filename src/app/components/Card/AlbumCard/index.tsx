import Link from 'next/link'
import { SpotifyLogo, IdentificationBadge, Calendar } from '@phosphor-icons/react'

import Image from 'next/image'
import { Album } from '@/store/returnedAlbumsStore'

export const AlbumCard = ({ album }: { album: Album }) => {
  return (
    <div className="bg-zinc-700/20 flex justify-between flex-col w-full md:w-1/4 gap-2 items-center px-6 py-6 rounded-xl shadow-xl border-2 border-zinc-600/20">
      <h1 className="text-2xl font-semibold tracking-tighter leading-7 text-center">{album.name}</h1>

      <div className="flex flex-col gap-2">

        <Image
          className='w-full h-auto rounded-md my-2'
          src={album.images[0].url}
          alt={album.name}
          width={0}
          height={0}
          sizes="100vw"
          />

        <div className="flex items-center gap-1">
          <IdentificationBadge size={24} />
          <h2 className="text-xl font-semibold tracking-tighter">{album.artists[0].name}</h2>
        </div>

        <div className="flex items-center gap-1">
          <Calendar size={24} />
          <h3 className="text-xl font-semibold tracking-tighter"> {new Date(album.release_date).getFullYear()}</h3>
        </div>


        <div className="flex items-center gap-1">
          <SpotifyLogo size={24} className="text-green-500" />
          <Link className="underline text-xl font-semibold tracking-tighter" href={album.external_urls.spotify} target="_blank">Listen on Spotify</Link>
        </div>
      </div>
    </div>
  )
}