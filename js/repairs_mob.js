let repairCon = document.querySelector('.repairs_mob')
    repairs = document.querySelectorAll(".repair_mob")
    repairList = repairCon.querySelector('.repair-list')
    repairTrack = repairCon.querySelector('.repair-track')
    repairWidth = repairs[0].offsetWidth
    repairIndex = 1;
    repInit = 0,
    repX1 = 0,
    repX2 = 0,
    repFinal = 0,
    repThreshold = repairWidth * .35,
    trfRepExp = /[-0-9.]+(?=px)/,
    repair = function() {
    repairTrack.style.transition = 'transform .10s';
    repairTrack.style.transform = `translate3d(-${repairIndex * repairWidth}px, 0px, 0px)`; }

repEvent = function() {
return event.type.search('touch') !== -1 ? event.touches[0] : event;
// p.s. event - аргумент по умолчанию в функции
},
// или es6
repEvent = () => event.type.search('touch') !== -1 ? event.touches[0] : event,

repStart = function() {
let evt = repEvent();

// берем начальную позицию курсора по оси Х
repInit = repX1 = evt.clientX;

// убираем плавный переход, чтобы track двигался за курсором без задержки
// т.к. он будет включается в функции slide()
repairTrack.style.transition = '';

// и сразу начинаем отслеживать другие события на документе
document.addEventListener('touchmove', repAction);
document.addEventListener('touchend', repEnd);
document.addEventListener('mousemove', repAction);
document.addEventListener('mouseup', repEnd);
},
repAction = function() {
let evt = repEvent(),
  // для более красивой записи возьмем в переменную текущее свойство transform
  style = repairTrack.style.transform,
  // считываем трансформацию с помощью регулярного выражения и сразу превращаем в число
  transform = +style.match(trfRepExp)[0];

repX2 = repX1 - evt.clientX;
repX1 = evt.clientX;

repairTrack.style.transform = `translate3d(${transform - repX2}px, 0px, 0px)`;
// можно было бы использовать метод строк .replace():
// repairTrack.style.transform = style.replace(trfRepExp, match => match - repX2);
// но в дальнейшем нам нужна будет текущая трансформация в переменной
} 

repEnd = function() {
  // финальная позиция курсора
  repFinal = repInit - repX1;

  document.removeEventListener('touchmove', repAction);
  document.removeEventListener('mousemove', repAction);
  document.removeEventListener('touchend', repEnd);
  document.removeEventListener('mouseup', repEnd);

  // убираем знак минус и сравниваем с порогом сдвига слайда
  if (Math.abs(repFinal) > repThreshold) {
    // если мы тянули вправо, то уменьшаем номер текущего слайда
    if (repInit < repX1) {
      repairIndex--;
    // если мы тянули влево, то увеличиваем номер текущего слайда
    } else if (repInit > repX1) {
      repairIndex++;
    }
  }

  // если курсор двигался, то запускаем функцию переключения слайдов
  if (repInit !== repX1) {
    showrepairs(repairIndex)

    if(repairIndex === 4,3,2,1){ 
      repairTrack.style.transform = 'translate3d(0px, 0px, 0px)'
    }
  }
};

repairTrack.style.transform = 'translate3d(0px, 0px, 0px)';

repairCon.addEventListener('touchstart', repStart);

let repTitleLength = document.querySelector('.repairs_titleMob')
let repTitles = Array.from(repTitleLength.querySelectorAll('.rep_titleMob')) 
repTitleIndex = 0; 
showrepairs(repairIndex);

function currentRepair(n) {
  showrepairs(repairIndex = n);
}

function showrepairs(n) {
    if (n > repairs.length) {
      repairIndex = 1;
      repTitleIndex = 1; 
    }
    if (n < 1) {
        repairIndex = repairs.length;
    }
 
    for (let repair of repairs) {
        repair.style.display = "none";
    }
    repairs[repairIndex - 1].style.display = "flex";
    

    repTitles.forEach((repTitles, repTitleIndex) => { 
        if(repTitleIndex === repairIndex) { 
          repTitles.classList.add('active')   
        } 
        if(repTitleIndex !== repairIndex) { 
          repTitles.classList.remove('active') 
        }   
      })
  }