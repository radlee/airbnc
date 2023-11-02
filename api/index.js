const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcryptjs');
const UserModel = require('./models/User');
require('dotenv').config();
const app = express();
const bcryptSalt = bcrypt.genSaltSync(10);

app.use(express.json());
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

    await UserModel.findOne({ email });
})

app.listen(4000);