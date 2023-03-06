const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const formEl = document.getElementById('consent-form') 
const txt = document.getElementById('modal-text')
const declineBtn =document.getElementById('decline-btn')
const modalChoiceBtns =document.getElementById('modal-choice-btns')


setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

formEl.addEventListener('submit', function(e){
    e.preventDefault()
    txt.innerHTML = `<div class="modal-inner-loading">
    <img src="loading.svg" class="loading">
    <p id="upload-text">
        Uploading your data to the dark web...
    </p>
</div>`
setTimeout(function(){
    document.getElementById('upload-text').innerText = `Making the sale...`
}, 1500) 

setTimeout(function(){
    document.getElementById('modal-inner').innerHTML = `
    <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="pirate.gif">
    </div>
` 
modalCloseBtn.disabled = false
}, 3000)

const formElData = new FormData(formEl)
    const fullName = formElData.get('fullName') 
})

declineBtn.addEventListener('mouseenter', function(){
    modalChoiceBtns.classList.toggle('modal-choice-btns-reverse')
})