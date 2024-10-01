function calculateGrade() {
    const marks = parseInt(document.getElementById("marks").value);
    let grade;

    if (marks > 100 || marks < 0 || isNaN(marks)) {
        grade = "Please enter a valid number between 0 and 100.";
    } else if (marks > 79) {
        grade = "Grade: A";
    } else if (marks >= 60) {
        grade = "Grade: B";
    } else if (marks >= 49) {
        grade = "Grade: C";
    } else if (marks >= 40) {
        grade = "Grade: D";
    } else {
        grade = "Grade: E";
    }

    document.getElementById("output").innerText = grade;
}
