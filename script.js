document.getElementById("submit").addEventListener("click", function() {
    let num = document.querySelector("#num").value;
    let title = document.querySelector("#title").value;
    let unit = document.querySelector("#unit").value;
    let term = document.querySelector("#term").value;
    let cat = document.querySelector("#cat").value;
    let desc = document.querySelector("#editor").innerHTML;

    let output = document.querySelector("#output");


    //try this code below from here: https://stackoverflow.com/questions/39519950/convert-quill-delta-to-html
    // function quillGetHTML(inputDelta) {
    //     var tempCont = document.createElement("div");
    //     (new Quill(tempCont)).setContents(inputDelta);
    //     return tempCont.getElementsByClassName("ql-editor")[0].innerHTML;
    // }



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