const startbtn= document.querySelector('#start');
const resettbtn= document.querySelector('#reset');

let timeElasped =0;

let stopwatchfunction =function(){
timeElasped= timeElasped +1;
let minute =  Math.floor(timeElasped/60);
let second= timeElasped % 60;


if(minute<10) minute='0'+minute;
if(second<10) second='0'+second;
let timenow = minute + ':' + second;

let timeshown = document.querySelector('#W_Stopwatch h1');
timeshown.textContent = timenow;
}

let a;
startbtn.onclick =function(){

    let curState= document.querySelector('#start').textContent;
    if(curState === 'start'){
        document.querySelector('#start').textContent ='stop';
        a= setInterval(stopwatchfunction,1000);
} else{
    document.querySelector('#start').textContent ='start';
    clearInterval(a);
}
}

resettbtn.onclick= function () {
    timeElasped= 0;
    let timeshown = document.querySelector('#W_Stopwatch h1');
    timeshown.textContent = '00:00';
}
