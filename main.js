// $(function () {
// 		$(document).scroll(function () {
// 				var $nav = $(".fixed-top");
// 				$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
// 		});
// });

$(".scroll-link").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){
       // window.location.hash = hash;
       $( ".navbar-collapse" ).removeClass("show");
     });

});