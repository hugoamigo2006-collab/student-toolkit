/* ==========================================
   FINAL GRADE CALCULATOR
========================================== */

const currentGradeInput =
    document.getElementById("currentGrade");

const finalWeightInput =
    document.getElementById("finalWeight");

const targetGradeInput =
    document.getElementById("targetGrade");

const calculateFinalGradeButton =
    document.getElementById("calculateFinalGrade");

const clearFinalGradeButton =
    document.getElementById("clearFinalGrade");

const finalGradeResult =
    document.getElementById("finalGradeResult");

const scenarioSection =
    document.getElementById("scenarioSection");

const scenarioTableBody =
    document.getElementById("scenarioTableBody");

const maximumGradeResult =
    document.getElementById("maximumGradeResult");

const minimumGradeResult =
    document.getElementById("minimumGradeResult");


function calculateRequiredFinalGrade() {

    const currentGrade =
        parseFloat(currentGradeInput.value);

    const finalWeight =
        parseFloat(finalWeightInput.value);

    const targetGrade =
        parseFloat(targetGradeInput.value);


    if (
        isNaN(currentGrade) ||
        isNaN(finalWeight) ||
        isNaN(targetGrade)
    ) {

        finalGradeResult.innerHTML = `
            <div class="error-result">
                <span>⚠️</span>
                <p>
                    Please enter all three values before calculating.
                </p>
            </div>
        `;

        return;
    }


    if (
        currentGrade < 0 ||
        currentGrade > 100 ||
        finalWeight <= 0 ||
        finalWeight > 100 ||
        targetGrade < 0 ||
        targetGrade > 100
    ) {

        finalGradeResult.innerHTML = `
            <div class="error-result">
                <span>⚠️</span>
                <p>
                    Please enter valid values between 0 and 100.
                </p>
            </div>
        `;

        return;
    }


    const weight =
        finalWeight / 100;


    const requiredGrade =
        (
            targetGrade -
            currentGrade * (1 - weight)
        ) / weight;


    const maximumGrade =
        currentGrade * (1 - weight) +
        100 * weight;


    const minimumGrade =
        currentGrade * (1 - weight);


    maximumGradeResult.innerHTML = `
        <strong>
            ${maximumGrade.toFixed(1)}%
        </strong>
        <span>
            Maximum possible course grade
        </span>
    `;


    minimumGradeResult.innerHTML = `
        <strong>
            ${minimumGrade.toFixed(1)}%
        </strong>
        <span>
            Course grade if you score 0% on the final
        </span>
    `;


    let resultClass = "success-result";
    let resultTitle = "You need";
    let resultMessage = "";


    if (requiredGrade > 100) {

        resultClass = "warning-result";

        resultTitle =
            "That target is out of reach";

        resultMessage = `
            You would need
            <strong>${requiredGrade.toFixed(1)}%</strong>
            on the final.

            Even with a perfect 100% on the final,
            your highest possible course grade is
            <strong>${maximumGrade.toFixed(1)}%</strong>.
        `;

    } else if (requiredGrade <= 0) {

        resultClass = "success-result";

        resultTitle =
            "You've already secured your target";

        resultMessage = `
            Your current grade is already high enough
            to reach your target, even with a 0% on the final.
        `;

    } else {

        resultMessage = `
            You need at least
            <strong>${requiredGrade.toFixed(1)}%</strong>
            on your final exam to finish with
            <strong>${targetGrade.toFixed(1)}%</strong>.
        `;
    }


    finalGradeResult.innerHTML = `

        <div class="${resultClass}">

            <span class="result-small-title">
                ${resultTitle}
            </span>

            ${
                requiredGrade > 100 ||
                requiredGrade <= 0
                    ? ""
                    : `
                        <span class="big-result">
                            ${requiredGrade.toFixed(1)}%
                        </span>
                    `
            }

            <p>
                ${resultMessage}
            </p>

        </div>

    `;


    generateScenarioTable(
        currentGrade,
        weight
    );


    scenarioSection.classList.remove("hidden");
}


function generateScenarioTable(
    currentGrade,
    weight
) {

    const scores = [
        50,
        60,
        70,
        75,
        80,
        85,
        90,
        95,
        100
    ];


    scenarioTableBody.innerHTML = "";


    scores.forEach(function(score) {

        const finalCourseGrade =
            currentGrade * (1 - weight) +
            score * weight;


        const row =
            document.createElement("tr");


        row.innerHTML = `
            <td>
                ${score}%
            </td>

            <td>
                <strong>
                    ${finalCourseGrade.toFixed(1)}%
                </strong>
            </td>
        `;


        scenarioTableBody.appendChild(row);

    });

}


if (calculateFinalGradeButton) {

    calculateFinalGradeButton.addEventListener(
        "click",
        calculateRequiredFinalGrade
    );

}


if (clearFinalGradeButton) {

    clearFinalGradeButton.addEventListener(
        "click",
        function() {

            currentGradeInput.value = "";
            finalWeightInput.value = "";
            targetGradeInput.value = "";


            finalGradeResult.innerHTML = `
                <div class="result-placeholder">

                    <span class="result-icon">
                        🎯
                    </span>

                    <p>
                        Your required final exam score
                        will appear here.
                    </p>

                </div>
            `;


            scenarioSection.classList.add("hidden");


            maximumGradeResult.innerHTML =
                "Enter your grades above to see your maximum possible course grade.";


            minimumGradeResult.innerHTML =
                "Enter your grades above to see your minimum possible course grade.";

        }
    );

}


/* QUICK TARGET BUTTONS */

const quickTargetButtons =
    document.querySelectorAll(".quick-targets button");


quickTargetButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            const target =
                button.dataset.target;


            if (targetGradeInput) {

                targetGradeInput.value =
                    target;

                targetGradeInput.focus();

            }

        }
    );

});



/* ==========================================
   GRADE CALCULATOR
========================================== */

const calculateGrade =
    document.getElementById("calculateGrade");


if (calculateGrade) {

    calculateGrade.addEventListener(
        "click",
        function() {

            const grade1 =
                parseFloat(
                    document.getElementById(
                        "assignmentGrade1"
                    ).value
                );

            const weight1 =
                parseFloat(
                    document.getElementById(
                        "assignmentWeight1"
                    ).value
                );


            const grade2 =
                parseFloat(
                    document.getElementById(
                        "assignmentGrade2"
                    ).value
                );

            const weight2 =
                parseFloat(
                    document.getElementById(
                        "assignmentWeight2"
                    ).value
                );


            const grade3 =
                parseFloat(
                    document.getElementById(
                        "assignmentGrade3"
                    ).value
                );

            const weight3 =
                parseFloat(
                    document.getElementById(
                        "assignmentWeight3"
                    ).value
                );


            const result =
                document.getElementById("gradeResult");


            if (
                isNaN(grade1) ||
                isNaN(weight1) ||
                isNaN(grade2) ||
                isNaN(weight2) ||
                isNaN(grade3) ||
                isNaN(weight3)
            ) {

                result.innerHTML =
                    "<p>Please fill in all the fields.</p>";

                return;
            }


            const totalWeight =
                weight1 +
                weight2 +
                weight3;


            if (
                Math.abs(totalWeight - 100) > 0.01
            ) {

                result.innerHTML = `
                    <p>
                        Your assignment weights must add up to
                        <strong>100%</strong>.
                    </p>

                    <p>
                        Current total:
                        ${totalWeight}%
                    </p>
                `;

                return;
            }


            const finalGrade =
                (
                    grade1 * weight1 +
                    grade2 * weight2 +
                    grade3 * weight3
                ) / 100;


            const rounded =
                Math.round(
                    finalGrade * 100
                ) / 100;


            result.innerHTML = `
                <p>
                    Your current course grade is
                </p>

                <strong>
                    ${rounded}%
                </strong>
            `;

        }
    );


    const clearGrade =
        document.getElementById("clearGrade");


    if (clearGrade) {

        clearGrade.addEventListener(
            "click",
            function() {

                document.getElementById(
                    "assignmentGrade1"
                ).value = "";

                document.getElementById(
                    "assignmentWeight1"
                ).value = "";


                document.getElementById(
                    "assignmentGrade2"
                ).value = "";

                document.getElementById(
                    "assignmentWeight2"
                ).value = "";


                document.getElementById(
                    "assignmentGrade3"
                ).value = "";

                document.getElementById(
                    "assignmentWeight3"
                ).value = "";


                document.getElementById(
                    "gradeResult"
                ).innerHTML =
                    "<p>Your current course grade will appear here.</p>";

            }
        );

    }

}



/* ==========================================
   ATTENDANCE CALCULATOR
========================================== */

const calculateAttendance =
    document.getElementById(
        "calculateAttendance"
    );


if (calculateAttendance) {

    calculateAttendance.addEventListener(
        "click",
        function() {

            const totalClasses =
                parseInt(
                    document.getElementById(
                        "totalClasses"
                    ).value
                );


            const missedClasses =
                parseInt(
                    document.getElementById(
                        "missedClasses"
                    ).value
                );


            const requiredAttendance =
                parseFloat(
                    document.getElementById(
                        "requiredAttendance"
                    ).value
                );


            const result =
                document.getElementById(
                    "attendanceResult"
                );


            if (
                isNaN(totalClasses) ||
                isNaN(missedClasses) ||
                isNaN(requiredAttendance)
            ) {

                result.innerHTML =
                    "<p>Please fill in all the fields.</p>";

                return;
            }


            if (
                totalClasses <= 0 ||
                missedClasses < 0 ||
                missedClasses > totalClasses ||
                requiredAttendance < 0 ||
                requiredAttendance > 100
            ) {

                result.innerHTML =
                    "<p>Please enter valid values.</p>";

                return;
            }


            const attendedClasses =
                totalClasses -
                missedClasses;


            const currentAttendance =
                (
                    attendedClasses /
                    totalClasses
                ) * 100;


            const roundedAttendance =
                Math.round(
                    currentAttendance * 100
                ) / 100;


            const maxTotalMisses =
                Math.floor(
                    totalClasses *
                    (
                        1 -
                        requiredAttendance / 100
                    )
                );


            const additionalMisses =
                Math.max(
                    0,
                    maxTotalMisses -
                    missedClasses
                );


            result.innerHTML = `
                <p>
                    Your current attendance is
                    <strong>
                        ${roundedAttendance}%
                    </strong>.
                </p>

                <p>
                    You can miss approximately
                    <strong>
                        ${additionalMisses}
                    </strong>
                    more class(es).
                </p>
            `;

        }
    );


    const clearAttendance =
        document.getElementById(
            "clearAttendance"
        );


    if (clearAttendance) {

        clearAttendance.addEventListener(
            "click",
            function() {

                document.getElementById(
                    "totalClasses"
                ).value = "";


                document.getElementById(
                    "missedClasses"
                ).value = "";


                document.getElementById(
                    "requiredAttendance"
                ).value = "";


                document.getElementById(
                    "attendanceResult"
                ).innerHTML =
                    "<p>Your attendance result will appear here.</p>";

            }
        );

    }

}



/* ==========================================
   PERCENTAGE CALCULATOR
========================================== */

const calculatePercentage =
    document.getElementById(
        "calculatePercentage"
    );


if (calculatePercentage) {

    calculatePercentage.addEventListener(
        "click",
        function() {

            const part =
                parseFloat(
                    document.getElementById(
                        "percentagePart"
                    ).value
                );


            const total =
                parseFloat(
                    document.getElementById(
                        "percentageTotal"
                    ).value
                );


            const result =
                document.getElementById(
                    "percentageResult"
                );


            if (
                isNaN(part) ||
                isNaN(total)
            ) {

                result.innerHTML =
                    "<p>Please fill in both fields.</p>";

                return;
            }


            if (total === 0) {

                result.innerHTML =
                    "<p>Total cannot be zero.</p>";

                return;
            }


            const percentage =
                (part / total) * 100;


            const rounded =
                Math.round(
                    percentage * 100
                ) / 100;


            result.innerHTML = `
                <p>
                    <strong>
                        ${part}
                    </strong>

                    is

                    <strong>
                        ${rounded}%
                    </strong>

                    of

                    <strong>
                        ${total}
                    </strong>.
                </p>
            `;

        }
    );


    const clearPercentage =
        document.getElementById(
            "clearPercentage"
        );


    if (clearPercentage) {

        clearPercentage.addEventListener(
            "click",
            function() {

                document.getElementById(
                    "percentagePart"
                ).value = "";


                document.getElementById(
                    "percentageTotal"
                ).value = "";


                document.getElementById(
                    "percentageResult"
                ).innerHTML =
                    "<p>Your percentage will appear here.</p>";

            }
        );

    }

}



/* ==========================================
   GPA CALCULATOR
========================================== */

const coursesContainer =
    document.getElementById(
        "coursesContainer"
    );


const addCourseButton =
    document.getElementById(
        "addCourse"
    );


const calculateGPAButton =
    document.getElementById(
        "calculateGPA"
    );


const clearGPAButton =
    document.getElementById(
        "clearGPA"
    );


const gpaResult =
    document.getElementById(
        "gpaResult"
    );



/* ADD COURSE */

if (
    addCourseButton &&
    coursesContainer
) {

    addCourseButton.addEventListener(
        "click",
        function() {

            const courseRow =
                document.createElement(
                    "div"
                );


            courseRow.className =
                "course-row";


            courseRow.innerHTML = `

                <div class="course-input">

                    <label>
                        Course name
                    </label>

                    <input
                        type="text"
                        class="course-name"
                        placeholder="Example: Mathematics"
                    >

                </div>


                <div class="course-input">

                    <label>
                        Grade
                    </label>

                    <select class="course-grade">

                        <option value="4.0">
                            A
                        </option>

                        <option value="3.7">
                            A-
                        </option>

                        <option value="3.3">
                            B+
                        </option>

                        <option value="3.0">
                            B
                        </option>

                        <option value="2.7">
                            B-
                        </option>

                        <option value="2.3">
                            C+
                        </option>

                        <option value="2.0">
                            C
                        </option>

                        <option value="1.7">
                            C-
                        </option>

                        <option value="1.3">
                            D+
                        </option>

                        <option value="1.0">
                            D
                        </option>

                        <option value="0.0">
                            F
                        </option>

                    </select>

                </div>


                <div class="course-input">

                    <label>
                        Credits
                    </label>

                    <input
                        type="number"
                        class="course-credits"
                        placeholder="3"
                        min="0.1"
                        step="0.1"
                    >

                </div>


                <button
                    type="button"
                    class="remove-course"
                >
                    ×
                </button>

            `;


            coursesContainer.appendChild(
                courseRow
            );

        }
    );

}



/* REMOVE COURSE */

if (coursesContainer) {

    coursesContainer.addEventListener(
        "click",
        function(event) {

            if (
                event.target.classList.contains(
                    "remove-course"
                )
            ) {

                const rows =
                    coursesContainer.querySelectorAll(
                        ".course-row"
                    );


                if (rows.length > 1) {

                    event.target
                        .closest(".course-row")
                        .remove();

                }

            }

        }
    );

}



/* CALCULATE GPA */

if (calculateGPAButton) {

    calculateGPAButton.addEventListener(
        "click",
        function() {

            const courseRows =
                coursesContainer.querySelectorAll(
                    ".course-row"
                );


            let totalGradePoints = 0;
            let totalCredits = 0;
            let validCourses = 0;


            courseRows.forEach(
                function(row) {

                    const grade =
                        parseFloat(
                            row.querySelector(
                                ".course-grade"
                            ).value
                        );


                    const credits =
                        parseFloat(
                            row.querySelector(
                                ".course-credits"
                            ).value
                        );


                    if (
                        !isNaN(grade) &&
                        !isNaN(credits) &&
                        credits > 0
                    ) {

                        totalGradePoints +=
                            grade * credits;


                        totalCredits +=
                            credits;


                        validCourses++;

                    }

                }
            );


            if (
                validCourses === 0 ||
                totalCredits === 0
            ) {

                gpaResult.innerHTML = `

                    <div class="result-placeholder">

                        <span class="result-icon">
                            ⚠️
                        </span>

                        <p>
                            Please enter credits for at least one course.
                        </p>

                    </div>

                `;

                return;

            }


            const gpa =
                totalGradePoints /
                totalCredits;


            gpaResult.innerHTML = `

                <div class="result-success">

                    <span class="result-icon">
                        🎓
                    </span>

                    <h3>
                        Your GPA
                    </h3>

                    <div class="result-number">
                        ${gpa.toFixed(2)}
                    </div>

                    <p>
                        Based on
                        ${validCourses}
                        course${validCourses === 1 ? "" : "s"}
                        and
                        ${totalCredits}
                        total credit${totalCredits === 1 ? "" : "s"}.
                    </p>

                </div>

            `;

        }
    );

}



/* CLEAR GPA */

if (
    clearGPAButton &&
    coursesContainer
) {

    clearGPAButton.addEventListener(
        "click",
        function() {

            coursesContainer.innerHTML = `

                <div class="course-row">

                    <div class="course-input">

                        <label>
                            Course name
                        </label>

                        <input
                            type="text"
                            class="course-name"
                            placeholder="Example: Mathematics"
                        >

                    </div>


                    <div class="course-input">

                        <label>
                            Grade
                        </label>

                        <select class="course-grade">

                            <option value="4.0">
                                A
                            </option>

                            <option value="3.7">
                                A-
                            </option>

                            <option value="3.3">
                                B+
                            </option>

                            <option value="3.0">
                                B
                            </option>

                            <option value="2.7">
                                B-
                            </option>

                            <option value="2.3">
                                C+
                            </option>

                            <option value="2.0">
                                C
                            </option>

                            <option value="1.7">
                                C-
                            </option>

                            <option value="1.3">
                                D+
                            </option>

                            <option value="1.0">
                                D
                            </option>

                            <option value="0.0">
                                F
                            </option>

                        </select>

                    </div>


                    <div class="course-input">

                        <label>
                            Credits
                        </label>

                        <input
                            type="number"
                            class="course-credits"
                            placeholder="3"
                            min="0.1"
                            step="0.1"
                        >

                    </div>


                    <button
                        type="button"
                        class="remove-course"
                    >
                        ×
                    </button>

                </div>

            `;


            gpaResult.innerHTML = `

                <div class="result-placeholder">

                    <span class="result-icon">
                        📊
                    </span>

                    <p>
                        Your GPA will appear here.
                    </p>

                </div>

            `;

        }
    );

}



/* ==========================================
   FEEDBACK FORM
========================================== */

const feedbackForm =
    document.getElementById(
        "feedbackForm"
    );


const feedbackMessage =
    document.getElementById(
        "feedbackMessage"
    );


const feedbackStatus =
    document.getElementById(
        "feedbackStatus"
    );


if (feedbackForm) {

    feedbackForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const message =
                feedbackMessage.value.trim();


            if (!message) {

                feedbackStatus.textContent =
                    "Please write a suggestion first.";

                return;

            }


            feedbackStatus.textContent =
                "Thanks! Your suggestion has been recorded for this demo.";


            feedbackMessage.value = "";

        }
    );

}
