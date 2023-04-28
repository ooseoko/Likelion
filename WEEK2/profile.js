const input = document.querySelector(".app-insert input"); // 입력
const toDos = document.querySelector(".app-list"); // 만들어지는 박스

input.addEventListener(
  "keyup", // 키보드 입력
  function (event) {
    if (event.keyCode === 13) {
      // 엔터키
      if (input.value !== "") {
        // 빈 칸이 아닌 경우
        addTask(input.value); // 값 추가
        input.value = "";
      }
    }
  },
  false
);

function addTask(task) {
  // task추가
  var newTask = document.createElement("li"); // li 요소 생성
  newTask.setAttribute("class", "task"); // li 요소에 class 속성 추가
  newTask.innerHTML =
    task + '<a href="javascript:;" class="remove-task">remove</a>'; // li 요소에 내용 추가

  var list = document.querySelector(".app-list ul"); // ul 요소 선택
  list.appendChild(newTask); // ul 요소에 li 요소 추가
}
