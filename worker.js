onconnect = function(e) {
    console.log("connected.........");
    const port = e.ports[0];

    port.onmessage = (e) => {
        console.log("worker start.........", e);
        console.log("worker start.........", e.data[0]);
        for (let i = 0; i < e.data[0]; i++) {};
        console.log("worker end.........", e.data[0]);
        port.postMessage({numer: e.data[0]});
    }
}
