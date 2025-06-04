const express = require('express');
const mysql = require('mysql2/promise');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const pool = mysql.createPool({
    host: 'localhost',
    user: 'your_user',
    password: 'your_password',
    database: 'contacts_db'
});

app.get('/contacts', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM contacts');
    res.json(rows);
});

app.post('/contacts', async (req, res) => {
    const { name, phone } = req.body;
    const [result] = await pool.query('INSERT INTO contacts (name, phone) VALUES (?, ?)', [name, phone]);
    res.json({ id: result.insertId, name, phone });
});

app.put('/contacts/:id', async (req, res) => {
    const { id } = req.params;
    const { name, phone } = req.body;
    await pool.query('UPDATE contacts SET name = ?, phone = ? WHERE id = ?', [name, phone, id]);
    res.json({ id, name, phone });
});

app.delete('/contacts/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM contacts WHERE id = ?', [id]);
    res.sendStatus(204);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
