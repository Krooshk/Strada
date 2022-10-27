let buttons = {
    close: document.querySelectorAll("label.checkbox img"),
    plus: document.querySelectorAll("label.input-text img"),
}
buttons.close.forEach(element => {
    element.addEventListener("click", deleteTask);
});

buttons.plus.forEach(element => {
    element.addEventListener("click", addTask);
});

buttons.plus.forEach(element => {
    element.addEventListener("onsubmit", addTask);
});

function deleteTask() {
    this.closest("label").remove();
}


function addTask() {

    let task = this.closest(".input-text");
    let textOfTask = task.children[0].value;

    let form = document.createElement('label');
    form.classList.add('checkbox');
    form.innerHTML = `<input type="checkbox" class="checkbox-round" name="happy1" value="yes">${textOfTask}
	<img src="./assets/close-icon-45.svg" alt="close">`;
    console.log(this.closest("label"));
    this.closest("label").nextElementSibling.append(form);
    // form.submit();
    // update
    buttons.close = document.querySelectorAll("label.checkbox img");
    buttons.close.forEach(element => {
        element.addEventListener("click", deleteTask);
    });

}