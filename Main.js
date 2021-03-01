onkeydown = (e)=>{
    if(e.key == "Enter"){
        makeChoice(inputBox.value);
    }
}

document.body.append(textBox);

let inputBox = document.createElement("input");
inputBox.type = "text";
inputBox.style.position = "absolute" ;
inputBox.style.bottom = "80%" ;
inputBox.style.right = "50%"
document.body.append(inputBox);

function setText(text){
    textBox.innerHTML = text;}

 function makeChoice(choice){
    if(choice === "horde"){
        setText("Your friends, Klippi and Klappi are upset because they also want some lilly pads. They come up to you and ask nicely If you will share some with them")
        document.getElementById("Klippi").src = "SadKlippi.png"
        document.getElementById("Klappi").src = "SadKlappi.png"
        document.getElementById("lillypad").style.display ="block"
        document.getElementById("lillypad2").style.display ="block"
        document.getElementById("lillypad3").style.display ="block"
        document.getElementById("lillypad4").style.display ="block"
    }
       if(choice === "share") {
           setText("Congradulations, you have avoided conflict by sharing with others, all three of you have lilly pads now and you ar eall happy")
       }


    }
setText("This is Anton the frog, and he loves the pond, He loves lilly pads very much and there are 15 lilly pads in the pool you can take all 15 or you can split them evenly between you and your friends, Klippi and Klappi do you A)horde or B)share")

