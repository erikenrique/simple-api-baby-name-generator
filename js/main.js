import {ninjaApiKey} from './apiKey.js'

document.querySelector('button').addEventListener('click', generateNames) /* create event listener for the button */


function generateNames() {
    let genderSelect = document.querySelector('#gender').value;
    let popularCheck = document.querySelector('#popularNames').value;

    let url = `https://api.api-ninjas.com/v1/babynames?gender=${genderSelect}&popular=${popularCheck}`
    // console.log(document.querySelector('ul').innerText.trim())
    
    fetch(url,{
        headers: {'X-Api-Key': ninjaApiKey},
        contentType: 'application/json'
    })
        .then(res => res.json())
        .then(data => {
            if (document.querySelector('ul').innerText.trim() !== ""){
                document.querySelector('ul').innerText = ""
            }

            data.forEach(name => {
                let ul = document.querySelector('ul')
                let li = document.createElement('li')
                li.appendChild(document.createTextNode(name))
                ul.appendChild(li)
            });
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        })
}