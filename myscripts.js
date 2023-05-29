function getComputerChoice() {
    let computerRNG = Math.ceil(Math.random() * 3);

    if (computerRNG == 1) {
        return "Paper";
    }else if (computerRNG == 2) {
        return "Rock";
    }else {
        return "Scissors";
    }
}