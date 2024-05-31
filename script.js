window.addEventListener("load", function(){
  // get the name of the user and store it in a variable
  const nameInput = document.getElementById("firstName");

  const todoForm = document.getElementById("create_todo");

  
  todoList = JSON.parse(localStorage.getItem('todoList')) || [];

  // check in the localstorage if there is a name already
  const userName = localStorage.getItem("user") ||"";

  nameInput.value = userName;

  nameInput.addEventListener("change", function(e) {
    
    localStorage.setItem("user", e.target.value);

  })

  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
 
   const userTodo={
   content: e.target.elements.content.value,
   category: e.target.elements.category.value,
   createdAt: new Date().getTime(),
   done: false,
   }
   
   /*if(!userTodo.content){
    alert("Field cannot be empty.please fill in a todo")
   } else{
     todoList.push(userTodo)
   }*/

   !userTodo.content ? alert("field cannot be empty.please fill in a todo") : todoList.push(userTodo)

   localStorage.setItem('todoList', JSON.stringify(todoList))

})

})