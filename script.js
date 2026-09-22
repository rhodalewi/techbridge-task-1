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


const trackCards = document.querySelectorAll(".track_card")
const dataTrack = document.querySelector(".data_track");
const webTrack = document.querySelector(".web_track");
const roadmapContainer = document.querySelector("#roadmap_container");
const selectedTrackText = document.querySelector("#selected_track");

if(roadmapContainer) {
    /* Default Track to show */
    let selectedTrack = "dataAnalysis";

    function displayTrack(track) {
        const tasks = internshipTracks[track];
        roadmapContainer.innerHTML= "";

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
};


/* CHALLENGE HUB SECTION */
const challenges = {
    dataAnalytics: [
        {
            id: 1,
            title: "Sales Performance Analysis",
            trackKey: "dataAnalytics", 
            track: "Data Analytics",
            difficulty: "Beginner",
            description:
                "Analyse a company's monthly sales dataset to identify top-performing products, peak months, and regional trends.",
            outcome:
                "A clean summary report with key sales insights and a simple visual dashboard.",
            details:
                "Practise data cleaning and basic analysis by working through a realistic sales dataset. You'll identify which products sell best, which months perform strongest, and surface insights that a sales manager would find useful.",
            skills: [
                "Data Cleaning",
                "Pivot Tables",
                "Bar & Line Charts",
                "Basic Visualization"
            ],
            tools: [
                "Microsoft Excel",
                "Google Sheets"
            ],
            deliverable:
                "A cleaned dataset and a short sales analysis report.",
            estimatedTime: "3–4 hours",
            expectedResult:
                "A clear summary of the company's sales performance with useful recommendations."
        },

        {
            id: 2,
            title: "Employee Performance Report",
            trackKey: "dataAnalytics",
            track: "Data Analytics",
            difficulty: "Intermediate",
            description:
                "Analyse HR data to surface patterns in performance ratings, attendance, and department efficiency.",
            outcome:
                "Produce an employee performance report containing useful insights about workforce metrics.",
            details:
                "You will examine an HR dataset and look for patterns in performance ratings, attendance, and department efficiency. Use formulas, Pivot Tables, SQL aggregations and basic visualizations to organize and communicate your findings.",
            skills: [
                "SQL aggregations",
                "Pivot Tables",
                "Data Visualization",
                "Data Interpretation"
            ],
            tools: [
                "Microsoft Excel",
                "Google Sheets",
                "SQL Editor"
            ],
            deliverable:
                "An analysis report with at least three key findings, a supporting Pivot Table, and 2–3 concrete recommendations.",
            estimatedTime: "5–6 hours",
            expectedResult:
                "A report that identifies important customer segments and highlights meaningful patterns."
        },

        {
            id: 3,
            title: "Business Performance Dashboard",
            trackKey: "dataAnalytics",
            track: "Data Analytics",
            difficulty: "Advanced",
            description:
                "Build a business dashboard that combines important performance metrics into one clear visual report.",
            outcome:
                "Create an interactive dashboard that helps stakeholders understand business performance.",
            details:
                "You will work with a business dataset and select the most useful metrics to display. Organize the data, create charts, and design a dashboard that allows users to quickly understand important performance trends.",
            skills: [
                "Data Analysis",
                "Dashboards",
                "Charts",
                "Data Visualization"
            ],
            tools: [
                "Microsoft Excel",
                "Google Sheets"
            ],
            deliverable:
                "A complete business performance dashboard.",
            estimatedTime: "4–5 hours",
            expectedResult:
                "A clear dashboard presenting important business metrics and trends."
        }
    ],

    webDevelopment: [
        {
            id: 4,
            title: "Product Landing Page",
            trackKey: "webDevelopment",
            track: "Web Development",
            difficulty: "Beginner",
            description:
                "Build a responsive product landing page for a product or service using HTML and CSS.",
            outcome:
                "Create a clean product landing page with a clear layout, content sections, and call-to-action.",
            details:
                "You will build a product landing page for a fictional product or service. The page should contain a hero section, feature section, call-to-action, and footer while maintaining a responsive layout across different screen sizes.",
            skills: [
                "HTML",
                "CSS",
                "Media Queries",
                "Responsive Design",
                "Layout"
            ],
            tools: [
                "VS Code",
                "Browser"
            ],
            deliverable:
                "A deployed landing page with at least four sections (hero, features, pricing, footer) that is fully responsive.",
            estimatedTime: "3–4 hours",
            expectedResult:
                "A polished responsive landing page that works well on desktop and mobile."
        },

        {
            id: 5,
            title: "Filterable Product Grid",
            trackKey: "webDevelopment",
            track: "Web Development",
            difficulty: "Intermediate ",
            description:
                "Create a filterable product grid that allows users to sort and search through a collection of items.",
            outcome:
                "Build a functional product grid with filtering and search capabilities.",
            details:
                "You will build a filterable product grid that allows users to sort and search through a collection of items. Implement interactive filtering and search functionality using JavaScript.",
            skills: [
                "HTML",
                "CSS Grid",
                "JavaScript",
                "DOM Manipulation",
                "Responsive Design"
            ],
            tools: [
                "VS Code",
                "Browser DevTools"
            ],
            deliverable:
                "A functional product grid with filtering and search capabilities.",
            estimatedTime: "5-6 hours",
            expectedResult:
                "A responsive product grid that allows users to easily find and sort items."
        },

        {
            id: 6,
            title: "Responsive Admin Dashboard",
            trackKey: "webDevelopment",
            track: "Web Development",
            difficulty: "Advanced",
            description:
                "Build a responsive admin dashboard with interactive elements and data visualization.",
            outcome:
                "Create a functional admin dashboard that provides a comprehensive view of key metrics and allows for interactive data exploration.",
            details:
                "You will create a responsive admin dashboard that displays key performance indicators, charts, and tables. Use JavaScript to implement interactive features and ensure the dashboard is fully responsive across different devices.",
            skills: [
                "HTML",
                "CSS",
                "JavaScript",
                "Responsive Design",
                "Data Visualization"
            ],
            tools: [
                "VS Code",
                "Chrome DevTools"
            ],
            deliverable:
                "A responsive and interactive admin dashboard.",
            estimatedTime: "5–7 hours",
            expectedResult:
                "A dashboard that provides a comprehensive view of key metrics and allows for interactive data exploration."
        }
    ]
};


const challengeContainer = document.getElementById("challenge_container");
const challengeCount = document.getElementById("challenge_count");
const noResultsMessage = document.getElementById("no_results");
const challengeModal = document.getElementById("challenge_modal");
const modalClose = document.getElementById("modal_close");
const modalTrack = document.getElementById("modal_track");
const modalDifficulty = document.getElementById("modal_difficulty");
const modalTitle = document.getElementById("modal_challenge_title");
const modalDetails = document.getElementById("modal_details");
const modalSkills = document.getElementById("modal_skills");
const modalTools = document.getElementById("modal_tools");
const modalDeliverable = document.getElementById("modal_deliverable");
const modalTime = document.getElementById("modal_time");
const modalResult = document.getElementById("modal_result");
const modalOverlay = document.querySelector(".modal_overlay");
const modalHeading = document.querySelectorAll(".modal_heading");
const modalButton = document.querySelector(".modal_button");
const challengeFilter = document.querySelector(".filter_container");
const trackFilters = document.querySelectorAll("#track_filters .filter_btn");
const difficultyFilters = document.querySelectorAll("#difficulty_filters .filter_btn");
const filterSearchInput = document.getElementById("challenge_search");
const challengeCountNo = document.getElementById("challenge_count");
const resetFilterBtn = document.getElementById("reset_filters");

/* Make all challenges into one array and assign it to their tracks */
const allChallenges = Object.entries(challenges).flatMap(([trackKey, challenges]) => {
    return challenges.map(challenge => {
        return {
            ...challenge,
            trackKey: trackKey,
        }
    })
});

/* Function to display challenges */
if(challengeContainer) {    
    function displayChallenges(challengeList) {
        challengeContainer.innerHTML = "";
        challengeCount.textContent = challengeList.length;

        if (challengeList.length === 0) {
            noResultsMessage.style.display = "flex";
        } else {
            noResultsMessage.style.display = "none";
            challengeList.forEach(challenge => {
                const challengeCard = document.createElement("div");
                challengeCard.classList.add("challenge_card");
                challengeCard.innerHTML = `
                   <div class="challenge_card_top">
                        <span class="track_badge ${challenge.trackKey}">
                            ${challenge.track}
                        </span>

                        <span class="difficulty ${challenge.difficulty.toLowerCase()}">
                            ${challenge.difficulty}
                        </span>
                    </div>

                    <div class="challenge_card_content">
                        <h3>${challenge.title}</h3>

                        <p class="challenge_description"> ${challenge.description}</p>

                        <div class="challenge_outcome">
                            <strong>Expected Outcome </strong>
                            <p> ${challenge.outcome}</p>
                        </div>

                        <button
                            type="button"
                            class="view_challenge_btn cta_button ${challenge.trackKey}"
                            data-id="${challenge.id}"
                        >
                            View Challenge

                            <img src="/img/btn-arrow-icon.png" alt="Arrow">
                        </button>
                    </div>
                `;
                challengeContainer.appendChild(challengeCard);
            });
        }
    };

    displayChallenges(allChallenges);

/* Function to filter challenges by track, difficulty and search. Reset Filter and  */
    /* TRACK FILTER FUNCTION */
    let selectedFilterTrack = "all";
    let selectedFilterDifficulty = "all";
    let filterSearchTerm = "";
    let challengeCountNo = 6;

    function filterChallenges() {
        let filteredChallenges = allChallenges.filter(challenge => {
            const matchesTrack = selectedFilterTrack === "all" || challenge.trackKey === selectedFilterTrack;

            const matchesDifficulty = selectedFilterDifficulty === "all" || challenge.difficulty === selectedFilterDifficulty;

            const matchesSearchTerm = filterSearchTerm === "" || challenge.title.toLowerCase().includes(filterSearchTerm) || challenge.track.toLowerCase().includes(filterSearchTerm);

            return (
                matchesTrack && matchesDifficulty && matchesSearchTerm
            )
        });

        if(challengeCountNo !== 6) {
            filteredChallenges = filteredChallenges.slice(0, Number(challengeCountNo))
        };

        /* Update challenges container */
        displayChallenges(filteredChallenges);
    };

    /* Connect the track filter buttons */
    trackFilters.forEach(filterBtn => {
        filterBtn.addEventListener("click", () => {
            selectedFilterTrack = filterBtn.dataset.track;

            trackFilters.forEach(btn => btn.classList.remove("active"));

            filterBtn.classList.add("active");

            filterChallenges();
        })
    });

    /* Connect the difficulty filter buttons */
    difficultyFilters.forEach(filterBtn => {
        filterBtn.addEventListener("click", () => {
            selectedFilterDifficulty = filterBtn.dataset.difficulty;

            difficultyFilters.forEach(btn => btn.classList.remove("active"));

            filterBtn.classList.add("active");
            filterChallenges();
        })
    });

    /* Connect the search input filter */
    filterSearchInput.addEventListener("input", (e) => {
        e.preventDefault();

        filterSearchTerm = e.target.value.toLowerCase().trim();
        filterChallenges();
    });

    /* Display the number of challenges shown  */
   /*  challengeCountNo.textContent = allChallenges.length; */

    /* Reset Filter */
    resetFilterBtn.addEventListener("click", () => {
        selectedFilterTrack = "all";
        selectedFilterDifficulty = "all";
        filterSearchTerm = "";
        challengeCountNo = 6;
        filterSearchInput.value = ""

        trackFilters.forEach(btn => {
            btn.classList.remove("active");

            if(btn.dataset.track === "all") {
                btn.classList.add("active");
            };
        });

        difficultyFilters.forEach(btn => {
            btn.classList.remove("active");

            if(btn.dataset.difficulty === "all") {
                btn.classList.add("active");
            };
        });

        filterChallenges()
    })
};

/* Function to open challenge modal */
if(challengeModal) {
    /* Function to open modal */
    function openChallengeModal(challengeId) {
        const challenge = allChallenges.find(challenge => challenge.id === Number(challengeId))

        if(!challenge) return;

        modalTrack.innerHTML = `<span class="track_badge ${challenge.trackKey}">${challenge.track}</span>`;
        modalDifficulty.innerHTML = `<span class="difficulty ${challenge.difficulty.toLowerCase()}">${challenge.difficulty}</span>`;
        modalTitle.textContent = challenge.title;
        modalDetails.textContent = challenge.details;
        modalSkills.innerHTML = challenge.skills.map(skill => `<span>${skill}</span>`).join(" ");
        modalTools.innerHTML = challenge.tools.map(tool => `<span>${tool}</span>`).join(" ");
        modalDeliverable.textContent = challenge.deliverable;
        modalTime.textContent = challenge.estimatedTime;
        /* modalResult.textContent = challenge.expectedResult;  */

        modalHeading.forEach(heading => {
            heading.style.color = challenge.trackKey === "dataAnalytics" ? "#078F8F" : "#5f3eba";
        });
        modalButton.style.backgroundColor = challenge.trackKey === "dataAnalytics" ? "#078F8F" : "#5f3eba";
        
        challengeModal.classList.add("show");
        challengeModal.setAttribute("aria-hidden", "false");
        modalOverlay.classList.add("overlay");

    };

    /* function to make the view button work*/
    challengeContainer.addEventListener("click", (e) => {
        const viewButton = e.target.closest(".view_challenge_btn");

        if(!viewButton) return;

        const challengeId = viewButton.dataset.id;

        openChallengeModal(challengeId);
    })

    /* Close Function */
    function closeChallengeModal() {
        challengeModal.classList.remove("show");
        challengeModal.setAttribute("aria-hidden", "true");
        modalOverlay.classList.remove("overlay");
    }

    modalClose.addEventListener("click", closeChallengeModal);
};
