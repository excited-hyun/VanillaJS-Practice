const title = document.querySelector("#title");

const BASE_COLOR = "rgb(0, 206, 201)";
const OTHER_COLOR = "rgb(108, 92, 231)";

function handleClick(){
  const currentColor = title.style.color;
  console.log(currentColor); 
  if(currentColor === BASE_COLOR){
    title.style.color = OTHER_COLOR;
  }
  else{
    title.style.color = BASE_COLOR
  }
  //title.style.color = 'blue';
}

function init(){
  title.style.color = BASE_COLOR;
  //title.addEventListener("click", handleClick);   //클릭할 때마다 색 변경
  title.addEventListener("mouseenter", handleClick); // 마우스 in할 때마다 색 변경
}
init();

function handleOffLine(){
  console.log("OFFLINE");
}

function handleOnLine(){
  console.log("Welcome back!");
}

window.addEventListener("offline", handleOffLine);    //인터넷 연결X일 때
window.addEventListener("online", handleOnLine);    //인터넷 연결될 때
  //handleResize(): 바로 호출 / handleResize: 필요할 때(윈도우 사이즈 변경할 때) 호출
