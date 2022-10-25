const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
}

let state_task = {
    TO_DO: "To Do",
    DONE: "Done",
    IN_PROGRESS: "In Progress",
}

let default_status = state_task.TO_DO;

function addTask(task) {
    list[task] = default_status;
}

function changeStatus(task, status) {
    if (task in list) {
        list[task] = status;
    }
}

function deleteTask(task) {
    if (task in list) {
        delete list[task];
    }
}

function showList() {
    let todo = "";
    let inprogress = "";
    let done = "";
    for (let key in list) {
        switch (list[key]) {
            case state_task.TO_DO:
                todo += ` "${key}",\n`
                break;
            case state_task.IN_PROGRESS:
                inprogress += ` "${key}",\n`
                break;
            case state_task.DONE:
                done += ` "${key}",\n`
                break;
        }
    }

    return `${state_task.TO_DO}:\n${todo||" -\n"}${state_task.IN_PROGRESS}:\n${inprogress||" -\n"}${state_task.DONE}:\n${done||" -\n"}`;
}


addTask("Go to shop");
addTask("Make a tea");
addTask("Order a pizza");
addTask("Cook a soup");
deleteTask("Cook a soup");

changeStatus("Go to shop", "In Progress");
changeStatus("Order a pizza", "Done");

deleteTask("create a new practice task");
deleteTask("Go to shop");

console.log(showList());