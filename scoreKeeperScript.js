console.log("Hello")

let playerOneScore = document.querySelector("#playerOneScore")
let playerTwoScore = document.querySelector("#playerTwoScore");

const playerOneButton = document.querySelector("#playerOneButton");
const playerTwoButton = document.querySelector("#playerTwoButton");
const resetButton = document.querySelector("#resetButton");



playerOneButton.addEventListener("click", function () {
    let selectedValue = document.querySelector("#dropdownScore").value;
    if (selectedValue === (parseInt(playerOneScore.innerText) + 1).toString()) {
        playerOneScore.innerText = (parseInt(playerOneScore.innerText) + 1).toString();
        playerOneButton.disabled = true;
        playerTwoButton.disabled = true;
        playerOneScore.style.color = "#06d6a0";
        playerTwoScore.style.color = "#ef476f";
    }
    else {
        playerOneScore.innerText = (parseInt(playerOneScore.innerText) + 1).toString();
    }
})

playerTwoButton.addEventListener("click", function () {
    let selectedValue = document.querySelector("#dropdownScore").value;
    if (selectedValue === (parseInt(playerTwoScore.innerText) + 1).toString()) {
        playerTwoScore.innerText = (parseInt(playerTwoScore.innerText) + 1).toString();
        playerOneButton.disabled = true;
        playerTwoButton.disabled = true;
        playerTwoScore.style.color = "#06d6a0";
        playerOneScore.style.color = "#ef476f";
    }
    else {
        playerTwoScore.innerText = (parseInt(playerTwoScore.innerText) + 1).toString();
    }
})




// playerTwoButton.addEventListener("click", function () {
//     let selectedValue = document.querySelector("#dropdownScore").value;
//     if (playerTwoScore.innerText === selectedValue) {
//         playerOneButton.disabled = true;
//         playerTwoButton.disabled = true;
//         playerTwoScore.style.color = "#06d6a0";
//         playerOneScore.style.color = "#ef476f";
//     }
//     else {
//         playerTwoScore.innerText = (parseInt(playerTwoScore.innerText) + 1).toString();
//     }
// })

resetButton.addEventListener("click", function () {
    playerOneScore.innerText = "0";
    playerTwoScore.innerText = "0";
    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;
    playerTwoScore.style.color = "black";
    playerOneScore.style.color = "black";
})


