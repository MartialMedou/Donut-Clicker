


let donutButton = document.querySelector('#donut-button')
let donutCount = document.getElementById('donut-count')
let autoClickButton = document.getElementById('auto-clicker-count')

let actualDonut = 0;
let autoClickerPrice = 100;
let totalAutoClickers = 0;





function addDonut() {
    ++actualDonut;
        donutCount.innerText = actualDonut.toFixed(0);

    console.log('number of times donut-button has been clicked')

    if (autoClickerPrice <= actualDonut) {
        document.getElementById('auto-button').disabled = false;
    }
    else {
        document.getElementById('auto-button').disabled = true;
    }

}

function addAutoClick() {

    if (autoClickerPrice <= actualDonut) {
        ++totalAutoClickers;
        autoClickButton.innerText = totalAutoClickers;
        actualDonut -= autoClickerPrice;
    }

    if (totalAutoClickers > 0) {
        autoClickerPrice = (autoClickerPrice) * 1.1;
    }
    levelOneAuto = setInterval(addDonut, 1000);



    if (totalAutoClickers == 1) {
        levelOneAuto
    }


}

var tablinks =document.getElementsByClassName("tab-links");
var tabcontents =document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add('active-tab');}