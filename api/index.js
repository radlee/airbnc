const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('./models/User');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'sjhdsifiujhbjbui3479y43fk473h';

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

mongoose.connect(process.env.MONGO_URL)

app.get('/test', (req, res) => {
    res.json('Test Ok Still');
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await UserModel.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt)
        })
        res.json(user);

    } catch (error) {
        res.status(422).json(e);
    }
    
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if(user) {
        const passOk = bcrypt.compareSync(password, user.password);
        if(passOk) {
            jwt.sign({ email: user.email, id: user._id }, jwtSecret, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json(user);
            });
        } else {
            res.status(422).json('Pass Not Ok');
        } 
    } else {
        res.status(422).json('Did not get that');
    } 
})

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    if(token) {
        jwt.verify(token, jwtSecret, {}, (err, user) => {
            if(err) throw err;
            res.json(user);
        });
    } else {
        res.json(null);
    }
})

app.listen(4000);