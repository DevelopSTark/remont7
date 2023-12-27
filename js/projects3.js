let linethreeLength = document.querySelector('.sliderthird_line')
let linesThree = Array.from(linethreeLength.querySelectorAll('.linethree')) 
linethreeIndex = 0; 
let thirdIndex = 1
showThirdSlides(thirdIndex);

function currentThirdSlide(n) {
    showThirdSlides(thirdIndex = n);
  }
  
  function showThirdSlides(n) {
    let thirdSlides = document.getElementsByClassName("sli_three")
    if (n > thirdSlides.length) {
      thirdIndex = 1;
      linethreeIndex = 1;
    }
    if (n < 1) {
        thirdIndex = thirdSlides.length;
    }
  
    for (let thirdSlide of thirdSlides) {
        thirdSlide.style.display = "none";
    }
    thirdSlides[thirdIndex - 1].style.display = "flex";

    linesThree.forEach((linesThree, linethreeIndex) => { 
      if(linethreeIndex === thirdIndex) { 
        linesThree.classList.add('active')   
      } 
      if(linethreeIndex !== thirdIndex) { 
        linesThree.classList.remove('active') 
      }   
    })
  }
  
  var timer = 0;
  makeTimer(); //Создаем интервал 
  function makeTimer(){
      clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
      timer = setInterval(function(){
        thirdIndex++;
        showThirdSlides(thirdIndex);
      },5000);
    } 