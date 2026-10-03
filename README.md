# TechBridge Intern Management Platform

## 1. Project Description

The TechBridge Intern Management Platform is a web-based platform designed to provide interns with a structured and interactive internship experience.

The platform allows interns to explore available programs, follow their internship task roadmap, track their progress, explore practical challenges, and access an intern dashboard for managing their tasks.

The project also includes a Node.js and Express.js backend that provides REST API endpoints for internship tasks and technology information.

## 2. Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript
- Responsive Web Design

### Backend
- Node.js
- Express.js
- REST API
- JSON

### Tools & Deployment
- Git
- GitHub
- Vercel
- Render


## 3. Main Features

### Landing Page
- Responsive TechBridge homepage
- Hero section with call-to-action
- Programs section
- Internship information
- Why Us section
- Community section
- Contact section
- Responsive navigation

### Programs
- Data Analytics program information
- Web Development program information
- Interactive "What You'll Learn" sections

### Internship Roadmap
- 30-day internship journey
- Data Analytics and Web Development tracks
- Eight internship tasks per track
- Beginner-to-advanced progression
- Phase and difficulty indicators

### Interactive Task Tracker
- Separate Data Analytics and Web Development tracks
- Interactive task roadmap
- Task details
- Skills associated with each task
- Phase-based progression

### Challenge Hub
- Practical challenges for Data Analytics and Web Development
- Challenge cards generated from JavaScript data
- Search functionality
- Challenge filtering
- Number of challenges displayed control
- Reset filters
- Challenge details modal
- Skills, tools, expected results, deliverables, and estimated time

### Intern Dashboard
- Internship task overview
- Task status management
- Progress statistics
- Task filtering
- Task details modal
- Technology explorer
- API loading and error states

### Platform Search
- Search internship tasks and challenges from the homepage
- Displays matching results
- Search result details modal
- Links users to the relevant internship or challenge page

### Backend API
- Fetch internship tasks
- Fetch individual task details
- Update task status
- Fetch technologies
- Backend health check
  

## 4. How to Run the Project

### Frontend

The frontend is built with HTML, CSS, and JavaScript, so it does not require a frontend package installation.

You can open the project using a local development server such as VS Code Live Server.

### Backend

Navigate to the backend folder:

```bash
cd backend
```

Install the required dependencies:

```bash
npm install
```

Start the backend server:

```bash
node server.js
```

The backend will run on the configured local port.
The frontend communicates with the deployed API when the production API URL is configured.

## 5. Project Structure

```text
TechBridge/
│
├── css/
│   ├── style.css
│
├── js/
│   ├── script.js
│   ├── challenge.js
│   ├── dashboard.js
│   └── internship.js
│
├── img/
│
├── html/
│   ├── programs.html
│   ├── challenges.html
│   └── dashboard.html
│   └── internship.html
│   
├── backend/
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── index.html
│
└── README.md
```

### Important Files

**`index.html`**  
The main landing page of the TechBridge platform.

**`html/programs.html`**  
Contains information about the available internship programs.

**`html/challenges.html`**  
Contains the Challenge Hub where interns can explore and filter practical challenges.

**`html/dashboard.html`**  
Contains the intern dashboard for viewing and managing internship tasks.

**`js/homepage.js`**  
Handles homepage functionality including the platform search and search result interactions.

**`js/challenge.js`**  
Contains the Challenge Hub data and functionality for displaying and interacting with challenges.

**`js/dashboard.js`**  
Handles dashboard functionality, including fetching tasks from the API, filtering tasks, updating statuses, and displaying task details.

**`backend/server.js`**  
The Express.js server that provides the REST API for internship tasks and technologies.

## API Documentation

The TechBridge Internship Task Management API is built with Node.js and Express.js. It provides endpoints for retrieving internship tasks, updating task statuses, accessing web technology information, and checking the backend connection status.

### Base URL

```text
http://localhost:3000/api
```

## 6. API Endpoints

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

## 7. Deployment

* The frontend is hosted on Vercel.
* The backend API is deployed on Render.
* The frontend communicates with the deployed Express API to retrieve and update internship task information.
  

## 8. Project Goal

* The goal of this project is to create a practical internship management platform that combines an informative landing page, structured internship roadmaps, practical challenges, task tracking, and a backend API into one connected experience.
* The project also provided hands-on experience with frontend development, JavaScript functionality, REST APIs, Node.js, Express.js, responsive design, API integration, error handling, and deployment.


## 9. Future Contributions

Future improvements and contributions may include:

- Adding a dark mode theme across the platform
- Persisting the user's theme preference using local storage
- Improving accessibility across all pages
- Adding additional internship tracks and challenges
- Expanding the intern dashboard with more progress insights
- Adding more backend functionality as the platform grows

The dark mode feature is planned as a future enhancement so that the platform can support both light and dark visual themes while maintaining the TechBridge brand identity.