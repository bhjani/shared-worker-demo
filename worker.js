onconnect = function(e) {
    console.log("connected.........");
    const port = e.ports[0];

    port.onmessage = (e) => {
        for (let i = 0; i < e.data; i++) {};
        port.postMessage({numer: e.data});
    }
}
