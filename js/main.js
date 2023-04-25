window.addEventListener('DOMContentLoaded', () => {
    //variables
    const form = document.querySelector('#form'),
        taskInput = document.querySelector('#taskInput'),
        tasksInput = document.querySelector('#tasksList'),
        emptyList = document.querySelector('#emptyList');


    //form is submited    
    form.addEventListener('submit', addTask);

    //delete one of the tasks
    tasksInput.addEventListener('click', deleteTask);

    //make one of the task done
    tasksInput.addEventListener('click', doneTask)

    //FUNCTIONS
    function addTask(event) {
        event.preventDefault();
        const wrapperHTML = `				
        <li class="list-group-item d-flex justify-content-between task-item" id="notEnemyList">
            <span class="task-title">${taskInput.value}</span>
            <div class="task-item__buttons">
              <button type="button" data-action="done" class="btn-action">
                 <img src="./img/tick.svg" alt="Done" width="18" height="18">
             </button>
             <button type="button" data-action="delete" class="btn-action">
                    <img src="./img/cross.svg" alt="Done" width="18" height="18">
              </button>
            </div>
         </li>`;
         tasksInput.insertAdjacentHTML("beforeend", wrapperHTML);

         taskInput.value = "";
         taskInput.focus();

         if(tasksInput.children.length > 1){
             emptyList.classList.add('none')
         }
    }
    
    function deleteTask (event) {
       if (event.target.getAttribute('data-action') === 'delete') {
            const parentNode = event.target.closest('.list-group-item');
            parentNode.remove()
        }

        if(tasksInput.children.length === 1){
            emptyList.classList.remove('none')
        }
    }

    function doneTask (event) {
        if(event.target.getAttribute('data-action') == 'done') {
           const parentNode = event.target.closest('list-group-item');
        }
    }
})