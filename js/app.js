let isDark = false;
function changeContent() {
    // DOM = Document Object Model
    let mainDiv = document.getElementById('main');
    // console.log(mainDiv);
    isDark = !isDark;
    if (isDark) {
        mainDiv.innerHTML = 'Something Else!';
        mainDiv.classList.add('bg-dark');
    } else {
        mainDiv.classList.remove('bg-dark');
        mainDiv.innerHTML = 'Hello World';
    }
}

let h = 0;
let m = 0;
let s = 0;
let intervalId;
function increment() {
    s++;
    if (s % 60 === 0) {
        m++;
        s = 0;
    }
    if (s % 3600 === 0) {
        h++;
        m = 0;
        s = 0;
    }
}

function refreshTime() {
    let mainDiv = document.getElementById('main');
    mainDiv.innerHTML = h + ':' + m + ':' + s;
    increment();
}

function startTimer() {
    refreshTime();
    intervalId = setInterval(refreshTime, 1000); // Timeout in miliseconds
}

function stopTimer() {
    clearInterval(intervalId);
}
