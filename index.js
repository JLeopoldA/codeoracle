const selection = process.argv[2];
const question = process.argv.slice(3).join(' ');

const commandQuestion = ["q", "-q", "--q", "-question", "--question", "question", 
                        "a", "-a", "--a", "-ask", "--ask", "ask" ];
const commandHelp = ["h", "-h", "--h", "-help", "--help", "help"];
function matchSelection(commandArr, selectedCommand) {
    for(let i = 0; i < commandArr.length; i++) {
        if(commandArr[i] == selectedCommand) {
            return true;
        }
    }
};

function run() {
    if (matchSelection(commandQuestion, selection)) { // if user has asked question
        console.log(question);
    } else if (matchSelection(commandHelp, selection)) { // if user is requesting help
        console.log("help requested");
    } else { // if no parameter is selected
        console.log("nothing has been selected");
    }
}
run();