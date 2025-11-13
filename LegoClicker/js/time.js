var caT = 0;
var subCA = 0;
var achReward2 = 0;
var totalSeconds = 0;
var totalSecondsSmall = 0;
var totalSecondsConstant = 0;
//setInterval(setTimeSmall, 1);
setInterval(setTime, 1000);
setInterval(setTimeConstant, 1000);

function setTimeSmall() { // this is for each millisecond
    ++totalSeconds;
    let m = money.toFixed(2);
    document.getElementById("money").innerHTML = m;
}

function setTime() {
    ++totalSeconds;

    if (totalSeconds == 1) {
        if (pcauto > 0) {
            addauto();
            totalSeconds = 0;
        }
        else {
            totalSeconds = 0;
        }
    }
}

function setTimeConstant() {
    ++totalSecondsConstant;

    if (totalSecondsConstant == 600) { // (600 seconds == 10 minutes)
        if (achReward2 == 0) {
            ach2Show();
        }
    }
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}