
const express = require('express');
const app = express();
const port = 5000;

const userRouter = require('./routers/userRouter');
const photoRouter = require('./routers/photoRouter')
const utilRouter = require('./routers/util')

const cors = require('cors');
app.use(cors({origin: ['http://localhost:3000', 'https://digi-assignment1.onrender.com']}));

app.use(express.json());
app.use('/user', userRouter);
app.use('/photo', photoRouter);
app.use('/util', utilRouter);

app.get('/', (req, res) => {
    res.send('backend working');
})

app.use(express.static('./static/uploads'));

app.listen( port, () => { console.log('server started')});