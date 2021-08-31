'use strict'
let cars = [];
let carModels = ['KIA', 'BMW', 'FORD'];
let inputForm = document.getElementById('input-forn');
let table = document.getElementById('table-load');
inputForm.addEventListener('submit', formInfo);

function saveToLocalStorage() {
    let data = JSON.stringify(cars);
    localStorage.setItem('cars', data);
}

function loadLocalStorage() {
    let objString = localStorage.getItem('cars');
    let objNormal = JSON.parse(objString);
    if (objNormal) {
        let temp  = objNormal;
        for (let i = 0; i < temp.length; i++) {
            new Cars(temp[i].cImg, temp[i].cName, temp[i].cModel);
        }
    }
}
loadLocalStorage();
console.log(cars);

function Cars(cImg, cName, cModel) {
    this.cImg = cImg;
    this.cName = cName;
    this.cModel = cModel;
    this.cPrice = 0;
    cars.push(this);
}
Cars.prototype.randomNumber = function () {
    let min = 1000;
    let max = 10000;
    return Math.floor(Math.random() * (max - min) + min); 
}

Cars.prototype.renderTable = function() {
    let trEl = document.createElement('tr');
    let tdEl1 = document.createElement('td');
    let tdEl2 = document.createElement('td');
    let imagePath = document.createElement('img');
    imagePath.setAttribute('src', this.cImg);
    this.cPrice = this.randomNumber();
    tdEl2.textContent = `${this.cName} ${this.cModel} ${this.cPrice}`;

    tdEl1.appendChild(imagePath);
    trEl.appendChild(tdEl1);
    trEl.appendChild(tdEl2);
    table.appendChild(trEl);
    
}

function formInfo(event) {
    event.preventDefault();
    let formName = event.target.inText.value;
    let formModel = event.target.list.value;
    if (formModel === carModels[0]) {
        new Cars('./img/kia.jpg', formName, formModel);
        table.innerHTML = '<tr><th>Order image</th><th>Order details</th></tr>';
        for (let i = 0; i < cars.length; i++) {
            cars[i].renderTable();
        }
        saveToLocalStorage();
    }
    else if (formModel === carModels[1]) {
        new Cars('./img/bmw.jpg', formName, formModel);
        table.innerHTML = '<tr><th>Order image</th><th>Order details</th></tr>';
        for (let i = 0; i < cars.length; i++) {
            cars[i].renderTable();
        }
        saveToLocalStorage();
    }
    else if (formModel === carModels[2]) {
        new Cars('./img/ford.jpg', formName, formModel);
        table.innerHTML = '<tr><th>Order image</th><th>Order details</th></tr>';
        for (let i = 0; i < cars.length; i++) {
            cars[i].renderTable();
        }
        saveToLocalStorage();
    }
    
}

// new Cars('./img/ford.jpg', 'whatever', 'whateve');
// new Cars('./img/ford.jpg', 'whatever', 'whateve');
// new Cars('./img/ford.jpg', 'whatever', 'whateve');

for (let i = 0; i < cars.length; i++) {
    cars[i].renderTable();
}

// renderTable();

