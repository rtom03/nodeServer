import http from 'http'


const server = http.createServer((req, res) => {
    res.url('/')
    res.method

})


const PORT = 5000


server.listen(PORT, () => {
    console.log(``)
})