This project is a custom-built API server using Node.js, Express, and MongoDB. It demonstrates how to create a fully functional backend with CRUD operations and optional frontend interaction.

📌 Table of Contents
Features

API Endpoints
Database Used
How to Run the Server
How to Run the Frontend (Optional)
Sample API Requests
Folder Structure


✅ Features
4+ Custom API Endpoints

MongoDB Integration
RESTful CRUD Operations
Optional Frontend Interface
GitHub-ready with API documentation



📡 API Endpoints
Method	Endpoint	Description
GET	/api/items	Fetch all items from the DB
GET	/api/items/:id	Get a specific item by ID
POST	/api/items	Add a new item to the DB
PUT	/api/items/:id	Update an existing item by ID
DELETE	/api/items/:id	Delete an item by ID



🛢️ Database Used
MongoDB with Mongoose ODM
Connection handled inside server.js
Replace your connection string in .env or directly in the code if needed



How to Run the Server
git clone  https://github.com/ADARSH4118/Assignment2-BookAPI.git
cd Assignment2-BookAPI.git
Install dependencies:
npm install
Start the server:
node server.js
Visit 
http://localhost:3001


💻 How to Run the Frontend 
it exists inside the project root (/public/index.html)



## Frontend Screenshot

Here is how the frontend looks:

![Frontend Screenshot](screenshot.png)



🔄 Sample API Requests
➕ Add Item
POST /api/items

Request Body:


{
  "name": "Milk",
  "quantity": 2
}

📥 Get All Items
GET /api/items

✏️ Update Item
PUT /api/items/:id

Request Body:


{
  "name": "Milk",
  "quantity": 5
}

❌ Delete Item
DELETE /api/items/:id

       
