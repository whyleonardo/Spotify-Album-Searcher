import { AlbumCard } from '@/components/Card/AlbumCard'

import { useReturnedAlbumsStore } from '@/store/returnedAlbumsStore'

export const AlbumsGrid = () => {
	const { returnedAlbums } = useReturnedAlbumsStore()
	return (
		<div className="flex flex-wrap justify-center gap-8 md:justify-between">
			{returnedAlbums.map((album) => (
				<AlbumCard key={album.id} album={album} />
			))}
		</div>
	)
}
