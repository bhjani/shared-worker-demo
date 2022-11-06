// const calculate = document.getElementById("btn1");
// const background = document.getElementById("btn2");
// const output = document.getElementById("output");

// if (!!window.SharedWorker) {
//     const worker =  new SharedWorker("worker.js");
    
//     background.onclick = function(e) {
//         document.body.style.backgroundColor = document.body.style.backgroundColor !== "red" ? "red" : "yellow";
//     }

//     calculate.onclick = function() {
//         worker.port.postMessage({number: 100000000});
//     }

//     worker.port.onmessage = function (e) {
//         // output.value = e.data.number;
//         console.log("output -------->", e.data);
//     }
// }


const first = document.querySelector("#number1");
const second = document.querySelector("#number2");

const result1 = document.querySelector(".result1");

if (!!window.SharedWorker) {
  const myWorker = new SharedWorker("worker.js");

  first.onchange = function () {
    myWorker.port.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };

  second.onchange = function () {
    myWorker.port.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };

  myWorker.port.onmessage = function (e) {
    result1.textContent = e.data;
    console.log("Message received from worker");
    console.log(e.lastEventId);
  };
}