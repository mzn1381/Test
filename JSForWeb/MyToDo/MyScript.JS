var userInput = document.getElementById('userInput');
var enterbtn = document.getElementById('enter');
var mul = document.getElementById('mul');
userInput.addEventListener('keypress', clickkeypress);
enterbtn.addEventListener('click', clickenterbtn);

function CheckContent() {
    return userInput.value.length;
}

function addItem() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    li.addEventListener("click", function() {
        li.classList.toggle("done");
    });
    var btnd = document.createElement("button");
    btnd.appendChild(document.createTextNode("X"));
    btnd.addEventListener("click", function() {
        li.classList.add("delete");
    });
    li.appendChild(btnd);
    mul.appendChild(li);
}

function clickenterbtn() {
    if (CheckContent() > 0) {
        addItem();
    }
}

function clickkeypress(event) {
    if (event.which === 13 && CheckContent() > 0) {
        addItem();
    }
}