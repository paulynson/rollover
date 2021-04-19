const pnt = document.querySelector(".pointer");
const menu = document.querySelector(".menu-icon");
const row = document.querySelector(".menu-list");

menu.addEventListener("click", ()=>{
if(pnt.classList.contains("active")){
    pnt.classList.remove("active");
} else{
    pnt.classList.add("active");
}
})

menu.addEventListener("click", ()=>{
    if(row.classList.contains("show")){
        row.classList.remove("show");
    } else{
        row.classList.add("show");
    }
    })


//     $(document).ready(function() {
 
// $("#owl-demo").owlCarousel({

//      autoPlay: 3000, //Set AutoPlay to 3 seconds

//      items : 3,
//      itemsDesktop : [1199,3],
//      itemsDesktopSmall : [979,3]

//  });

// });