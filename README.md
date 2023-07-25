# Talker Database CRUD Server

## Description

This project is a CRUD (Create, Read, Update, Delete) server built using JavaScript and Express. The server allows users to perform CRUD operations on a database of Talkers. A Talker represents a person who can participate in different kinds of talks or presentations.

## Features

- Create a new Talker with details like name, age, and talk information (rate and watchedAt).
- Read and retrieve the information of a specific Talker using their unique ID.
- Update the details of an existing Talker, including the talk rate.
- Delete a Talker from the database.
- Search Talkers based on different filters like name, rate, and watched date.
- Token-based authentication for secure CRUD operations.

## Technologies Used

- Node.js
- Express.js
- MySQL
- MySQL2 
- JSON Web Tokens (JWT) for authentication

## Configuration

1. Ensure you have MongoDB (or any other desired database) installed and running on your machine.
2. Update the database connection settings in the `config.js` file to point to your local or remote database.
3. Set the JWT secret in the `config.js` file for secure token generation.

## Usage

1. Start the server by running `npm start` in the terminal.
2. The server will be available at `http://localhost:3000` (or any other specified port).
3. Use API testing tools like Postman or curl to perform CRUD operations on the Talkers database.

## API Endpoints

### Get all Talkers from the file

- URL: `GET /talkers`
- Response: JSON array containing all the Talkers from the file.

### Get all Talkers from the database

- URL: `GET /talkers/db`
- Response: JSON array containing all the Talkers from the database.

### Search Talkers based on filters

- URL: `GET /talkers/search`
- Query Parameters (optional):
  - `name`: Filter Talkers by name.
  - `rate`: Filter Talkers by rate (integer).
  - `watchedAt`: Filter Talkers by the watched date (string in format "YYYY-MM-DD").
- Request Headers:
  - `Authorization`: Token required for authentication.
- Response: JSON array containing filtered Talkers.

### Get a specific Talker by ID

- URL: `GET /talkers/:id`
- Parameters: `id` is the unique identifier of the Talker.
- Response: JSON object representing the specified Talker.

### Delete a Talker by ID

- URL: `DELETE /talkers/:id`
- Parameters: `id` is the unique identifier of the Talker to be deleted.
- Request Headers:
  - `Authorization`: Token required for authentication.
- Response: JSON object confirming the deletion of the Talker.

### Update the rate of a specific Talker

- URL: `PATCH /talkers/rate/:id`
- Parameters: `id` is the unique identifier of the Talker to update the rate.
- Request Headers:
  - `Authorization`: Token required for authentication.
- Request Body: JSON object with the updated `rate` of the Talker.
- Response: JSON object confirming the update.

### Create a new Talker

- URL: `POST /talkers`
- Request Headers:
  - `Authorization`: Token required for authentication.
- Request Body: JSON object with the details of the new Talker (name, age, talk.rate, talk.watchedAt).
- Response: JSON object representing the created Talker.

### Update an existing Talker

- URL: `PUT /talkers/:id`
- Parameters: `id` is the unique identifier of the Talker to be updated.
- Request Headers:
  - `Authorization`: Token required for authentication.
- Request Body: JSON object with the updated details of the Talker (name, age, talk.rate, talk.watchedAt).
- Response: JSON object representing the updated Talker.

## Talker Format

A Talker object should have the following format:

```json
{
  "name": "John Doe",
  "age": 30,
  "talk": {
    "rate": 4,
    "watchedAt": "2023-07-25"
  }
}
```

## Author

Felipe Santos (felpssdev)
