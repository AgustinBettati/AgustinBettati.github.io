let accelNextValue = true;
let gyroNextValue = true;

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
    window.addEventListener("devicemotion", accelListener, true);
    window.addEventListener("deviceorientation", gyroListener, true);
}

function accelListener(event) {
    if(!accelNextValue) return;
    accelNextValue = false;
    printAccel(event.accelerationIncludingGravity);
    setTimeout(() => {
        accelNextValue = true
    }, 500);
}

function printAccel(acceleration) {
    document.getElementById("accelValues").innerHTML =
        "x: " + acceleration.x + "</br> "
        + "y: " +  acceleration.y + "</br> "
        + "z: " + acceleration.z + "</br></br>";
}

function gyroListener(event) {
    if(!gyroNextValue) return;
    gyroNextValue = false;
    printGyro(event);
    setTimeout(() => {
        gyroNextValue = true;
    }, 500);
}

function printGyro(gyro) {
    document.getElementById("magneValues").innerHTML =
        "alpha: " + gyro.alpha + "</br> "
        + "beta: " +  gyro.beta + "</br> "
        + "gamma: " + gyro.gamma + "</br></br>";
}

//
// if(window.DeviceOrientationEvent){
//     window.addEventListener("deviceorientation", function orientation(event){
//         document.getElementById("magneValues").innerHTML= "Magnetometer: "
//             + event.alpha + ", "
//             + event.beta + ", "
//             + event.gamma;
//     }, false);
// }else{
//     console.log("DeviceOrientationEvent is not supported");
// }

