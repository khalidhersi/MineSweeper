const clock = document.querySelector(".UI__clock");
const counter = document.querySelector(".UI__counter");
const buttons = document.querySelectorAll(".grid__items");
const gameBoard = document.querySelector(".grid-container")

/* create items buttons and item array */
itemArr = []
for (let i = 0; i < 25; i++){
    const items = document.createElement("button")
    gameBoard.appendChild(items)
    items.setAttribute('value', i)
    items.setAttribute('data', "not-bomb")
    itemArr.push(i)
    const itemLocation = itemArr[i]
   
}
console.log(itemArr)

/* create bomb buttons and bomb array */
bombArr = [] 
    for (j = 0; j < 5; j++){
        const bombItem = document.createElement("button")
        const locationGenerator = Math.floor(Math.random() * 30)
        gameBoard.appendChild(bombItem)
        bombItem.setAttribute('value', locationGenerator)
        bombItem.setAttribute('data', "bomb")
        bombArr.push(locationGenerator)
        const bombLocation = bombArr[j]
    }
    console.log(bombArr)

    /* joining both arrays */
const joinArr = [...itemArr, ...bombArr];


/* Randomizing bombs location*/
const randomizeArr = joinArr.sort(() => Math.random() - 0.5)
console.log(randomizeArr)

    



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
