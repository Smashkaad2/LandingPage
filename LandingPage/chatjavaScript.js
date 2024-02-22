
// function insertText(text) {
//     text = document.getElementById("description").value;
//     console.log(text);
// }

document.addEventListener('DOMContentLoaded', function () {
    var count = 0;
    var link = document.getElementById('buttonxd');
    var text = "";

    link.addEventListener('click', function () {
        var name = document.getElementById("WordName").value;
        var firstWord = document.getElementById("Word1").value;
        text = name + ":" + " " + firstWord;
        if (name === "" && firstWord === "") {
            alert('Please add a Username or a Text message');

        }
        else if (name === "") {
            alert('Please add a Username');
        }

        else if (firstWord === "") {
            alert('Please add a Text message');
        }

        else if (text.length >= 300) {
            alert('Message is too big!')
        }

        else {

            insertTextAtRow("description", text, count);
            count++;
        }

    });
});


function insertTextAtRow(textareaId, text, row) {
    var textarea = document.getElementById(textareaId);
    var lines = textarea.value.split("\n");

    row = Math.max(0, Math.min(row, lines.length));

    lines.splice(row, 0, text);

    textarea.value = lines.join("\n");
}

window.onload = function () {
    var textField = document.getElementById('Word1');
    var textareaField = document.getElementById('description');

    textField.value = '';
    textareaField.value = '';
};