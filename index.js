


// FETCH POST FUNCTION
async function postQuestion(inquiry) {
    try {
        const data = {
            question: inquiry
        }
        const response = await fetch("https://localhost:3000/api/request", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    }
}

// PARAMETER SELECTION
const selection = process.argv[2];
const question = process.argv.slice(3).join(' ');
const parameterQuestion = ["q", "-q", "--q", "-question", "--question", "question", 
                        "a", "-a", "--a", "-ask", "--ask", "ask" ];
const parameterHelp = ["h", "-h", "--h", "-help", "--help", "help"];
function matchSelection(parameterArr, selectedParameter) {
    for(let i = 0; i < parameterArr.length; i++) {
        if(parameterArr[i] == selectedParameter) {
            return true;
        }
    }
};

// RUN FUNCTION
function run() {
    if (matchSelection(parameterQuestion, selection)) { // if user has asked question
        postQuestion(question);
    } else if (matchSelection(parameterHelp, selection)) { // if user is requesting help
        console.log("help requested");
    } else { // if no parameter is selected
        console.log("nothing has been selected");
    }
}
run();