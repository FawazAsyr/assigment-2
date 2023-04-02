const myForm = document.getElementById('my-form')
const fname = document.getElementById('fname-text')
const fflote = document.getElementById('fflote-text')
const favailability = document.getElementById('favailability-text')
const fusia = document.getElementById('fusia-number')
const flokasi = document.getElementById('flokasi-text')
const fexperience = document.getElementById('fexperience-text')
const femail = document.getElementById('femail-email')

const fsubmit = document.getElementById('myButton')
const fbox = document.getElementById('myBox')
// const nanti buat hiden
console.log("hai")

let isLowerBracketShow = true

myForm.addEventListener('submit',(event) =>{
    event.preventDefault()

    const currentName = myForm.elements.fname.value
    const currentFlote = myForm.elements.fflote.value
    const currentAvariability = myForm.elements.favailability.value
    const currentUsia = myForm.elements.fusia.value
    const currentLokasi = myForm.elements.flokasi.value
    const currentExperience = myForm.elements.fexperience.value
    const currentEmail = myForm.elements.femail.value

    console.log(currentName,currentFlote)
    fname.innerHTML = currentName
    fflote.innerHTML = currentFlote
    favailability.innerHTML = currentAvariability
    fusia.innerHTML = currentUsia
    flokasi.innerHTML = currentLokasi
    fexperience.innerHTML = currentExperience
    femail.innerHTML = currentEmail
    console.log("klo disni masuk?")
    toggeleBox()
})

function toggeleBox(){
    if (isLowerBracketShow) {
        isLowerBracketShow = false
        fbox.classList.remove('hide')
        console.log("proses 1")
    }else{
        isLowerBracketShow = true
        fbox.classList.add('hide')
    }
}

    fsubmit.addEventListener('click',(event)=>{
    event.preventDefault()
    toggeleBox()
    console.log("proses 2")
})
