// temp

// add event listener
document.getElementById("calcbtn").addEventListener("click" , calculate);
document.getElementById("calcbtn2").addEventListener("click" , calculate2);

// event function
function calculate () {
    // input
    let celsius = Number(document.getElementById("celsius").value);
    
    // process
    let total = celsius * 1.8 + 32;
   
    // output
    document.getElementById("result").innerHTML = total;
}

function calculate2 () {
  // input
    let fahrenheit = Number(document.getElementById("fahrenheit").value);
  // process  
    let total = (fahrenheit -  32 ) / 1.8;
  // output
    document.getElementById("result2").innerHTML = total;
}