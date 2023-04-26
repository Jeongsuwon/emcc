const burger = document.querySelector("#burger");
        let flag = false; 
       
        burger.addEventListener("click", function(){

            const navbar = document.querySelector(".navbar-wrap");

            navbar.classList.toggle("active");   
            flag = !flag;

            const span = document.querySelector(".burgurin");
            
            if(flag) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
           
        })              