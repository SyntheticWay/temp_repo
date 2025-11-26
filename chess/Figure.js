export class Figure {
    constructor(name, src, current, previous, color, kill) {
        this.nameFigure = name;
        this.src = src;
        this.currentPosition = current;
        this.previousPosition = previous;
        this.color = color;
        this.killed = kill;
        this.createFigure();
    }
    // set currentPosition(position) {
    //     this.currentPosition = position;
    // }
    // set nextPosition(position) {
    //     this.nextPosition = position;
    // }
    // get currentPosition() {
    //     return this.currentPosition;
    // }
    // get nextPosition() {
    //     return this.nextPosition;
    // }

    moveTo(position) {
        this.previousPosition = this.currentPosition;
        this.currentPosition = position;
    }

    createFigure() {
        this.figureImage = document.createElement("img");
        this.figureImage.setAttribute("src", this.src);
        //this.figureImage.src = this.src;
        this.figureImage.setAttribute("class", "figure");
        this.figureImage.setAttribute(
            "id",
            `${this.nameFigure}-${this.currentPosition}`
        );
        this.figureImage.setAttribute("draggable", true);

        this.figureImage.addEventListener("dragstart", (event) => {
            //TODO check this
            console.log("shtoto", event.target.id);
            event.dataTransfer.setData("figureId", event.target.id);
        });
        console.log(this.currentPosition);
        console.log("shtoto2", document.getElementById(this.currentPosition));
        // console.log(
        //     "shtoto3",
        //     document
        //         .getElementById(this.currentPosition)
        //         .appendChild(this.figureImage)
        // );

        document
            .getElementById(this.currentPosition)
            .appendChild(this.figureImage);
    }
}
