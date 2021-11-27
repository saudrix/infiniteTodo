const electron = require('electron')
const path = require('path')

import {database} from '../index.js'
const addButton = document.getElementById('addButton')

addButton.addEventListener('click', function(event){
    console.log(document.getElementById('taskValue').value);
    addToList(document.getElementById('taskValue').value);
})

async function populateList(){
    database.find({}, (e,data) => {
        console.log(data)
        const ul = document.getElementById("taskList");
        data.forEach((item)=>{
            console.log(item)
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(item.label));
            ul.appendChild(li);
        })
    })
}

populateList();

function addToDb(value){
    database.insert({
        label : value,
        dueDate : Date.parse('10/12/2021'),
        status : false
    })
}

function addToList(value) {
    addToDb(value)
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(value));
    ul.appendChild(li);

    //notify
    new window.Notification('New task added', {title: 'new Task', body : value, icon: (path.join(__dirname, '../assets/images/infinite.png'))})
}

let taskItem = {
    value : '',
    date : Date.now(),
    dueDate : Date.now()

}