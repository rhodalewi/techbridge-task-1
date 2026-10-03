const BACKEND_URL = "https://techbridge-backend-t4du.onrender.com" || "http://localhost:3000";
const TASK_API_URL = `${BACKEND_URL}/api/tasks`;

const searchForm = document.getElementById("platform_search_form");
const searchInput = document.getElementById("platform_search_input");
const searchResults = document.getElementById("platform_search_results");
const searchModal = document.getElementById("search_modal");
const searchModalClose = document.getElementById("search_modal_close");
const searchModalType = document.getElementById("search_modal_type");
const searchModalTitle = document.getElementById("search_modal_title");
const searchModalDescription = document.getElementById("search_modal_description");
const searchModalDetails = document.getElementById("search_modal_details");
const searchModalOverlay = document.querySelector(".search_modal_overlay");

let internshipTasks = [];
let challengesData = [];

/* Fetch tasks from backend */
async function fetchSearchTasks() {
    try {
        const response = await fetch(TASK_API_URL);
        if(!response.ok) {
            throw new Error("Failed to load tasks");
        }

        internshipTasks = await response.json();

    } catch (error) {
        console.error(error);
        searchResults.innerHTML = `<p>Unable to load tasks for search. Please try again!</p>`
    };
};

/* fetch all challenges */
function fetchChallenges() {
    if(Array.isArray(window.challenges)) {
        challengesData = window.challenges;
    } else {
        challengesData = [];
    };
};

/* SEARCH FUNCTION */
function search(searchTerm) {
    const term = searchTerm.trim().toLowerCase();

    if(!term) {
        searchResults.innerHTML = "";
        return;
    };

    /* search task */
    const matchingTasks = internshipTasks.filter(task => {
        return (
            task.title.toLowerCase().includes(term) || task.description.toLowerCase().includes(term) || task.status.toLowerCase().includes(term)
        );
    });

    /* search  challenges*/
    const matchingChallenges = challengesData.filter(challenge => {
        return (
            challenge.title.toLowerCase().includes(term) || challenge.description.toLowerCase().includes(term) || challenge.track.toLowerCase().includes(term) || challenge.difficulty.toLowerCase().includes(term)
        );
    });

    displaySearchResults(
        matchingTasks,
        matchingChallenges
    );
};

/* Display search result */
function displaySearchResults(tasks, challenges) {
    const totalResults = tasks.length + challenges.length;

    if(totalResults === 0) {
        searchResults.innerHTML = `
            <div class="search_no_results">
                <img src="./img/empty-icon.png" alt="No result found">
                <p>No matching results found!</p>
            </div>
        `;

        return;
    };

    let searchResultsHTML =`
        <div class="search_results_heading">
            <p>
                ${totalResults}
                result${totalResults !== 1 ? "s" : ""} found
            </p>

            <button class="close_search_result"> &times; </button>
        </div>
    `;

    /* Task search Results display*/
    tasks.forEach(task => {
        searchResultsHTML += `
            <article class="search_result_card">
                <div class="search_result_info">
                    <span class="search_result_type">Internship Task</span>

                    <h3>Task ${task.id} - ${task.title}</h3>

                    <p> ${task.description} </p>
                </div>

                <a 
                    data-type = "task"
                    data-id = "${task.id}"
                    class="search_result_link"
                >
                    View Task
                </a>
            </article>
        `;
    });

    /* Challenges search result display */
    challenges.forEach(challenge => {
        searchResultsHTML += `
            <article class="search_result_card">
                <div class="search_result_info">
                    <span class="search_result_type">Challenge</span>

                    <h3>${challenge.title}</h3>

                    <p> ${challenge.track} - ${challenge.difficulty} </p>
                </div>

                <a 
                    data-type="challenge"
                    data-id="${challenge.id}"
                    class="search_result_link"
                >
                    View Challenge
                </a>
            </article>
        `;
    });

    searchResults.innerHTML = searchResultsHTML;
};

/* function to open search result modal */
function openSearchModal(type, id) {
    if(type === "task") {
        const tasks = internshipTasks.find(task => task.id === Number(id));
        if(!tasks) return;

        searchModalType.textContent = "Internship Task";
        searchModalTitle.textContent = `Task ${tasks.id} - ${tasks.title}`;
        searchModalDescription.textContent = tasks.description;
        searchModalDetails.innerHTML = `
            <p>
                <strong>Status:</strong>
                ${tasks.status}
            </p>

            <a href="./html/programs.html" class="cta_button">View Programs</a>
        `;
    } else if(type === "challenge") {
        const challenges = challengesData.find(challenge => challenge.id === Number(id));

        if(!challenges) return;

        searchModalType.textContent = "Challenge";
        searchModalTitle.textContent = challenges.title;
        searchModalDescription.textContent = challenges.description;

        searchModalDetails.innerHTML = `
            <p>
                <strong>Track:</strong>
                ${challenges.track}
            </p>

            <p>
                <strong>Difficulty:</strong>
                ${challenges.difficulty}
            </p>

            <a href="./html/challenges.html" class="cta_button search_modal_action"> View Challenges </a>
        `;
    };

    searchModal.classList.add("show");
    searchModal.setAttribute("aria-hidden", "false");
    searchModalOverlay.classList.add("overlay");
}

searchResults.addEventListener("click", (e) => {
    const viewButton = e.target.closest(".search_result_link");

    if(!viewButton) return;

    const type = viewButton.dataset.type;
    const id = viewButton.dataset.id;

    openSearchModal(type, id);
});

function closeSearchModal() {
    searchModal.classList.remove("show");
    searchModal.setAttribute("aria-hidden", 'true');
    searchModalOverlay.classList.remove("overlay");
};

searchModalClose.addEventListener("click", closeSearchModal);
searchModalOverlay.addEventListener("click", closeSearchModal);


/* Form event */
if(searchForm) {
    searchForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const searchTerm = searchInput.value;

        searchResults.innerHTML = `
            <div class="search_loading">
                Searching tasks and challenges...
            </div>
        `;

        if(internshipTasks.length === 0) {
            await fetchSearchTasks();
        };

        fetchChallenges();
        search(searchTerm);
    });
};

/* Close search result */
searchResults.addEventListener("click", (e) => {
    if(!e.target.closest(".close_search_result")) return;

    searchResults.innerHTML = "";
    searchInput.value = "";
});

fetchSearchTasks();
fetchChallenges();