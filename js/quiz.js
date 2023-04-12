"use strict"

async function fetch_dog(dog_oject) {

    const dog_request = new Request(`https://dog.ceo/api/breed/${dog_oject.url}/images/random`);

    try {

        let response = await fetch(dog_request);
        let resource = await response.json();
        document.querySelector("#dog_img").src = resource.message;

    } catch (error) {
        console.log(error);
    }
};



fetch_dog(ALL_BREEDS[]);
