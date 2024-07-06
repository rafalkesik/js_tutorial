function dayName(date) {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfTheWeek[date.getDay()];
}
function greeting(date) {
    return `Greetings, traveler! I wish You a happy ${dayName(date)}!`
}