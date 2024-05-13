// const detail = document.querySelector('.mahindra');
// const scorpioDetails = document.querySelector('.scorpioDetail');

// detail.addEventListener("click", function scorpio(){
//     scorpioDetails.innerHTML = "The Mahindra Scorpio has 1 Diesel Engine on offer. The Diesel engine is 2184 cc . It is available with Manual transmission.Depending upon the variant and fuel type the Scorpio has a mileage of . The Scorpio is a 7 seater 4 cylinder car and has length of 4456 mm, width of 1820 mm and a wheelbase of 2750.";
// });

//All variable names
// const vehicleInfo1 = document.querySelector("#scorpioDetail");
// const vehicleInfor = document.querySelector("#swiftDetail");

//Code for scorpio section goes from here

document.querySelector("#scorpioDetail").addEventListener("click", scorpio);

function scorpio() {
    const scorpioInfo = document.querySelector("#scorpioDetail");
    scorpioInfo.innerText = "The Mahindra Scorpio has 1 Diesel Engine on offer. The Diesel engine is 2184 cc . It is available with Manual transmission. Depending upon the variant and fuel type the Scorpio has a mileage of . The Scorpio is a 7 seater 4 cylinder car and has length of 4456 mm, width of 1820 mm and a wheelbase of 2750.";
    scorpioInfo.style.letterSpacing = "0px";
    scorpioInfo.style.width = "80%";
    scorpioInfo.style.border = "none";
}

//Code for swift section goes from here

document.querySelector('#SwiftDetail').addEventListener("click", swift);

function swift() {
    const swiftInfo = document.querySelector("#SwiftDetail");
    swiftInfo.innerText = "Swift is the first choice for all small Indian family. It  is a 5 seater hatchback car with 1.2 liter petrol engine (22.56 kmpl). The Maruti Swift price ranges between Rs. 5.99 Lakh to 9.03 Lakh. Considering the price and specs the Swift is a tough competition to Tata Altroz, Tata Punch, Tata Tiago.";
    swiftInfo.style.letterSpacing = "0px";
    swiftInfo.style.width = "80%";
    swiftInfo.style.height = "50%";
    swiftInfo.style.border = "none";
}

//Code for slavia section goes from here

document.querySelector('#slaviaDetail').addEventListener("click", slavia);

function slavia() {
    const slaviaInfo = document.querySelector("#slaviaDetail");
    slaviaInfo.innerText = "The Škoda Slavia is a compact sedan designed and manufactured by Czech automaker Škoda Auto. It features sleek styling with dynamic lines and a spacious interior, offering ample legroom and comfort for passengers. The Slavia boasts modern technology and safety features, making it a practical choice for everyday commuting. Its efficient engine options deliver a balance of power and fuel efficiency.";
    slaviaInfo.style.letterSpacing = "0px";
    slaviaInfo.style.width = "80%";
    slaviaInfo.style.border = "none";
}

function changePage(){
    window.location.href = "register.html";
}


