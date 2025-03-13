import { Router } from 'express'

export const userRouter = Router()

userRouter.get('/:id', (request, response) => {
    const { id } = request.params

    if (!id) {
        response.status(400).json({ error: 'ID is required' })
    }

    response.status(200).json({ ID: id })
})