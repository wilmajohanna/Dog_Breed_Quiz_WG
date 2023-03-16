"use strict"

async function fetch_login(request) {

    const user_field = document.querySelector(".username > input");
    const pass_field = document.querySelector(".password > input");

    const get_req = new Request(`https://www.teaching.maumt.se/apis/access/?action=check_credentials&user_name=${user_field.value}&password=${pass_field.value}`);

    console.log(fetch_function(get_req));

    console.log("Contacting Server...");

    try {
        let response = await fetch(get_req);
        let resource = await response.json();
        // console.log(response);
        console.log(resource);

        if (response.status === 404) {
            console.log("Not found");
        };

        if (response.status === 418) {
            console.log("The server thinks it's not a teapot");
        };

    } catch (error) {
        console.log(error);
    }

};
function switch_page(event) {

    let register_button = document.querySelector("#register_button");
    let login_button = document.querySelector("#login_button");

    if (document.querySelector(".register_link").textContent === "Already have an account? Go to login") {
        document.querySelector(".register_link").textContent = "New to this? Register for free";

        document.querySelector("h1").textContent = "LOGIN";
        document.querySelector(".inspo_text").textContent = "Let the magic start!";
        register_button.style.visibility = "hidden";
        login_button.style.visibility = "visible";
        document.querySelector("#wrapper").style.animationName = "login_page";

    } else {

        document.querySelector(".register_link").textContent = "Already have an account? Go to login";
        document.querySelector("h1").textContent = "REGISTER";
        document.querySelector(".inspo_text").textContent = "Ready when you are...";
        login_button.style.visibility = "hidden";
        register_button.style.visibility = "visible";
        document.querySelector("#wrapper").style.animationName = "register_page";
    }


}