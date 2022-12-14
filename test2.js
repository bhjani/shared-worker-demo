const calculate = document.getElementById("btn1");
const background = document.getElementById("btn2");
const output = document.getElementById("output");

if (!!window.SharedWorker) {
    const worker =  new SharedWorker("worker.js");
    
    background.onclick = function(e) {
        document.body.style.backgroundColor = document.body.style.backgroundColor !== "red" ? "red" : "yellow";
    }

    calculate.onclick = function() {
        worker.port.postMessage([100000000]);
    }

    worker.port.onmessage = function (e) {
        console.log("return worker 2 -------->");
        output.value = e.data.number;
    }
}
