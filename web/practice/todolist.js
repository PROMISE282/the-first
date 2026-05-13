let todos = ["밥 먹기", "양치하기", "씻기"]

function renderTodo(todo){
    const li = document.createElement("li");
    li.textContent = todo;
    li.classList.add("todo_item")
    document.getElementById("todo_list").appendChild(li);
}

for(let i=0;i < todos.length;i++){
    renderTodo(todos[i])
}

document.getElementById("btn_add").onclick = function addtodo(){
    let todo = document.getElementById("input_todo").value;
    todos.push(todo);
    renderTodo(todo);
}

document.getElementById("btn_check").onclick = function complete(){

    let num = document.getElementById("input_todo_num").value;
    if(num >= 1 && num <= todos.length){
        let todoItem = document.getElementsByClassName("todo_item")[num-1].classList.add("done");
    } else {
        alert(`"1" 부터 "${todos.length}" 사이의 수를 입력해주세요.`)
    }
}