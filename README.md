Here’s a more detailed README file for a simple blog app using Express.js:

---

# Simple Blog App

This repository contains code for a simple blog application built with Node.js and Express.js. The app simulates CRUD (Create, Read, Update, Delete) operations for blog posts, allowing users to perform the basic operations of adding, viewing, editing, and deleting blog entries.

## Features

- **Create a Post**: Add a new blog post with a title, content, and timestamp.
- **Read Posts**: View a list of all blog posts, and view a single post in detail.
- **Update a Post**: Edit the title or content of an existing post.
- **Delete a Post**: Remove a blog post from the list.

## Requirements

- **Node.js**: Ensure Node.js is installed on your machine.
- **Express.js**: The core framework used for handling HTTP requests.
- **Nodemon** (optional): For development, automatically restarts the server on code changes.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Nzioka6350/Blog-simulation.git
   cd Blog-simulation
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   npm install ejs
   npm install express
   ```

## Usage

1. **Run the Application**:
   ```bash
   npm start
   ```
   Or, if you are using Nodemon for development:
   ```bash
   npm run dev
   ```

2. **Access the Application**:
   - By default, the app runs on `http://localhost:3000`.
   - Use an API testing tool like Postman, or visit `http://localhost:3000/notes` in your browser to interact with the application.

## API Endpoints

### 1. Get All Posts
- **Endpoint**: `GET /notes`
- **Description**: Retrieves a list of all blog posts.

### 2. Get a Single Post
- **Endpoint**: `GET /notes/:id`
- **Description**: Retrieves a single blog post by its ID.

### 3. Create a New Post
- **Endpoint**: `POST /notes`
- **Description**: Creates a new blog post.
- **Request Body**:
  ```json
  {
    "title": "Post Title",
    "content": "Content of the post"
  }
  ```

### 4. Update a Post
- **Endpoint**: `PUT /notes/:id`
- **Description**: Updates an existing blog post by ID.
- **Request Body**:
  ```json
  {
    "title": "Updated Post Title",
    "content": "Updated content of the post"
  }
  ```

### 5. Delete a Post
- **Endpoint**: `DELETE /notes/:id`
- **Description**: Deletes a blog post by its ID.

## Folder Structure

```
simple-blog-app/
├── routes/          # Contains route definitions
│   └── posts.js     # Route file for blog post operations
├── models/          # Contains data models (e.g., for database connection)
│   └── post.js      # Blog post model (in-memory for simulation)
├── controllers/     # Logic for handling routes
│   └── postController.js
├── app.js           # Main application file
└── package.json     # Project dependencies and scripts
```

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See `LICENSE` file for more information.

---

