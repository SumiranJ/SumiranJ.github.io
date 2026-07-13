document
.getElementById("clear-button")
.addEventListener("click", function (event) {
    const elements = document.querySelectorAll("form input, form textarea");
    Array.from(elements).forEach((element) => {
        if (element.tagName === "SELECT") {
            element.selectedIndex = 0;
        } else {
            element.value = "";
        }
    });
});


courseCount=2;
coursesContainer=document.getElementById("courses-container");

function addCourse() { 
    courseCount += 1;
    const courseEntry = document.createElement("div");
    courseEntry.classList.add("course-entry");
    courseEntry.innerHTML = `<hr/>
    <label for="course-department-${courseCount}">Department:</label>
    <input 
        type="text" 
        id="course-department-${courseCount}"
        name="courseDepartment[]" 
        placeholder="Department" 
        required
    ><br>
    <label for="course-number-${courseCount}">Course Number:</label>
    <input 
        type="text" 
        id="course-number-${courseCount}"
        name="courseNumber[]" 
        placeholder="Course Number" 
        required
    ><br>
    <label for="course-name-${courseCount}">Course Name:</label>
    <input 
        type="text" 
        id="course-name-${courseCount}"
        name="courseName[]" 
        placeholder="Course Name" 
        required
    ><br>
    <label for="course-reason-${courseCount}">Reason for Taking:</label>
    <input 
        type="text" 
        id="course-reason-${courseCount}"
        name="courseReason[]" 
        placeholder="Reason" 
        required
    ><br/>
    <button type="button" class="delete-course">Delete Course</button>
    `;
    coursesContainer.appendChild(courseEntry);
    
    courseEntry.querySelector(".delete-course").addEventListener("click", function () {
        courseEntry.remove();
    });
}

document.getElementById("add-course").addEventListener("click",addCourse);

  const formElement = document.getElementById("form");
  formElement.addEventListener("submit", (e) => e.preventDefault());