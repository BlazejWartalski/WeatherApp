function createFooter() {
    var footer = document.createElement("div");
    footer.classList.add("footer");
    footer.innerText = "Created by Blazej Wartalski (github link add later)"
    document.body.appendChild(footer);
}

export default createFooter;