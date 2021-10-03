$(document).ready(function () {
    $(window).scroll(function () {
      //stick the navbar on scroll
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
        $(".menu-btn").addClass("border");
      } else {
        $(".navbar").removeClass("sticky");
        $(".menu-btn").removeClass("border");
      }
    });
  });
  
    // typing animation script
  var typed = new Typed(".typing", {
    strings: ["Web developer", "Blogger", "Designer", "Engineer"],
    typeSpeed: 110,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing-2", {
    strings: ["Web developer", "Blogger", "Designer", "Engineer"],
    typeSpeed: 110,
    backSpeed: 60,
    loop: true,
  });
  
  
        // side navigation bar javascript
        var menubtn = document.getElementById("btn");
        var sidebar = document.getElementById("sidebar");
        var menus = document.getElementById("menus");
  
        sidebar.style.right = "-230px";
  
        menubtn.onclick = function () {
          if (sidebar.style.right == "-230px") {
            sidebar.style.right = "0px";
            menus.src = "data/close.png";
          } else {
            sidebar.style.right = "-230px";
            menus.src = "data/menu.png";
          }
        };