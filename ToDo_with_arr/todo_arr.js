const list = [
    { name: "create a new practice task", status: "In Progress", priority: "low" },
    { name: "make a bed", status: "Done", priority: "low" },
    { name: "write a post", status: "To Do", priority: "low" }
]

let state_task = {
    TO_DO: "To Do",
    DONE: "Done",
    IN_PROGRESS: "In Progress",
}

let priority = {
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

function showBy(prioritize) {
    if (prioritize === "priority") {
        let todo = list.filter(item => item["status"] === state_task.TO_DO);
        let todo_str = "";
        for (let item of todo) {
            todo_str += ` ${item["name"]}\n`;
        }

        let inprogress = list.filter(item => item["status"] === state_task.IN_PROGRESS);
        let inprogress_str = "";
        for (let item of inprogress) {
            inprogress_str += ` ${item["name"]}\n`;
        }
        let done = list.filter(item => item["status"] === state_task.DONE);
        let done_str = "";
        for (let item of done) {
            done_str += ` ${item["name"]}\n`;
        }

        return `${state_task.TO_DO}:\n${todo_str||" -\n"}${state_task.IN_PROGRESS}:\n${inprogress_str||" -\n"}${state_task.DONE}:\n${done_str||" -\n"}`;
    }

    if (prioritize === "status") {
        let arrayHigh = list.filter(item => item["priority"] === priority.HIGH);
        let high_str = "";
        for (let item of arrayHigh) {
            high_str += ` ${item["name"]}\n`;
        }

        let arrayLow = list.filter(item => item["priority"] === priority.LOW);
        let low_str = "";
        for (let item of arrayLow) {
            low_str += ` ${item["name"]}\n`;
        }

        return `${priority.HIGH}:\n${high_str||" -\n"}${priority.LOW}:\n${low_str||" -\n"}`;
    }



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



console.log(list);

console.log(showBy("priority"));
console.log(showBy("status"));