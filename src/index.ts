import express from 'express'
import helmet from 'helmet'
import path from 'path'

const app = express()

app.use(express.json())
app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (_, response) => {
    response.status(200).json({ message: 'Hello World' })
})

app.get('/users/:id', (request, response) => {
    const { id } = request.params

    if (!id) {
        response.status(400).json({ error: 'ID is required' })
    }

    response.status(200).json({ ID: id })
})

const { PORT } = process.env
app.listen(PORT, () => console.log(`Server runner in http://localhost:${PORT}`))