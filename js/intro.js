let slider = document.querySelector('.promotions_mob')
    slides = document.querySelectorAll(".slide")
    sliderList = slider.querySelector('.slider-list')
    sliderTrack = slider.querySelector('.slider-track')
    slideWidth = slides[0].offsetWidth
    slideIndex = 1;
    posInit = 0,
    posX1 = 0,
    posX2 = 0,
    posFinal = 0,
    posThreshold = slideWidth * .20,
    trfRegExp = /[-0-9.]+(?=px)/,
    slide = function() {
    sliderTrack.style.transition = 'transform .10s';
    sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`; }

getEvent = function() {
return event.type.search('touch') !== -1 ? event.touches[0] : event;
// p.s. event - аргумент по умолчанию в функции
},
// или es6
getEvent = () => event.type.search('touch') !== -1 ? event.touches[0] : event,

swipeStart = function() {
let evt = getEvent();

// берем начальную позицию курсора по оси Х
posInit = posX1 = evt.clientX;

// убираем плавный переход, чтобы track двигался за курсором без задержки
// т.к. он будет включается в функции slide()
sliderTrack.style.transition = '';

// и сразу начинаем отслеживать другие события на документе
document.addEventListener('touchmove', swipeAction);
document.addEventListener('touchend', swipeEnd);
document.addEventListener('mousemove', swipeAction);
document.addEventListener('mouseup', swipeEnd);
},
swipeAction = function() {
let evt = getEvent(),
  // для более красивой записи возьмем в переменную текущее свойство transform
  style = sliderTrack.style.transform,
  // считываем трансформацию с помощью регулярного выражения и сразу превращаем в число
  transform = +style.match(trfRegExp)[0];

posX2 = posX1 - evt.clientX;
posX1 = evt.clientX;

sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
// можно было бы использовать метод строк .replace():
// sliderTrack.style.transform = style.replace(trfRegExp, match => match - posX2);
// но в дальнейшем нам нужна будет текущая трансформация в переменной
} 

swipeEnd = function() {
  // финальная позиция курсора
  posFinal = posInit - posX1;

  document.removeEventListener('touchmove', swipeAction);
  document.removeEventListener('mousemove', swipeAction);
  document.removeEventListener('touchend', swipeEnd);
  document.removeEventListener('mouseup', swipeEnd);

  // убираем знак минус и сравниваем с порогом сдвига слайда
  if (Math.abs(posFinal) > posThreshold) {
    // если мы тянули вправо, то уменьшаем номер текущего слайда
    if (posInit < posX1) {
      slideIndex--;
    // если мы тянули влево, то увеличиваем номер текущего слайда
    } else if (posInit > posX1) {
      slideIndex++;
    }
  }

  // если курсор двигался, то запускаем функцию переключения слайдов
  if (posInit !== posX1) {
    showSlides(slideIndex)

    if(slideIndex === 4,3,2,1){ 
      sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)'
    }
  }
};

sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';

slider.addEventListener('touchstart', swipeStart);

let circlesLength = document.querySelector('.circles_length')
let circles = Array.from(circlesLength.querySelectorAll('.circle')) 
circleIndex = 0; 
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
      circleIndex = 1; 
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
 
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";

    circles.forEach((circles, circleIndex) => { 
      if(circleIndex === slideIndex) { 
        circles.classList.add('active')   
      } 
      if(circleIndex !== slideIndex) { 
        circles.classList.remove('active') 
      }   
    })
  }

var timer = 0;
makeTimer(); //Создаем интервал 
function makeTimer(){
    clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
    timer = setInterval(function(){
      slideIndex++;
      showSlides(slideIndex);
    },15000);
  }

