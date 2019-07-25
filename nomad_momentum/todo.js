//입력폼
const todoForm=document.querySelector(".js-todoForm");
todoInput=todoForm.querySelector("input");
const todoList=document.querySelector(".js-todos")
// 
//local storage에 할일을 저장할 키 
const TODOS_LS="todoList";


function handleSubmit(event){
event.preventDefault();
const currentValue=todoInput.value;
printTodo(currentValue);
todoInput.value="";


}

function addTodo(){
//폼에 submit 이벤트 리스너 추가
todoForm.addEventListener("submit",handleSubmit);

}
function printTodo(text){
    console.log(text);
    const toDo=document.querySelector("ol");
    //이제 생성해보자
    //출력해줄 요소들을 만들어냅니다 .
    const li =document.createElement("li");
    const delBt=document.createElement("button"); 
    const span=document.createElement("span");
    // 출력해줄 요소들에 내용을 설정해줍니다. 
    delBt.innerText="✖";
    span.innerText=text;
    //실제로 넣어줍니다 
    li.appendChild(span);
    li.appendChild(delBt);
    todoList.appendChild(li);
    
}


function showTodo(){
const todoItem=localStorage.getItem(TODOS_LS);
if(todoItem!==null){
}
}

function init(){
showTodo();
addTodo();
}

init();