let x;
    
document.getElementById("selectNow").onclick = function(){
    let x = Math.floor(Math.random() * 5000) + 1;

    document.getElementById("x").innerHTML = x;
}

