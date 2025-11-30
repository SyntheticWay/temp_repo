import { Figure } from "./Figure.js";

const whiteLeftBishop = new Figure(
    "bishop",
    "images/bishop-w.svg",
    "8C",
    null,
    "black",
    false
);
const whiteRightBishop = new Figure(
    "bishop",
    "images/bishop-w.svg",
    "8F",
    null,
    "black",
    false
);
const whiteLeftKnight = new Figure(
    "knight",
    "images/knight-w.svg",
    "8B",
    null,
    "black",
    false
);
const whiteRightKnight = new Figure(
    "knight",
    "images/knight-w.svg",
    "8G",
    null,
    "black",
    false
);
const whiteLeftRook = new Figure(
    "rook",
    "images/rook-w.svg",
    "8A",
    null,
    "black",
    false
);
const whiteRightRook = new Figure(
    "rook",
    "images/rook-w.svg",
    "8H",
    null,
    "black",
    false
);
const whiteQueen = new Figure(
    "queen",
    "images/queen-w.svg",
    "8D",
    null,
    "black",
    false
);
const whiteKing = new Figure(
    "king",
    "images/king-w.svg",
    "8E",
    null,
    "black",
    false
);

const whitePawns = [
    new Figure("pawn", "images/pawn-w.svg", "7A", null, "white", false),
    new Figure("pawn", "images/pawn-w.svg", "7B", null, "white", false),
    new Figure("pawn", "images/pawn-w.svg", "7C", null, "white", false),
    new Figure("pawn", "images/pawn-w.svg", "7D", null, "white", false),
    new Figure("pawn", "images/pawn-w.svg", "7E", null, "white", false),
    new Figure("pawn", "images/pawn-w.svg", "7F", null, "white", false),
    new Figure("pawn", "images/pawn-w.svg", "7G", null, "white", false),
    new Figure("pawn", "images/pawn-w.svg", "7H", null, "white", false),
];

const whiteFigures = [
    whiteKing,
    whiteQueen,
    whiteLeftBishop,
    whiteRightBishop,
    whiteLeftKnight,
    whiteRightKnight,
    whiteLeftRook,
    whiteRightRook,
    ...whitePawns,
];

const blackLeftBishop = new Figure(
    "bishop",
    "images/bishop-b.svg",
    "1C",
    null,
    "black",
    false
);
const blackRightBishop = new Figure(
    "bishop",
    "images/bishop-b.svg",
    "1F",
    null,
    "black",
    false
);
const blackLeftKnight = new Figure(
    "knight",
    "images/knight-b.svg",
    "1B",
    null,
    "black",
    false
);
const blackRightKnight = new Figure(
    "knight",
    "images/knight-b.svg",
    "1G",
    null,
    "black",
    false
);
const blackLeftRook = new Figure(
    "rook",
    "images/rook-b.svg",
    "1A",
    null,
    "black",
    false
);
const blackRightRook = new Figure(
    "rook",
    "images/rook-b.svg",
    "1H",
    null,
    "black",
    false
);
const blackQueen = new Figure(
    "queen",
    "images/queen-b.svg",
    "1D",
    null,
    "black",
    false
);
const blackKing = new Figure(
    "king",
    "images/king-b.svg",
    "1E",
    null,
    "black",
    false
);

const blackPawns = [
    new Figure("pawn", "images/pawn-b.svg", "2A", null, "black", false),
    new Figure("pawn", "images/pawn-b.svg", "2B", null, "black", false),
    new Figure("pawn", "images/pawn-b.svg", "2C", null, "black", false),
    new Figure("pawn", "images/pawn-b.svg", "2D", null, "black", false),
    new Figure("pawn", "images/pawn-b.svg", "2E", null, "black", false),
    new Figure("pawn", "images/pawn-b.svg", "2F", null, "black", false),
    new Figure("pawn", "images/pawn-b.svg", "2G", null, "black", false),
    new Figure("pawn", "images/pawn-b.svg", "2H", null, "black", false),
];

const blackFigures = [
    blackLeftKnight,
    blackRightKnight,
    blackLeftBishop,
    blackRightBishop,
    blackLeftRook,
    blackRightRook,
    blackQueen,
    blackKing,
    ...blackPawns,
];

export const figures = [...whiteFigures, ...blackFigures];
