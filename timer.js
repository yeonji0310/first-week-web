


const startbtn= document.querySelector('#start');
const resettbtn= document.querySelector('#reset');

const minutes = document.getElementById("m_timer") *60
const seconds= document.getElementById("s_timer")
const startingtime = minutes + seconds


startingtime =0;

let Timerfunction =function(){
startingtime= stratingtime -1;
let minute = Math.floor(startingtime/60);
let second = startingtime % 60;


if(minute<10) minute='0'+minute;
if(second<10) second='0'+second;
let timenow = minute + ':' + second;

let timeshown = document.querySelector('#W_Timer h1');
timeshown.textContent = timenow;
}

let a;
startbtn.onclick =function(){

    let curState= document.querySelector('#start').textContent;
    if(curState === 'start'){
        document.querySelector('#start').textContent ='stop';
        a= setInterval(Timerfunction,1000);
} else{
    document.querySelector('#start').textContent ='start';
    clearInterval(a);
}
}

resettbtn.onclick= function () {
    timeElasped= 0;
    let timeshown = document.querySelector('#W_Timer h1');
    timeshown.textContent = '00:00';
}
