const output = document.getElementById('output');

document.getElementById('word').onclick = function() {
    output.textContent = word();
};

document.getElementById('sentence').onclick = function() {
    output.textContent = sentence();
};

document.getElementById('paragraph').onclick = function() {
    output.textContent = paragraph();
};
