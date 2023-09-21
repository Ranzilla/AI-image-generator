import './style.css';

const form = document.querySelector("form");

form.addEventListener("submit", async(e) => {
    e.preventDefault();
    showSpinner();
    const data = new FormData(form);
    console.log(data);
    const response = await fetch("http://localhost:8080/dream", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            prompt: data.get("prompt"),
        }),
    });
    
    if(response.ok) {
        const { image } = await response.json();
        const result = document.querySelector("#results");
        result.innerHTML = `<img src="${image}" width="512" />`; 
    } else {
        const err = await response.text();
        alert(err);
        console.error(err);
    }
    
    hideSpinner();
});

function showSpinner() {
    const button = document.querySelector("button");
    button.disabled = true;
    button.innerHTML = `Generating... <img class="spinner" src="./loading.png">`;
}

function hideSpinner() {
    const button = document.querySelector("button");
    button.disabled = false;
    button.innerHTML = "Generate";
}