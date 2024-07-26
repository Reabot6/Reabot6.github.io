// document.addEventListener("DOMContentLoaded", () => {
//     if (localStorage.getItem('authenticated') !== 'true') {
//         window.location.href = 'lasu-in.html';
//     }
//     const courseInput = document.getElementById('courseInput');
//     const addCourseButton = document.getElementById('addCourseButton');
//     const pickTopicButton = document.getElementById('pickTopicButton');
//     const coursesList = document.getElementById('courses');
//     const randomCourseDiv = document.getElementById('randomCourse');

//     let courses = JSON.parse(localStorage.getItem('courses')) || [];

//     addCourseButton.addEventListener('click', () => {
//         const course = courseInput.value.trim();
//         if (course) {
//             courses.push(course);
//             courseInput.value = '';
//             updateLocalStorage();
//             displayCourses();
//         }
//     });

//     pickTopicButton.addEventListener('click', () => {
//         if (courses.length > 0) {
//             const randomIndex = Math.floor(Math.random() * courses.length);
//             randomCourseDiv.textContent = courses[randomIndex];
//         } else {
//             randomCourseDiv.textContent = 'No courses available';
//         }
//     });

//     function displayCourses() {
//         coursesList.innerHTML = courses.map((course, index) => `
//             <div id="course-${index}">
//                 <span>${course}</span>
//                 <button onclick="deleteCourse(${index})" class="delete-button">X</button>
//             </div>
//         `).join('');
//     }

//     window.deleteCourse = (index) => {
//         const courseDiv = document.getElementById(`course-${index}`);
//         courseDiv.classList.add('hidden');
//         setTimeout(() => {
//             courses.splice(index, 1);
//             updateLocalStorage();
//             displayCourses();
//         }, 300); // Match the duration of the fadeOut animation
//     };

//     function updateLocalStorage() {
//         localStorage.setItem(`${username}_courses`, JSON.stringify(courses));
//     }

//     displayCourses();
//     document.getElementById('logoutBtn').addEventListener('click', function () {
//     localStorage.removeItem('authenticated');
//     window.location.href = 'lasu.html';
// });

// });
document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem('username');
    if (localStorage.getItem('authenticated') !== 'true') {
        window.location.href = 'lasu-in.html';
    }
     // Display the current username
     const currentUserSpan = document.getElementById('currentUser');
     currentUserSpan.textContent = username;
    const courseInput = document.getElementById('courseInput');
    const addCourseButton = document.getElementById('addCourseButton');
    const pickTopicButton = document.getElementById('pickTopicButton');
    const coursesList = document.getElementById('courses');
    const randomCourseDiv = document.getElementById('randomCourse');
    const logoutBtn = document.getElementById('logoutBtn');

    let courses = JSON.parse(localStorage.getItem(`${username}_courses`)) || [];

    addCourseButton.addEventListener('click', () => {
        const course = courseInput.value.trim();
        if (course) {
            courses.push(course);
            courseInput.value = '';
            updateLocalStorage();
            displayCourses();  // Ensure that courses are displayed after adding
        } else {
            alert("Course name cannot be empty!");
        }
    });

    pickTopicButton.addEventListener('click', () => {
        if (courses.length > 0) {
            const randomIndex = Math.floor(Math.random() * courses.length);
            randomCourseDiv.textContent = courses[randomIndex];
        } else {
            randomCourseDiv.textContent = 'No courses available';
        }
    });

    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('authenticated');
        localStorage.removeItem('username');
        window.location.href = 'lasu-in.html';
    });

    function displayCourses() {
        coursesList.innerHTML = courses.map((course, index) => `
            <div id="course-${index}">
                <span>${course}</span>
                <button onclick="deleteCourse(${index})" class="delete-button">X</button>
            </div>
        `).join('');
    }

    window.deleteCourse = (index) => {
        const courseDiv = document.getElementById(`course-${index}`);
        courseDiv.classList.add('hidden');
        setTimeout(() => {
            courses.splice(index, 1);
            updateLocalStorage();
            displayCourses();  // Ensure that courses are displayed after deletion
        }, 300); // Match the duration of the fadeOut animation
    };

    function updateLocalStorage() {
        localStorage.setItem(`${username}_courses`, JSON.stringify(courses));
    }

    displayCourses();  // Ensure that courses are displayed on initial load
});
