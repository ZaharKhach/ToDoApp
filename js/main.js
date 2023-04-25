window.addEventListener('DOMContentLoaded', () => {
    //variables
    const form = document.querySelector('#form'),
        taskInput = document.querySelector('#taskInput'),
        tasksInput = document.querySelector('#tasksList');

    let arrayTasks = [];

    if (localStorage.getItem('tasks')) {
        arrayTasks = JSON.parse(localStorage.getItem('tasks'));
        arrayTasks.forEach(element => renderTask(element))
    }


    checkEmptyList();

    form.addEventListener('submit', addTask);
    tasksInput.addEventListener('click', deleteTask);
    tasksInput.addEventListener('click', doneTask)

    //FUNCTIONS
    function addTask(event) {
        event.preventDefault();

        const newTask = {
            id: Date.now(),
            text: taskInput.value,
            done: false
        }
        arrayTasks.push(newTask);
        saveLocalStorage();

        renderTask(newTask);

        taskInput.value = "";
        taskInput.focus();

        checkEmptyList();
    }

    function deleteTask(event) {
        if (event.target.getAttribute('data-action') !== 'delete') return;

        const parentNode = event.target.closest('.list-group-item');

        arrayTasks.forEach(element => {
            if (element.id == parentNode.getAttribute('id')) {
                arrayTasks = arrayTasks.filter(el => el !== element);
                saveLocalStorage();
            }
        })

        parentNode.remove();
        checkEmptyList()
    }

    function doneTask(event) {
        if (event.target.getAttribute('data-action') !== 'done') return;

        const parentNode = event.target.closest('.list-group-item');
        const span = parentNode.querySelector('.task-title');

        arrayTasks.forEach(element => {
            if (span.textContent == element.text) {
                span.classList.toggle('task-title--done');
                element.done = element.done ? false : true;
            }
        });
        saveLocalStorage();
        //    parentNode.classList.add('gray');
    }

    function checkEmptyList() {
        if (arrayTasks.length === 0) {
            const wrapper = `
                    <li id="emptyList" class="list-group-item empty-list">
                        <img src="./img/leaf.svg" alt="Empty" width="48" class="mt-3">
                        <div class="empty-list__title">Список дел пуст</div>
                    </li>`;
            tasksInput.insertAdjacentHTML('afterbegin', wrapper)
        }

        if (arrayTasks.length >= 1) {
            const emptylistEl = document.querySelector('#emptyList');
            emptylistEl ? emptylistEl.remove() : null;
        }
    }

    function saveLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(arrayTasks));

    }

    function renderTask(task) {
        const cssClass = task.done ? "task-title task-title--done" : "task-title";

        const wrapperHTML = `				
        <li id="${task.id}" class="list-group-item d-flex justify-content-between task-item" id="notEnemyList">
            <span class="${cssClass}">${task.text}</span>
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
    }
})