


// box.addEventListener("mousemove", function(eaval){
//     console.log("X:", eaval.offsetX, "Y:", eaval.offsetY);
// });


// box.addEventListener("mousemove", function(eaval){
//     let x = eaval.offsetX;
//     let y = eaval.offsetY;

//     box.style.background = `radial-gradient(at ${x}px ${y}px, red, black)`;
// });


// box.addEventListener("mousemove", function(eaval){

  

    // box.style.background = `radial-gradient(circle 50px at ${eaval.clientX}px ${ eaval.clientY}px, red, blue, purple)`;

//        let x = eaval.clientX;
//     let y = eaval.clientY;

//     box.style.background = `radial-gradient(circle 50px at ${x}px ${y}px, red, blue, purple)`;



//     console.log("X:", x, "Y:", y);

// });



// let box = document.querySelector(".box");

// box.addEventListener("mousemove", function(eaval){

//     let x = eaval.offsetX;   // X inside box
//     let y = eaval.offsetY;   // Y inside box

//     box.style.background =
//     `radial-gradient(circle 80px at ${x}px ${y}px, 
//     red, blue, purple)`;

// });



// let box = document.querySelector(".box");

addEventListener("mousemove", function(eaval) {

    document.body.style.setProperty("--x", eaval.offsetX + "px");
    document.body.style.setProperty("--y", eaval.offsetY + "px");

});
