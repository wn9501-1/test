# Contacts App

A simple Node.js application for managing a contacts list using MySQL.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a MySQL database and table:
   ```sql
   CREATE DATABASE contacts_db;
   USE contacts_db;
   CREATE TABLE contacts (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       phone VARCHAR(255) NOT NULL
   );
   ```

3. Edit `server.js` and update the MySQL connection settings (`host`, `user`, `password`).

4. Start the server:
   ```bash
   node server.js
   ```

5. Open `http://localhost:3000` in your browser to manage contacts.
