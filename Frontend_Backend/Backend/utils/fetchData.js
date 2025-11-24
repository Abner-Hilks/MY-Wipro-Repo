// Q8 Asynchronous Javscript

// CALLBACK VERSION
function fetchDataCallback(callback) {
    setTimeout(() => {
        callback(null, { message: "Data received successfully (Callback)" });
    }, 1000);
}

// PROMISE VERSION
function fetchDataPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: "Data received successfully (Promise)" });
        }, 1000);
    });
}

// ASYNC/AWAIT VERSION
async function fetchDataAsync() {
    const data = await fetchDataPromise();
    return { message: "Data received successfully (Async/Await)" };
}

// RUN DEMO
fetchDataCallback((err, data) => console.log(data.message));
fetchDataPromise().then(data => console.log(data.message));
fetchDataAsync().then(data => console.log(data.message));
