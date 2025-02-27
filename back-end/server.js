import express from 'express';
import cors from 'cors';
import { register } from './register.js';
import { login } from './login.js'; // Import the login function

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

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    login(email, password, (err, user) => {
        if (err) {
            res.status(500).send('Error logging in');
        } else if (!user) {
            res.status(401).send('Invalid email or password');
        } else {
            res.status(200).send('Login successful');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
