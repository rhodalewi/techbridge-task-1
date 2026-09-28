const express = require("express");
const cors = require("cors");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const PORT = 3000;

//Middleware
app.use(cors());
app.use(express.json());

//path to the task data
const tasksPath = path.join(__dirname, "data", "task.json");
const technologiesPath = path.join(__dirname, "data", "webtechnologies.json")

/* Read tasks from the JSON file*/
async function readTasks() {
    const data = await fs.readFile(tasksPath, "utf-8");
    return JSON.parse(data);
};

//Save tasks to the JSON file
async function saveTask(task) {
    await fs.writeFile(tasksPath, JSON.stringify(task, null, 2));
};

/* Read webtechnologies from the JSON file */
async function readTechnologies() {
    const technologies = await fs.readFile(technologiesPath, "utf-8");
    return JSON.parse(technologies);
};


/* ENDPOINTS */
//Enpoint to request all tasks
app.get("/api/tasks", async (req, res) => {
    try {
        const tasks = await readTasks();

        if(!tasks) {
            return res.status(404).json({message: "Tasks not found!"})
        };

        res.status(200).json(tasks)
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to retrieve tasks!"});
    };
});

//endpoint to retrieve a single task by ID
app.get("/api/tasks/:id", async (req, res) => {
    try {
        const tasks = await readTasks
        ();
        const taskId = Number(req.params.id);

        if(!Number.isInteger(taskId) || taskId < 1){
            return res.status(400).json({message: "Invalid task ID!"});
        };

        //get task ID
        const task = tasks.find(task => task.id === taskId);
        if(!task) {
            return res.status(404).json({message: "Task not found!"})
        };

        res.status(200).json(task);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to fetch task!"});
    };
});

//endpoint to update task status
app.put("/api/tasks/:id", async (req, res) => {
    try { 
        const tasks = await readTasks();
        const taskId = Number(req.params.id);
        const {status} = req.body;

        if(!Number.isInteger(taskId) || taskId < 1) {
            return res.status(400).json({message: "Invalid task ID!"});
        };

        //get task ID
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        if(taskIndex === -1) {
            return res.status(404).json({message: "Task not found!"});
        };

        const allowedStatus = [
            "completed",
            "in-progress",
            "not-started"
        ];

        if(!allowedStatus.includes(status)) {
            return res.status(400).json({message: "Invalid status!"});
        };

        //update task status
        tasks[taskIndex].status = status;

        //save the updated task status
        await saveTask(tasks);

        res.status(200).json({
            message: "Task status updated successfully",
            task: tasks[taskIndex]
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({message: "Failed to update task status"});
    };
});

/* Endpoint to get all webTechnologies */
app.get("/api/technologies", async (req, res) => {
    try {
        const technologies = await readTechnologies();
        if(!technologies) {
            return res.status(404).json({message: "Technologies not found!"});
        };

        res.status(200).json(technologies);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failed to retrieve technologies!"})
    };
});

/* To check if backend is connected to frontend */
app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: "Connected",
        message: "TechBridge API is running"
    });
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});