const button = document.getElementById("formbutton");

function checkPass() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;
    let num4 = document.getElementById("num4").value;
    let num5 = document.getElementById("num5").value;
    
    let password = num1+num2+num3+num4+num5;

    if (password == 29049 || password == 4030 || password == 10203) {
        correctPass();
    } else if (password == 90179 || password == 17029) {
        correctPass();
    } else {
        wrongPass();
    }
}

const numbers = document.querySelectorAll(".num");

function correctPass() {
    document.getElementById("h1").innerText = "ACCESS GRANTED";
    document.getElementById("parag").style.display = "none";
    document.getElementById("warning").innerText = "verified_user";
    document.getElementById("warning").style.color = "green";
    
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].style.color = "rgb(4, 175, 4)";
    }
}

function wrongPass() {
    document.getElementById("h1").innerText = "ACCESS DENIED";
    document.getElementById("parag").style.display = "block";
    document.getElementById("warning").innerText = "warning";
    document.getElementById("warning").style.color = "orangered";
    
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].value = "";
        numbers[i].style.color = "rgb(243, 138, 0)";
    } 
}

button.addEventListener("click", checkPass);






