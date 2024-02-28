var taille = window.innerWidth;
console.log(taille);
var showshow = document.getElementById("memenu");
showshow.addEventListener('click', () => {
    document.querySelector(".menu").style.backgroundColor = "var(--main-color)";
})

if (taille < 600) {
    window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        console.log(scroll);
        if (scroll < 400) {
            document.getElementById("memenu").style.display = "none";
            document.querySelector(".menu").style.backgroundColor = "var(--main-color)";
            document.getElementById("memenulink").style.display = "none";
            document.getElementById("menuid").style.display = "block";
        }
        if (scroll > 400) {
            document.querySelector(".menu").style.backgroundColor = "var(--main-color)";

            document.getElementById("memenu").style.display = "block";
            document.getElementById("memenulink").style.display = "block";
            document.getElementById("menuid").style.display = "none";
        }
    });
}