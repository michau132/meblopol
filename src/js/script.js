$('.gallery-cnt').slick({
  speed: 300,
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
}).on('beforeChange', function (e) {
  e.preventDefault()
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

$('.slick-arrow').on('click', function (e) {
  clearMiddleBoxes()
  addMiddleBoxes()
})

const el = document.querySelectorAll('.gallery__item')

function clearMiddleBoxes() {
  el.forEach(a => {
    a.querySelector('.middle-box').style.right = '';
    a.querySelector('.middle-box').style.left = '';
  })
}

function addMiddleBoxes() {
  const el = document.querySelectorAll('.gallery__item')



  el.forEach(a => {

    if (a.classList.contains('slick-active')) {
      console.log(a.previousSibling)
      a.previousSibling.querySelector('.middle-box').style.right = '10%';
      a.nextSibling.querySelector('.middle-box').style.left = '10%';
    }
  })
}
addMiddleBoxes()
