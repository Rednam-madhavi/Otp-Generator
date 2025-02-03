console.log("Welcome to Otp-Generator");

// Intializing HTML Elements
let display = document.querySelector(".display");
let generate = document.querySelector(".generate");
let regenerate = document.querySelector(".regenerate");
let clear = document.querySelector(".clear");
let copy = document.querySelector(".copy");

// Making Button Hidden Intially
regenerate.style.display = "none";
clear.style.display = "none";
copy.style.display = "none";

// Function to Generate Otp
function otpGenerator() {
    let otp = ""
    for (let i = 0; i < 6; i++) {
        otp += Math.floor(Math.random(0, 9) * 10);
    }
    display.innerHTML = otp;
    generate.disabled = true;
    generate.style.display = "none";
    regenerate.style.display = "block";
    clear.style.display = "block";
    copy.style.display = "block";
}

// Function to Re-Generate Otp
function otpRegenerate() {
    let otp = ""
    for (let i = 0; i < 6; i++) {
        otp += Math.floor(Math.random(0, 9) * 10);
    }
    display.innerHTML = otp;
}

// Function to Clear Display Screen
function clearScreen() {
    display.innerHTML = "";
    generate.disabled = false;
    generate.style.display = "block";
    copy.style.display = "none";
    regenerate.style.display = "none";
    clear.style.display = "none";
}

// Function to Copy Otp
function copyOtp() {
    let otp = display.innerText;
    navigator.clipboard.writeText(otp);
    alert("Opt is Copied!");
}

//Adding EventListeners to Buttons
generate.addEventListener("click", otpGenerator);
regenerate.addEventListener("click", otpRegenerate);
clear.addEventListener("click", clearScreen);
copy.addEventListener("click", copyOtp);