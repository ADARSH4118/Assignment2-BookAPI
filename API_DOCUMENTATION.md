 API Documentation

 Base URL:- http://localhost:3001




 Get All Items

- **Endpoint**: `/api/items`
- **Method**: `GET`
- **Description**: Fetches all items from the database.
- **Request Body**: Not required
- **Sample Response**:
```json
[
  {
    "_id": "662acbd7d8d3fa001ed408c1",
    "name": "Sample Item",
    "quantity": 5
  }
]





2. Add a New Item
Endpoint: /api/items

Method: POST

Description: Adds a new item to the database.

Request Body:

json
Copy
Edit
{
  "name": "Notebook",
  "quantity": 10
}
Sample Response:

json
Copy
Edit
{
  "message": "Item added successfully",
  "item": {
    "_id": "662acbd7d8d3fa001ed408c2",
    "name": "Notebook",
    "quantity": 10
  }
}






3. Update an Item
Endpoint: /api/items/:id

Method: PUT

Description: Updates an item by ID.

Request Body:

json
Copy
Edit
{
  "name": "Notebook",
  "quantity": 15
}
Sample Response:

json
Copy
Edit
{
  "message": "Item updated successfully"
}






4. Delete an Item
Endpoint: /api/items/:id

Method: DELETE

Description: Deletes an item by ID.

Request Body:  Not required

Sample Response:

json
Copy
Edit
{
  "message": "Item deleted successfully"
}
