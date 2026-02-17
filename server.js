const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.getConnection((err) => {
    if(err) console.log('DB Connection Error:', err);
    else console.log('Connected to MySQL Database ✅');
});

// USERS
app.post('/users', async (req, res) => {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, email, hashedPassword, role || 'client'], (err, result) => {
        if(err) return res.status(500).json(err);
        res.json({ message: 'User created', userId: result.insertId });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
        if(err) return res.status(500).json(err);
        if(results.length === 0) return res.status(400).json({ message: 'User not found' });
        const user = results[0];
        const valid = await bcrypt.compare(password, user.password);
        if(!valid) return res.status(400).json({ message: 'Invalid password' });
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Login successful', token });
    });
});

// ROOMS
app.get('/rooms', (req, res) => {
    const sql = 'SELECT * FROM rooms';
    db.query(sql, (err, results) => {
        if(err) return res.status(500).json(err);
        res.json(results);
    });
});

// BOOKING
app.post('/booking', (req, res) => {
    const { user_id, room_id, check_in, check_out } = req.body;
    const sql = 'INSERT INTO booking (user_id, room_id, check_in, check_out) VALUES (?, ?, ?, ?)';
    db.query(sql, [user_id, room_id, check_in, check_out], (err, result) => {
        if(err) return res.status(500).json(err);
        res.json({ message: 'Booking created', bookingId: result.insertId });
    });
});

app.get('/booking', (req, res) => {
    const sql = `
        SELECT b.id, u.name AS user_name, r.number AS room_number, b.check_in, b.check_out, b.created_at
        FROM booking b
        JOIN users u ON b.user_id = u.id
        JOIN rooms r ON b.room_id = r.id
    `;
    db.query(sql, (err, results) => {
        if(err) return res.status(500).json(err);
        res.json(results);
    });
});

// SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT} ✅`));
