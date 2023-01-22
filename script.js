/*const ciambella = document.querySelector(".ciambella");
window.onscroll = () => {
  if (window.scrollY > 400) {
    setInterval(function () {
      ciambella.style.transform = "rotate(150deg)";
    });
    ciambella.style.transform = "rotate(150deg)";
  }
};
*/
/* SEZIONE PRIMO PIANO- GUSTI CIAMBELLE*/
let i = 0;
let txt = "Cioccolato Crema  Nutella Pistacchio  Marmellata Miele";
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
  document.querySelector(body).style.backgroundColor = "#0a0a0a";
  document.querySelector(p).style.backgroundColor = "#0a0a0a";
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
