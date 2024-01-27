var count = document.querySelectorAll(".press").length;

for(var i = 0;i < count; i++){

document.querySelectorAll(".press")[i].addEventListener("click",function ()
{
    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {    
        case "PET ME":
        var petMe = new Audio('./asset/sound/purr.wav');
        petMe.play();
        break;
    
        case "Meow meow":
        var meowMeow = new Audio('./asset/sound/sweet.wav');
        meowMeow.play();
        break;
    
        case "! BE CAREFUL !":
        var beCareful = new Audio('./asset/sound/angry.wav');
        beCareful.play();
        break;
    
        default: console.log(buttonInnerHTML);
    }
    
    
   
});

}






 
    
        
    
    
        