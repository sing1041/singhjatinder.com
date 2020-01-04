 jQuery(document).on('click','.work_content_scroller,.scrollImg',function(e){
  e.preventDefault();
  var self = jQuery(this); 
  var height = 10000;
  if(self.hasClass('scroller_mobile_image')) {
     height = 18000;
  }
  if(self.scrollTop() > 0 ) {
    self.animate({ scrollTop: 0 }, height);
  }else{
    self.animate({ scrollTop: self.find('img').height() }, height);
  }
 	
 });

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
	navLinks.classList.toggle("open");
	links.forEach(link => {
		link.classList.toggle("fade");
	});
});

$(document).on('click', '.navClick', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

$('.resumeBtn').click(function(event) {
    value = $('.intro_cover').css('right') === '1000px' ? 0 : '1000px';
      $('.intro_cover').animate({
          right: value
      });
});

// take back up button

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
