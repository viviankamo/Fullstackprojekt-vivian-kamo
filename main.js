
/* varje gång man skrollar ner till statistik så ska siffrorna börja visa sig och räkna upp till det antal som är skrivet. 
Detta gör det möjligt, bestämmer hur lång tid det ska ta så att alla siffrorna stannar samtidigt och vid en position 
(då man kan se siffrorna) de ska börja öka. */
let nCount = selector => {
    $(selector).each(function () {
      $(this)
        .animate({
          Counter: $(this).text()
        }, {          
          duration: 4000,        
          easing: "swing",
         
          step: function (value) {
            $(this).text(Math.ceil(value));
          }
        });
    });
  };
  
  let a = 0;
  $(window).scroll(function () {
    
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
      a++;
      nCount(".rect > h1");
    }
  });

  /* Fixar så att navigationen följer med hela vägen ner efter man inte ser home-page längre */
  let navbar = $(".navbar");
  
  $(window).scroll(function () {
  
    let oTop = $(".section-2").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
      navbar.addClass("sticky");
    } else {
      navbar.removeClass("sticky");
    }
  });