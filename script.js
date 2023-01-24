/* SEZIONE PRIMO PIANO- GUSTI CIAMBELLE*/
let i = 0;
let txt = "Cioccolato Crema  Marmellata Nutella Pistacchio  Miele";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("gustiCiambelle").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function changeColor() {
  const bottone = document.querySelector(".buttonShoking");
  document.querySelector("body").style.backgroundColor = "#0a0a0a";
  document.querySelector("h1").style.color = "#ffffff";
  document.querySelector(".navbar").style.backgroundColor = "#f11d8c";

  const navlink = document.querySelectorAll(".nav-link");
  navlink.forEach((navlink) => {
    navlink.style.color = "#ffffff";
  });

  const p = document.querySelectorAll("p");
  p.forEach((h2) => {
    h2.style.color = "#ffffff";
  });

  const h2 = document.querySelectorAll("h2");
  h2.forEach((h2) => {
    h2.style.color = "#ffffff";
  });
}

/*PARTNER
const partner = document.querySelector(".cotenitorePartner .row");
for (let i = 0; i < 7; i++) {
  partner.innerHTML += `
  <div class="col">
           <img src="./img/logo-(${
             i + 1
           }).png" width="200px"  aspect-ratio="1/1"class=" mx-auto d-block align-middle">    
</div>`;
}
*/
