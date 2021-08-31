document.getElementById("submit").addEventListener("click", function() {
    let num = document.querySelector("#num").value;
    let title = document.querySelector("#title").value;
    let unit = document.querySelector("#unit").value;
    let term = document.querySelector("#term").value;
    let cat = document.querySelector("#cat").value;
    let desc = document.querySelector("#editor").innerHTML;

    let output = document.querySelector("#output");

    output.innerHTML =
        `
    <h2> 
    ${num} <br/>
    ${title}
    </h2>
    <h3>
    ${unit}
    </h3>
    <p>
    <em>
    ${term} <br/>
    ${cat}
    </em>
    </p>
    ${desc}
    `;
});