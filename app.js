const clock = document.querySelector(".UI__clock");
const counter = document.querySelector(".UI__counter");
const buttons = document.querySelectorAll(".grid__items");
const gameBoard = document.querySelector(".grid-container")

/* create grid items */
for (let i = 0; i < 30; i++){
    const items = document.createElement("button")
    gameBoard.appendChild(items)
    if (i == this.bombLocation) {
        items.setAttribute('value', bomb)
        items.addEventListener("click", () => alert("bomb") )
    }
     items.setAttribute('value', i)
}
bombArr = [] 
    for (i = 0; i <= 5; i++){
        let locationGenerator = Math.floor(Math.random() * 30)
        bombArr.push(locationGenerator)
        bombObj = {
            value: bombArr[i]
        }
        const bombLocation = bombObj.value
        console.log(bombLocation)
    }
itemObj = {

}
    
/* bomb location array */


/*  grid items location array */




/*
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
