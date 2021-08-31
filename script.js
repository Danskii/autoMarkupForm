document.getElementById("submit").addEventListener("click", function() {
    let postNum = document.querySelector("#num").value;
    let postTitle = document.querySelector("#title").value;
    let output = document.querySelector("#output");
    console.log(postNum);
    output.innerHTML = `
    <h2> ${postNum} <br/>
    ${postTitle}</h2>`;
});