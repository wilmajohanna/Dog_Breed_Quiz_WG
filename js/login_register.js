"use strict"

async function login_fetch(request) {

    const user_field = document.querySelector(".username > input");
    const pass_field = document.querySelector(".password > input");

    const get_request = new Request(`https://www.teaching.maumt.se/apis/access/?action=check_credentials&user_name=${user_field.value}&password=${pass_field.value}`);


    loading_alert("Contacting Server...");

    try {

        let response = await fetch(get_request);
        let resource = await response.json();

        console.log(resource);
        remove_loading_alert();

        if (response.status === 200) {
            document.querySelector("#css_file").href = "./css/quiz.css"
        };

        if (response.status === 404) {
            console.log("Not found");
        };

        if (response.status === 418) {
            teapot_alert("The server thinks it's not a teapot");
        };

        user_field.value = "";
        pass_field.value = "";

    } catch (error) {
        console.log(error);
    }

};

function switch_page(event) {

    let wrapper = document.querySelector("#wrapper");
    let register_link = document.querySelector(".register_link");
    let register_button = document.querySelector("#register_button");
    let login_button = document.querySelector("#login_button");
    let h1 = document.querySelector("h1");
    let inspo_text = document.querySelector(".inspo_text");


    if (register_link.textContent === "Already have an account? Go to login") {
        register_link.textContent = "New to this ? Register for free";

        h1.textContent = "LOGIN";
        inspo_text.textContent = "Let the magic start!";

        register_button.style.visibility = "hidden";
        login_button.style.visibility = "visible";
        wrapper.style.animationName = "login_page";

    } else {

        register_link.textContent = "Already have an account? Go to login";
        h1.textContent = "REGISTER";
        inspo_text.textContent = "Ready when you are...";

        login_button.style.visibility = "hidden";
        register_button.style.visibility = "visible";
        wrapper.style.animationName = "register_page";
    }


}

async function register_fetch(request) {


    const user_field = document.querySelector(".username > input");
    const pass_field = document.querySelector(".password > input");
    const post_request = new Request(`https://teaching.maumt.se/apis/access/`);

    loading_alert("Contacting Server...");

    try {
        const post = {
            action: "register",
            user_name: user_field.value,
            password: pass_field.value,
        };

        const options = {
            method: "POST",
            headers: { "Content-type": "application/json; charset =UTF-8" },
            body: JSON.stringify(post),
        };

        let response = await fetch_function(post_request, options);
        let resource = await response.json();
        console.log(resource);

        remove_loading_alert();

        user_field.value = "";
        pass_field.value = "";
        return resource;


    } catch (error) {
        console.log(error);
        fetch_function("post", post_request);
    };

};

