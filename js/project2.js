let linetwoLength = document.querySelector('.slidersecond_line')
let linesTwo = Array.from(linetwoLength.querySelectorAll('.linetwo')) 
linetwoIndex = 0; 
let secondIndex = 1
showSecondSlides(secondIndex);

function currentSecondSlide(n) {
    showSecondSlides(secondIndex = n);
  }
  
  function showSecondSlides(n) {
    let secondSlides = document.getElementsByClassName("sli_two")
    if (n > secondSlides.length) {
      secondIndex = 1;
      linetwoIndex = 1;
    }
    if (n < 1) {
      secondIndex = secondSlides.length;
    }
  
    for (let secondSlide of secondSlides) {
      secondSlide.style.display = "none";
    }
    secondSlides[secondIndex - 1].style.display = "flex";

    linesTwo.forEach((linesTwo, linetwoIndex) => { 
      if(linetwoIndex === sliderIndex) { 
        linesTwo.classList.add('active')   
      } 
      if(linetwoIndex !== sliderIndex) { 
        linesTwo.classList.remove('active') 
      }   
    })
  }
  
  var timer = 0;
  makeTimer(); //Создаем интервал 
  function makeTimer(){
      clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
      timer = setInterval(function(){
        secondIndex++;
        showSecondSlides(secondIndex);
      },5000);
    } 