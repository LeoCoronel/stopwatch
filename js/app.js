// Define vars
let milis = 0;
let seconds = 0;
let minutes = 0;

// Vars to hold "display" value
let displayMilis = 0;
let displaySeconds = 0;
let displayMinutes = 0;

let interval = null;
let status = "stopped";

// Stopwatch function (logic)

function stopWatch() {
    milis++;

    if(milis / 100 === 1) {
        milis = 0;
        seconds++;
        if(seconds / 60 === 1) {
            seconds = 0;
            minutes++;
        }
    } 

    // If milis/secs/mins are only one digit, add a leading 0 to the value
    if(milis < 10) {
        displayMilis = '0' + milis.toString();
    } else {
        displayMilis = milis;
    }
    if(seconds < 10) {
        displaySeconds = '0' + seconds.toString();
    } else {
        displaySeconds = seconds;
    }

    if(minutes < 10) {
        displayMinutes = '0' + minutes.toString();
    } else {
        displayMinutes = minutes;
    }

    // Display updated time values to user
    document.getElementById('display').innerHTML = `${displayMinutes}:${displaySeconds}:${displayMilis}`;

}



function startStop() {
    if(status === "stopped") {
        // Start the stopwatch
        interval = window.setInterval(stopWatch, 10);
        //document.getElementById('startStop').innerHTML = "Stop";
        status = "started";
    } else {
        window.clearInterval(interval);
        //document.getElementById('startStop').innerHTML = "Start";
        status = "stopped";
    }
}

function reset() {
    window.clearInterval(interval);
    milis = 0;
    seconds = 0;
    minutes = 0;
    document.getElementById('display').innerHTML = "00:00:00";
    //document.getElementById('startStop').innerHTML = "Start";
    status = "stopped";
}