//const ciambella = document.querySelector(".ciambella");
//window.onscroll = () => {
//  if (window.scrollY > 400) {
//    ciambella.style.transform = "rotate(3600deg)";
//  }
//};

const partner = document.querySelector(".cotenitorePartner .row");
for (let i = 0; 1 < 7; i++) {
  partner.innerHTML += `<div class="col-2">
           <img src="./img/logo-(${
             i + 1
           }).png" width="200px"  aspect-ratio="1/1"class=" mx-auto d-block align-middle">    
</div>

`;
}
