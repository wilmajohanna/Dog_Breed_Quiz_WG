"use strict"

async function fetch_function(request) {
    return await fetch(request);

};

/* fetch_function("dog"); */


function loading_alert(alert) {

    let alert_box = document.createElement("div");
    alert_box.id = "white_box";
    document.querySelector("body").prepend(alert_box); //prepend = hamnar längst upp
    alert_box.innerHTML = `<div>${alert}</div>`;
}

function remove_loading_alert(alert) {
    document.querySelector("#white_box").remove();
}