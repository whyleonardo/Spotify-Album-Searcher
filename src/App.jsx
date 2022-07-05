import { useState, useEffect } from 'react'

const CLIENT_ID = 'd01c25e7230c459c809567db676e0f83'
const CLIENT_SECRET = 'd96f38d7df61439d9e2696d85fb3ad42'

export const App = () => {
  const [searchInput, setSearchInput] = useState('')
  const [accessToken, setAccessToken] = useState('')
  const [albums, setAlbums] = useState([])

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
        return data.artists.items[0].id
      })

    // Get request with Artist ID grab all the albums from that artists
    const returnedAlbums = await fetch(
      `https://api.spotify.com/v1/artists/${artistID}/albums?`,
      searchParameters
    )
      .then(response => response.json())
      .then(data => {
        console.log(data.items)
        setAlbums(data.items)
      })

    setSearchInput('')
  }

  return (
    <div className="flex flex-col justify-center px-4 py-8">
      <div className="">
        <h1 className="text-3xl uppercase">Spotify Album Search</h1>
      </div>
      <div className="flex mt-2 mb-4 flex-col gap-1">
        <input
          className="w-full placeholder:text-center border rounded border-red-500 outline-none p-3"
          placeholder="Search for an artist"
          value={searchInput}
          onChange={event => setSearchInput(event.target.value)}
        />
        <button
          className="w-full uppercase font-bold border rounded bg-red-500 outline-none p-3"
          onClick={handleSearchAlbum}
        >
          Search
        </button>
      </div>
      <div>
        {albums.map(album => {
          return (
            <div className="" key={album.id}>
              <div>
                <img src={album.images[0].url} />
                <span className="block uppercase font-bold text-center">
                  {album.name}
                </span>
                <span className="block">
                  <span className="font-bold ">Year: </span>
                  {album.release_date.slice(0, 4)}
                </span>
                <a href={album.external_urls.spotify} target="_blank">
                  Abrir no Spotify
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
