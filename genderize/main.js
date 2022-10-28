// import fetch from 'node-fetch';

let btn = document.querySelector('.btnSubmit');
let output = document.querySelector('.output');

btn.addEventListener("click", sentName);

function sentName() {
    let input = document.querySelector('input[type="text"]');
    const firstName = input.value
    const serverUrl = 'https://api.genderize.io';
    let url = serverUrl + '?name=' + firstName;
    let response = fetch(url);
    let json = response.then((response) => response.json());
    json.then((result) => output.innerHTML = (`${firstName} - ${result.gender}`));
}