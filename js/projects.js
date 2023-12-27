let lineLength = document.querySelector('.sliderfirst_line')
let lines = Array.from(lineLength.querySelectorAll('.line')) 
lineIndex = 0; 
let sliderIndex = 1
showSliderSlides(sliderIndex);

function currentSliderSlide(n) {
  showSliderSlides(sliderIndex = n);
}

function showSliderSlides(n) {
    let sliderSlides = document.getElementsByClassName("sli_one")
    if (n > sliderSlides.length) {
      sliderIndex = 1;
      lineIndex = 1;
    }
    if (n < 1) {
      sliderIndex = sliderSlides.length;
    }
 
    for (let sliderSlide of sliderSlides) {
      sliderSlide.style.display = "none";
    }
    sliderSlides[sliderIndex - 1].style.display = "flex";

    lines.forEach((lines, lineIndex) => { 
      if(lineIndex === sliderIndex) { 
        lines.classList.add('active')   
      } 
      if(lineIndex !== sliderIndex) { 
        lines.classList.remove('active') 
      }   
    })
  }

var timer = 0;
makeTimer(); //Создаем интервал 
function makeTimer(){
    clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
    timer = setInterval(function(){
      sliderIndex++;
      showSliderSlides(sliderIndex);
    },5000);
  } 