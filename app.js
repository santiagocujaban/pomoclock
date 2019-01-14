var writeTime = document.getElementById("time");
var time = 24;

var play = document.getElementById("play");
var pause = document.getElementById("pause");

play.addEventListener("click", testPlay);
pause.addEventListener("click", testPause);

function testPlay(){
    setInterval(secondsCount, 1000);

    function secondsCount(){
        if(time >= 0){
            console.log(time);
            writeTime.innerHTML = time;
            time -= 1;
        }
    }
}

function testPause(){
    console.log("pause");
}
