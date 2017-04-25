$(document).ready(function() {
          
                /* smooth scrolling for scroll to top */
              $('#fixedbutton').click(function(){
                $('body,html').animate({scrollTop:0},1000);
              })

              /* smooth scrolling for nav sections */
              $('.navbar-menubar li>a').click(function(){
                var link = $(this).attr('href');
                var posi = $(link).offset().top;
                $('body,html').animate({scrollTop:posi},700);
              });
});
