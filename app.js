console.log(1+1)

const navSlide = () => {

    //
    const burger = document.querySelector(".burger");
   
    const navLink = document.querySelector(".nav_");

    const Button = document.querySelector(".name_label");
   
    burger.addEventListener("click" , ()=>{
   
     navLink.classList.toggle("nav_active");

     Button.style.display = "none"
   
   
   
    })
   
   }

   
   function CloseDiv(){
    // document.querySelector(".nav_").style.display = "none";
    document.querySelector(".nav_").style.transform = "translateX(100%)";
  }

   
   navSlide();