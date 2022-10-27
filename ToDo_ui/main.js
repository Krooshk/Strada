let buttons = {
    close: document.querySelectorAll("label.checkbox img"),
    plus: document.querySelectorAll("label.input-text img"),
}

let input_field = document.querySelectorAll("input");

buttons.close.forEach(element => {
    element.addEventListener("click", deleteTask);
});

buttons.plus.forEach(element => {
    element.addEventListener("click", addTask);
});

function func(e) {
    if (e.keyCode === 13) {
        let funcUser = addTask.bind(this.nextElementSibling);
        funcUser();
    }
}

input_field.forEach(field => field.addEventListener('keydown', func));




function deleteTask() {
    this.closest("label").remove();
}


function addTask() {

    let task = this.closest(".input-text");
    let textOfTask = task.children[0].value;

    let form = document.createElement('label');
    form.classList.add('checkbox');
    if (textOfTask.length > 0) {
        form.innerHTML = `<input type="checkbox" class="checkbox-round" name="happy1" value="yes">${textOfTask}
	<img src="./assets/close-icon-45.svg" alt="close">`;
        this.closest("label").nextElementSibling.append(form);
    }


    task.children[0].value = "";
    buttons.close = document.querySelectorAll("label.checkbox img");
    buttons.close.forEach(element => {
        element.addEventListener("click", deleteTask);
    });

}