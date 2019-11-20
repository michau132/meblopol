$('.owl-carousel').owlCarousel({
  stagePadding: 350,
  loop: true,
  margin: 20,
  smartSpeed: 700,
  nav: true,
  navText: [
    'prev',
    'next'
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
      items: 1,
      stagePadding: 350,
    },
    1700: {
      items: 1,
      stagePadding: 450
    }
  }
});
let $activeSlide;

$('.owl-carousel').on('translated.owl.carousel', function(params) {
  if ($activeSlide) {
    $activeSlide.prev().off()
    $activeSlide.next().off()
  }
  $activeSlide = $(params.target).find('.owl-item.active')

  $activeSlide.prev().find('.middle-box').css('display', 'block').css('left', 'unset').css('right', '9%')
  $activeSlide.next().find('.middle-box').css('display', 'block').css('left', '9%').css('right', 'unset')
  $activeSlide.prev().find('.gallery__line').removeClass('gallery__right-line').addClass('gallery__left-line').css('display', 'block')
  $activeSlide.next().find('.gallery__line').removeClass('gallery__left-line').addClass('gallery__right-line').css('display', 'block')

  $activeSlide.prev().one('click', function(e) {
    $('.owl-prev').click()
  })
  
  $activeSlide.next().one('click', function() {
    $('.owl-next').click()
  })
})

$('.owl-carousel').on('translate.owl.carousel drag.owl.carousel', function (params) {
  $(params.target).find('.middle-box').css('display', 'none')
  $(params.target).find('.gallery__line').css('display', 'none')
})

$('.gallery__item').append('<div class="gallery__line"></div>')

const $initActive = $('.owl-item.active')
$initActive.prev().one('click', function (e) {
  $('.owl-prev').click()
})
$initActive.prev().find('.middle-box').css('left', 'unset').css('right', '9%').css('display', 'block')
$initActive.prev().find('.gallery__line').addClass('gallery__left-line').css('display', 'block')

$initActive.next().find('.gallery__line').addClass('gallery__right-line').css('display', 'block')
$initActive.next().find('.middle-box').css('left', '9%').css('right', 'unset').css('display', 'block')

$initActive.next().one('click', function () {
  $('.owl-next').click()
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
$('.contact__form').on('submit', function(e) {
  
  const name = $('#name')
  const contact = $('#contact')
  const message = $('textarea')
  e.preventDefault()
  if (name.val().length == 0 || contact.val() == 0 || message.val() == 0) {
    return
  }
  const a = {
    message: message.val(),
    name: name.val(),
    contact: contact.val()
  }

  const headers = new Headers();
  headers.append('Content-Type', 'application / json')
  const $loader = $('#loading')
  $loader.css('display', 'block')
  const response = $('#response')
  fetch('http://localhost:4000/send-email', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: message.val(),
      name: name.val(),
      contact: contact.val()
    })
  }).then(res => res.json())
  .then(res => {
    if (!res.success) {
      response.addClass('error')
    }
    $loader.css('display', 'none')
    response.css('transform', 'translateX(-50%) translateY(0)')
    response.find('.response__text').text(res.message)

    // setTimeout(() => {
    //   response.css('transform', 'translateX(-50%) translateY(500px)')
    //   response.find('.response__text').text('')
    // }, 3000);
  })
  .catch(err => {
    console.log(err)
    $loader.css('display', 'none')
    response.addClass('error').css('transform', 'translateX(-50%) translateY(0)')
    response.find('.response__text').text()
    setTimeout(() => {
      response.css('transform', 'translateX(-50%) translateY(500px)')
      response.find('.response__text').text('')
    }, 3000);
  })
  
})
