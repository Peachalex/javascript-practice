const $ = selector => document.querySelector(selector);
const colours = ['red', 'green', 'blue'];
const createNewElement = () => {
    const container = $('#container');
    const newContainer = document.createElement('div');
    newContainer.classList.add('nova');
    newContainer.style.height = '80px';
    newContainer.style.width = '80px';
    newContainer.style.border = '2px solid black';
    newContainer.style.margin = '5px';
    container.appendChild(newContainer);
};

const changeColour = () => {
    const allElements = document.querySelectorAll('.nova');

    let randIndex = Math.floor(Math.random()*3);

    allElements[allElements.length-1].style.background = colours[randIndex];

};

const changeBackgroundColour = () => {
    const allElements = document.querySelectorAll('body');

    let randIndex = Math.floor(Math.random()*3);

    allElements[allElements.length-1].style.background = colours[randIndex];

};

document.cookie = 'name=Siyuan Tao';
document.cookie = 'StudentNumber=101319525';
function showcookie(){
    alert(document.cookie);
}


$("#create").addEventListener('click', createNewElement);
$("#change").addEventListener('click', changeColour);
$("#changebc").addEventListener('click',changeBackgroundColour);
$("#show").addEventListener('click',showcookie);




