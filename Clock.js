let timer = document.querySelector(".timer");
let monthyearday = document.querySelector(".ymd");

function setTime(){
    let now = new Date();
   let hours = now.getHours();
   let minutes= now.getMinutes();
   let seconds= now.getSeconds();
   let miliseconds = now.getMilliseconds();
   let year = now.getFullYear();
   let month= now.getMonth();
   let day = now.getDate();
   hours = hours < 10 ? "0" + hours : hours;
   minutes = minutes < 10 ? "0" + minutes : minutes;
   seconds = seconds < 10 ? "0" + seconds : seconds;
   miliseconds = miliseconds < 100 ? "0" + miliseconds : miliseconds;
  let timestring= `${hours} : ${minutes} : ${seconds} : ${miliseconds}`;
  timer.textContent=timestring;
  let datestring= ` ${day}/${month}/${year}`;
  monthyearday.textContent= datestring;
  
 
}

setInterval(()=>{
    setTime();
},1)