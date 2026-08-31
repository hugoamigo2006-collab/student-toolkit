/* ==========================================
   FINAL GRADE CALCULATOR
========================================== */

const calculateFinalGrade =
    document.getElementById("calculateFinalGrade");


if (calculateFinalGrade) {

    const clearFinalGrade =
        document.getElementById("clearFinalGrade");


    calculateFinalGrade.addEventListener("click", function () {

        const currentGrade =
            parseFloat(document.getElementById("currentGrade").value);

        const completedWeight =
            parseFloat(document.getElementById("completedWeight").value);

        const desiredGrade =
            parseFloat(document.getElementById("desiredGrade").value);

        const result =
            document.getElementById("finalGradeResult");


        if (
            isNaN(currentGrade) ||
            isNaN(completedWeight) ||
            isNaN(desiredGrade)
        ) {

            result.innerHTML =
                "<p>Please fill in all the fields.</p>";

            return;
        }


        if (
            currentGrade < 0 ||
            currentGrade > 100 ||
            completedWeight <= 0 ||
            completedWeight >= 100 ||
            desiredGrade < 0 ||
            desiredGrade > 100
        ) {

            result.innerHTML =
                "<p>Please enter valid values.</p>";

            return;
        }


        const finalWeight =
            100 - completedWeight;


        const required =
            (
                desiredGrade -
                (currentGrade * completedWeight / 100)
            ) /
            (finalWeight / 100);


        const rounded =
            Math.round(required * 100) / 100;


        if (rounded > 100) {

            result.innerHTML = `
                <p>
                    You need <strong>${rounded}%</strong>
                    on your final exam.
                </p>

                <p>
                    Unfortunately, this is above 100%.
                    Your desired final grade is not possible.
                </p>
            `;

        }

        else if (rounded <= 0) {

            result.innerHTML = `
                <p>
                    You already have enough points
                    to achieve your desired grade.
                </p>
            `;

        }

        else {

            result.innerHTML = `
                <p>
                    You need
                    <strong>${rounded}%</strong>
                    on your final exam.
                </p>

                <p>
                    to finish with
                    <strong>${desiredGrade}%</strong>.
                </p>
            `;

        }

    });


    clearFinalGrade.addEventListener("click", function () {

        document.getElementById("currentGrade").value = "";

        document.getElementById("completedWeight").value = "";

        document.getElementById("desiredGrade").value = "";


        document.getElementById("finalGradeResult").innerHTML =
            "<p>Your required final exam grade will appear here.</p>";

    });

}



/* ==========================================
   GPA CALCULATOR
========================================== */

const calculateGPA =
    document.getElementById("calculateGPA");


if (calculateGPA) {

    calculateGPA.addEventListener("click", function () {

        const grade1 =
            parseFloat(document.getElementById("gpaGrade1").value);

        const credits1 =
            parseFloat(document.getElementById("gpaCredits1").value);

        const grade2 =
            parseFloat(document.getElementById("gpaGrade2").value);

        const credits2 =
            parseFloat(document.getElementById("gpaCredits2").value);

        const grade3 =
            parseFloat(document.getElementById("gpaGrade3").value);

        const credits3 =
            parseFloat(document.getElementById("gpaCredits3").value);


        const result =
            document.getElementById("gpaResult");


        if (
            isNaN(grade1) ||
            isNaN(credits1) ||
            isNaN(grade2) ||
            isNaN(credits2) ||
            isNaN(grade3) ||
            isNaN(credits3)
        ) {

            result.innerHTML =
                "<p>Please fill in all the fields.</p>";

            return;
        }


        const totalCredits =
            credits1 + credits2 + credits3;


        if (totalCredits <= 0) {

            result.innerHTML =
                "<p>Please enter valid credit values.</p>";

            return;
        }


        const gpa =
            (
                grade1 * credits1 +
                grade2 * credits2 +
                grade3 * credits3
            ) / totalCredits;


        const rounded =
            Math.round(gpa * 100) / 100;


        result.innerHTML = `
            <p>Your GPA is</p>

            <strong>${rounded}</strong>

            <p>out of 4.00</p>
        `;

    });


    document.getElementById("clearGPA")
        .addEventListener("click", function () {

            document.getElementById("gpaGrade1").value = "";
            document.getElementById("gpaCredits1").value = "";

            document.getElementById("gpaGrade2").value = "";
            document.getElementById("gpaCredits2").value = "";

            document.getElementById("gpaGrade3").value = "";
            document.getElementById("gpaCredits3").value = "";

            document.getElementById("gpaResult").innerHTML =
                "<p>Your GPA will appear here.</p>";

        });

}



/* ==========================================
   GRADE CALCULATOR
========================================== */

const calculateGrade =
    document.getElementById("calculateGrade");


if (calculateGrade) {

    calculateGrade.addEventListener("click", function () {

        const grade1 =
            parseFloat(document.getElementById("assignmentGrade1").value);

        const weight1 =
            parseFloat(document.getElementById("assignmentWeight1").value);

        const grade2 =
            parseFloat(document.getElementById("assignmentGrade2").value);

        const weight2 =
            parseFloat(document.getElementById("assignmentWeight2").value);

        const grade3 =
            parseFloat(document.getElementById("assignmentGrade3").value);

        const weight3 =
            parseFloat(document.getElementById("assignmentWeight3").value);


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
            weight1 + weight2 + weight3;


        if (Math.abs(totalWeight - 100) > 0.01) {

            result.innerHTML = `
                <p>
                    Your assignment weights must add up to
                    <strong>100%</strong>.
                </p>

                <p>
                    Current total: ${totalWeight}%
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
            Math.round(finalGrade * 100) / 100;


        result.innerHTML = `
            <p>Your current course grade is</p>

            <strong>${rounded}%</strong>
        `;

    });


    document.getElementById("clearGrade")
        .addEventListener("click", function () {

            document.getElementById("assignmentGrade1").value = "";
            document.getElementById("assignmentWeight1").value = "";

            document.getElementById("assignmentGrade2").value = "";
            document.getElementById("assignmentWeight2").value = "";

            document.getElementById("assignmentGrade3").value = "";
            document.getElementById("assignmentWeight3").value = "";

            document.getElementById("gradeResult").innerHTML =
                "<p>Your current course grade will appear here.</p>";

        });

}



/* ==========================================
   ATTENDANCE CALCULATOR
========================================== */

const calculateAttendance =
    document.getElementById("calculateAttendance");


if (calculateAttendance) {

    calculateAttendance.addEventListener("click", function () {

        const totalClasses =
            parseInt(document.getElementById("totalClasses").value);

        const missedClasses =
            parseInt(document.getElementById("missedClasses").value);

        const requiredAttendance =
            parseFloat(document.getElementById("requiredAttendance").value);


        const result =
            document.getElementById("attendanceResult");


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
            totalClasses - missedClasses;


        const currentAttendance =
            (attendedClasses / totalClasses) * 100;


        const roundedAttendance =
            Math.round(currentAttendance * 100) / 100;


        /*
            This is a simple initial version.
            We will improve the attendance model later.
        */

        const maxTotalMisses =
            Math.floor(
                totalClasses *
                (1 - requiredAttendance / 100)
            );


        const additionalMisses =
            Math.max(
                0,
                maxTotalMisses - missedClasses
            );


        result.innerHTML = `
            <p>
                Your current attendance is
                <strong>${roundedAttendance}%</strong>.
            </p>

            <p>
                You can miss approximately
                <strong>${additionalMisses}</strong>
                more class(es).
            </p>
        `;

    });


    document.getElementById("clearAttendance")
        .addEventListener("click", function () {

            document.getElementById("totalClasses").value = "";

            document.getElementById("missedClasses").value = "";

            document.getElementById("requiredAttendance").value = "";


            document.getElementById("attendanceResult").innerHTML =
                "<p>Your attendance result will appear here.</p>";

        });

}



/* ==========================================
   PERCENTAGE CALCULATOR
========================================== */

const calculatePercentage =
    document.getElementById("calculatePercentage");


if (calculatePercentage) {

    calculatePercentage.addEventListener("click", function () {

        const part =
            parseFloat(document.getElementById("percentagePart").value);

        const total =
            parseFloat(document.getElementById("percentageTotal").value);


        const result =
            document.getElementById("percentageResult");


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
            Math.round(percentage * 100) / 100;


        result.innerHTML = `
            <p>
                <strong>${part}</strong>
                is
                <strong>${rounded}%</strong>
                of
                <strong>${total}</strong>.
            </p>
        `;

    });


    document.getElementById("clearPercentage")
        .addEventListener("click", function () {

            document.getElementById("percentagePart").value = "";

            document.getElementById("percentageTotal").value = "";


            document.getElementById("percentageResult").innerHTML =
                "<p>Your percentage will appear here.</p>";

        });

}