import { createServer } from 'http'


const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Luis Doe' },
    { id: 3, name: 'Jane Doe' },
    { id: 4, name: 'Jack Doe' },

]
const server = createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(users))
    } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3]
        const user = users.find((user) => user.id === parseInt(id))
        if (user) {
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(user))
        } else {
            res.statusCode = 404
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify('User Not Found'))
        }
    }
    else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify('Route Not Found'))
    }
})
const PORT = 5000

server.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})