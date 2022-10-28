/* Oppgave Lag en visuell teller! */
/* model */

let output = 0;

/* controller */

function økNum() { 
    output++;
    console.log(output);
    veiw();
}

function senkNum() {
    output--;
    console.log(output);
    veiw();
}

function resett() {
    output = 0;
    console.log(output); 
    veiw();    
}
/* veiw */

veiw();
function veiw() {
    document.getElementById("app").innerHTML = /* html */`
    <div id="div1" > nummer:${output}</div>
    <button onclick="økNum()">øke nummer</button><br><br><br>    
    <button onclick="senkNum()">senk nummer</button><br><br><br>
    <button onclick="resett()"><b>RESET</b></button>
    `;
}