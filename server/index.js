const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')
const route = require('./route')
const { addUser } = require('./users')

const app = express()

app.use(cors({ origin: '*' }))
app.use(route)

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  socket.on('join', ({ name, room }) => {
    socket.join(room)

    const { user } = addUser({ name, room })

    socket.emit('message', {
      data: { user: { name: 'Admin' }, message: `Hello ${user.name}` },
    })

    socket.broadcast.to(user.room).emit('message', {
      data: {
        user: { name: 'Admin' },
        message: `${user.name} has joined the chat`,
      },
    })
  })

  io.on('disconnect', () => {
    console.log('Disconnect')
  })
})

server.listen(5000, () => {
  console.log('Server is running')
})
