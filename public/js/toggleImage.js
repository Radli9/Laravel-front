function toggleImage() {
    const options = document.querySelectorAll(".map-options");
    const map_container = document.querySelector(".map-container");
    const img = document.createElement("img");
    const iframe = document.createElement("iframe");

    img.src = "../assets/img/map1.png";
    map_container.appendChild(img);

    Array.from(options).forEach(option => {
        option.addEventListener("click", () => {
            map_container.innerHTML = '';
            
            option.children[0].checked = true;

            if (option.children[0].value === "3") {
                iframe.src = "https://yandex.ru/map-widget/v1/-/CBucU6V~8B";
                map_container.appendChild(iframe);
            } else {
                img.src = `../assets/img/map${option.children[0].value}.png`;
                map_container.appendChild(img);
            }
        });
    });
}

toggleImage();
