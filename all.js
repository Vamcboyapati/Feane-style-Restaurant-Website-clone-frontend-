let hams = document.querySelector(".hams");
let hamslist = document.querySelector(".hams-list");


hams.addEventListener("click", () => {
  hamslist.classList.toggle("active");

  hams.innerHTML = hamslist.classList.contains("active") 
       ? '<i class="bi bi-x-lg"></i>'
       : '<i class="bi bi-list"></i>';
});

let links = document.querySelectorAll(".hams-list a");
let firstfour = [...links].slice(0, 4);
let navlinks=document.querySelectorAll(".nav-sec a")

firstfour.forEach(link => {
  link.addEventListener("click", function() {

    firstfour.forEach(l => l.classList.remove("activate"));

    this.classList.add("activate");
  });
});
let all=document.getElementById("all")
window.addEventListener("load", (event) => {
  all.checked=true;
});
let elements = document.querySelectorAll(".element");
let radios = document.querySelectorAll("input[name='option']");

radios.forEach(r => {
  r.addEventListener("change", () => {
    filterItems(r.id);
  });
});

function filterItems(category) {
  elements.forEach(el => {
    if (category === "all") {
      el.style.display = "block"; 
      return;
    }

    if (el.classList.contains(category)) {
      el.style.display = "block"; 
    } else {
      el.style.display = "none"; 
    }
  });
}

