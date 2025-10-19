function  Shownav() {
      var i = document.getElementById("navMenu");
      if(i.className === "nav-link") {
         i.className += " responsive";
           
      } else {
         i.className = "nav-link";
         
      } 
   }
   function toggleVisibilty() {
    const toggleIcon = document.getElementById("toggleIcon");
   const psw = document.getElementById("psw");
   toggleIcon.onclick = () => {
          if(psw.type === `password`)  {
            psw.type = `text`;
            toggleIcon.classList.remove(`fa-eye-slash`);
             toggleIcon.classList.add(`fa-eye`);
        } else {[]
            
            psw.type = `password`;
              toggleIcon.classList.add(`fa-eye-slash`);
             toggleIcon.classList.remove(`fa-eye`);
        }
   } 
   }
   window.onload = function() {
      const savedUsername = localStorage.getItem("savedUsername");
      if (savedUsername) {
         document.getElementById("Usern").value = savedUsername;
         document.getElementById("chk").checked = true;
      }
   }