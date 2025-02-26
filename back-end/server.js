import express from 'express';
import cors from 'cors';
import { register } from './register.js';

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json());

app.post('/register', (req, res) => {
    const { fname, lname, email, password, address } = req.body;
    register(fname, lname, email, password, address, (err, result) => {
        if (err) {
            res.status(500).send('Error registering user');
        } else {
            res.status(200).send('User registered successfully');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});