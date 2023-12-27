let whyUsMob = document.querySelector('.whyUs_mob')
    cardUsMob = document.querySelectorAll(".cardUs_mob")
    whyUsList = whyUsMob.querySelector('.whyUs-list')
    whyUsTrack = whyUsMob.querySelector('.whyUs-track')
    whyUsWidth = cardUsMob[0].offsetWidth
    whyUsIndex = 1;
    usInit = 0,
    usX1 = 0,
    usX2 = 0,
    usFinal = 0,
    usThreshold = whyUsWidth * .35,
    trfUsExp = /[-0-9.]+(?=px)/,
    cardUs = function() {
    whyUsTrack.style.transition = 'transform .10s';
    whyUsTrack.style.transform = `translate3d(-${whyUsIndex * whyUsWidth}px, 0px, 0px)`; }

usEvent = function() {
return event.type.search('touch') !== -1 ? event.touches[0] : event;
// p.s. event - аргумент по умолчанию в функции
},
// или es6
usEvent = () => event.type.search('touch') !== -1 ? event.touches[0] : event,

swipeOneus = function() {
let evt = usEvent();

// берем начальную позицию курсора по оси Х
usInit = usX1 = evt.clientX;

// убираем плавный переход, чтобы track двигался за курсором без задержки
// т.к. он будет включается в функции slide()
whyUsTrack.style.transition = '';

// и сразу начинаем отслеживать другие события на документе
document.addEventListener('touchmove', swipeActivUs);
document.addEventListener('touchend', swipeLastUs);
document.addEventListener('mousemove', swipeActivUs);
document.addEventListener('mouseup', swipeLastUs);
},
swipeActivUs = function() {
let evt = usEvent(),
  // для более красивой записи возьмем в переменную текущее свойство transform
  style = whyUsTrack.style.transform,
  // считываем трансформацию с помощью регулярного выражения и сразу превращаем в число
  transform = +style.match(trfUsExp)[0];

usX2 = usX1 - evt.clientX;
usX1 = evt.clientX;

whyUsTrack.style.transform = `translate3d(${transform - usX2}px, 0px, 0px)`;
// можно было бы использовать метод строк .replace():
// whyUsTrack.style.transform = style.replace(trfUsExp, match => match - usX2);
// но в дальнейшем нам нужна будет текущая трансформация в переменной
} 

swipeLastUs = function() {
  // финальная позиция курсора
  usFinal = usInit - usX1;

  document.removeEventListener('touchmove', swipeActivUs);
  document.removeEventListener('mousemove', swipeActivUs);
  document.removeEventListener('touchend', swipeLastUs);
  document.removeEventListener('mouseup', swipeLastUs);

  // убираем знак минус и сравниваем с порогом сдвига слайда
  if (Math.abs(usFinal) > usThreshold) {
    // если мы тянули вправо, то уменьшаем номер текущего слайда
    if (usInit < usX1) {
      whyUsIndex--;
    // если мы тянули влево, то увеличиваем номер текущего слайда
    } else if (usInit > usX1) {
      whyUsIndex++;
    }
  }

  // если курсор двигался, то запускаем функцию переключения слайдов
  if (usInit !== usX1) {
    showcardUsMob(whyUsIndex)

    if(whyUsIndex === 4,3,2,1){ 
      whyUsTrack.style.transform = 'translate3d(0px, 0px, 0px)'
    }
  }
};

whyUsTrack.style.transform = 'translate3d(0px, 0px, 0px)';

whyUsMob.addEventListener('touchstart', swipeOneus);


let whyUsCirclesLength = document.querySelector('.whyUs_circles')
let whyUsCirc = Array.from(whyUsCirclesLength.querySelectorAll('.whyUs_circ')) 
whyUsCircleIndex = 0; 
showcardUsMob(whyUsIndex)

function currentcardUs(n) {
  showcardUsMob(whyUsIndex = n);
}

function showcardUsMob(n) {
    if (n > cardUsMob.length) {
      whyUsIndex = 1; 
      whyUsCircleIndex = 1;
    }
    if (n < 1) {
        whyUsIndex = cardUsMob.length;
    }
 
    for (let cardUs of cardUsMob) {
        cardUs.style.display = "none";
    }
    cardUsMob[whyUsIndex - 1].style.display = "flex";

    whyUsCirc.forEach((whyUsCirc, whyUsCircleIndex) => { 
        if(whyUsCircleIndex === whyUsIndex) { 
           whyUsCirc.classList.add('active')   
        } 
        if(whyUsCircleIndex !== whyUsIndex) { 
           whyUsCirc.classList.remove('active') 
        }   
      })

  }