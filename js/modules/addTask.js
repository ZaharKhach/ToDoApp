// function addTask(formSelector, inputSelector, listInputSelector, emptuListSelector) {
//     const form = document.querySelector()formSelector,
//         taskInput = document.querySelector('#taskInput')inputSelector,
//         tasksInput = document.querySelector('#tasksList')listInputSelector,
//         emptyList = document.querySelector('#emptyList')emptuListSelector

//     form.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const wrapperHTML = `				
//         <li class="list-group-item d-flex justify-content-between task-item" id="notEnemyList">
//             <span class="task-title">${taskInput.value}</span>
//             <div class="task-item__buttons">
//               <button type="button" data-action="done" class="btn-action">
//                  <img src="./img/tick.svg" alt="Done" width="18" height="18">
//              </button>
//              <button type="button" data-action="delete" class="btn-action">
//                     <img src="./img/cross.svg" alt="Done" width="18" height="18">
//               </button>
//             </div>
//          </li>`;
//         tasksInput.insertAdjacentHTML("beforeend", wrapperHTML);

//         taskInput.value = "";
//         taskInput.focus();

//         if (tasksInput.children.length > 1) {
//             emptyList.classList.add('none')
//         }
//     })


// }