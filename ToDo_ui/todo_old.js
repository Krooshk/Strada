export const list = [
    { name: "create a new practice task", status: "In Progress", priority: "low" },
    { name: "make a bed", status: "Done", priority: "low" },
    { name: "write a post", status: "To Do", priority: "low" }
]

export let state_task = {
    TO_DO: "To Do",
    DONE: "Done",
    IN_PROGRESS: "In Progress",
}

export let priority = {
    LOW: "low",
    HIGH: "high"
}

let default_status = state_task.TO_DO;
let default_priority = priority.LOW;

function addTask(task) {
    list.push({
        name: task,
        status: default_status,
        priority: default_priority
    })
}

function changeStatus(task, statusOut) {
    let index = list.findIndex(item => item["name"] === task);
    list[index]["status"] = statusOut;
}

function deleteTask(task) {
    let index = list.findIndex(item => item["name"] === task);
    list.splice(index, 1);
}