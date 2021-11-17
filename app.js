const clock = document.querySelector(".UI__clock");
const counter = document.querySelector(".UI__counter");
const gameBoard = document.querySelector(".grid-container");

/* Temporary variables ready to be pushed */
let squares = [];
let bombArr = [];
let itemArr = [];

/* Create items buttons Function*/
const gameBoardFunc = () => {

/* looping thorugh not-bomb items and pushing into item array */
for (let i = 0; i < 25; i++) {
  itemArr.push(i);
};

/* Creating 5 random bomb locations and  pushing into bomb array */
for (j = 0; j < 5; j++) {
  const locationGenerator = Math.floor(Math.random() * 30);
  bombArr.push(locationGenerator);
};

/* Filing both arrays with value */
bombArr.fill('bomb');
itemArr.fill('not-bomb');

/* joining both arrays */
const joinArr = [...itemArr, ...bombArr];
console.log(joinArr);

/* Randomizing bombs location within GameBoard*/
let randomizeArr = joinArr.sort(() => Math.random() - 0.5);
console.log(randomizeArr);

/* Creating Buttons, Classnames and ID's for each item */
for (let m = 0; m < randomizeArr.length; m++) {
  const buttons = document.createElement("button");
  buttons.setAttribute("id", m);
  buttons.classList.add(randomizeArr[m]);
  gameBoard.appendChild(buttons);
  squares.push(buttons);

  buttons.addEventListener("click", (event) => {
    handleClick(buttons)
  });
};
  
/* Bomb Locator */
for (let n = 0; n < squares.length; n++){
  let bombCount = 0;
  let top = squares[n +5];
  let topRight = squares[n +5 +1];
  let topLeft = squares[n +5 -1];
  let bottom = squares[n -5];
  let bottomRight = squares[n -5 +1];
  let bottomLeft = squares[n -5 -1];
  let right =squares[n +1];
  let left = squares[n -1];

  if (squares[n].classList.contains("not-bomb")){
    if (n < 24 && top.classList.contains("bomb"))
    {bombCount ++};
    if (n < 23 && topRight.classList.contains("bomb"))
    {bombCount ++};
    if (n < 25 && topLeft.classList.contains("bomb"))
    {bombCount ++};
    if (n > 5 && bottom.classList.contains("bomb"))
    {bombCount ++};
    if (n > 4 && bottomRight.classList.contains("bomb"))
    {bombCount ++};
    if (n > 6 && bottomLeft.classList.contains("bomb"))
    {bombCount ++};
    if (n < 28 && right.classList.contains("bomb"))
    {bombCount ++};
    if (n > 0 && left.classList.contains("bomb"))
    {bombCount ++};
    squares[n].setAttribute("value", bombCount);
    console.log(squares[n])
    };
  };
};
gameBoardFunc();

const handleClick = (buttons) => {
  if(buttons.classList.contains("bomb")){
    buttons.style.backgroundColor = "red";
    alert("bomb")
  };
  if(buttons.classList.contains("not-bomb")){
    buttons.innerHTML = buttons.getAttribute("value");
    buttons.style.color = "blue";
    buttons.style.backgroundColor = "grey";
    buttons.style.fontSize = "2em";
  };
    let noBombs = buttons.getAttribute("value") == 0
  if(noBombs){
    buttons.innerHTML = ""
  }
};














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

