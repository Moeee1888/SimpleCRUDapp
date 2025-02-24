# 📦 Simple CRUD API with Node.js, Express & MongoDB
A basic CRUD (Create, Read, Update, Delete) application built with Node.js, Express, and MongoDB.

### 🚀 Project Overview

This is a simple RESTful API built with Node.js, Express, and MongoDB for managing products. It includes essential CRUD (Create, Read, Update, Delete) operations.

### 🏗 Features

- Express server setup with middleware for JSON and URL-encoded data parsing

- MongoDB connection using Mongoose

- Product schema and model definition

- Controller functions for handling product operations

- RESTful routes for API endpoints

### 📂 Project Structure

📂 SimpleCRUDapp/

📂 │-- controllers/

│   └── product.controller.js   # Handles CRUD operations

📂 │-- models/

│   └── product.model.js        # Mongoose schema for products

📂 │-- routes/

│   └── product.route.js        # API routes

│-- index.js                    # Main entry point (Express server setup)

│-- package.json                # Project dependencies

│-- .gitignore                   # Ignored files in Git


### 🔧 Installation & Setup

1️⃣ Clone the Repository

`git clone https://github.com/Moeee1888/SimpleCRUDapp.git`

`cd SimpleCRUDapp`

2️⃣ Install Dependencies

`npm install`

3️⃣ Start the Server

Development Mode (with nodemon)

`npm run dev`

Production Mode

`npm run serve`

### 🔌 API Endpoints

➤ Base URL: http://localhost:3000/api/products

![image](https://github.com/user-attachments/assets/7b85c4e3-9fb3-471c-bb54-07420b30e671)

### 🛠 Technologies Used

- Node.js - JavaScript runtime

- Express.js - Web framework for Node.js

- MongoDB - NoSQL database

- Mongoose - ODM for MongoDB

- Nodemon - Development tool for auto-restarting the server

### 🔗 MongoDB Connection

In index.js, the database is connected using Mongoose:

`mongoose.connect("your-mongodb-connection-string")
    .then(() => {
        console.log('MongoDB connected…');
        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000');
        });
    })
    .catch(err => console.log(err));`

Replace ** your-mongodb-connection-string ** with your actual MongoDB connection string.
    
#### Author
👤 Mohamed Zouabi

📧 Email: mohamed.zouabi@ihec.ucar.tn
