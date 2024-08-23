
var doc=document.querySelectorAll(".drum").length;
   for(var i=0;i<doc;i++)
   {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     var letterpressed=this.innerHTML;
     buttonanimation(letterpressed);
     switch(letterpressed)
     {
        case "w":
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio= new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

            case "s":
            var audio= new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

            case "d":
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
            break;


            case "j":
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
            break;


            case "k":
            var audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
          
            case "l":
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
            break;


       default:console.log(letterpressed);
     }
        
     
    });
    
    

}
// var audio= new Audio("sounds/tom-1.mp3");
// audio.play();

document.addEventListener("keydown",function(event)
{
    
    


//    alert("this is the "+event.key);
// alert("jais");
      var letterpressed=event.key;
      buttonanimation(letterpressed);
      
      switch(letterpressed)
      {
         case "w":
             var audio= new Audio("sounds/tom-1.mp3");
             audio.play();
             break;
         case "a":
             var audio= new Audio("sounds/tom-2.mp3");
             audio.play();
             break;
 
             case "s":
             var audio= new Audio("sounds/tom-3.mp3");
             audio.play();
             break;
 
             case "d":
             var audio= new Audio("sounds/tom-4.mp3");
             audio.play();
             break;
 
 
             case "j":
             var audio= new Audio("sounds/snare.mp3");
             audio.play();
             break;
 
 
             case "k":
             var audio= new Audio("sounds/kick-bass.mp3");
             audio.play();
             break;
           
             case "l":
             var audio= new Audio("sounds/crash.mp3");
             audio.play();
             break;
 
 
        default:console.log(letterpressed);
      }
         
    })    
    
  function buttonanimation(keypressed)
  {
     var button= document.querySelector("."+ keypressed);
    //  alert("chirag");
     button.classList.add("pressed");
     setTimeout(function()
    {
        button.classList.remove("pressed")
    },100);
  }
   