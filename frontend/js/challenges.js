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
            expectedResult: "Create a functional admin dashboard that provides a comprehensive view of key metrics and allows for interactive data exploration"
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
const dataChallengesNo = document.querySelector(".dataChallenge_count");
const webChallengesNo = document.querySelector(".webChallenge_count");

/* Make all challenges into one array and assign it to their tracks */
const allChallenges = Object.entries(challenges).flatMap(([trackKey, challenges]) => {
    return challenges.map(challenge => {
        return {
            ...challenge,
            trackKey: trackKey,
        }
    })
});

window.challenges = allChallenges;

/* Function to display challenges */
if(challengeContainer) {    
    function displayChallenges(challengeList) {
        challengeContainer.innerHTML = "";
        challengeCount.textContent = challengeList.length;
        dataChallengesNo.textContent = challenges.dataAnalytics.length;
        webChallengesNo.textContent = challenges.webDevelopment.length;

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

                            <img src="../img/btn-arrow-icon.png" alt="Arrow">
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