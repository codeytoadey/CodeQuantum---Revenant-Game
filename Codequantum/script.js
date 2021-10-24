var character= document.getElmentsByID("character");
var block = document.getElmenetByID("block");
function jump (){
    character.classList.add("animate");
    setTimeout(function(){character.classList.remove("animate");}, 500)
}
var checkDead= setInterval (function(){
    var characterTop=
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft=
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<15 && blockLeft>0 && characterTop>170){
        block.style.animation="none";
        block.style.display="none";
        alert("Oh no! The Revenant has caught you! Game Over! Refresh to Play again!");
    }
}, 10);