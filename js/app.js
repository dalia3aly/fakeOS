document.addEventListener('DOMContentLoaded', () => {
    console.log('FakeOS is ready to go!');   // Placeholder to ensure everything is working
});



// Clock - realtime date and time:

const updateClock = () => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    // add leading zeros to single-digit numbers
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

    let year = now.getFullYear();
    let month = now.getMonth() + 1; // +1, for JS months are 0-based
    let day = now.getDate();

    // add leading zeros to single-digit numbers
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    // format the date as a string
    let dateString = `${day}/${month}/${year}`;
    document.getElementById('date').textContent = `${day}/${month}/${year}`;

    console.log("Time: ", `${hours}:${minutes}:${seconds}`);
    console.log("Date: ", dateString);
}
updateClock();
console.log("Clock is running");
//setInterval(updateClock, 10000); // debug line - update every 10 seconds