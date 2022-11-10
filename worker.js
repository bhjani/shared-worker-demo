onconnect = function(e) {
    console.log("connected.........");
    const port = e.ports[0];

    port.onmessage = (e) => {
        console.log("worker..........1");
        for (let i = 0; i < e.data[0]; i++) {};
        port.postMessage({numer: e.data[0]});
    }
}
