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
    <p id="upload-text">
        Uploading your data to the dark web...
    </p>
</div>`
setTimeout(function(){
    document.getElementById('upload-text').innerText = `Making the sale...`
}, 1500) 

setTimeout(function(){
    document.getElementById('modal-inner').innerHTML = `
    <h2>Thanks you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="pirate.gif">
    </div>
` 
}, 3000)

const formData = new FormData(formEl)
    console.log(formEl);
})


