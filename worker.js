// onconnect = function(e) {
//     console.log("connected.........");
//     const port = e.ports[0];

//     port.onmessage = (e) => {
//         for (let i = 0; i < e.data.numer; i++) {};
//         port.postMessage({numer: e.data.numer});
//     }
// }

onconnect = function (event) {
    const port = event.ports[0];
  
    port.onmessage = function (e) {
    //   const workerResult = `Result: ${e.data[0] * e.data[1]}`;
      port.postMessage("worker is working");
    };
    port.start();
  };