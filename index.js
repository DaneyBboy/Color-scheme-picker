const colorStrip1 = document.getElementById('color-strip1')
const colorStrip2 = document.getElementById('color-strip2')
const colorStrip3 = document.getElementById('color-strip3')
const colorStrip4 = document.getElementById('color-strip4')
const colorStrip5 = document.getElementById('color-strip5')
const colorStrip6 = document.getElementById('color-strip6')
const colorPicker = document.getElementById('color-picker')
const formcolorPicker = document.getElementById('form-color-picker')
const btnColor = document.getElementById('btn-color')
const modeSelector = document.getElementById('mode-selector'); 

formcolorPicker.addEventListener('submit', function(event){    
    event.preventDefault()
    
    const selectColor = colorPicker.value.substring(1)
    const selectmode  = modeSelector.value
    
fetch(`https://www.thecolorapi.com/scheme?hex=${selectColor}&format=json&mode=${selectmode}&count=6`)
.then(res => res.json())
.then(data => 
{
    let colors = []
    for(let i=0; i <6 ;i++){    
    colors.push(data.colors[i].hex.value)        
 }
 
colorStrip1.style.backgroundColor = colors[0]
colorStrip2.style.backgroundColor = colors[1]
colorStrip3.style.backgroundColor = colors[2]
colorStrip4.style.backgroundColor = colors[3]
colorStrip5.style.backgroundColor = colors[4]
colorStrip6.style.backgroundColor = colors[5]
document.getElementById("color-text1").textContent = colors[0]
document.getElementById("color-text2").textContent = colors[1]
document.getElementById("color-text3").textContent = colors[2]
document.getElementById("color-text4").textContent = colors[3]
document.getElementById("color-text5").textContent = colors[4]
document.getElementById("color-text6").textContent = colors[5]
})

})

 
 