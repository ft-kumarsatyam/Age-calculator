window.onload = function () {
    // Function to pad single-digit numbers with a leading zero
    function padZero(num) {
        return num < 10 ? "0" + num : num;
    }

    // Function to update the clock
    function updateClock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        var timeString = `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)}`;

        document.getElementById("clock").textContent = timeString;
    }

    // Update the clock every second
    setInterval(updateClock, 1000);

    // Initial update
    updateClock();

    // Function to calculate age
    function calculateAge() {
        var birthDateInput = document.getElementById("calendarDate");
        var resultElement = document.getElementById("result");

        // Reset the result and remove animation class
        resultElement.textContent = "";
        resultElement.classList.remove("result-animation");

        var birthDate = new Date(birthDateInput.value);
        var currentDate = new Date();

        // Check if a valid date is selected
        if (isNaN(birthDate.getTime())) {
            resultElement.textContent = "Please enter a valid birthdate.";
            return;
        }

        // Calculate the difference in milliseconds
        var difference = currentDate - birthDate;

        // Calculate the age in years, months, and days
        var ageDate = new Date(difference);
        var years = ageDate.getUTCFullYear() - 1970;
        var months = ageDate.getUTCMonth();
        var days = ageDate.getUTCDate() - 1;

        // Display the result with animation
        resultElement.textContent = `Your age is: ${years} years, ${months} months, and ${days} days`;
        resultElement.classList.add("result-animation");
    }

    // Attach calculateAge function to button click
    var calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculateAge);

    // Function to reset the form
    function resetForm() {
        document.getElementById("calendarDate").value = "";
        document.getElementById("result").textContent = "";
        document.getElementById("calendarDate").focus();
    }

    // Attach resetForm function to reset button click
    var resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", resetForm);
};
