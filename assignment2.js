1.Callback Code-

function getData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

getData((result) => {
    console.log(result);
});

2.Conver to Promise code-

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}

getData().then((result) => {
    console.log(result);
});


3. Async Function Simulating a Network Request

async function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User data loaded successfully!");
        }, 1500);
    });
}

async function showUser() {
    const data = await fetchUser();
    console.log(data);
}

showUser();
