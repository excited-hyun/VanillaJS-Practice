const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
  title.classList.toggle(CLICKED_CLASS);  //이거 한 줄이 아래 모든 기능을 해줌
  /*하나의 인수만 있을 때: 클래스 값을 토글링한다. 즉, 클래스가 존재한다면 제거하고 false를 반환하며, 존재하지 않으면 클래스를 추가하고 true를 반환한다.
두번째 인수가 있을 때: 두번째 인수가 true로 평가되면 지정한 클래스 값을 추가하고 false로 평가되면 제거한다.*/
  /*
  const hasClass = title.classList.contains(CLICKED_CLASS); //value가 존재하는지 체크해서 boolean type 반환
  if(hasClass){ 
    title.classList.remove(CLICKED_CLASS);
  }
  else{
    title.classList.add(CLICKED_CLASS);
  }
  console.log(currentClass);*/
}

function init(){
  title.addEventListener("click", handleClick)
}
init();
