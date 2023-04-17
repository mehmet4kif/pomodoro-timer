const startButton = document.querySelector("#startbutton");
const inputs = document.querySelectorAll(".input");
let userSec;
let userMin;
let CoffeTimeMin;
let CoffeTimeSec;
let pomodoroCounter = 0;
let totalWorkTime = 0;
inputs.forEach(input => {
    input.addEventListener("input", function() {
      input.value = input.value.replace(/[^0-9]/g, '');
    });
});

let confirm = 0;
let coffeConfirm = 0;
function counter(){
    if (confirm == 1){
        if (userSec != 0 ){
            totalWorkTime = (parseInt(totalWorkTime) + parseInt(userMin) + (parseInt(userSec)/60));
            userSec = userSec - 1;
            document.querySelector("#secondCounter").innerHTML = userSec;
        }
        if (userSec == 0){
            userMin = userMin - 1;
            document.querySelector("#minuteCounter").innerHTML = userMin;
            if (userMin >= 0){
                userSec = 60;
            }
        }
        if (userMin <= 0){
            document.querySelector("#minuteCounter").innerHTML = 0;
        }
        if (userMin <= 0 && userSec <= 0){
            confirm = 0; 
            coffeConfirm = 1;
        }
    }
    if (coffeConfirm == 1){
        CoffeTimeSec = CoffeTimeSec - 1;
        document.querySelector("#CoffeSecondCounter").innerHTML = CoffeTimeSec;
        if (CoffeTimeSec == 0){
            CoffeTimeMin = CoffeTimeMin - 1;
            document.querySelector("#CoffeMinuteCounter").innerHTML = CoffeTimeMin;
            if (CoffeTimeMin >= 0){
                CoffeTimeSec = 60;
            }
        }
        if (CoffeTimeMin <= 0){
            document.querySelector("#CoffeMinuteCounter").innerHTML = 0;
        }
        if (CoffeTimeMin <= 0 && CoffeTimeSec <= 0){
            alert("Pomodoro is finished.");
            coffeConfirm = 0;
            confirm = 0; 
            pomodoroCounter = pomodoroCounter + 1;
            document.querySelector("#pomodoroCounter").innerHTML = pomodoroCounter;
            document.querySelector("#totalWork").innerHTML = totalWorkTime + "min";
        }
    }
}
setInterval(counter, 1000);
function start(){
    userMin = document.querySelector("#min").value;
    userSec = document.querySelector("#second").value;
    CoffeTimeMin = document.querySelector("#cmin").value;
    CoffeTimeSec = document.querySelector("#csecond").value;
    
    if (userMin == "" || userSec == "" || CoffeTimeMin == "" || CoffeTimeSec == ""){
        alert('Please dont leave blank');
    } else {
        startButton.setAttribute('data-bs-toggle', 'offcanvas');
        startButton.setAttribute('data-bs-target', '#offcanvasBottom');
        startButton.setAttribute('aria-controls', 'offcanvasBottom');
        confirm = 1;
        document.querySelector("#secondCounter").innerHTML = userSec;    
        document.querySelector("#minuteCounter").innerHTML = userMin;
        document.querySelector("#CoffeSecondCounter").innerHTML = CoffeTimeSec;
        document.querySelector("#CoffeMinuteCounter").innerHTML = CoffeTimeMin;

    }
}   

