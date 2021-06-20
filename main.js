

const todolist = [];

const todoform = document.querySelector('form');
const addbutton = document.querySelector('button');
const inputfield = document.querySelector('input');
const todolistul = document.querySelector('ul');

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

    //create list
    const list = document.createElement('li');
    list.classList.add("undone");
    list.innerText = `${inputfield.value}`
    //create done/undone button
    const done = document.createElement('button');
    done.innerText = "done";
    done.addEventListener('click',donebutton);
    //create delete button
    const delbutton = document.createElement('button');
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
    event.target.parentNode.firstChild.classList.add("done");
    event.target.parentNode.firstChild.classList.remove("undone");
    event.target.parentNode.childNodes[1].innerText = "undone";
  }
  else{
    event.target.parentNode.firstChild.classList.add("undone");
    event.target.parentNode.firstChild.classList.remove("done");
    event.target.parentNode.childNodes[1].innerText = "done";
  }
}

function deltodo(event) {
  console.log('delete todo');
  event.target.parentNode.remove();
}