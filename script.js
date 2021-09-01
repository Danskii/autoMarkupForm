document.getElementById("submit").addEventListener("click", function() {
    let num = document.querySelector("#num").value;
    let title = document.querySelector("#title").value;
    let unit = document.querySelector("#unit").value;
    let term = document.querySelector("#term").value;
    let cat = document.querySelector("#cat").value;
    let desc = CKEDITOR.instances.editor.getData();
    let close = document.querySelector("#close").value;
    let output = document.querySelector("#output");

    output.innerHTML = `
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
    <p>To apply, please <a href="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=108450a1-fa83-41bf-a7d1-030ba77254bd&amp;ccId=19000101_000001&amp;type=MP&amp;lang=en_CA">send your resume and cover letter</a> no later than ${close}.</p>

    `;
});