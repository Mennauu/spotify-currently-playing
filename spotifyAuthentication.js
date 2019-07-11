const SpotifyWebApi = require('spotify-web-api-node')

require('dotenv').config()

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  redirectUri: process.env.REDIRECT_URI,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET
})

const spotifyLogin = (req, res) => {
  const scopes = ['user-read-private', 'user-read-email', 'user-read-currently-playing', 'user-read-playback-state', 'user-modify-playback-state']
  const authorizeURL = spotifyAuth.createAuthorizeURL(scopes)

  res.redirect(authorizeURL)
}

const spotifyCallback = async (req, res) => {
  try {
    const code = req.query.code
    const auth = await spotifyAuth.authorizationCodeGrant(code)
    const spotifyApi = new SpotifyWebApi({ accessToken: auth.body.access_token })

    spotifyApi.setAccessToken(data.body['access_token']);
    res.redirect(`${process.env.LOCAL_URI}home`)

  } catch (error) {
    console.error(error)
  }
}