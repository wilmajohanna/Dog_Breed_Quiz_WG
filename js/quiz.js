"use strict"


async function activate_quiz(user_name) {

    css_switch();

    let unique_dogs = [];

    while (unique_dogs.length < 4) {
        let alternatives = ALL_BREEDS[Math.floor(Math.random() * ALL_BREEDS.length)];

        if (!unique_dogs.includes(alternatives)) {
            unique_dogs.push(alternatives);
        }
    };

    console.log(user_name);
    document.querySelector("#name").innerHTML = `

    <p>${user_name}</p>
    <button id="log_out">log out</button>`;


    function log_out() {
        localStorage.clear();
        location.reload();
    };

    document.querySelector("#log_out").addEventListener("click", log_out);

    const dog_object = unique_dogs[Math.floor(Math.random() * unique_dogs.length)];
    const dog_request = `https://dog.ceo/api/breed/${dog_object.url}/images/random`;
    const dog_img = await (await fetch(dog_request)).json();

    document.querySelector("#dog_img").src = `${dog_img.message}`;

    /* ---------------- alternatives ---------------*/

    for (let i = 0; i < unique_dogs.length; i++) {
        let alt_options = document.createElement("button");
        alt_options.textContent = unique_dogs[i].name;
        alt_options.addEventListener("click", response);
        document.querySelector("#alt_quiz").append(alt_options);

        function response() {
            if (alt_options.innerText === dog_object.name) {

                let background = document.createElement("div");
                background.id = "white_box";
                document.body.prepend(background);

                background.innerHTML = `<div class="correct_answer">CORRECT ANSWER<button>ONE MORE</button></div>`;
                document.querySelector(".correct_answer > button").addEventListener("click", () => {
                    background.remove();
                    document.querySelector("#alt_quiz").innerHTML = "";
                    activate_quiz(user_name);

                });

            } else {

                let background = document.createElement("div");
                background.id = "white_box";
                document.body.prepend(background);

                background.innerHTML = `<div class="wrong_answer">WRONG ANSWER<button>TRY AGAIN</button></div>`;
                document.querySelector(".wrong_answer > button").addEventListener("click", () => {
                    background.remove();
                    document.querySelector("#alt_quiz").innerHTML = "";
                    activate_quiz(user_name);
                });
            };
        };

    };
};

