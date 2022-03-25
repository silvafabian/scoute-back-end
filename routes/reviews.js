import { Router } from "express"
import * as reviewsCtrl from '../controllers/reviews.js'
import { decodeUserFromToken, checkAuth } from "../middleware/auth"

const router = Router()

/*---------- Public Routes ----------*/



/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.get('/restaurants/:id/reviews', checkAuth, reviewsCtrl.index)
router.get('/restrooms/:id/reviews', checkAuth, reviewsCtrl.index)
router.get('/parkinglots/:id/reviews', checkAuth, reviewsCtrl.index)

router.get('/restaurants/:id/reviews/:id', checkAuth, reviewsCtrl.show)
router.get('/restrooms/:id/reviews/:id', checkAuth, reviewsCtrl.show)
router.get('/parkinglots/:id/reviews/:id', checkAuth, reviewsCtrl.show)

router.post('/restaurants/:id/reviews', checkAuth, reviewsCtrl.create)
router.post('/restrooms/:id/reviews', checkAuth, reviewsCtrl.create)
router.post('/parkinglots/:id/reviews', checkAuth, reviewsCtrl.create)

router.put('/restaurants/:id/reviews/:id', checkAuth, reviewsCtrl.update)
router.put('/restrooms/:id/reviews/:id', checkAuth, reviewsCtrl.update)
router.put('/parkinglots/:id/reviews/:id', checkAuth, reviewsCtrl.update)

router.delete('/restaurants/:id/reviews/:id', checkAuth, reviewsCtrl.delete)
router.delete('/restrooms/:id/reviews/:id', checkAuth, reviewsCtrl.delete)
router.delete('/parkinglots/:id/reviews/:id', checkAuth, reviewsCtrl.delete)

export {
  router
}