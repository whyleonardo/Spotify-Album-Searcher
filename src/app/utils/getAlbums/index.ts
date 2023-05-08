const CLIENT_ID = process.env.NEXT_PUBLIC_ID
const CLIENT_SECRET = process.env.NEXT_PUBLIC_SECRET

type Artist = {
	external_urls: {
		spotify: string
	}
	href: string
	id: string
	name: string
	type: string
	uri: string
}

type Image = {
	height: number
	url: string
	width: number
}

type Album = {
	album_group: string
	album_type: string
	artists: Array<Artist>
	external_urls: {
		spotify: string
	}
	href: string
	id: string
	images: Array<Image>
	name: string
	release_date: string
	release_date_precision: string
	total_tracks: number
	type: string
	uri: string
}

type Artists = {
	artists: {
		items: Array<Artist>
	}
}

export const authParameters = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}

export async function getAlbums(searchInput: string) {
	const accessToken: string = await fetch(
		'https://accounts.spotify.com/api/token',
		authParameters
	)
		.then((res) => res.json())
		.then((data) => data.access_token)

	const searchParameters = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + accessToken
		}
	}

	const artistData = await fetch(
		`https://api.spotify.com/v1/search?q=${searchInput}&type=artist`,
		searchParameters
	)
		.then((response) => response.json())
		.then((data: Artists) => {
			// eslint-disable-next-line no-unsafe-optional-chaining
			const { id, name } = data.artists?.items[0]

			return { id, name }
		})

	// Get request with Artist ID grab all the albums from that artists
	const returnedAlbums: Album[] = await fetch(
		`https://api.spotify.com/v1/artists/${artistData.id}/albums?`,
		searchParameters
	)
		.then((response) => response.json())
		.then((data) => data.items)

	return {
		returnedAlbums,
		artistData
	}
}
