const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

  const TODOS_LS = "toDos";

function paintToDo (text) {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(deleteButton);
  toDoList.appendChild(li);
}



  // functions
   function handleSubmit(event){
       event.preventDefault();
       const currentvalue = toDoInput.value;
       paintToDo(currentvalue);
       toDoInput.value=""
    }

  function loadToDos () {
      const toDos = localStorage.getItem(TODOS_LS);
      if(toDos !== null) {
      }
  }
 
  function init () {
     loadToDos();
     toDoForm.addEventListener("submit", handleSubmit);
  }

  init();


  inbox = 10;
  inbox--
  console.log(inbox);