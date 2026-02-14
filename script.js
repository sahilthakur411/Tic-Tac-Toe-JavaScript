let boxes = document.querySelectorAll(".BOX")
let resetbtn = document.querySelector("#reset-btn")
let newGameBtn = document.querySelector("#new-btn")
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true; 
let winpattern = [
    [0,1,2], [0,3,6], [0,4,8],
    [1,4,7], [2,5,8], [2,4,6],
    [3,4,5], [6,7,8]
];
const resetGame = () =>{
    turno = true;
    enableBoxes();
   msgcontainer.classList.add("hide");
    
};

boxes.forEach((BOX) => {
    BOX.addEventListener("click", () =>{
        if(turno === true){
            BOX.innerText = "O";
            turno = false;
        }else{
            BOX.innerText= "X";
          //  BOX.style.color = "Pink";
            turno = true;
        }
        BOX.disabled = true;
        checkWinner();
    });
});
const disableBoxes = () =>{
    for(let box of boxes ){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes ){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (Winner) => {
    msg.innerText = `Congratulation Winner is  ${Winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for(let pattern of winpattern){
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(
            boxes[pattern[0]].innerText, 
            boxes[pattern[1]].innerText, 
            boxes[pattern[2]].innerText,
        );
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
                
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);