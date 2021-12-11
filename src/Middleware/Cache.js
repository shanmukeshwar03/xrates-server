import Redis from '../redis.js'

const Cache = async (req, res, next) => {
  try {
    const key = req.originalUrl.replace('/', '')
    const cached = await Redis.get(key)
    if (!cached) next()
    else res.send(JSON.parse(cached))
  } catch (error) {
    next(error)
  }
}

export default Cache
