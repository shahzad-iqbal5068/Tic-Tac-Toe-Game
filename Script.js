const boxs = document.querySelectorAll(".box");
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
    event.srcElement.style.pointerEvents = "none";
    console.log(box.textContent)
      winner();
  });
});  

function winner() {
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
reset.addEventListener('click',()=>{
    boxs.forEach((box) => {
      box.style.pointerEvents = "all";
      box.disabled = false;
      box.style.textDecoration = "none";
      box.textContent="";
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

