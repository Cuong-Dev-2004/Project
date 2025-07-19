const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieparser = require('cookie-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port = 3000;
const AuthRouter = require("./src/Routers/Auth");
const ServerAi = require("./src/Routers/ServerAI");
// const UserRouter = require("./src/Routers/User")
const app = express();

dotenv.config();
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log(' Kết nối MongoDB thành công!'))
    .catch(err => console.error(' Lỗi kết nối MongoDB:', err));


app.use(morgan('combined'));
app.use(cors());
app.use(cookieparser());
app.use(express.json());
console.log("✅ API_KEY =", process.env.API_KEY);
app.use('/v1/auth', AuthRouter)
app.use('/v1/ServerAi', ServerAi)
app.get('/', (req, res) => {
    res.send('hello, world!')
})
app.listen(port, () => console.log("App Listening " + port));