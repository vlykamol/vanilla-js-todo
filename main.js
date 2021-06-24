
const todolist = [];

const todoform = document.getElementById('todo-form');
const addbutton = document.getElementById('add-button');
const inputfield = document.getElementById('todo-input');
const todolistul = document.getElementById('todo-list');

todoform.addEventListener('submit', event => {
  event.preventDefault();
});

addbutton.addEventListener('click', addtodo);

function addtodo() {
  if(inputfield.value === '') return;
  else{
    todolist.push(inputfield.value);
    console.log(todolist);

    //create listDiv
    const listDiv = document.createElement('div');
    listDiv.classList.add('listdiv');

    //create list
    const list = document.createElement('li');
    list.classList.add("undone");
    list.innerText = `${inputfield.value}`
    //create done/undone button
    const done = document.createElement('button');
    done.classList.add('done-undone');
    done.innerText = "done";
    done.addEventListener('click',donebutton);
    //create delete button
    const delbutton = document.createElement('button');
    delbutton.classList.add('delbutton');
    delbutton.addEventListener('click',deltodo)
    delbutton.innerText = "delete";


    listDiv.appendChild(list);
    listDiv.appendChild(done);
    listDiv.appendChild(delbutton);

    todolistul.appendChild(listDiv);

    inputfield.value = '';
  }
}

function donebutton(event) {

  const thisnode =  event.target.parentNode.firstChild;
  if(thisnode.className === "undone"){
    console.log("done/undone");
    thisnode.classList.add("done");
    thisnode.classList.remove("undone");
    event.target.parentNode.childNodes[1].innerText = "undone";
  }
  else{
    thisnode.classList.add("undone");
    thisnode.classList.remove("done");
    event.target.parentNode.childNodes[1].innerText = "done";
  }
}

function deltodo(event) {
  console.log('delete todo');
  event.target.parentNode.remove();
}
