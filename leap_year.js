var someYear = parseInt(prompt("Please enter a year value"));
if ((someYear % 4) === 0) {
    if ((someYear % 100) === 0) {
        if ((someYear % 400) === 0) {
            alert("Year " + someYear + " is a leap year.");
        } else {
            alert("Year " + someYear + " is not a leap year.");
        }
    } else {
        alert("Year " + someYear + " is a leap year.");
    }
} else {
    alert("Year " + someYear + " is not a leap year.");
}