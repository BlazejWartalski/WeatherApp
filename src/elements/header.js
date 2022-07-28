function createHeader() {
    const header = document.createElement("div")
    header.classList.add("header");
    header.textContent = "Weather App";

    const container = document.getElementById("container")
    container.appendChild(header);
}
export default createHeader;