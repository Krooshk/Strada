import { button, output, input } from './view.js';
import date from 'date-and-time';

button.addEventListener("click", getLeftTime);

function getLeftTime() {
    event.preventDefault();
    const leftTime = {
        "years": "",
        "days": "",
        "hours": ""
    }
    const now = new Date();
    const desiredDate = date.parse(input.value, 'DD/MM/YYYY');

    leftTime["years"] = Math.floor(date.subtract(desiredDate, now).toDays() / 365);
    leftTime["days"] = Math.floor(date.subtract(desiredDate, now).toDays() - leftTime["years"] * 365);
    leftTime["hours"] = Math.floor(date.subtract(desiredDate, now).toHours() - 24 * leftTime["days"] - 365 * 24 * leftTime["years"]);
    output.textContent = "left " + leftTime["years"] + " years " + leftTime["days"] + " days " + leftTime["hours"] + " hours";
}