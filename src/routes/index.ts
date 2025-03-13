import { Router } from 'express'

import { userRouter } from './userRoutes'

export const router = Router()

router.use('/users', userRouter)

router.get('/', (_, response) => {
    response.status(200).json({ message: 'Hello World' })
})  