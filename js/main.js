let motionNextValue = true;
let magneNextValue = true;

main();

function main() {
    if(window.DeviceMotionEvent && window.DeviceOrientationEvent){
        addListeners();
        console.log("DeviceMotionEvent is supported")
    }else{
        document.getElementById("body").innerHTML = "Cannot access sensors"
    }
}

function addListeners() {
    window.addEventListener("devicemotion", motionListener, true);
    window.addEventListener("deviceorientation", magneListener, true);
}

function motionListener(event) {
    if(!motionNextValue) return;
    motionNextValue = false;
    printAccel(event.accelerationIncludingGravity);
    printGyro(event.rotationRate);
    setTimeout(() => {
        motionNextValue = true
    }, 500);
}

function printAccel(acceleration) {
    document.getElementById("accelValues").innerHTML =
        "x: " + acceleration.x + "</br> "
        + "y: " +  acceleration.y + "</br> "
        + "z: " + acceleration.z + "</br></br>";
}

function printGyro(gyro) {
    document.getElementById("gyroValues").innerHTML =
        "alpha: " + gyro.alpha + "</br> "
        + "beta: " +  gyro.beta + "</br> "
        + "gamma: " + gyro.gamma + "</br></br>";
}

function magneListener(event) {
    if(!magneNextValue) return;
    magneNextValue = false;
    printMagne(event);
    setTimeout(() => {
        magneNextValue = true;
}, 500);
}

function printMagne(magne) {
    document.getElementById("magneValues").innerHTML =
        "alpha: " + magne.alpha + "</br> "
        + "beta: " +  magne.beta + "</br> "
        + "gamma: " + magne.gamma + "</br></br>";
}


