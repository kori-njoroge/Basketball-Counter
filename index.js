// alert("ssup")
let leading = "";
let homecount = 0;
let guestCount = 0;

let homescreen = document.getElementById("homeScreen");
let guestScreen = document.getElementById("guestScreen");
let resetEl = document.getElementById("reset")
let leadingEl = document.getElementById("leadingTeam");
let difference = document.getElementById("diff")



// home add functions
function addHome1(){
    homescreen.textContent = Number(homescreen.textContent) + Number(1);
    homecount += 1;
    leadingTeam()
}

function addHome2(){
    homescreen.textContent = Number(homescreen.textContent) + Number(2);
    homecount += 2;
    leadingTeam()
}

function addHome3(){
    homescreen.textContent = Number(homescreen.textContent) + Number(3);
    homecount += 3;
    leadingTeam()
}

//Guests add functions
function addGuest1(){
    guestScreen.textContent = Number(guestScreen.textContent) + Number(1);
    guestCount +=1;
    leadingTeam()
}

function addGuest2(){
    guestScreen.textContent = Number(guestScreen.textContent) + Number(2);
    guestCount +=2;
    leadingTeam()
}

function addGuest3(){
    guestScreen.textContent = Number(guestScreen.textContent) + Number(3);
    guestCount +=3;
    leadingTeam()
}

//reset function
function reset(){
    homescreen.textContent = 0;
    guestScreen.textContent = 0;
    guestCount = 0;
    homecount = 0;
    leadingEl.textContent = ""
    difference.textContent = ""
}

// leading team
function leadingTeam(){
    leadingEl.textContent = ""
    if(homecount > guestCount){
            leadingEl.textContent = "HOME"
            difference.textContent = homecount - guestCount
        }else if(guestCount > homecount){
            leadingEl.textContent = "GUESTS"
            difference.textContent = guestCount -homecount 
        }else if(guestCount === homecount){
            leadingEl.textContent = "TIE"
            difference.textContent = 0
    }
}


