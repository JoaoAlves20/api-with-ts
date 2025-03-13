import { ErrorRequestHandler, RequestHandler } from 'express'

export const notFoundRequest: RequestHandler = (_, response) => {
    response.status(404).json({ error: 'Route not found' })
}

export const errorhandler: ErrorRequestHandler = (err, request, response, next) => {
    console.log({ error: err.message })
    response.status(500).json({ error: 'Internal server error' })
} 