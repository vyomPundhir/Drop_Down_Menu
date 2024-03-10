const drop1 = document.getElementById('drop-1')
const drop2 = document.getElementById('drop-2')
const drop3 = document.getElementById('drop-3')
const drop4 = document.getElementById('drop-4')
const dropdown1 = document.getElementById('dropdown-1')
const dropdown2 = document.getElementById('dropdown-2')
const dropdown3 = document.getElementById('dropdown-3')
const dropdown4 = document.getElementById('dropdown-4')


drop1.addEventListener('click', function(e){
  e.preventDefault()
  
  // const dropdown1 = document.getElementById('dropdown-1')
  dropdown1.innerHTML = `
  <div>
    <div>Personal Loan</div>
    <div>Business Loan</div>
    <div>Instant Loan</div>
    <div>Professional Loan</div>
    <div>Secure Loan</div>
  </div>`
  dropdown2.innerHTML = ``
  dropdown3.innerHTML = ``
  dropdown4.innerHTML = ``
})

drop2.addEventListener('click', function(e){
  e.preventDefault()
  
  // const dropdown2 = document.getElementById('dropdown-2')
  dropdown2.innerHTML = `
  <div>
    <div>Health Insurance</div>
    <div>Life Insurance</div>
    <div>Term Insurance</div>
  </div>`
  dropdown1.innerHTML = ``
  dropdown3.innerHTML = ``
  dropdown4.innerHTML = ``
})

drop3.addEventListener('click', function(e){
  e.preventDefault()
  
  // const dropdown3 = document.getElementById('dropdown-3')
  dropdown3.innerHTML = `
  <div>
    <div>HDFC Bank Credit Card</div>
    <div>IDFC Bank Credit Card</div>
  </div>`
  dropdown1.innerHTML = ``
  dropdown2.innerHTML = ``
  dropdown4.innerHTML = ``
})

drop4.addEventListener('click', function(e){
  e.preventDefault()
  
  // const dropdown4 = document.getElementById('dropdown-4')
  dropdown4.innerHTML = `
  <div>
    <div>Gallery</div>
    <div>Blogs</div>
    <div>News</div>
    <div>EMI Calculator</div>
  </div>`
  dropdown1.innerHTML = ``
  dropdown2.innerHTML = ``
  dropdown3.innerHTML = ``
})