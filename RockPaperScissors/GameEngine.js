/**
 * Created by Manas on 3/22/2016.
 */

/**
 * Created by Manas on 3/22/2016.
 */

function rockSelect() {
        selection = Math.floor(Math.random() * (3 - 1)) + 1;
        if (selection == 1) {
            alertify.success("It's a tie!, the bot selected rock as well");
        }
        else if (selection == 2) {
            alertify.error("You Loose, Paper covers rock, Bot chose paper :(");
        }
        else {
            alertify.success("You win, Rock crushes scissors, Bot chose scissor :)");
        }
}

function paperSelect() {
    selection = Math.floor(Math.random() * (3 - 1)) + 1;
    if (selection == 1) {
        alertify.success("It's a tie!, the bot selected paper as well");
    }
    else if (selection == 2) {
        alertify.error("You Loose, Scissor cuts paper, Bot chose Scissor :(");
    }
    else {
        alertify.success("You win, Paper covers Rock, Bot chose Rock :)");
    }
}

function scissorSelect() {
    selection = Math.floor(Math.random() * (3 - 1)) + 1;
    if (selection == 1) {
        alertify.success("It's a tie!, the bot selected scissor as well");
    }
    else if (selection == 2) {
        alertify.error("You Loose, Rock crushes scissor, Bot chose Rock :(");
    }
    else {
        alertify.success("You win, Scissor cuts Paper, Bot chose Paper :)");
    }
}


