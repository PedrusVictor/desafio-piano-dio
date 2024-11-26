const pianoKeys= document.querySelectorAll(".piano-keys .key")


let audio= new Audio("./src/tunes/a.wav")
let mapedKeys=[]

const volumeSlide = document.querySelector(".volume-slider input")

const showKey = document.querySelector(".keys-check input")
playTune =(key)=>{

    audio.src=`./src/tunes/${key}.wav`
    audio.play();
    const clickedKey=document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(()=>{clickedKey.classList.remove("active")},150)

}

pianoKeys.forEach(key=>{
    key.addEventListener("click",()=>playTune(key.dataset.key))
    mapedKeys.push(key.dataset.key)
})

document.addEventListener("keydown",(e)=>{
    if(mapedKeys.includes(e.key))
    playTune(e.key)
})
const handleVolume=(e)=>{
    audio.volume= e.target.value
}

const showHiddenKeys=(e)=>{


   /* pianoKeys.forEach(keys=>{
        keys.children[0].textContent = e.target.checked?keys.dataset.key:""
        
    })*/

        pianoKeys.forEach((key)=>{
            key.classList.toggle("hide")
        })
}
volumeSlide.addEventListener("input",handleVolume)

showKey.addEventListener("input",showHiddenKeys)