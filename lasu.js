document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('authenticated') !== 'true') {
        window.location.href = 'lasu.html';
    }

    const courseInput = document.getElementById('courseInput');
    const addCourseButton = document.getElementById('addCourseButton');
    const pickTopicButton = document.getElementById('pickTopicButton');
    const coursesList = document.getElementById('courses');
    const randomCourseDiv = document.getElementById('randomCourse');

    let courses = JSON.parse(localStorage.getItem('courses')) || [];

    addCourseButton.addEventListener('click', () => {
        const course = courseInput.value.trim();
        if (course) {
            courses.push(course);
            courseInput.value = '';
            updateLocalStorage();
            displayCourses();
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

    function displayCourses() {
        coursesList.innerHTML = courses.map((course, index) => `
            <div>
                <span>${course}</span>
                <button onclick="deleteCourse(${index})" class="delete-button">X</button>
            </div>
        `).join('');
    }

    window.deleteCourse = (index) => {
        courses.splice(index, 1);
        updateLocalStorage();
        displayCourses();
    };

    function updateLocalStorage() {
        localStorage.setItem('courses', JSON.stringify(courses));
    }

    displayCourses();
});
