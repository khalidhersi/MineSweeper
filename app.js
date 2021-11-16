const clock = document.querySelector(".UI__clock");
const counter = document.querySelector(".UI__counter");
const buttons = document.querySelectorAll(".grid__items");
const gameBoard = document.querySelector(".grid-container")

/* create items buttons and item array */
itemArr = []
for (let i = 0; i < 25; i++){
   

    itemArr.push(i)
    const itemLocation = itemArr[i]
   
}
console.log(itemArr)

/* create bomb buttons and bomb array */
bombArr = [] 
    for (j = 0; j < 5; j++){
        const locationGenerator = Math.floor(Math.random() * 30)
        bombArr.push(locationGenerator)
        const bombLocation = bombArr[j]
    }

    console.log(bombArr)

    /* joining both arrays */
const joinArr = [...itemArr, ...bombArr];
joinArr.forEach(num => { document.createElement("button")
        gameBoard.appendChild(num)})
        console.log(joinArr[26])
     for (let k = 0; k < joinArr.length; k++ ){
         notBomb = joinArr[k] < 25
         bomb = joinArr[k] >= 25
     if (joinArr[k] < 25){
        createButton.setAttribute("value", "not-bomb")
     } else if (joinArr[k] < 30) {
        createButton.setAttribute("value", "bomb")
     }
    }



/* Randomizing bombs location*/
let randomizeArr = joinArr.sort(() => Math.random() - 0.5)
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
