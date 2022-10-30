let state_task = {
    TO_DO: "To Do",
    DONE: "Done",
}

let priority = {
    LOW: "low",
    HIGH: "high"
}

const list = [
    { name: "Lorem ipsum dolor", status: state_task.TO_DO, priority: priority.HIGH },
    { name: "Сверстать этот TODO list", status: state_task.TO_DO, priority: priority.HIGH },
    { name: "Начать делать задачу", status: state_task.TO_DO, priority: priority.HIGH },
    { name: "Посмотреть документацию", status: state_task.TO_DO, priority: priority.LOW },
]

//initialization

list.forEach(obj => {
    let chapter = document.querySelector(`.${obj.priority}`);
    chapter.append(createForm(obj.name));
})

let default_status = state_task.TO_DO;
let default_priority = priority.LOW;

let buttons = {
    close: document.querySelectorAll("label.checkbox img"),
    plus: document.querySelectorAll("label.input-text img"),
    labels: document.querySelectorAll("label.checkbox"),
}

let input_field = document.querySelectorAll("input");

buttons.close.forEach(element => {
    element.addEventListener("click", deleteTask);
});

buttons.plus.forEach(element => {
    element.addEventListener("click", addTask);
});

input_field.forEach(field => field.addEventListener('keydown', func));



// create label
function createForm(text) {
    let form = document.createElement('label');
    form.classList.add('checkbox');
    form.innerHTML = `<input type="checkbox" class="checkbox-round" name="happy1" value="yes">${text}
    <img src="./assets/close-icon-45.svg" alt="close">`;
    return form;
}

function deleteTask() {
    let task = this.closest('label').textContent.trim();
    let index = list.findIndex(item => item["name"] === task);
    list.splice(index, 1);
    this.closest("label").remove();

}
// for key "Enter"
function func(e) {
    if (e.keyCode === 13) {
        let funcUser = addTask.bind(this.nextElementSibling);
        funcUser();
    }
}


function addTask() {
    let task = this.closest(".input-text");
    let textOfTask = task.children[0].value;

    list.push({
        name: textOfTask,
        status: default_status,
        priority: this.closest('form').previousElementSibling.textContent.toLowerCase(),
    })
    console.log(list);

    if (textOfTask.length > 0) {
        let form = createForm(textOfTask);
        this.closest("label").nextElementSibling.append(form);
    }


    task.children[0].value = "";
    buttons.close = document.querySelectorAll("label.checkbox img");
    buttons.close.forEach(element => {
        element.addEventListener("click", deleteTask);
    });

}