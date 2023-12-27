let reviewsCon = document.querySelector('.reviews_con')
    review = document.querySelectorAll(".review")
    reviewList = reviewsCon.querySelector('.review-list')
    reviewTrack = reviewsCon.querySelector('.review-track')
    reviewWidth = review[0].offsetWidth
    reviewIndex = 1;
    revInit = 0,
    revX1 = 0,
    revX2 = 0,
    revFinal = 0,
    revThreshold = reviewWidth * .20,
    trfRevExp = /[-0-9.]+(?=px)/,
    rev = function() {
    reviewTrack.style.transition = 'transform .10s';
    reviewTrack.style.transform = `translate3d(-${reviewIndex * reviewWidth}px, 0px, 0px)`; }

revEvent = function() {
return event.type.search('touch') !== -1 ? event.touches[0] : event;
// p.s. event - аргумент по умолчанию в функции
},
// или es6
revEvent = () => event.type.search('touch') !== -1 ? event.touches[0] : event,

swipeRevOne = function() {
let evt = revEvent();

// берем начальную позицию курсора по оси Х
revInit = revX1 = evt.clientX;

// убираем плавный переход, чтобы track двигался за курсором без задержки
// т.к. он будет включается в функции slide()
reviewTrack.style.transition = '';

// и сразу начинаем отслеживать другие события на документе
document.addEventListener('touchmove', swipeRevActive);
document.addEventListener('touchend', swipeRevLast);
document.addEventListener('mousemove', swipeRevActive);
document.addEventListener('mouseup', swipeRevLast);
},
swipeRevActive = function() {
let evt = revEvent(),
  // для более красивой записи возьмем в переменную текущее свойство transform
  style = reviewTrack.style.transform,
  // считываем трансформацию с помощью регулярного выражения и сразу превращаем в число
  transform = +style.match(trfRevExp)[0];

revX2 = revX1 - evt.clientX;
revX1 = evt.clientX;

reviewTrack.style.transform = `translate3d(${transform - revX2}px, 0px, 0px)`;
// можно было бы использовать метод строк .replace():
// reviewTrack.style.transform = style.replace(trfRevExp, match => match - revX2);
// но в дальнейшем нам нужна будет текущая трансформация в переменной
} 

swipeRevLast = function() {
  // финальная позиция курсора
  revFinal = revInit - revX1;

  document.removeEventListener('touchmove', swipeRevActive);
  document.removeEventListener('mousemove', swipeRevActive);
  document.removeEventListener('touchend', swipeRevLast);
  document.removeEventListener('mouseup', swipeRevLast);

  // убираем знак минус и сравниваем с порогом сдвига слайда
  if (Math.abs(revFinal) > revThreshold) {
    // если мы тянули вправо, то уменьшаем номер текущего слайда
    if (revInit < revX1) {
      reviewIndex--;
    // если мы тянули влево, то увеличиваем номер текущего слайда
    } else if (revInit > revX1) {
      reviewIndex++;
    }
  }

  // если курсор двигался, то запускаем функцию переключения слайдов
  if (revInit !== revX1) {
    showReview(reviewIndex)

    if(reviewIndex === 4,3,2,1){ 
      reviewTrack.style.transform = 'translate3d(0px, 0px, 0px)'
    }
  }
};

reviewTrack.style.transform = 'translate3d(0px, 0px, 0px)';

reviewsCon.addEventListener('touchstart', swipeRevOne);

let reviewsLinesLength = document.querySelector('.review_lines')
let reviewLines = Array.from(reviewsLinesLength.querySelectorAll('.reviewLine')) 
reviewLinesIndex = 0;
showReview(reviewIndex)

function currentRev(n) {
  showReview(reviewIndex = n);
}

function showReview(n) {
    if (n > review.length) {
      reviewIndex = 1; 
      reviewLinesIndex = 1
    }
    if (n < 1) {
        reviewIndex = review.length;
    }
 
    for (let rev of review) {
        rev.style.display = "none";
    }
    review[reviewIndex - 1].style.display = "flex";

    reviewLines.forEach((reviewLines, reviewLinesIndex) => { 
        if(reviewLinesIndex === reviewIndex) { 
        reviewLines.classList.add('active')   
        } 
        if(reviewLinesIndex !== reviewIndex) { 
        reviewLines.classList.remove('active') 
        }   
      })
  }

    var timer = 0;
    makeTimer(); //Создаем интервал 
    function makeTimer(){

    if (document.documentElement.clientWidth > 750) {
    clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
    timer = setInterval(function(){
    reviewIndex++;
    showReview(reviewIndex);
    },7000);
    }}