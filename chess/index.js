import { placeFigures } from "./figures.js";

const chessWrapper = document.querySelector(".chess-wrapper");

for (let rows = 8; rows > 0; rows--) {
    for (let columns = 1; columns < 9; columns++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        square.setAttribute("id", letterProcessor(rows, columns));

        (rows + columns) % 2 == 0
            ? square.classList.add("black")
            : square.classList.add("white");

        chessWrapper.appendChild(square);

        square.addEventListener("dragover", (event) => event.preventDefault());

        square.addEventListener("drop", function (event) {
            event.preventDefault();

            const figureId = event.dataTransfer.getData("figureId");
            const movedFigure = document.getElementById(figureId);

            //method find wse figury i hod budet tut(ne)

            event.target.appendChild(movedFigure);
        });
    }
}
const allFigures = placeFigures();
function letterProcessor(rowsNumber, columnNumber) {
    const lettersArray = ["A", "B", "C", "D", "E", "F", "G", "H"];

    return `${rowsNumber}${lettersArray[columnNumber - 1]}`;
}
