const internshipTracks = {
    dataAnalysis: [
        {number: "01", title: "Data Cleaning Basics", day: 1, description: "Clean a messy dataset using Google Sheets or Excel. Identify and fix duplicate rows, blank cells, inconsistent formatting, and incorrect data types.", difficult: "Beginner", details: "You'll work with a messy dataset and clean it using Google Sheets or Excel. You'll identify and fix duplicate rows, blank cells, inconsistent formatting, and incorrect data types. This task introduces the importance of preparing accurate and reliable data before analysis.", skill: ["Excel", "Google Sheets", "Data Cleaning"]},

        {number: "02", title: "Formulas & Pivot Tables", day: 4, description: "Use spreadsheet formulas and Pivot Tables to answer questions and extract useful insights from a dataset.", difficult: "Beginner", details: "You'll use spreadsheet formulas and Pivot Tables to explore a dataset and answer practical questions. The task helps you understand how calculations and data summaries can be used to identify patterns and extract useful information", skill: ["Excel", "Formulas", "Pivot Tables"]},

        {number: "03", title: "Data Visualization", day: 8, description: "Create charts and a simple dashboard that communicate useful insights from a dataset.", difficult: "Beginner → Intermediate", details: "You'll transform your analysis into clear visualizations by creating charts and a simple dashboard. The focus is on choosing appropriate visualizations and presenting information in a way that makes important insights easy to understand.", skill:  ["Data Visualization", "Charts", "Dashboards"]},

        {number: "04", title: "Introduction to SQL", day: 11, description: "Practice basic SQL queries and use them to answer real-world questions about data.", difficult: "Beginner → Intermediate", details: "You'll begin working with SQL to retrieve and explore information stored in databases. You'll practice writing basic queries and use them to answer practical questions about a dataset.", skill:  ["SQL", "SELECT", "WHERE"]},

        {number: "05", title: "SQL Joins & Aggregations", day: 15, description: "Use JOIN, GROUP BY and aggregate functions such as COUNT, SUM and AVG to analyze information across multiple tables.", difficult: "Intermediate", details: "You'll work with multiple related tables and learn how to combine and summarize information using SQL. You'll practice JOIN, GROUP BY, COUNT, SUM, and AVG to answer more complex data questions.", skill:  ["SQL", "JOIN", "GROUP BY", "Aggregations"]},

        {number: "06", title: "Lookup Functions & Data Wrangling", day: 19, description: "Use VLOOKUP or XLOOKUP to combine related datasets and handle data mismatches.", difficult: "Intermediate", details: "You'll combine information from related datasets using spreadsheet lookup functions. You'll practice VLOOKUP or XLOOKUP while identifying and handling mismatched or missing information between datasets.", skill:["VLOOKUP", "XLOOKUP", "Data Wrangling"]},

        {number: "07", title: " Mini Analysis Project", day: 22, description: "Complete a small end-to-end analysis involving data cleaning, formulas, Pivot Tables, charts and recommendations.", difficult: "Intermediate", details: "You'll bring together the skills you've developed throughout the internship to complete a small analysis project. You'll clean the data, apply formulas, create Pivot Tables and charts, and use your findings to make practical recommendations.", skill: ["Data Cleaning", "Formulas","Pivot Tables", "Charts"]},

        {number: "08", title: "Capstone Project", day: 26, description: "Complete a larger project combining spreadsheet analysis and SQL using at least two related tables.", difficult: "Intermediate", details: "You'll complete a larger end-to-end project that combines spreadsheet analysis and SQL. The project will require you to work with at least two related tables, analyze the information, identify useful insights, and communicate your findings.", skill: ["Excel", "SQL", "Data Analysis", "Reporting"]},
    ],

    webDevelopment: [
        {number: "01", title: "Build the TechBridge Homepage", day: 1, description: "Create the first version of the TechBridge website using HTML and CSS.", difficult: "Beginner", details: "You'll build a complete homepage for the TechBridge platform, introducing the organisation, communicating its programs, and giving visitors a clear call to action. This task focuses on structure, layout, and fundamental web design principles.", skill: ["HTML", "CSS", "Responsive Design"]},

        {number: "02", title: "Build the TechBridge Programs Experience", day: 4, description: "Create a Programs experience that presents TechBridge's available learning programs.", difficult: "Beginner", details: "You'll create a dedicated Programs experience that presents TechBridge's available learning programs. The page will help visitors understand the different programs, what they offer, and how they can get started.", skill: ["HTML", "CSS", "Responsive Design"]},

        {number: "03", title: "Build the Internship Tasks Experience", day: 8, description: "Create an interface that presents the TechBridge internship tasks and helps users understand the internship journey.", difficult: "Beginner → Intermediate", details: "You'll design and build an Internship Tasks experience that presents the complete TechBridge internship journey. You'll organize the tasks, show when they are introduced, communicate their difficulty progression, and create a responsive experience for visitors.", skill: ["HTML", "CSS", "Responsive Design"]},

        {number: "04", title: "Build an Interactive Task Tracker", day: 11, description: "Use JavaScript to make the internship task experience interactive and allow progress to be tracked.", difficult: "Beginner → Intermediate", details: "You'll introduce JavaScript by transforming the internship roadmap into an interactive experience. Visitors will be able to switch between the Data Analytics and Web Development tracks without refreshing the page.", skill: ["HTML", "CSS", "JavaScript", "DOM Manipulation", "Responsive Design"]},

        {number: "05", title: "Build the Intern Registration Experience", day: 15, description: "Build the Intern Registration Experience", difficult: "Intermediate", details: "You'll design and build a professional registration and onboarding experience for new TechBridge interns. The interface should guide users through the information and actions required to begin their internship journey.", skill: ["HTML", "CSS", "Forms", "JavaScript"]},

        {number: "06", title: "Build the Task Submission System", day: 19, description: "Create an interface through which interns can prepare and submit their task work.", difficult: "Intermediate", details: "You'll create a task submission experience where interns can prepare their work and submit completed tasks. The interface should make the submission process clear, organized, and easy to use.", skill: ["HTML", "CSS", "Forms", "JavaScript"]},

        {number: "07", title: "Build the Intern Dashboard", day: 22, description: "Create a dashboard where an intern can view their profile, progress, tasks, and submissions.", difficult: "Intermediate → Advanced", details: "You'll bring several internship features together in a dashboard experience. Interns should be able to view important information such as their profile, task progress, completed work, and submissions from one place.", skill: ["HTML", "CSS", "JavaScript", "Dashboard UI"]},

        {number: "08", title: "Build the Complete TechBridge Internship Platform", day: 26, description: "Combine the different components created during the internship into a complete TechBridge platform.", difficult: "Advanced", details: "You'll bring several internship features together in a dashboard experience. Interns should be able to view important information such as their profile, task progress, completed work, and submissions from one place.You'll bring together the different experiences created throughout the internship into a complete TechBridge platform. The final project demonstrates how individual pages and features can work together as one cohesive product.", skill: ["HTML", "CSS", "JavaScript","Responsive Design", "UI Integration"]},
    ]
};

const phases = [
    {
        name: "Phase 1", 
        title: "Getting Started", 
        days:"Days 1-8", 
        taskNumbers: [1,2,3]},

      {
        name: "Phase 2",
        title: "Building Interactivity",
        days: "Days 11–19",
        taskNumbers: [4, 5, 6]
    },

    {
        name: "Phase 3",
        title: "Advanced Development",
        days: "Days 22–26",
        taskNumbers: [7, 8]
    }
];

/* Difficulty Scale Dots */
function getDifficultyLevel(difficulty) {
    if(difficulty === "Beginner") {
        return {
            level: 1,
            color: "beginner"
        }
    }

    if(difficulty === "Beginner → Intermediate") {
        return {
            level: 2,
            color: "beginner_intermediate"
        };
    }

    if(difficulty === "Intermediate") {
        return{
            level: 3,
            color: "intermediate"
        };
    }

    if(difficulty === "Intermediate → Advanced") {
        return {
            level: 4,
            color: "intermediate_advanced"
        };
    }

    if(difficulty === "Advanced") {
        return {
            level: 5,
            color: "advanced"
        };
    }

    return {
        level: 1,
        color: "beginner"
    };
};

/* Default Track to show */
let selectedTrack = "dataAnalysis";

const trackCards = document.querySelectorAll(".track_card")
const dataTrack = document.querySelector(".data_track");
const webTrack = document.querySelector(".web_track");
const roadmapContainer = document.querySelector("#roadmap_container");
const selectedTrackText = document.querySelector("#selected_track");

function displayTrack(track) {
    const tasks = internshipTracks[track];
    roadmapContainer.innerHTML="";

    phases.forEach((phase) => {
        const phaseDivider = document.createElement("div");
        phaseDivider.classList.add("phase_divider",  `phase_divider_${phase.name.split(" ")[1]}`);

        phaseDivider.innerHTML = `
            <span></span>
            <p>${phase.name} - ${phase.days}</p>
            <span></span>
        `;
        roadmapContainer.appendChild(phaseDivider);

        /* Task belonging to each phase */
        const phaseTasks = phase.taskNumbers.map(taskNumber => {
            return tasks[taskNumber - 1]
        });

        const roadmapTimeline = document.createElement("div");

        roadmapTimeline.classList.add("roadmap_timeline", `phase_${phase.name.split(" ")[1]}`);


        /* Create Task Cards */
        phaseTasks.forEach((task) => {     
            const taskCard = document.createElement("article");
            taskCard.classList.add("task_card");

            const difficultyScale = getDifficultyLevel(task.difficult)

            if(Number(task.number) % 2 !== 0) {
                taskCard.classList.add("task_left");
            } else {
                taskCard.classList.add("task_right");
            }


            taskCard.innerHTML= `
                <div class="task_content">
                    <span class="task_no"> ${task.number}</span>

                    <div>
                        <span class="task_day">
                            DAY ${task.day}
                        </span>

                        <h3>${task.title}</h3>

                        <p class="task_text"> ${task.description} </p>
                    </div>
                </div>

                <div class="task_details">
                    <div class="difficulty_item">
                        <div class="difficulty_dots">
                            ${Array.from({length: 5}, (_, index) => `<span class="${index < difficultyScale.level ? `active ${difficultyScale.color}` : ""}"></span>`).join("")}
                        </div>
    
                        <span class="difficulty_badge ${difficultyScale.color}"> ${task.difficult}</span>
                    </div>
                    

                    <button class="expand_btn" type="button"> 
                        View Details
                        <img src="/img/arrow-icon.png" alt="expand" class="expand_icon">
                    </button>

                    <div class="task_expanded_container">
                        <div class="task_expanded">
                            <p>${task.details} </p>

                            <div class="skills">
                                <strong>Skills Practiced</strong>
                                <div class="skill_list">
                                    ${task.skill.map(skill => `<small> ${skill} </small>`).join("")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            roadmapTimeline.appendChild(taskCard);
        });

        roadmapContainer.appendChild(roadmapTimeline);
    });
};
displayTrack(selectedTrack);
dataTrack.classList.add("active");

/* Function to expand detail task */
roadmapContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("expand_btn")) {
        const taskCard = e.target.closest(".task_card")
        const expandDetails = taskCard.querySelector(".task_expanded_container");

        expandDetails.classList.toggle("open");

        if(expandDetails.classList.contains("open")) {
            e.target.innerHTML = `
                Hide Details
                <img src="/img/arrow-icon.png" alt="expand" class="expand_icon rotate_icon">
            `;
        } else {
            e.target.innerHTML = `
                View Details
                <img src="/img/arrow-icon.png" alt="expand" class="expand_icon">`;
        }
    }
});

/* Function to switch tracks */
trackCards.forEach(card => {
    card.addEventListener("click", () => {
        trackCards.forEach(track => {
            track.classList.remove("active");
            track.querySelector(".track_status").textContent = "View Track";

        });

        card.classList.add("active");
        card.querySelector(".track_status").textContent = "Selected";

        const trackName = card.querySelector("h3").textContent;
        selectedTrackText.textContent = trackName; 

        /* Determine which track to display */
        selectedTrack = card.dataset.track;

        displayTrack(selectedTrack);
    });
});