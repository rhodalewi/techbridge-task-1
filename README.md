# TECHBRIDGE WEBPAGE

## API Documentation

The TechBridge Internship Task Management API is built with Node.js and Express.js. It provides endpoints for retrieving internship tasks, updating task statuses, accessing web technology information, and checking the backend connection status.

### Base URL

```text
http://localhost:3000/api
```

### API Endpoints

| Method | Endpoint            | Purpose                                                                                                             |
| ------ | ------------------- | ------------------------------------------------------------------------------------------------------------------- |
| GET    | `/api/tasks`        | Retrieves all internship tasks from the JSON data file.                                                             |
| GET    | `/api/tasks/:id`    | Retrieves a single task using its ID. Returns an error if the task is not found or the ID is invalid.               |
| PUT    | `/api/tasks/:id`    | Updates the status of a specific task. Accepts `not-started`, `in-progress`, or `completed` as valid status values. |
| GET    | `/api/technologies` | Retrieves information about the web technologies displayed in the internship dashboard.                             |
| GET    | `/api/health`       | Checks whether the backend server is running and returns the API connection status.                                 |

### Updating Task Status

The `PUT /api/tasks/:id` endpoint accepts a JSON request body containing the new task status.

Example request:

```json
{
  "status": "completed"
}
```

The endpoint updates the task status in the `tasks.json` file and returns a success message with the updated task.

### Error Handling

The API uses appropriate HTTP status codes to indicate the result of a request:

* `200 OK` – The request was successful.
* `400 Bad Request` – The request contains an invalid task ID or status.
* `404 Not Found` – The requested task does not exist.
* `500 Internal Server Error` – An error occurred while processing the request.


### Setup Locally
* Install backend dependencies using npm install inside the backend folder.
* Start the server using node server.js.
* Open the frontend dashboard using your local development server.