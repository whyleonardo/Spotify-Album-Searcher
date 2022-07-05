import { useState, useEffect } from 'react'
import { SpotifyLogo } from 'phosphor-react'

const CLIENT_ID = 'd01c25e7230c459c809567db676e0f83'
const CLIENT_SECRET = 'd96f38d7df61439d9e2696d85fb3ad42'

export const App = () => {
  const [searchInput, setSearchInput] = useState('')
  const [accessToken, setAccessToken] = useState('')
  const [albums, setAlbums] = useState([])
  const [artistName, setArtistName] = useState('')

  useEffect(() => {
    // API Access Token
    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    }

    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
  }, [])

  async function handleSearchAlbum() {
    // Get request using search to get the Artist ID
    const searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken
      }
    }

    const artistID = await fetch(
      `https://api.spotify.com/v1/search?q=${searchInput}&type=artist`,
      searchParameters
    )
      .then(response => response.json())
      .then(data => {
        const artistAlbums = data.artists.items[0].id
        const artistName = data.artists.items[0].name
        setArtistName(artistName)
        return artistAlbums
      })

    // Get request with Artist ID grab all the albums from that artists
    const returnedAlbums = await fetch(
      `https://api.spotify.com/v1/artists/${artistID}/albums?`,
      searchParameters
    )
      .then(response => response.json())
      .then(data => {
        setAlbums(data.items)
      })

    setSearchInput('')
  }
  // setArtist(data.artist.name)
  return (
    <div className="flex flex-col justify-center px-4 py-8">
      <div>
        <h1 className="text-2xl text-center text-brand-900 font-bold uppercase md:text-4xl">
          Spotify Album Search
        </h1>
      </div>
      <div className="flex mt-2 mb-4 flex-col gap-2 items-center">
        <input
          className="w-full placeholder:text-center placeholder:opacity-40 border rounded border-brand-700 outline-none p-3 md:w-2/4"
          placeholder="Search for an artist"
          value={searchInput}
          onKeyDown={event => (event.key == 'Enter' ? handleSearchAlbum() : '')}
          onChange={event => setSearchInput(event.target.value)}
        />
        <button
          className="w-full text-white uppercase font-bold rounded bg-brand-700 outline-none p-3 md:w-1/4"
          onClick={handleSearchAlbum}
        >
          Search Albums
        </button>
      </div>
      <div className="mb-6 text-center">
        {' '}
        <strong className="text-2xl text-brand-900  font-bold uppercase md:text-3xl">
          {artistName}
        </strong>
      </div>
      <div className="grid gap-6 text-center text-white md:grid md:grid-cols-4 md:grid-rows-none">
        {albums.map(album => {
          return (
            <div className="bg-brand-900 p-4 rounded" key={album.id}>
              <div className="grid gap-2">
                <img src={album.images[0].url} />
                <span className="block uppercase font-bold text-center">
                  {album.name}
                </span>

                <div className="flex flex-col items-center">
                  {' '}
                  <span>
                    <span className="font-bold ">Year: </span>
                    {album.release_date.slice(0, 4)}
                  </span>
                  <a
                    className="flex items-center justify-center gap-1 hover:underline"
                    href={album.external_urls.spotify}
                    target="_blank"
                  >
                    <SpotifyLogo size={24} />
                    Listen on Spotify
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
