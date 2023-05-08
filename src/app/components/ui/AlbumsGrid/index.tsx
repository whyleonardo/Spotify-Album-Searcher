import { useArtistDataStore } from "@/store/artistDataStore"
import { useReturnedAlbumsStore } from "@/store/returnedAlbumsStore"
import { AlbumCard } from "@/components/Card/AlbumCard"
import { Suspense } from 'react'

export const AlbumsGrid = () => {
  const { artistData } = useArtistDataStore()
  const { returnedAlbums } = useReturnedAlbumsStore()
  return (
    <div className="flex justify-center gap-4 flex-wrap">

      {artistData.name && <h1 className="text-4xl my-8 tracking-tighter">
        Your results for:
        <span className="block text-center">{artistData.name}</span>
      </h1>
      }

      {returnedAlbums.map((album) => (
        <AlbumCard album={album} />  
        ))}
    </div>
  )
}