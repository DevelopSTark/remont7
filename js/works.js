let worksMob = document.querySelector('.works_mob')
    houses = document.querySelectorAll(".house_mob")
    worksList = worksMob.querySelector('.work-list')
    worksTrack = worksMob.querySelector('.work-track')
    workWidth = houses[0].offsetWidth
    workIndex = 1;
    hosInit = 0,
    hosX1 = 0,
    hosX2 = 0,
    hosFinal = 0,
    hosThreshold = workWidth * .35,
    trfHosExp = /[-0-9.]+(?=px)/,
    house = function() {
    worksTrack.style.transition = 'transform .10s';
    worksTrack.style.transform = `translate3d(-${workIndex * workWidth}px, 0px, 0px)`; }

goEvent = function() {
return event.type.search('touch') !== -1 ? event.touches[0] : event;
// p.s. event - аргумент по умолчанию в функции
},
// или es6
goEvent = () => event.type.search('touch') !== -1 ? event.touches[0] : event,

swipeFirst = function() {
let evt = goEvent();

// берем начальную позицию курсора по оси Х
hosInit = hosX1 = evt.clientX;

// убираем плавный переход, чтобы track двигался за курсором без задержки
// т.к. он будет включается в функции slide()
worksTrack.style.transition = '';

// и сразу начинаем отслеживать другие события на документе
document.addEventListener('touchmove', swipeActive);
document.addEventListener('touchend', swipeLast);
document.addEventListener('mousemove', swipeActive);
document.addEventListener('mouseup', swipeLast);
},
swipeActive = function() {
let evt = goEvent(),
  // для более красивой записи возьмем в переменную текущее свойство transform
  style = worksTrack.style.transform,
  // считываем трансформацию с помощью регулярного выражения и сразу превращаем в число
  transform = +style.match(trfHosExp)[0];

hosX2 = hosX1 - evt.clientX;
hosX1 = evt.clientX;

worksTrack.style.transform = `translate3d(${transform - hosX2}px, 0px, 0px)`;
// можно было бы использовать метод строк .replace():
// worksTrack.style.transform = style.replace(trfHosExp, match => match - hosX2);
// но в дальнейшем нам нужна будет текущая трансформация в переменной
} 

swipeLast = function() {
  // финальная позиция курсора
  hosFinal = hosInit - hosX1;

  document.removeEventListener('touchmove', swipeActive);
  document.removeEventListener('mousemove', swipeActive);
  document.removeEventListener('touchend', swipeLast);
  document.removeEventListener('mouseup', swipeLast);

  // убираем знак минус и сравниваем с порогом сдвига слайда
  if (Math.abs(hosFinal) > hosThreshold) {
    // если мы тянули вправо, то уменьшаем номер текущего слайда
    if (hosInit < hosX1) {
      workIndex--;
    // если мы тянули влево, то увеличиваем номер текущего слайда
    } else if (hosInit > hosX1) {
      workIndex++;
    }
  }

  // если курсор двигался, то запускаем функцию переключения слайдов
  if (hosInit !== hosX1) {
    showHouses(workIndex)

    if(workIndex === 4,3,2,1){ 
      worksTrack.style.transform = 'translate3d(0px, 0px, 0px)'
    }
  }
};

worksTrack.style.transform = 'translate3d(0px, 0px, 0px)';

worksMob.addEventListener('touchstart', swipeFirst);

let workLinesLength = document.querySelector('.work_lines')
let workLines = Array.from(workLinesLength.querySelectorAll('.workLine')) 
workLinesIndex = 0;
showHouses(workIndex)

function currentHouse(n) {
  showHouses(workIndex = n);
}

function showHouses(n) {
    if (n > houses.length) {
      workIndex = 1; 
      workLinesIndex = 1
    }
    if (n < 1) {
        workIndex = houses.length;
    }
 
    for (let house of houses) {
        house.style.display = "none";
    }
    houses[workIndex - 1].style.display = "flex";

    workLines.forEach((workLines, workLinesIndex) => { 
      if(workLinesIndex === workIndex) { 
        workLines.classList.add('active')   
      } 
      if(workLinesIndex !== workIndex) { 
        workLines.classList.remove('active') 
      }   
    })
  }