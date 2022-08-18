const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
 "/"];
let pass = document.getElementById("passItem")
let genBtn = document.getElementById("btn")
let pass2 = document.getElementById("passItem2")

function random(){
    return Math.floor(Math.random() * characters.length) 
}

genBtn.addEventListener("click", function(){
    
    let randomVal = ""
    for(let i = 0; i < 12; i++){
        randomVal += characters[random()]
    }

    pass.textContent = randomVal
    
    let randomVal2 = ""
    for(let i = 0; i < 12; i++){
        randomVal2 += characters[random()]
    }
    pass2.textContent = randomVal2
})




