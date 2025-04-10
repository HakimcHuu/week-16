# 📱 iPhone Inventory Management System

A modern web application for efficiently managing iPhone inventory using Node.js, Express, and MySQL. This system provides a user-friendly interface for handling iPhone product data with full CRUD operations.

## ✨ Features

- 📝 **Create:** Add new iPhones with detailed specifications
- 📋 **Read:** View comprehensive list of all iPhones in inventory
- 🔄 **Update:** Modify existing iPhone information seamlessly
- 🗑️ **Delete:** Remove outdated or unnecessary iPhone entries
- 🎨 **User Interface:** Clean and intuitive web interface
- 🔒 **Data Persistence:** Secure MySQL database storage

## 🛠️ Technologies Used

### Backend Stack
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MySQL** - Database management
- **CORS** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variable management
- **body-parser** - Request body parsing

### Frontend Stack
- **HTML5** - Structure and semantics
- **JavaScript** - Client-side functionality
- **Fetch API** - HTTP request handling

## 🚀 Quick Start

### Prerequisites
- Node.js installed (v14 or higher)
- MySQL server running
- Git installed

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/HakimcHuu/week-16.git
   cd week-16/MysqlPractice
   ```

2. **Install Dependencies**
   ```bash
   npm install express mysql dotenv cors body-parser
   ```

3. **Configure Environment**
   Create a `.env` file in the root directory:
   ```env
   DB_HOST=your_host
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=your_database_name
   ```

4. **Database Setup**
   - Create a MySQL database
   - The tables will be automatically created when you first run the application

5. **Start the Server**
   ```bash
   node app.js
   ```

6. **Access the Application**
   - Open `pages/index.html` in your web browser
   - Server runs on `http://localhost:2024`

## 📁 Project Structure

```
MysqlPractice/
├── app.js              # Main server file
├── .env                # Environment variables
├── .gitignore         # Git ignore rules
├── pages/
│   ├── index.html     # Main page (Add iPhones)
│   ├── delete.html    # Delete operations
│   ├── update.html    # Update operations
│   └── userForm.html  # User input form
└── README.md          # Project documentation
```

## 🔌 API Endpoints

### iPhone Management
- `POST /addiphones` - Add new iPhone
  ```json
  {
    "model": "iPhone 13",
    "price": 999.99,
    "color": "Midnight",
    "storage": "128GB",
    "condition": "New",
    "price_range": "Premium"
  }
  ```
- `GET /iphones` - Retrieve all iPhones
- `PUT /update/:id` - Update iPhone details
- `DELETE /delete/:id` - Remove iPhone

## ⚙️ Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| DB_HOST | MySQL host address | Yes |
| DB_USER | Database username | Yes |
| DB_PASSWORD | Database password | Yes |
| DB_NAME | Database name | Yes |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Express.js documentation
- MySQL documentation
- Node.js community
