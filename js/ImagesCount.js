// Count images And Game Over 
var c =1;
document.getElementById("images").addEventListener("click",timedCount);

function timedCount()
    {
    document.getElementById('txt').value=c
    
    c=c+1;

    }
    window.onload = function(){
        setTimeout(function(){
        alert("Game Over !");
        document.getElementById("txt").value= "";
        }, 3000);
    };