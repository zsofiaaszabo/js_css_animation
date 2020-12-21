function load () {

let root =document.getElementById("root");
let myObjects = [

    {
        tag: "h1",
        content: "Zsofi"
    },

    {
        tag: "p",
        content: "Frontend Developer"
    }

]; 

console.log (myObjects.length); //objektum

//for (let i=0; i<myObjects.length; i++) {}



for (myObject of myObjects) {
    //console.log(myObject.tag);
    //root id elemhez, olyan tag passzítása, elementet, aminek a tagje 

        root.insertAdjacentHTML("beforeend", `
         <${myObject.tag}> ${myObject.content} </${myObject.tag}>
    `);

}

root.addEventListener("click", function (){
root.classList.toggle("clicked");

});

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


}
window.addEventListener("load", load);