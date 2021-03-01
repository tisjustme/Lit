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
        setText("Your friends, Klippi and Klappi are upset because they also want some lilly pads. They come up to you and ask nicely If you will share some with them do you A) say no or B)share")
        document.getElementById("Klippi").src = "SadKlippi.png"
        document.getElementById("Klappi").src = "SadKlappi.png"
        document.getElementById("lillypad").style.display ="block"
        document.getElementById("lillypad2").style.display ="block"
        document.getElementById("lillypad3").style.display ="block"
        document.getElementById("lillypad4").style.display ="block"
    }
       if(choice === "share") {
           setText("Congradulations, you have avoided conflict by sharing with others, all three of you have lilly pads now and you are all happy the end")
           document.getElementById("lillypad").style.display ="block"
           document.getElementById("lillypad2").style.display ="block"
           document.getElementById("lillypad3").style.display ="block"
           document.getElementById("lillypad4").style.display ="block"
           document.getElementById("lillypad3").style.right = "75%"
           document.getElementById("lillypad4").style.right = "30%"
           document.getElementById("lillypad4").style.bottom = "15%"
           document.getElementById("Klippi").src = "Klippi.png"
        document.getElementById("Klappi").src = "Klappi.png"
           
       }
       if(choice === "say no"){
           setText("Klippi and Klappi are mad because they want lilly pads too, they say that they will give you one more chance before they will have to fight for the lilly pads do you A) share or B) keep them")
           document.getElementById("Klippi").src = "KlippiMad.png"
           document.getElementById("Klappi").src = "KlappiMad.png"
      
        }
        if(choice === "keep them"){
            setText("You are being selfish and your friends, klippi and klappi are upset, they tell you that you guys can't be frineds anymore and now because you took all of the lillypads you lost your friends, The End")
            document.getElementById("Klappi").src = "bigbruh.png"
            document.getElementById("Klappi").src = "smallbruh.png"
            document.getElementById("Anton").src = "AntonSad.png"
        }

    }
setText("This is Anton the frog, and he loves the pond, He loves lilly pads very much and there are 15 lilly pads in the pool you can take all 15 or you can split them evenly between you and your friends, Klippi and Klappi do you A)horde or B)share")

