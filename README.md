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

## Installation

To install the necessary dependencies, run the following command:

```bash
npm install
```

## Configuration

1. Create a new file named `.env` in the root directory of the project.

2. Add the following configurations to the `.env` file:

```env
# Port configuration
PORT=3001
MYSQL_PORT=3306

# Database configuration
MYSQL_HOST=localhost
MYSQL_USER=your_mysql_username
MYSQL_PASSWORD=your_mysql_password
MYSQL_DATABASE=your_database_name
```

Replace `your_mysql_username`, `your_mysql_password`, and `your_database_name` with your MySQL credentials and desired database name.

3. Save the `.env` file.

## Usage

To run the server and the required services using Docker Compose, execute the following command:

```bash
docker-compose up -d
```

This will start the backend server on port 3001 and set up the MySQL database container on the default port 3306 as specified in the `.env` file.

To access the bash shell of the `talker_manager` container, run:

```bash
docker exec -it talker_manager bash
```

Once inside the container, you can interact with the server and database as needed.

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
  - `q`: Filter Talkers by name.
  - `rate`: Filter Talkers by rate (integer).
  - `date`: Filter Talkers by the watched date (string in format "dd/mm/yyyy").
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
    "watchedAt": "25/07/2023"
  }
}
```

## Author

Felipe Santos (felpssdev)
