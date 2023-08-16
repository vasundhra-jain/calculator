let string = "";
let buttons = document.querySelectorAll(".cal-buttons"); //all button selected having class cal-buttons
Array.from(buttons).forEach((button) => { //array of buttons and going through each button
    button.addEventListener("click", (e) => { //e->event 
        if (e.target.innerHTML === "=") {
            string = eval(string); //evaluating
            document.querySelector("input").value = string;
        } else if (e.target.innerHTML === "AC") {
            string = "";
            document.querySelector("input").value = string;
        } else if (e.target.innerHTML === "x") {
            string = string + "*";
            document.querySelector("input").value = string;
        } else {
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    });
});

function backspace() {
    let length = string.length;
    string = string.slice(0, length - 1);
    document.querySelector("input").value = string;
}