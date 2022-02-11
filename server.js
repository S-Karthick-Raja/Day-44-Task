require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))

// Routes
app.use('/user', require('./routes/userRouter'))

app.use('/api', require('./routes/upload'))


app.use('/', (req, res, next) => {
    res.json({ msg: "Hello Everyone..!" })
})


// Connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log("Connected to MONGODB")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})

// ya29.A0ARrdaM8UvHbUZZTIB09rOIMxccWLF00ezsgVMVurYos-oQBnYU_q5zBEFou3qxyvO4aHHho3pl8yPPoislJRmuGuWJK6UyIGH7Oz7Vp8fWYxN9HpZ5zKHlq7ZorcKm7CAlU8_mnMQPWL8DP_V6K7VzvfacmY
// ACCESS_TOKEN_SECRET = -sW^C,teKU6yyCG5^D37P5jQ{T&nYk@GuP^[DJ(u3UMU[:T2P"