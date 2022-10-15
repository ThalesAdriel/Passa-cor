
const real_world_time = document.querySelector('h1');
change_color = document.querySelector('button');

setInterval(()=>{
    let date = new Date();
    hrs = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();

    if (hrs >= 24) {
        hrs = (hrs -24);
   
    }
    hrs = hrs < 10 ? "0" + hrs : hrs; 
    mins = mins < 10 ? "0" + mins : mins; 
    secs = secs < 10 ? "0" + secs : secs;
    
    real_world_time.innerHTML = `${hrs}:${mins}:${secs}`
})

function colors_gen() {
    const chars = '0123456789ABCDEF'
    let color = "#"

    for(let i = 0; i < 6; i++) {
        color +=  chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return color;
}


document.getElementById("color").addEventListener("click", () =>{
    let div_color = document.getElementById('control')
    div_color.style.backgroundColor=colors_gen()
} )


document.getElementById("color").addEventListener("click", () =>{
    let div_color = document.getElementById('color')
    div_color.style.backgroundColor=colors_gen()
} )

document.getElementById("color").addEventListener("click", () =>{
    let audio = new Audio('snd/click.wav');
    audio.play();
} )
