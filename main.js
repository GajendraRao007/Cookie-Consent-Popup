const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const formEl = document.getElementById('consent-form') 
const txt = document.getElementById('modal-text')

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
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>`
})

