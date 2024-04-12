// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random() * 16)]
    };
    return color;
}

let interval;
const startChangingColor = function() {
    if (!interval)
    interval = setInterval(changBgColor,1000)
    console.log('start')

    function changBgColor(){
    document.body.style.backgroundColor = randomColor()
    }
};

const stopChangingColor = function() {
    clearInterval(interval)
    interval = null;
    console.log('stop')
};


document.querySelector('#start').addEventListener
('click', startChangingColor)

document.querySelector('#stop').addEventListener
('click', stopChangingColor)
