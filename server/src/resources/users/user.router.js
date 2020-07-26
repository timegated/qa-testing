import { Router } from 'express'
import controllers from './user.controllers'

const router = Router()

router.get('/', controllers.me)
router.put('/:id', controllers.updateMe)

export default router