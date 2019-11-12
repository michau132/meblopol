$('.gallery-cnt').slick({
  speed: 500,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  adaptiveHeight: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      adaptiveHeight: true,
    }
  }, ]
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {

  slick.$slides.each(function(index) {

    if(index === nextSlide) {
      $(this).children('.overlay').remove()
      return
    }

    if ($(this).children('.overlay').length == 0) {
      
      $(this).append('<div class="overlay"></div>')
    }

  })
})
// .on('afterChange', function (event, slick, currentSlide, nextSlide) {
//   slick.$slides.each(function (index) {
//     //$(this).children('.overlay').remove()


//     if (index === currentSlide) {
//       $(this).children('.overlay').remove()
//       console.log('e')
//       return
//     }
//   })
// })


var textarea = document.querySelector("textarea");
var limitRows = 125;
var messageLastScrollHeight = textarea.scrollHeight;

textarea.oninput = function () {
  var rows = parseInt(textarea.getAttribute("rows"));
  // If we don't decrease the amount of rows, the scrollHeight would show the scrollHeight for all the rows
  // even if there is no text.
  textarea.setAttribute("rows", "1");

  if (rows < limitRows && textarea.scrollHeight > messageLastScrollHeight) {
    rows++;
  } else if (rows > 1 && textarea.scrollHeight < messageLastScrollHeight) {
    rows--;
  }

  if (!textarea.value.length) {
    rows = 1
  }
  messageLastScrollHeight = textarea.scrollHeight;
  textarea.setAttribute("rows", rows);
};

const input = $('#name')

$('.contact-form').on('submit', function(e) {
  e.preventDefault()
  $('#loading').css('display', 'block')
})
