let mils = 0;
let sec = 0;
let min = 0;
let interval;

function count() {
    mils++
    if(mils == 100) {
        sec++;
        mils = 0;
        if(sec === 60){
            min++;
            sec= 0;
        }
    }
    
    let milsV = mils < 10 ? `0${mils}` : mils ;
    let secV =  sec < 10 ? `0${sec}` : sec;
    let minV = min < 10 ? `0${min}` : min;

    document.querySelector('.timer').innerText = `${minV}:${secV}:${milsV}` ;
}
function start() {
    interval = setInterval(count, 10)
    document.querySelector('.start').style.display = 'none';
}
function pause() {
    clearInterval(interval);
    document.querySelector('.start').style.display = 'inline-flex';
}
function stop() {
    clearInterval(interval)
    mils = 0;
    sec = 0;
    min = 0;
    document.querySelector('.timer').innerText = '00:00:00';
    document.querySelector('.start').style.display = 'inline-flex';
}