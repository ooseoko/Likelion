const input = document.querySelector(".app-insert input");
const toDos = document.querySelector(".app-list");

// Add task
input.addEventListener(
  // input 요소에 이벤트 리스너 추가
  "keyup", // 키보드 입력
  function (event) {
    // 이벤트 리스너
    if (event.keyCode === 13) {
      // 엔터 입력
      if (input.value !== "") {
        // 입력값이 있을 때만
        addTask(input.value); // 입력값 추가
        input.value = ""; // 입력값 초기화
      }
    }
  },
  false // 이벤트 버블링 방지
);

toDos.addEventListener(
  // toDos 요소에 이벤트 리스너 추가
  "click", // 마우스 클릭
  function (event) {
    if (event.target.classList.contains("remove-task")) {
      // remove-task 클래스를 가지고 있을 때
      removeTask(event.target.parentNode); // 부모 노드 삭제

      // Complete Task
    } else if (event.target.classList.contains("task")) {
      // task 클래스를 가지고 있을 때
      completeTask(event.target); // task 클래스 토글
    }
  },
  false // 이벤트 버블링 방지
);

function addTask(task) {
  // task 추가
  var newTask = document.createElement("li"); // li 요소 생성
  newTask.setAttribute("class", "task"); // li 요소에 class 속성 추가
  newTask.innerHTML =
    task + '<a href="javascript:;" class="remove-task">remove</a>'; // li 요소에 내용 추가

  var list = document.querySelector(".app-list ul"); // ul 요소 선택
  list.appendChild(newTask); // ul 요소에 li 요소 추가
}

function removeTask(task) {
  // task 삭제
  task.style.opacity = 0; // 투명도 0으로 설정
  setTimeout(function () {
    // 0.4초 후에
    task.remove(); // task 삭제
  }, 400);
}

function completeTask(task) {
  // task 완료
  task.classList.toggle("task-complete"); // task-complete 클래스 토글
}
