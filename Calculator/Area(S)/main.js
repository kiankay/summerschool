// Area

// Add Event Listener
document.getElementById("squarecalc").addEventListener("click", calcsquare);
document.getElementById("reccalc").addEventListener("click", calcrec);
document.getElementById("tricalc").addEventListener("click", calctri);
document.getElementById("circlecalc").addEventListener("click", calccircle)
// Event Function square
function calcsquare() {
    // input
    let square = Number(document.getElementById("square").value);
    // process
    let total = square ** 2;
    // output
    document.getElementById("squareresult").innerHTML = total;
}

// Event Function rectangle
function calcrec() {
    // input
    let rectanglel = Number(document.getElementById("rectanglel").value);
    let rectanglew = Number(document.getElementById("rectanglew").value);
    // process
    let total = rectanglel * rectanglew
    // output
    document.getElementById("recresult").innerHTML = total;
}

// Event Function triangle
function calctri() {
    // input
    let tribase = Number(document.getElementById("tribase").value);
    let triheight = Number(document.getElementById("triheight").value);
    // process
    let total = tribase * triheight / 2;
    // output
    document.getElementById("triresult").innerHTML = total;
}

// Event Function circle
function calccircle() {
    // input
    let circle = Number(document.getElementById("circle").value);
    // process
    let total = circle * circle * Math.PI;
    // output
    document.getElementById("circleresult").innerHTML = total;
}