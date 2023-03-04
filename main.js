const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const formEl = document.getElementById('consent-form') 


setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

formEl.addEventListener('submit', function(e){
    e.preventDefault()
    console.log('form submitted')
})