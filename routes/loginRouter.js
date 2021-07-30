const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const jwt = require('jsonwebtoken')

require('dotenv').config()
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_SECRET = process.env.GOOGLE_SECRET
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI


router.get('/', async (req, res) => {
  const response = fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code: req.query.code,
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_SECRET,
      redirect_uri: GOOGLE_REDIRECT_URI,
      grant_type: "authorization_code"
    }),
  })

  const data = await response.json()

  console.log(jwt.decode(data.id_token))

  res.json({ message: "Hello world" })
})


module.exports = router