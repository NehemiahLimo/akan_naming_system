function validateAndMap() {
            var dobValue = document.getElementById("dob").value;
            var genderValue = document.getElementById("gender").value;

            // Validate if a valid date has been entered
            var dateParts = dobValue.split("/");
            // var year = parseInt(dateParts[0], 10);
            // var month = parseInt(dateParts[1], 10);
            // var day = parseInt(dateParts[2], 10);
            var day = parseInt(dateParts[0], 10);
            var month = parseInt(dateParts[1], 10);
            var year = parseInt(dateParts[2], 10);

            if (isNaN(year) || isNaN(month) || isNaN(day) || month <= 0 || month > 12 || day <= 0 || day > 31) {
                alert("Invalid date. Please enter a valid date.");
                return;
            }

            // Check if the entered date is not greater than the current date
            var currentDate = new Date();
            if (currentDate.getFullYear() < year || (currentDate.getFullYear() === year && (currentDate.getMonth() + 1) < month) || (currentDate.getFullYear() === year && (currentDate.getMonth() + 1) === month && currentDate.getDate() < day)) {
                alert("Invalid date. Please enter a date not greater than the current date.");
                return;
            }

            // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
            var dateObject = new Date(`${year}-${month}-${day}`);
            var dayOfWeek = dateObject.getDay();

            //
            //console.log(dateObject);
            //console.log(dayOfWeek);

            // Akan names based on day of the week
            var akanNames = [
                ["Kwasi", "Akosua"], // Sunday
                ["Kwadwo", "Adwoa"], // Monday
                ["Kwabena", "Abenaa"], // Tuesday
                ["Kwaku", "Akua"], // Wednesday
                ["Yaw", "Yaa"], // Thursday
                ["Kofi", "Afua"], // Friday
                ["Kwame", "Ama"] // Saturday
            ];

            var maleName = akanNames[dayOfWeek][0]; 
            var femaleName = akanNames[dayOfWeek][1];

            // Display the result
            var result = "You were born on a " + getDayOfWeekName(dayOfWeek) +
                ". Your Akan name would be: ";

            if (genderValue === "male") {
                result += maleName;
            } else if (genderValue === "female") {
                result += femaleName;
            }

            document.getElementById("result").innerHTML = result;
        }

        function getDayOfWeekName(dayOfWeek) {
            var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            return daysOfWeek[dayOfWeek];
        }