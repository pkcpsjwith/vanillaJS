//첫번째 칸 


// 화면이 눌리면 저녁 클래스로 바뀌게하자 
//글을 선택해줌 
const title =document.querySelector("#title");
const title2 =document.querySelector("#title2");
const title3=document.querySelector("#title3");

//첫번째 박스는 if 문으로 class 이름 바꿔주기 

//두번째 박스는 classlist에 add remove 함으로 
//세번째 박스는 toggle로 class 바꿔주기 


//글의 클래스 
const morning="morning";
const night="night";

function change(num){ // 화면이 클릭이 되면 오는곳 
console.log(num);
    switch(num){
        case 1: // 마우스가 닿으면 바뀝니다. 
        console.log(num);

        const id=title.className;
        console.log("id");
        if( id==="btn"){
         title.className="btn_off";
         title.innerHTML="OFFfffffff~~~~~"
         console.log(title.outerHTML);
        }else{
            title.className="btn";
            title.innerHTML="Onnnnn~~~~!!!~"
            console.log(title.outerHTML);
        }

        break;
         case 2: //클릭을 하면 바뀝니다 
            const hasNight=title2.classList.contains(night);
            console.log(hasNight);
            if(!hasNight){ //밤되게 하기 
                title2.innerHTML="night";
                title2.classList.remove(morning);
                title2.classList.add(night);

                console.log(title2.outerHTML);
            
            }else { //아침 되게 하기 
                title2.innerHTML="morning";
                title2.classList.remove(night);
                title2.classList.add(morning);

                console.log(title2.classList);

            }
            
        break;
         case 3: // 
         title3.classList.toggle("special");
        break;
            
    }

   
  
}
title.addEventListener("mouseenter",function(){change(1)});
title2.addEventListener("click",function(){change(2)});
title3.addEventListener("click",function(){change(3)});


