const express = require('express')
const router = express.Router()

const httpProxy = require('http-proxy')
const proxy = httpProxy.createProxyServer({})

proxy.on('proxyReq', (proxyReq, req, res, options) => {
  proxyReq.setHeader('X-USER-ID', '878465')
})

router.all('/*', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3001/api/userboards' })
})


module.exports = router