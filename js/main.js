
if(window.DeviceMotionEvent){

    window.addEventListener("devicemotion", function (event){
        document.getElementById("accelValues").innerHTML="Accelerometer: "
            + event.accelerationIncludingGravity.x + ", "
            + event.accelerationIncludingGravity.y + ", "
            + event.accelerationIncludingGravity.z;
    }, true);
    console.log("DeviceMotionEvent is supported")

}else{
    document.getElementById("accelValues").innerHTML = "cannot access sensores"
}




