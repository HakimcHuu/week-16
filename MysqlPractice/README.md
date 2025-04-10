# iPhone Management System

A web-based application for managing iPhone inventory using Node.js, Express, and MySQL.

## Features

- Add new iPhones to the inventory
- View all iPhones in the database
- Update existing iPhone information
- Delete iPhones from the inventory
- User-friendly web interface

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - MySQL
  - CORS middleware
  - Body Parser

- **Frontend:**
  - HTML
  - JavaScript (Vanilla)
  - Fetch API for HTTP requests

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/HakimcHuu/week-16.git
   cd week-16/MysqlPractice
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your MySQL credentials:
   ```env
   DB_HOST=your_host
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=your_database_name
   ```

4. Start the server:
   ```bash
   node app.js
   ```

5. Access the application:
   - Open `pages/index.html` in your web browser
   - The server runs on port 2024

## Project Structure

- `app.js` - Main server file with Express configuration and routes
- `pages/`
  - `index.html` - Main page for adding iPhones
  - `delete.html` - Page for deleting iPhones
  - `update.html` - Page for updating iPhone information
  - `userForm.html` - User input form

## API Endpoints

- `POST /addiphones` - Add a new iPhone
- Additional endpoints for update and delete operations

## Environment Variables

Make sure to set up the following environment variables in your `.env` file:
- `DB_HOST` - MySQL host
- `DB_USER` - MySQL username
- `DB_PASSWORD` - MySQL password
- `DB_NAME` - Database name

## Contributing

Feel free to submit issues and enhancement requests.
