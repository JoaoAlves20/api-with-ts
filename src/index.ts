import express from 'express'
import helmet from 'helmet'
import path from 'path'

import { notFoundRequest, errorhandler } from './routes/errorHandler'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../public')))

app.use(router)
app.use(notFoundRequest)
app.use(errorhandler)

const { PORT } = process.env
app.listen(PORT, () => console.log(`Server runner in http://localhost:${PORT}`))