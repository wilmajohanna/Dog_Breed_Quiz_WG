"use strict"

async function fetch_function(request, object) {
    return await fetch(request, object);

};

function loading_alert(alert) {

    let alert_box = document.createElement("div");
    alert_box.id = "white_box";
    document.querySelector("body").prepend(alert_box); //prepend = hamnar längst upp
    alert_box.innerHTML = `<div class="loading_text">${alert}</div>`;
}

function remove_loading_alert(alert) {
    document.querySelector("#white_box").remove();
}

function teapot_alert(alert) {
    let white_background = document.createElement("div");
    white_background.id = "white_box";
    document.body.prepend(white_background);

    white_background.innerHTML = `<div class="teapot_popup">${alert}<button>CLOSE</button></div>`;

    document.querySelector(".teapot_pot > button").addEventListener("click", () => white_background.remove());
};