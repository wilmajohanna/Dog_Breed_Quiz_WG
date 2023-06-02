"use strict"

async function fetch_function(request) {
    let response = await fetch(request);
    return response;
};

function loading_alert(alert) {
    let alert_box = document.createElement("div");
    alert_box.id = "white_box";
    document.body.prepend(alert_box); //prepend = hamnar längst upp
    alert_box.innerHTML = `<div class="loading_text">${alert}</div>`;
}

function remove_loading_alert(alert) {
    document.querySelector("#white_box").remove();
}

function alert_message(alert) {
    let white_background = document.createElement("div");
    white_background.id = "white_box";
    document.body.prepend(white_background);
    white_background.innerHTML = `<div class="alert_popup">${alert}<button>CLOSE</button></div>`;
    document.querySelector(".alert_popup > button").addEventListener("click", () => white_background.remove());
};

function wrong_user() {
    document.querySelector(".inspo_text").textContent = "Wrong username or password";
    document.querySelector(".inspo_text").style.backgroundColor = "lightblue";
}

function css_switch(event) {
    document.querySelector("#css_file").href = "./css/quiz.css"
}
