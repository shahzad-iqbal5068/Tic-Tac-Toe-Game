const boxs = document.querySelectorAll(".box");
// console.log("Boxs is ", boxs);
const winnerStatus = document.getElementById("winner");
const reset= document.getElementById("reset");
console.log(" The redsr r",reset)
let currentPlayer = "X";
let arr = Array.from(boxs);
const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


boxs.forEach((box) => {
  box.addEventListener("click", (event) => {
    event.srcElement.innerText = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    // event.srcElement.disabled=true;
    // console.log(event.srcElement.style.pointerEvents)
    event.srcElement.style.pointerEvents = "none";
    // console.log(event.srcElement.style.pointerEvents)
    console.log(box.textContent)
      winner();
  });
});  

function winner() {
  // debugger;
  const isWin = winningPattern.filter((value) => {
    [a, b, c] = value;
    const isWin = arr[a].textContent &&
      arr[a].textContent === arr[b].textContent &&
      arr[a].textContent === arr[c].textContent;


      if (isWin) {
        winnerStatus.innerText = `Conrgulations Winner is "${arr[a].textContent}"`;
        arr[a].style.textDecoration = "line-through";
        arr[b].style.textDecoration = "line-through";
        arr[c].style.textDecoration = "line-through";
        boxs.forEach((box)=>{
          box.disabled=true;
        })
      }
      

      return isWin;
  
  });

  if (!isWin.length) {
    DrawBox();
  }
}
reset.addEventListener('click',(event)=>{
    //  console.log('the event of reset BTn is',event);
    boxs.forEach((box) => {
      console.log(box.disabled);
      box.style.pointerEvents = "all";
      box.disabled = false;
      box.style.textDecoration = "none";
      box.textContent="";
      // console.log(box.disabled);
      winnerStatus.innerText="Player 1: X Player 2: O"
    });
} );
 
function DrawBox(){
  const isDraw = Array.from(boxs).every((box) => {    
    return box.textContent
  } );

  if (isDraw) {
    setTimeout(() => {
      alert('Game is draw Play again.')
      boxs.forEach((box) => {
        box.textContent = "";
        box.style.pointerEvents = "all";
        box.disabled = false;
        box.style.textDecoration = "none";
      })
    }, 1000)
   
  }
}






















/*
function winner() {
    if(firstRowCheck() || secondRowCheck() ||thirdRowCheck() ||
     firstColumnCheck() || secondColumnCheck() || thirdColumnCheck() ||
     firstDiagonalCheck() || secondDiagonalCheck()
    ){
        winnerStatus.innerText= "Congrgulations You won"s
    }
}


function firstRowCheck(){
    if (arr[0].innerText !== "" && arr[1].innerText !== "" && arr[2].innerText !== ""){
        console.log("inside first row alidations");
        if (
          arr[0].innerText == "X" &&
          arr[1].innerText == "X" &&
          arr[2].innerText == "X"
        ) {
          return true;
        } else if (
          arr[0].innerText == "O" &&
          arr[1].innerText == "O" &&
          arr[2].innerText == "O"
        ) {
          return true;
        }
        return false;
    }
}
function secondRowCheck(){
    if (arr[3].innerText !== "" && arr[4].innerText !== "" && arr[5].innerText !== ""){
        console.log("inside second row alidations");
        if (
          arr[3].innerText == "X" &&
          arr[4].innerText == "X" &&
          arr[5].innerText == "X"
        ) {
          return true;
        } else if (
          arr[3].innerText == "O" &&
          arr[4].innerText == "O" &&
          arr[5].innerText == "O"
        ) {
          return true;
        }
        return false;
    }
}

function thirdRowCheck(){
    if (arr[6].innerText !== "" && arr[7].innerText !== "" && arr[8].innerText !== ""){
        console.log("inside third row alidations");
        if (
          arr[6].innerText == "X" &&
          arr[7].innerText == "X" &&
          arr[8].innerText == "X"
        ) {
          return true;
        } else if (
          arr[6].innerText == "O" &&
          arr[7].innerText == "O" &&
          arr[8].innerText == "O"
        ) {
          return true;
        }
        return false;
    }
}




function firstColumnCheck(){
    if (arr[0].innerText !== "" && arr[3].innerText !== "" && arr[6].innerText !== ""){
        console.log("inside first row alidations");
        if (
          arr[0].innerText == "X" &&
          arr[3].innerText == "X" &&
          arr[6].innerText == "X"
        ) {
          return true;
        } else if (
          arr[0].innerText == "O" &&
          arr[3].innerText == "O" &&
          arr[6].innerText == "O"
        ) {
          return true;
        }
        return false;
    }
}
function secondColumnCheck(){
    if (arr[1].innerText !== "" && arr[4].innerText !== "" && arr[7].innerText !== ""){
        console.log("inside second row alidations");
        if (
          arr[1].innerText == "X" &&
          arr[4].innerText == "X" &&
          arr[7].innerText == "X"
        ) {
          return true;
        } else if (
          arr[1].innerText == "O" &&
          arr[4].innerText == "O" &&
          arr[7].innerText == "O"
        ) {
          return true;
        }
        return false;
    }
}

function thirdColumnCheck(){
    if (arr[2].innerText !== "" && arr[5].innerText !== "" && arr[8].innerText !== ""){
        console.log("inside third row alidations");
        if (
          arr[2].innerText == "X" &&
          arr[5].innerText == "X" &&
          arr[8].innerText == "X"
        ) {
          return true;
        } else if (
          arr[2].innerText == "O" &&
          arr[5].innerText == "O" &&
          arr[8].innerText == "O"
        ) {
          return true;
        }
        return false;
    }
}

function firstDiagonalCheck(){
    if (arr[0].innerText !== "" && arr[4].innerText !== "" && arr[8].innerText !== ""){
        console.log("inside third row alidations");
        if (
          arr[0].innerText == "X" &&
          arr[4].innerText == "X" &&
          arr[8].innerText == "X"
        ) {
          return true;
        } else if (
          arr[0].innerText == "O" &&
          arr[4].innerText == "O" &&
          arr[8].innerText == "O"
        ) {
          return true;
        }
        return false;
    }
}
function secondDiagonalCheck(){
    if (arr[2].innerText !== "" && arr[4].innerText !== "" && arr[6].innerText !== ""){
        console.log("inside third row alidations");
        if (
          arr[2].innerText == "X" &&
          arr[4].innerText == "X" &&
          arr[6].innerText == "X"
        ) {
          return true;
        } else if (
          arr[2].innerText == "O" &&
          arr[4].innerText == "O" &&
          arr[6].innerText == "O"
        ) {
          return true;
        }
        return false;
    }
} */
