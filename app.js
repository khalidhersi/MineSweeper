const clock = document.querySelector(".UI__clock");
const counterScreen = document.querySelector(".UI__counter");
const gameBoard = document.querySelector(".grid-container");

/* Temporary variables */
let counter = 000;
let time = 60;
let allButtons = [];
let mineArr = [];
let itemArr = [];
let mineImage = `<img src="./media/mine.png" />`;


/* A timer counting down 1 minute  */
const updateTimer = setInterval(() => {
  time -= 1;
  console.log(time);
  clock.innerHTML = time;
  if (time == -1) {
    alert("Time's up! Your DEAD!");
    window.location.href = "";
  }
}, 1000);

/* Create items buttons Function*/
const gameBoardFunc = () => {
  /* looping thorugh not-mine items and pushing into item array */
  for (let i = 0; i < 25; i++) {
    itemArr.push(i);
  }

  /* Creating 5 random mine locations and  pushing into mine array */
  for (j = 0; j < 5; j++) {
    const locationGenerator = Math.floor(Math.random() * 30);
    mineArr.push(locationGenerator);
  }

  /* Filing both arrays with value */
  mineArr.fill("mine");
  itemArr.fill("not-mine");

  /* joining both arrays */
  const joinArr = [...itemArr, ...mineArr];
  console.log(joinArr);

  /* Randomizing mines location within GameBoard*/
  let randomizeArr = joinArr.sort(() => Math.random() - 0.5);
  console.log(randomizeArr);

  /* Creating Buttons, Classnames and ID's for each item */
  for (let m = 0; m < randomizeArr.length; m++) {
    const buttons = document.createElement("button");
    buttons.setAttribute("id", m);
    buttons.classList.add(randomizeArr[m]);
    gameBoard.appendChild(buttons);
    allButtons.push(buttons);

    /* onClick function call */
    buttons.addEventListener("click", (event) => {
      handleClick(buttons);
    });
  }

  /* Mine Locator */
  for (let n = 0; n < allButtons.length; n++) {
    let mineCount = 0;
    let top = allButtons[n + 5];
    let topRight = allButtons[n + 5 + 1];
    let topLeft = allButtons[n + 5 - 1];
    let bottom = allButtons[n - 5];
    let bottomRight = allButtons[n - 5 + 1];
    let bottomLeft = allButtons[n - 5 - 1];
    let right = allButtons[n + 1];
    let left = allButtons[n - 1];

    /* If statmenet for mine location using Cardinal directions */
    if (allButtons[n].classList.contains("not-mine")) {
      if (n < 24 && top.classList.contains("mine")) {
        mineCount++;
      }
      if (n < 23 && topRight.classList.contains("mine")) {
        mineCount++;
      }
      if (n < 25 && topLeft.classList.contains("mine")) {
        mineCount++;
      }
      if (n > 5 && bottom.classList.contains("mine")) {
        mineCount++;
      }
      if (n > 4 && bottomRight.classList.contains("mine")) {
        mineCount++;
      }
      if (n > 6 && bottomLeft.classList.contains("mine")) {
        mineCount++;
      }
      if (n < 28 && right.classList.contains("mine")) {
        mineCount++;
      }
      if (n > 0 && left.classList.contains("mine")) {
        mineCount++;
      }
      allButtons[n].setAttribute("value", mineCount);
      console.log(allButtons[n]);
    }
  }
};
gameBoardFunc();

/* OnClick reveals buttons inner HTML */
const handleClick = (buttons) => {
  // When mine is clicked
  if (buttons.classList.contains("mine")) {
    buttons.style.backgroundColor = "red";
    alert(`Game-Over! Your Score is:${counter}!`);
    // Reveal mine function call
    revealMines()
    /* Resets game after mine is found & revealed */
    setInterval(() => {
      document.location.href = "";
    }, 1000);
  }

  // When button near Mine is clicked
  if (buttons.classList.contains("not-mine")) {
    buttons.innerHTML = buttons.getAttribute("value");
    buttons.style.color = "blue";
    buttons.style.backgroundColor = "grey";
    buttons.style.fontSize = "2em";
    counterScreen.innerHTML = counter += 001;
  }

  // When safe button is clicked
  let noMines = buttons.getAttribute("value") == 0;
  if (noMines) {
    buttons.innerHTML = "";
  }
};
 /* Reaveal mine function */
const revealMines = () => {
  allButtons.forEach((eachMine) => {
    if (eachMine.classList.contains("mine")) {
      eachMine.innerHTML = mineImage;
    }
  });
}






// Trail & Error Section
/*
        mineObj = {
            data: mineArr[j]
        }
if (i == this.mineLocation) {
        items.setAttribute('data', mine)
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
