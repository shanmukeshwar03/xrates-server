import Redis from '../redis.js'
import axios from 'axios'

const BASE_URL = process.env.BASE_URL
const TOKEN = process.env.TOKEN

const GetRoot = async (req, res) => {
  res.send({
    message: 'Welcome to exchange rates , available routes are listed below',
    routes: ['/rates', '/symbols'],
  })
}

const GetRates = async (req, res, next) => {
  try {
    const response = await axios.get(`${BASE_URL}/latest?apikey=${TOKEN}`)
    await Redis.set('rates', JSON.stringify(response.data), { EX: 2700 })
    res.send(response.data)
  } catch (error) {
    next(error)
  }
}

const GetSymbols = async (req, res, next) => {
  try {
    const response = await axios.get(`${BASE_URL}/symbols?apikey=${TOKEN}`)
    await Redis.set('symbols', JSON.stringify(response.data), { EX: 2700 })
    res.send(response.data)
  } catch (error) {
    next(error)
  }
}

export default { GetRoot, GetRates, GetSymbols }
