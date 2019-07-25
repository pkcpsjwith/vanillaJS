const clockContainer=document.querySelector(".js-clock"),
clockTitle=clockContainer.querySelector("h1");


function getTime() {
    //시간을 불러오기
    const date=new Date();
    const hours=date.getHours();
    const minutes=date.getMinutes();
    const seconds=date.getSeconds();

    //sexy~ 삼항연산자 
    clockTitle.innerText=`${hours<10 ? `0${hours}`:hours}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`;
    
}

function init(){
    getTime();
    //반복해서 불러오는것 
    setInterval(getTime,1000);
}
init();
