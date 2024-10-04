let input = "";
async function displayData() {
    input = document.getElementById('inp').value;
    let script = document.createElement("script");
    script.innerHTML = input;
    document.body.appendChild(script);
}