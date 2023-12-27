let repTitleOne = document.querySelector('.rep_title.one')
let repTitleTwo = document.querySelector('.rep_title.two')
let repTitleThree = document.querySelector('.rep_title.three')
let repairOne = document.querySelector('.repair.one')
let repairTwo = document.querySelector('.repair.two')
let repairThree = document.querySelector('.repair.three')

repairOne.classList.add('active')
repTitleOne.classList.add('active')

repTitleOne.addEventListener('click', () =>{ 
    repairOne.classList.add('active')
    repTitleOne.classList.add('active')

    repairTwo.classList.remove('active')
    repTitleTwo.classList.remove('active')

    repairThree.classList.remove('active')
    repTitleThree.classList.remove('active')
})

repTitleTwo.addEventListener('click', () =>{ 
    repairTwo.classList.add('active')
    repTitleTwo.classList.add('active')

    repairOne.classList.remove('active')
    repTitleOne.classList.remove('active')

    repairThree.classList.remove('active')
    repTitleThree.classList.remove('active')
})

repTitleThree.addEventListener('click', () =>{ 
    repairThree.classList.add('active')
    repTitleThree.classList.add('active')

    repairOne.classList.remove('active')
    repTitleOne.classList.remove('active')

    repairTwo.classList.remove('active')
    repTitleTwo.classList.remove('active')
})