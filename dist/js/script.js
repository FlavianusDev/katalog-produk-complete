const hamburger =  document.querySelector(".ri-menu-3-line");
const menu = document.querySelector(".menu")

hamburger.addEventListener("click", () => {
    console.log("testing");
    menu.classList.toggle("menu-active");
})

window.onscroll = () => {
    menu.classList.remove("menu-active");
}

const btnFilter = document.querySelectorAll(".produk-box ul li");
const imgItem = document.querySelectorAll(".produk-list img");

btnFilter.forEach(data => {
    data.onclick = () => {
        btnFilter.forEach(data => {
            data.className = "";
            // data.classList.remove("active");
        });
        data.className = "active";

        // Filter Image
        const btnText = data.textContent;
        // console.log(btnText);
        imgItem.forEach(img => {
            img.style.display = "none";
            if (img.getAttribute("data-filter") === btnText.toLowerCase() || btnText == "All Produk") {
                img.style.display = "block";
            }
        })
        
    };
});