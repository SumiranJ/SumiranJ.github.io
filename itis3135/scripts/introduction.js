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

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('intro-form');
    const formContainer = document.getElementById('container');
    const previewContainer = document.getElementById('preview-container');
    const resetBtn = document.getElementById('reset-btn');

    // Handle Form Submission
    form.addEventListener('submit', (event) => {
        // Prevent page from refreshing
        event.preventDefault(); 

        // 1. Extract values from the form inputs
        const firstName = document.getElementById('first-name').value;
        const nickname = document.getElementById('nickname').value;
        const lastName = document.getElementById('last-name').value;
        const mascotAdj = document.getElementById('mascot-adj').value;
        const divide = document.getElementById('divider').value;
        const mascotAnim = document.getElementById('mascot-animal').value;
        const statement = document.getElementById('personal-statement').value;
        const personal = document.getElementById('personal-background').value;
        const professional = document.getElementById('professional-background').value;
        const academic = document.getElementById('academic-background').value;
        const computer = document.getElementById('primary-computer').value;
        const dept1 = document.getElementById('course-department-1').value;
        const dept2 = document.getElementById('course-department-2').value;
        const num1 = document.getElementById('course-number-1').value;
        const num2 = document.getElementById('course-number-2').value;
        const name1 = document.getElementById('course-name-1').value;
        const name2 = document.getElementById('course-name-2').value;
        const reason1 = document.getElementById('course-reason-1').value;
        const reason2 = document.getElementById('course-reason-2').value;
        const course1 = `${dept1}${num1} - ${name1}: ${reason1}`;
        const course2 = `${dept2}${num2} - ${name2}: ${reason2}`;
        const favQuote = document.getElementById('quote').value;
        const quoteAuthor = document.getElementById('quote-author').value;
        const profileImage = document.getElementById('picture').value;
        const imgCaption = document.getElementById('picture-caption').value;

        
        // 2. Insert values into the preview layout
        document.getElementById('preview-heading').textContent = 
            `${firstName} "${nickname}" ${lastName} ${divide} ${mascotAdj} ${mascotAnim}`;
        
        
        // Define your fallback image URL (can be a local path or an online placeholder)
        const DEFAULT_IMAGE_URL = 'images/sj_at_colvard.jpg';

        document.addEventListener('DOMContentLoaded', () => {
            const profileImg = document.getElementById('preview-image');
            const fileInput = document.getElementById('image-input'); // Your form's file input

            // 1. Set the initial default image on page load
            profileImg.src = DEFAULT_IMAGE_URL;

            // 2. Safe Fallback: If the user provides a broken URL or upload fails, revert to default
            profileImg.addEventListener('error', () => {
                profileImg.src = DEFAULT_IMAGE_URL;
            });

            // 3. Handle Form Submission or Real-time change
            fileInput.addEventListener('change', (event) => {
                const file = event.target.files[0];

                if (file) {
                    // Read the uploaded file and convert it to a viewable URL string
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        profileImg.src = e.target.result; 
                    };
                    reader.readAsDataURL(file);
                } else {
                    // If the user clears the file selection, revert back to default
                    profileImg.src = DEFAULT_IMAGE_URL;
                }
            });
        });


        document.getElementById('preview-caption').textContent = imgCaption;


        document.getElementById('preview-statement').textContent = statement;

        document.getElementById('preview-personal').textContent = 
            `Personal Background: ${personal}`;
        document.getElementById('preview-professional').textContent = 
            `Professional Background: ${professional}`;
        document.getElementById('preview-academic').textContent = 
            `Academic Background: ${academic}`;
        document.getElementById('preview-computer').textContent = 
            `Primary Computer: ${computer}`;

        document.getElementById('preview-course1').textContent= course1;
        document.getElementById('preview-course2').textContent= course2;

        document.getElementById('preview-quote').textContent = `"${favQuote}"`;
        document.getElementById('preview-author').textContent = ` - ${quoteAuthor}`;
        // 3. Toggle visibility to show the introduction page
        formContainer.style.display = 'none';
        previewContainer.style.display = 'block';
    });

    // Handle Reset / Edit Button
    resetBtn.addEventListener('click', () => {
        // Switch visibility back to the form without wiping data
        previewContainer.style.display = 'none';
        formContainer.style.display = 'block';
    });
});

 function getFormData() {
    const form = document.getElementById('intro-form');
    const formData = new FormData(form);
    console.log("formData::::::::",formData);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    return data;
}

function generateHTML() {
    const data = getFormData();
    let htmlString = "<ul>\n";
    for (const [key, value] of Object.entries(data)) {
        htmlString += `  <li><strong>${key}:</strong> ${value}</li>\n`;
    }
    htmlString += "</ul>";
    
    document.getElementById('outputArea').value = htmlString;
}

function generateJSON() {
    const data = getFormData();
    // The parameters (null, 4) pretty-print the JSON with 4 spaces of indentation
    const jsonString = JSON.stringify(data, null, 4);
    
    document.getElementById('outputArea').value = jsonString;
}

function generateXML() {
    const data = getFormData();
    let xmlString = '<?xml version="1.0" encoding="UTF-8"?>\n<form_data>\n';
    for (const [key, value] of Object.entries(data)) {
        xmlString += `    <${key}>${value}</${key}>\n`;
    }
    xmlString += '</form_data>';
    
    document.getElementById('outputArea').value = xmlString;
}