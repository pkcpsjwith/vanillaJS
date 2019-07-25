 form=document.querySelector(".js-form"),
input=form.querySelector("input");

greeting=document.querySelector(".js-greetings");
//쿼리 셀렉터는 클래스명에 따른 엘리먼트를 가지고 온다 
const USER_LS="currentUser";
SHOWING_CN="showing";
function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    //이벤트 default 동작 막기  // 엔터를 눌러도 입력값이 없어지지않는다.
    event.preventDefault();
    const currentValue=input.value;
    console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit); 

}
function paintGreeting(text){
form.classList.remove(SHOWING_CN);
greeting.classList.add(SHOWING_CN);
greeting.innerText=`Hello ${text}`;
}
function loadName(){
    const currentUser=localStorage.getItem(USER_LS); //get "currenUser"
    if(currentUser===null){//유저가 없는경우
        askForName();
    }else{ //유저가 있는 경우
    paintGreeting(currentUser);
    }
}

function init(){
    loadName(); 
}

init();


//locally storage: 자바스크립트에서의 정보들을 저장하는곳 