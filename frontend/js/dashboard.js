const API_URL = "http://localhost:3000/api/tasks";
const TECHNOLOGY_API_URL = "http://localhost:3000/api/technologies";

/* DASHBOARD Variables */
const taskContainer = document.getElementById("task_container");
const taskNoResult = document.getElementById("task_no_results");
const noResultText = document.querySelector(".no_results");
const totalTask = document.getElementById("total_task");
const completedTask = document.querySelector(".completed_task");
const inProgressTask = document.getElementById("inProgress_task");
const notStartedTask = document.getElementById("notStarted_task");
const progressPercent = document.getElementById("progress_text");
const taskPercentage = document.getElementById("progress_percent_text");
const progressFill = document.getElementById("progress_fill");
const taskFilterButtons = document.querySelectorAll("#task_filters .task_filter");
const taskModal = document.getElementById("task_modal");
const taskModalClose = document.querySelectorAll(".task_modal_close");
const taskModalNumber = document.getElementById("task_modal_number");
const taskModalTitle = document.getElementById("task_modal_title");
const taskModalStatus = document.getElementById("task_modal_status");
const taskModalDescription =  document.getElementById("task_modal_description");
const taskModalDetails = document.getElementById("task_modal_details");

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

//Store the tasks received from the backend
let internshipTasks = [];

//Loading states
let isLoading = false;

/* Function to fetch tasks */
async function fetchTasks() {
    isLoading = true;

    if(taskContainer) {
        taskContainer.innerHTML = `
            <p class="tasks_loading">Loading tasks...</p>
        `;
    };

    if(taskNoResult) {
        taskNoResult.style.display = "none"
    };

    try {
        const [response] = await Promise.all([
            fetch(API_URL),
            delay(2000)
        ]);

        if(!response.ok) {
            throw new Error("Failed to load tasks!");
        };

        const data = await response.json();

        internshipTasks = data;

        filterTasks();
        updateProgress();
        
    } catch (error) {
        console.error(error);

        if(taskContainer) {
           taskContainer.innerHTML = ""
        };

        if(taskNoResult) {
            taskNoResult.style.display = "flex";
            noResultText.textContent = "Unable to load tasks. Please try again!"
        }
    } finally {
        isLoading = false;
    }
};

/* Function to change status */
async function updateTaskStatus(taskId, newStatus) {
    try {
        const response = await fetch(`${API_URL}/${taskId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                status: newStatus,
            }),
        });

        const result = await response.json();

        if(!response.ok) {
            throw new Error(result.message || "Failed to update task!");
        }

        await fetchTasks();

    } catch (error) {
        console.error(error);

        alert("Unable to update task status. Please try again!")
    }
}

/* FUNCTION TO DISPLAY TASKS */
let selectedTaskStatus  = "all";

function displayTasks(taskList) {
    taskContainer.innerHTML="";

    if(taskList.length === 0) {
        taskNoResult.style.display = "flex";
        noResultText.textContent = "No tasks found!"
    } else {
        taskNoResult.style.display = "none";

        taskList.forEach(task => {
            const taskCard = document.createElement("article");
            taskCard.classList.add("task_card"), task.status

            taskContainer.appendChild(taskCard);

            taskCard.innerHTML = `
                <div class="task_content">
                    <span class="task_no ${task.status}">
                        ${task.number}
                    </span>

                    <div>
                        <span class="task_status ${task.status}"> <i></i> ${task.status} </span>

                        <h3 class="task_h3">
                            ${task.title}
                        </h3>

                        <p class="task_description">
                            ${task.description}
                        </p>

                        <div class="task_actions"> 
                            <button
                                type="button"
                                class="view_task_btn btn_outline"
                                data-task-id="${task.id}"
                            >
                                View Task
                            </button>

                            ${task.status === "completed" || task.status === "not-started" ? "" : `
                                <button 
                                    type="button"
                                    class="complete_task_btn cta_button"
                                    data-task-id="${task.id}"
                                >   Mark as Completed </button>
                            `}

                            ${task.status === "not-started" ? `
                                    <button
                                        type="button"
                                        class="inProgress_task_btn cta_button"
                                        data-task-id="${task.id}"
                                    >
                                        Start Task
                                    </button>
                                ` :
                                ""
                            }
                        </div>
                    </div>
                </div>
            `;

            taskContainer.appendChild(taskCard);
        })
    }
};

function updateProgress() {
    const totalTasks = internshipTasks.length;

    /* To get the number of task completed */ 
    const completedTasks = internshipTasks.filter(task => task.status === "completed").length;

    /* Get the task for in progress */
    const inProgressTasks = internshipTasks.filter(task => task.status === "in-progress").length;

    /* Get task for not started */
    const notStartedTasks = internshipTasks.filter(task => task.status === "not-started").length;

    const progressPercentage = (completedTasks/totalTasks) * 100;

    /* Populate the HTML */
    totalTask.textContent = totalTasks;
    completedTask.textContent = completedTasks;
    inProgressTask.textContent = inProgressTasks;
    notStartedTask.textContent = notStartedTasks;
    progressPercent.textContent = `${completedTasks} / ${totalTasks} Task Completed`;
    taskPercentage.textContent = `${progressPercentage}%`;
    progressFill.style.width = `${progressPercentage}%`;
};

function filterTasks() {
    let filteredTasks = internshipTasks;

    if(selectedTaskStatus  !== "all") {
        filteredTasks = internshipTasks.filter(task => task.status === selectedTaskStatus);
    };

    displayTasks(filteredTasks);
};

function openTaskModal(taskId) {
    const task = internshipTasks.find(task => task.id === Number(taskId));
    if(!task) return;

    taskModalNumber.textContent = `TASK ${task.number}`;
    taskModalTitle.textContent = task.title;
    taskModalStatus.innerHTML = `
        <span class="task_status ${task.status}"> <i></i> ${task.status} </span>
    ` ;
    taskModalDescription.textContent = task.description;
    taskModalDetails.textContent = task.details;
    taskModal.classList.add("show");
    taskModal.setAttribute("aria-hidden", "false");
};

    /* Remove task modal */
function closeTaskModal() {
    taskModal.classList.remove("show");
    taskModal.setAttribute("aria-hidden", "true");
};

/* Funtion for start task button, mark task as completed and view task */
taskContainer.addEventListener("click", (e) => {
    /* Start task button */
    const inProgressBtn = e.target.closest(".inProgress_task_btn");
    if(inProgressBtn) {
        const taskId = Number(inProgressBtn.dataset.taskId);

        const task = internshipTasks.find(task => task.id === taskId);

        if(!task) return;

        updateTaskStatus(task.id, "in-progress");

        return;
    };

    /* Mark task as completed */
    const completeBtn = e.target.closest(".complete_task_btn");
    if(completeBtn) {
        const taskId = Number(completeBtn.dataset.taskId);

        const task = internshipTasks.find(task => task.id === taskId);

        if(!task) return;
        updateTaskStatus(task.id, "completed")

        return;
    };

    /* View Button */
    const viewButton = e.target.closest(".view_task_btn");
    if(viewButton) {
        const taskId = viewButton.dataset.taskId;

        openTaskModal(taskId);
    };
});

taskModalClose.forEach(btn => btn.addEventListener("click", closeTaskModal));

/* filter tasks with status buttons */
taskFilterButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectedTaskStatus = button.dataset.status;

        taskFilterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        filterTasks();
    });
});

/* WEB TECHNOLOGY FUNCTION */

let webTechnologies = {};

/* const technologyButtons = document.querySelectorAll("#technology_filters .technology_btn"); */
const technologyContainer = document.getElementById("technology_filters");
const technologyContent  = document.querySelector(".technology_content");
const technologyIcon = document.getElementById("technology_icon");
const technologyTitle = document.getElementById("technology_title");
const technologyDescription = document.getElementById("technology_description");
const technologyFeatures = document.getElementById("technology_features");
const technologyLink = document.getElementById("technology_link");

async function fetchTechnologies() {
    isLoading = true;

    if(technologyContainer) {
        technologyContainer.innerHTML = `<p class="tasks_loading">Loading technologies...</p>`
    };
     technologyContent .style.display = "none"

    try {
        const [response] = await Promise.all([
            fetch(TECHNOLOGY_API_URL),
            delay(2000)
        ])

        if(!response.ok) {
            throw new Error("Failed to load technologies");
        };

        const data = await response.json();

        webTechnologies = data;
        technologyContent .style.display = "block"

        displayTechnology("nextjs")
        
    } catch (error) {
        console.error(error);
        technologyContainer.innerHTML = `
            <div id="task_no_results" class="no_result_container">
                <img src="../img/empty-icon.png" alt="No result found">

                <p class="no_results task_no_results">Unable to load technologies! Please try again!
                </p>
            </div>
       `
        technologyContent .style.display = "none"

    } finally {
        isLoading = false
    };
};
/* function to display technology */
function displayTechnology(technologyName) {
    const technology = webTechnologies[technologyName];

    if(!technology) return;

    technologyContainer.innerHTML = "";
    Object.keys(webTechnologies).forEach(key => {
        const button = document.createElement("button");

        button.type = "button";
        button.classList.add("technology_btn");
        button.dataset.technology = key;
        button.textContent = webTechnologies[key].title;

        if(key === technologyName) {
            button.classList.add("active");
        };

        button.addEventListener("click", () => {
            displayTechnology(key);
        });

        technologyContainer.appendChild(button);
    });

    technologyIcon.src = technology.image;
    technologyIcon.alt = technology.title
    technologyTitle.textContent = technology.title;
    technologyDescription.textContent = technology.description;
    technologyFeatures.innerHTML = technology.features.map(feature => `<li> <span>&checkmark;</span> ${feature} </li>`).join("");
    technologyLink.href = technology.link;

};

/* Function to check backend status */
const backendStatus = document.getElementById("backend_status");

async function checkBackendStatus() {
    if(!backendStatus) return;

    try {
        const response = await fetch("http://localhost:3000/api/health");

        if(!response.ok) {
            throw new Error("Backend is offline");
        };

        const data = await response.json();

        if(data.status !== "Connected") {
            throw new Error("Backend is offline");
        };

        backendStatus.className = "backend_status connected";

        backendStatus.innerHTML = `
        <span class="status_dot"></span>
        Connected
        `

        
    } catch (error) {
        console.error(error);

        backendStatus.className = "backend_status offline";

        backendStatus.innerHTML = `
        <span class="status_dot"></span> 
        Offline
        `
    }
}


fetchTasks();
fetchTechnologies();
setInterval(checkBackendStatus, 2000);