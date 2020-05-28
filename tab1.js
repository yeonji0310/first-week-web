const selectClock = document.querySelector('#selectClock');
const selectStopwatch = document.querySelector('#selectStopwatch');
const selectTimer = document.querySelector('#selectTimer');

const W_Clock = document.querySelector('#W_Clock');
const W_Stopwatch = document.querySelector('#W_Stopwatch');
const W_Timer = document.querySelector('#W_Timer');

selectClock.onclick = function(){
    W_Clock.style.display = 'block';
    W_Stopwatch.style.display = 'none';
    W_Timer.style.display = 'none';
}
selectStopwatch.onclick = function(){
    W_Clock.style.display = 'none';
    W_Stopwatch.style.display = 'block';
    W_Timer.style.display = 'none';
}
selectTimer.onclick = function(){
    W_Clock.style.display = 'none';
    W_Stopwatch.style.display = 'none';
    W_Timer.style.display = 'block';
} 