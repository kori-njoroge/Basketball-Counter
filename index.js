// alert("ssup")
let leading = "";
let homecount = 0;
let guestCount = 0;

let homescreen = document.getElementById("homeScreen");
let guestScreen = document.getElementById("guestScreen");
let resetEl = document.getElementById("reset")
let leadingEl = document.getElementById("leadingTeam")



// home add functions
function addHome1(){
    homescreen.textContent = Number(homescreen.textContent) + Number(1);
    homecount += 1;
}

function addHome2(){
    homescreen.textContent = Number(homescreen.textContent) + Number(2);
    homecount += 2;
}

function addHome3(){
    homescreen.textContent = Number(homescreen.textContent) + Number(3);
    homecount += 3;
}

//Guests add functions
function addGuest1(){
    guestScreen.textContent = Number(guestScreen.textContent) + Number(1);
    guestCount +=1;
}

function addGuest2(){
    guestScreen.textContent = Number(guestScreen.textContent) + Number(2);
    guestCount +=2;
}

function addGuest3(){
    guestScreen.textContent = Number(guestScreen.textContent) + Number(3);
    guestCount +=3;
}

//reset function
function reset(){
    homescreen.textContent = 0;
    guestScreen.textContent = 0;
    guestCount = 0;
    homecount = 0;
}

// leading team
if(homecount  || guestCount){
    if(homecount > guestCount){
        leading = "Home"
    }else{
        leading = "Gu   ests"
    }
}



leadingEl.textContent += leading

console.log(homecount)
console.log(guestCount)