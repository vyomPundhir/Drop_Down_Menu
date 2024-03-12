const drop1 = document.getElementById('drop-1')
const drop2 = document.getElementById('drop-2')
const drop3 = document.getElementById('drop-3')
const drop4 = document.getElementById('drop-4')

const loans = document.getElementById('loans');
const insurance = document.getElementById('insurance');
const creditCards = document.getElementById('credit-cards');
const resources = document.getElementById('resources');

const personal = document.getElementById('personal')
const business = document.getElementById('business')
const instant = document.getElementById('instant')
const professional = document.getElementById('professional')
const secure = document.getElementById('secure')

const personalLoan = document.getElementById('personalLoan')
const businessLoan = document.getElementById('businessLoan')
const instantLoan = document.getElementById('instantLoan')
const professionalLoan = document.getElementById('professionalLoan')
const secureLoan = document.getElementById('secureLoan')


drop1.addEventListener('click', function(e){
  e.preventDefault()
  Dropdown1(loans)
})

drop2.addEventListener('click', function(e){
  e.preventDefault()
  Dropdown1(insurance)
})

drop3.addEventListener('click', function(e){
  e.preventDefault()
  Dropdown1(creditCards)
})

drop4.addEventListener('click', function(e){
  e.preventDefault()
  Dropdown1(resources)
})

personal.addEventListener('click', function(e){
  e.preventDefault()
  Dropdown2(personalLoan)
})

business.addEventListener('click', function(e){
  e.preventDefault()
  Dropdown2(businessLoan)
})

instant.addEventListener('click', function(e){
  e.preventDefault()
  Dropdown2(instantLoan)
})

professional.addEventListener('click', function(e){
  e.preventDefault()
  Dropdown2(professionalLoan)
})

secure.addEventListener('click', function(e){
  e.preventDefault()
  Dropdown2(secureLoan)
})

function Dropdown1(dropdown) {
  if (dropdown.style.display === 'none'){
    hideAllDropdowns1();
    dropdown.style.display='block';
  }
  else {
    dropdown.style.display= 'none';
  }
}

function hideAllDropdowns1 (){
  const allDropdowns = [loans, insurance, creditCards, resources];
  allDropdowns.forEach(function (dropdown){
    dropdown.style.display = 'none';
  })
}

function Dropdown2(dropdown) {
  if (dropdown.style.display === 'none'){
    hideAllDropdowns2();
    dropdown.style.display='block';
  }
  else {
    dropdown.style.display= 'none';
  }
}

function hideAllDropdowns2 (){
  const allDropdowns = [personalLoan, businessLoan, instantLoan, professionalLoan, secureLoan];
  allDropdowns.forEach(function (dropdown){
    dropdown.style.display = 'none';
  })
}