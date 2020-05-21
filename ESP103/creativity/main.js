//handle page swap
document.getElementById("switchto").addEventListener("click", e => {
    document.getElementById("landing").style.visibility = "hidden";
    document.getElementById("searchpage").style.visibility = "visible";
});



const searchBox = document.getElementById("mainSearch");
const creativeQuestion = "What is creativity?";
let counter = 0;

searchBox.addEventListener("input", e => { 

    if (e.inputType == "insertText") {
        if (counter < creativeQuestion.length) {
            counter++;
            searchBox.value = creativeQuestion.slice(0, counter);
        } else {
            searchBox.value = creativeQuestion; //locks the answer without continuing to increment counter
        }
    }
    else if ((e.inputType == "deleteContentBackward" || e.inputType == "deleteContentForward") && counter > 0) {
        counter--;
        searchBox.value = creativeQuestion.slice(0, counter);
    }



    console.log(counter == creativeQuestion.length);
});

document.addEventListener("keydown", e => {
    console.log(e);
    if (e.key == "Enter" && counter == creativeQuestion.length) {
        nextPage();
    }
});
function toNext() {
    if (counter == creativeQuestion.length) {
        nextPage();
    }
}

function nextPage() {
    window.location.href = "./results/index.html"
}