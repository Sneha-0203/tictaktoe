let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".error__title");

let turnX = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnX = true;
    enable();
    msgContainer.classList.add("hide");
};

const disable = () => {
    boxes.forEach(box => box.classList.add("disabled"));
};

const enable = () => {
    boxes.forEach(box => {
        box.classList.remove("disabled");
        box.innerText = "";
    });
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable();
};

const checkWinner = () => {
    for (let patterns of winPatterns) {
                /*refference code*/
       /* console.log([patterns[0]],[patterns[1]],[patterns[2]]);
        console.log(
            boxes[patterns[0]].innerText,
            boxes[patterns[1]].innerText,
            boxes[patterns[2]].innerText);    */

        let pos1 = boxes[patterns[0]].innerText;
        let pos2 = boxes[patterns[1]].innerText;
        let pos3 = boxes[patterns[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            console.log("winner", pos1);
            showWinner(pos1);
            return;
        }
    }
};

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (box.classList.contains("disabled")) return;
        
        if (turnX) { 
            box.innerText = 'X';
            turnX = false;
        } else {
            box.innerText = 'O';
            turnX = true;
        }
        box.classList.add("disabled");
        checkWinner();
    });
});

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
