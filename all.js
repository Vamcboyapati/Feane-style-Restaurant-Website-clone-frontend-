let hams = document.querySelector(".hams");
let hamslist = document.querySelector(".hams-list");


hams.addEventListener("click", () => {
  hamslist.classList.toggle("active");

  hams.innerHTML = hamslist.classList.contains("active") 
       ? '<i class="bi bi-x-lg"></i>'
       : '<i class="bi bi-list"></i>';
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

let navs=document.querySelectorAll(".home-bg a")
navs.forEach(a=>{
  if (a.innerHTML==document.title){
    a.style.color=" #ffc107"
  }
})

