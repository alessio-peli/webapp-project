let counter = 0;

function incrementab(){
    counter++;
    document.getElementById("counter-bianchi").innerText = counter;

}
function decrementab(){
    counter--;
    document.getElementById("counter-bianchi").innerText = counter;
    
}
function incrementan(){
    counter++;
    document.getElementById("counter-neri").innerText = counter;

}
function decrementan(){
    counter--;
    document.getElementById("counter-neri").innerText = counter;
    
}

function pesca(){
    let neri = +document.getElementById("counter-neri").textContent
    let bianchi = +document.getElementById("counter-bianchi").textContent
    console.log(neri+bianchi)
    let threshold = bianchi/(bianchi+neri)
    if (Math.random()<= threshold) {
        console.log("ho pescato bianco")
    }
    else {
    console.log("ho pescato nero")
    }
}