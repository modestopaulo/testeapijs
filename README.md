# Project Title

Task Management API

## Description

This project is a RESTful API for managing tasks, projects, and users. It utilizes MySQL for data persistence and Sequelize ORM for database interactions. The API includes user authentication with password hashing and JWT for secure access.

## Features

- User registration and login with hashed passwords.
- CRUD operations for projects.
- CRUD operations for tasks associated with projects and users.
- Secure authentication using JWT.

## Technologies Used

- Node.js
- Express.js
- Sequelize ORM
- MySQL
- bcrypt for password hashing
- jsonwebtoken for authentication

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd project
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up the database:**
   - Ensure you have MySQL running (e.g., via XAMPP).
   - Create a new database and update the `.env` file with your database credentials:
     ```
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=your_password
     DB_NAME=your_database_name
     ```

4. **Run database migrations:**
   - The application will automatically create the necessary tables when you run the server for the first time.

5. **Start the server:**
   ```
   npm start
   ```

6. **API Endpoints:**
   - User Registration: `POST /api/users`
   - User Login: `POST /api/login`
   - CRUD operations for Projects: `GET /api/projects`, `POST /api/projects`, `PUT /api/projects/:id`, `DELETE /api/projects/:id`
   - CRUD operations for Tasks: `GET /api/tasks`, `POST /api/tasks`, `PUT /api/tasks/:id`, `DELETE /api/tasks/:id`

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.