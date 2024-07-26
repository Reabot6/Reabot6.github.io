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
// document.addEventListener("DOMContentLoaded", () => {
//     const username = localStorage.getItem('username');
//     if (localStorage.getItem('authenticated') !== 'true') {
//         window.location.href = 'lasu-in.html';
//     }
//      // Display the current username
//      const currentUserSpan = document.getElementById('currentUser');
//      currentUserSpan.textContent = username;
//     const courseInput = document.getElementById('courseInput');
//     const addCourseButton = document.getElementById('addCourseButton');
//     const pickTopicButton = document.getElementById('pickTopicButton');
//     const coursesList = document.getElementById('courses');
//     const randomCourseDiv = document.getElementById('randomCourse');
//     const logoutBtn = document.getElementById('logoutBtn');

//     let courses = JSON.parse(localStorage.getItem(`${username}_courses`)) || [];

//     addCourseButton.addEventListener('click', () => {
//         const course = courseInput.value.trim();
//         if (course) {
//             courses.push(course);
//             courseInput.value = '';
//             updateLocalStorage();
//             displayCourses();  // Ensure that courses are displayed after adding
//         } else {
//             alert("Course name cannot be empty!");
//         }
//     });

//     pickTopicButton.addEventListener('click', () => {
//         if (courses.length > 0) {
//             const randomIndex = Math.floor(Math.random() * courses.length);
//             randomCourseDiv.textContent = courses[randomIndex];

//             // Update pick count
//             coursePickCounts[pickedCourse] = (coursePickCounts[pickedCourse] || 0) + 1;
//             updateLocalStorage();

//             // Calculate and display percentage
//             const totalPicks = Object.values(coursePickCounts).reduce((sum, count) => sum + count, 0);
//             const pickPercentage = ((coursePickCounts[pickedCourse] / totalPicks) * 100).toFixed(2);
//             coursePercentageDiv.textContent = `Picked ${pickPercentage}% of the time`;
//         } else {
//             randomCourseDiv.textContent = 'No courses available';
//         }
//     });

//     logoutBtn.addEventListener('click', () => {
//         localStorage.removeItem('authenticated');
//         localStorage.removeItem('username');
//         window.location.href = 'lasu-in.html';
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
//             displayCourses();  // Ensure that courses are displayed after deletion
//         }, 300); // Match the duration of the fadeOut animation
//     };

//     function updateLocalStorage() {
//         localStorage.setItem(`${username}_courses`, JSON.stringify(courses));
//         localStorage.setItem(`${username}_coursePickCounts`, JSON.stringify(coursePickCounts));
//     }

//     displayCourses();  // Ensure that courses are displayed on initial load
// });
document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem('username');
    if (localStorage.getItem('authenticated') !== 'true') {
        window.location.href = 'login.html';
    }

    // Display the current username
    const currentUserSpan = document.getElementById('currentUser');
    currentUserSpan.textContent = username;

    const courseInput = document.getElementById('courseInput');
    const addCourseButton = document.getElementById('addCourseButton');
    const pickTopicButton = document.getElementById('pickTopicButton');
    const coursesList = document.getElementById('courses');
    const randomCourseDiv = document.getElementById('randomCourse');
    const coursePercentageDiv = document.getElementById('coursePercentage');
    const logoutBtn = document.getElementById('logoutBtn');

    let courses = JSON.parse(localStorage.getItem(`${username}_courses`)) || [];
    let coursePickCounts = JSON.parse(localStorage.getItem(`${username}_coursePickCounts`)) || {};

    addCourseButton.addEventListener('click', () => {
        const course = courseInput.value.trim();
        if (course) {
            courses.push(course);
            coursePickCounts[course] = 0;  // Initialize pick count for the new course
            courseInput.value = '';
            updateLocalStorage();
            displayCourses();
        } else {
            alert("Course name cannot be empty!");
        }
    });

    pickTopicButton.addEventListener('click', () => {
        if (courses.length > 0) {
            const randomIndex = Math.floor(Math.random() * courses.length);
            const pickedCourse = courses[randomIndex];
            randomCourseDiv.textContent = pickedCourse;

            // Update pick count
            coursePickCounts[pickedCourse] = (coursePickCounts[pickedCourse] || 0) + 1;
            updateLocalStorage();

            // Calculate and display percentage
            const totalPicks = Object.values(coursePickCounts).reduce((sum, count) => sum + count, 0);
            const pickPercentage = ((coursePickCounts[pickedCourse] / totalPicks) * 100).toFixed(2);
            courseProgress.value = pickPercentage;
            courseProgressText.textContent = `${pickPercentage}% of picks`;
        } else {
            randomCourseDiv.textContent = 'No courses available';
            courseProgress.value = 0;
            courseProgressText.textContent = '';
        }
    });
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('authenticated');
        localStorage.removeItem('username');
        window.location.href = 'login.html';
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
        const course = courses[index];
        delete coursePickCounts[course];  // Remove pick count for the deleted course
        courses.splice(index, 1);
        updateLocalStorage();
        displayCourses();
    };

    function updateLocalStorage() {
        localStorage.setItem(`${username}_courses`, JSON.stringify(courses));
        localStorage.setItem(`${username}_coursePickCounts`, JSON.stringify(coursePickCounts));
    }

    displayCourses();
});
