"use strict"

async function fetch_login(request) {

    const user_field = document.querySelector("#user > input");
    const pass_field = document.querySelector("#pass > input");

    const get_req = new Request(`https://www.teaching.maumt.se/apis/access/`);
    console.log("Contacting Server...");

    try {
        let response = await fetch(get_req);
        let resource = await response.json();
        console.log(response);
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