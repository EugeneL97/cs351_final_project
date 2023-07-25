document.addEventListener("DOMContentLoaded", function () {
  const numCoursesInput = document.getElementById("num-courses");
  const coursesContainer = document.getElementById("courses");
  const totalCreditsSpan = document.getElementById("total-credits");
  const gpaSpan = document.getElementById("gpa");
  const calculateBtn = document.getElementById("calculate-btn");

  calculateBtn.addEventListener("click", calculateGPA);

  function createCourseBox() {
    const courseBox = document.createElement("div");
    courseBox.classList.add("course-box");

    courseBox.innerHTML = `
      <label for="course-name">Course Name:</label>
      <input type="text" class="course-name">
      <label for="course-credits">Credits:</label>
      <input type="number" class="course-credits" min="1" max="4">
      <label for="course-grade">Grade (0-4, 0 being an F, 4 being an A):</label>
      <input type="number" class="course-grade" min="0" max="4" value="0">
    `;

    coursesContainer.appendChild(courseBox);
  }

  function calculateGPA() {
    let totalCredits = 0;
    let totalGradePoints = 0;

    const courseBoxes = document.querySelectorAll(".course-box");
    courseBoxes.forEach((box) => {
      const creditsInput = box.querySelector(".course-credits");
      const credits = Number(creditsInput.value);
      const gradeInput = box.querySelector(".course-grade");
      const grade = Number(gradeInput.value);

      if (!isNaN(credits) && !isNaN(grade)) {
        totalCredits += credits;
        totalGradePoints += credits * grade;
      }
    });

    const gpa = totalGradePoints / totalCredits;
    gpaSpan.textContent = isNaN(gpa) ? "0.00" : gpa.toFixed(2);
    totalCreditsSpan.textContent = totalCredits;
  }

  numCoursesInput.addEventListener("change", function () {
    const numCourses = Number(numCoursesInput.value);
    coursesContainer.innerHTML = "";

    for (let i = 0; i < numCourses; i++) {
      createCourseBox();
    }
  });
});
