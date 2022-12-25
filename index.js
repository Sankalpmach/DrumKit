var number=document.querySelectorAll(".drum").length;

for(var i=0;i<number;i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    // var mysound= new Audio("tom-1.mp3");
    // mysound.play();
    var keypressed=this.innerHTML;
   makeSound(keypressed);
   buttonAnimation(keypressed);

    
}); 
document.addEventListener("keypress", function(event){
    // var mysound= new Audio("tom-1.mp3");
    // mysound.play();
    
   makeSound(event.key);
   buttonAnimation(event.key);

    
});
}



function makeSound(key){
    switch(key){
        case "w":
            var tom1=new Audio("tom-1.mp3");
            tom1.play();
        break;
        case "a":
            var tom2=new Audio("tom-2.mp3");
            tom2.play();
        break;
        case "s":
            var tom3=new Audio("tom-3.mp3");
            tom3.play();
        break;
        case "d":
            var tom4=new Audio("tom-4.mp3");
            tom4.play();
        break;
        case "j":
            var snare=new Audio("snare.mp3");
            snare.play();
        break;
        case "k":
            var crash=new Audio("crash.mp3");
            crash.play();
        break;
        case "l":
            var kick=new Audio("kick-bass.mp3");
            kick.play();
        break;
        default:
    }
}

function buttonAnimation(currentKey){
    var activeKey=document.querySelector("."+currentKey)
    activeKey.classList.add("pressed"); 
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },200)
}
//Other way of doing this is anonyumous function
/*document.querySelector("button").addEventListener("click",handleclick){
    alert("Aaah");
}); */
// function handleclick(){
//     alert("Aaah");
// }