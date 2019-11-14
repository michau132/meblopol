$('.owl-carousel').owlCarousel({
  stagePadding: 350,
  loop: true,
  margin: 20,
  smartSpeed: 700,
  nav: true,
  navText: [
    '',
    ''
  ],
  navContainerClass: 'custom-nav',
  responsive: {
    0: {
      items:1,
      stagePadding: 50
    },
    400: {
      items: 1,
      stagePadding: 100
    },
    600: {
      items: 1,
      stagePadding: 150
    },
    1000: {
      items: 1,
      stagePadding: 250,
      slideBy: 3
    },
    1500: {
      stagePadding: 450,
      items: 1
    }
  }
});

$('.owl-carousel').on('translated.owl.carousel', function(params) {
  const $activeSlide = $(params.target).find('.owl-item.active')
  console.log($activeSlide)
  $activeSlide.prev().one('click', function(e) {
    $('.owl-prev').click()
  })
  
  $activeSlide.next().one('click', function() {
    $('owl-next').click()
  })
})

const $activeSlide = $('.owl-item.active')
$activeSlide.prev().one('click', function (e) {
  $('.owl-prev').click()
})

$activeSlide.next().one('click', function () {
  $('owl-next').click()
})

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

  setTimeout(function() {
    $('#loading').css('display', 'none')
  }, 8000)
})
