import { Router } from 'express'
import Cache from '../Middleware/Cache.js'
import EXController from '../Controllers/index.js'

const router = Router()

router.get('/', EXController.GetRoot)
router.get('/rates', Cache, EXController.GetRates)
router.get('/symbols', Cache, EXController.GetSymbols)

export default router
