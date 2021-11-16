const clock = document.querySelector(".UI__clock");
const counter = document.querySelector(".UI__counter");
const gameBoard = document.querySelector(".grid-container");
const buttons = document.querySelectorAll("button");

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
createItem = document.createElement("button");
createItem.setAttribute("id", m)
createItem.setAttribute("class", randomizeArr[m])
gameBoard.appendChild(createItem);
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
