let userBtn = document.querySelector('.user')
let userTable = document.querySelector('.user_clickInform')
let placeBtn = document.querySelector('.admenu_btn')
let adresMenu = document.querySelector('.adres_menu')
let adresCon = document.querySelector('.admenu_btnCon')
let adresTxt = document.querySelector('.adres')
let burgerBg = document.querySelector('.burger_bg') 
let burgerMenu = document.querySelector('.menu')  
let menuBtn = document.querySelector('.menu span') 

burgerMenu.addEventListener('click', function(){ 
  menuBtn.classList.toggle('active')
})

menuBtn.addEventListener('click', (e) => {  
    e.preventDefault
    burgerBg.classList.add('active')  

    if(menuBtn.classList.contains('active')){ 
      burgerBg.classList.remove('active')
    }
})

adresCon.addEventListener('click', function(){
    placeBtn.classList.toggle('active'); 
  }) 

userBtn.addEventListener('click', () => { 
    userTable.classList.add('active')

    setTimeout(function(){ 
        userTable.classList.remove('active');
    }, 3500)
})

placeBtn.addEventListener('click', () => {
    adresMenu.classList.add('active')

    if(placeBtn.classList.contains('active')) { 
        adresMenu.classList.remove('active') }
})

document.getElementById('moscow').onclick = function() {
    adresTxt.textContent = this.value
    if(adresTxt.textContent == this.value){ 
      this.style.color = '#ED145B'
      document.getElementById('spb').style.color = '#000'
      document.getElementById('orel').style.color = '#000'
      document.getElementById('ekaterinburg').style.color = '#000'
      document.getElementById('vladimir').style.color = '#000'
      document.getElementById('kaluga').style.color = '#000'
      document.getElementById('tver').style.color = '#000'
      document.getElementById('ryazan').style.color = '#000'
    }
  };


document.getElementById('spb').onclick = function() {
    adresTxt.textContent = this.value
    if(adresTxt.textContent == this.value){ 
      this.style.color = '#ED145B'
      document.getElementById('moscow').style.color = '#000'
      document.getElementById('orel').style.color = '#000'
      document.getElementById('ekaterinburg').style.color = '#000'
      document.getElementById('vladimir').style.color = '#000'
      document.getElementById('kaluga').style.color = '#000'
      document.getElementById('tver').style.color = '#000'
      document.getElementById('ryazan').style.color = '#000'
    }
};


document.getElementById('orel').onclick = function() {
    adresTxt.textContent = this.value

    if(adresTxt.textContent == this.value){ 
      this.style.color = '#ED145B'
      document.getElementById('spb').style.color = '#000'
      document.getElementById('moscow').style.color = '#000'
      document.getElementById('ekaterinburg').style.color = '#000'
      document.getElementById('vladimir').style.color = '#000'
      document.getElementById('kaluga').style.color = '#000'
      document.getElementById('tver').style.color = '#000'
      document.getElementById('ryazan').style.color = '#000'
    }
  };


document.getElementById('ekaterinburg').onclick = function() {
    adresTxt.textContent = this.value

    if(adresTxt.textContent == this.value){ 
      this.style.color = '#ED145B'
      document.getElementById('spb').style.color = '#000'
      document.getElementById('orel').style.color = '#000'
      document.getElementById('moscow').style.color = '#000'
      document.getElementById('vladimir').style.color = '#000'
      document.getElementById('kaluga').style.color = '#000'
      document.getElementById('tver').style.color = '#000'
      document.getElementById('ryazan').style.color = '#000'
    }
  };


document.getElementById('vladimir').onclick = function() {
    adresTxt.textContent = this.value

    if(adresTxt.textContent == this.value){ 
      this.style.color = '#ED145B'
      document.getElementById('spb').style.color = '#000'
      document.getElementById('orel').style.color = '#000'
      document.getElementById('ekaterinburg').style.color = '#000'
      document.getElementById('moscow').style.color = '#000'
      document.getElementById('kaluga').style.color = '#000'
      document.getElementById('tver').style.color = '#000'
      document.getElementById('ryazan').style.color = '#000'
    }
  };


document.getElementById('kaluga').onclick = function() {
    adresTxt.textContent = this.value

    if(adresTxt.textContent == this.value){ 
      this.style.color = '#ED145B'
      document.getElementById('spb').style.color = '#000'
      document.getElementById('orel').style.color = '#000'
      document.getElementById('ekaterinburg').style.color = '#000'
      document.getElementById('vladimir').style.color = '#000'
      document.getElementById('moscow').style.color = '#000'
      document.getElementById('tver').style.color = '#000'
      document.getElementById('ryazan').style.color = '#000'
    }
  };


document.getElementById('tver').onclick = function() {
    adresTxt.textContent = this.value

    if(adresTxt.textContent == this.value){ 
      this.style.color = '#ED145B'
      document.getElementById('spb').style.color = '#000'
      document.getElementById('orel').style.color = '#000'
      document.getElementById('ekaterinburg').style.color = '#000'
      document.getElementById('vladimir').style.color = '#000'
      document.getElementById('kaluga').style.color = '#000'
      document.getElementById('moscow').style.color = '#000'
      document.getElementById('ryazan').style.color = '#000'
    }
  };


document.getElementById('ryazan').onclick = function() {
    adresTxt.textContent = this.value

    if(adresTxt.textContent == this.value){ 
      this.style.color = '#ED145B'
      document.getElementById('spb').style.color = '#000'
      document.getElementById('orel').style.color = '#000'
      document.getElementById('ekaterinburg').style.color = '#000'
      document.getElementById('vladimir').style.color = '#000'
      document.getElementById('kaluga').style.color = '#000'
      document.getElementById('tver').style.color = '#000'
      document.getElementById('moscow').style.color = '#000'
    }
  };
