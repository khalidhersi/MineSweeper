const clock = document.querySelector(".UI__clock");
const counter = document.querySelector(".UI__counter");
const gameBoard = document.querySelector(".grid-container");

let bombArr = [];
let itemArr = [];
let squares = [];

/* Create items buttons Function*/
const gameBoardFunc = () => {

/* looping thorugh not-bomb items and pushing into item array */
for (let i = 0; i < 25; i++) {
  itemArr.push(i);
}

/* Creating 5 random bomb locations and  pushing into bomb array */
for (j = 0; j < 5; j++) {
  const locationGenerator = Math.floor(Math.random() * 30);
  bombArr.push(locationGenerator);
}

/* Filing both arrays with value */
bombArr.fill('bomb')
itemArr.fill('not-bomb')

/* joining both arrays */
const joinArr = [...itemArr, ...bombArr];
console.log(joinArr);

/* Randomizing bombs location within GameBoard*/
let randomizeArr = joinArr.sort(() => Math.random() - 0.5);
console.log(randomizeArr);

/* Creating Buttons, Classnames and ID's for each item */
for (let m = 0; m < randomizeArr.length; m++) {
buttons = document.createElement("button");
buttons.setAttribute("id", m)
buttons.classList.add(randomizeArr[m])
gameBoard.appendChild(buttons);
squares.push(buttons)
console.log(squares)
  }

for (let n = 0; n < squares.length; n++){
  let bombCount = 0;
  const hasBomb = squares[n].classList.contains(".bomb")
  const notBomb = squares[n].classList.contains(".not-bomb")

  let top = buttons[n +10]
  let topRight = buttons[n +10 +1]
  let topLeft =buttons[n +10 +1]
  let bottom = buttons[n -10]
  let bottomRight = buttons[n -10 +1]
  let bottomLeft = buttons[n -10 -1]
  let right =buttons[n +1]
  let left = buttons[n -1]

  if (notBomb){
    if (top.hasBomb){bombCount ++}
    if (topRight.hasBomb){bombCount ++}
    if (topLeft.hasBomb){bombCount ++}
    if (bottom.hasBomb){bombCount ++}
    if (bottomRight.hasBomb){bombCount ++}
    if (bottomLeft.hasBomb){bombCount ++}
    if (right.hasBomb){bombCount ++}
    if (left.hasBomb){bombCount ++}
    buttons[n].setAttribute("value", bombCount)
  }
}

    
}
gameBoardFunc()

















/*
        bombObj = {
            data: bombArr[j]
        }
if (i == this.bombLocation) {
        items.setAttribute('data', bomb)
     items.setAttribute('value', i)
}


items.setAttribute('value', i)
       itemArr = Array(items)
       itemArr.forEach(item => {
       });



gridItem = {
    []
}


const timer = 0;
const updateTimer = () => {
    timer += 1;
     clock.innerHTML = timer
    setInterval(timer, 100)
};



clock.innerHTML = 


counter.addEventListener("click" , event => {

});

buttons.addEventListener("click" , event => {

});
*/
