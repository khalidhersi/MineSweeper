const clock = document.querySelector(".UI__clock");
const counter = document.querySelector(".UI__counter");
const gameBoard = document.querySelector(".grid-container");

let squares = [];
let bombArr = [];
let itemArr = [];

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

  buttons.addEventListener("click", (event) => {
    handleClick(buttons)
  })
   
}
  

for (let n = 0; n < squares.length; n++){
  let bombCount = 0;
console.log(squares)
console.log(squares[n -1])


  let top = squares[n +5]
  let topRight = squares[n + +1]
  let topLeft = squares[n +5 -1]
  let bottom = squares[n -5]
  let bottomRight = squares[n -5 +1]
  let bottomLeft = squares[n -5 -1]
  let right =squares[n +1]
  let left = squares[n -1]
  console.log(bottom)


  if (squares[n].classList.contains("not-bomb")){
  if (n < 24 && squares[n +5].classList.contains("bomb")){bombCount ++}
  if (n < 23 && squares[n +5 +1].classList.contains("bomb")){bombCount ++}
  if (n < 25 && squares[n +5 -1].classList.contains("bomb")){bombCount ++}
  if (n > 5 && squares[n-5].classList.contains("bomb")){bombCount ++}
  if (n > 6 && squares[n -1 -5].classList.contains("bomb")){bombCount ++}
  if (n > 4 && squares[n + 1 -5].classList.contains("bomb")){bombCount ++}
  if (n < 28 && squares[n +1].classList.contains("bomb")){bombCount ++}
  if (n > 0 && squares[n -1].classList.contains("bomb")){bombCount ++}
  squares[n].setAttribute("value", bombCount)
  console.log(squares[n])
  }
}
}
gameBoardFunc()

const handleClick = (buttons) => {
if(buttons.classList.contains("bomb")){
  alert("bomb")
}
}














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

