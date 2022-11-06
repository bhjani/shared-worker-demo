onconnect = function(e) {
    console.log("connected.........");
    const port = e.ports[0];

    port.onmessage = (e) => {
        for (let i = 0; i < e.data.numer; i++) {};
        port.postMessage({numer: e.data.numer});
    }
}
