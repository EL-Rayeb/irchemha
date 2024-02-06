
let ScorPlayers=[];
let inputPlayers=[];
let namePlayers=[];
const urlParams = new URLSearchParams(window.location.search);
const Fscor = urlParams.get('Fscor');
const num = urlParams.get('num');
const displayNameElementv = document.getElementById('v');
const displayNameElementn = document.getElementById('n');
displayNameElementn.textContent = name1;
displayNameElementv.textContent = name2;

$(document).ready(function() {
  renderCart();
});
function renderCart() {
    let recherche="";
    for (let i = 0; i < num; i++) {
      recherche+=`<div class="col-${12/Number(num)}"><div class="form-group"><input type="number" id="team${i}" class="form-control" placeholder="Team ${i} score"/></div></div>`  ;
    }
    document.getElementById("inputscors").innerHTML= recherche;

};   

