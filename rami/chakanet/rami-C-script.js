
let ScorPlayers=[];
let inputPlayers=[];
let namePlayers=[];
const urlParams = new URLSearchParams(window.location.search);
const Fscor = urlParams.get('Fscor');
const num = urlParams.get('num');
const displayNameElementv = document.getElementById('v');
const displayNameElementn = document.getElementById('n');
let team1=document.getElementById('team1').value;

function renderCart() {
    let recherche="";
    for (let i = 0; i < num; i++) {
      recherche+=`<div class="col-${12/Number(num)}"><div class="form-group"><input type="number" id="${i}" class="form-control" placeholder="Team ${i} score"/></div></div>`;
    }
    document.getElementById("inputscors").innerHTML= recherche;
    let cartBody = document.getElementById('cart-body');
    let row = document.createElement('tr');
    let productCell = document.createElement('td');
    cartBody.appendChild(row);
    row.appendChild(productCell);
    productCell.textContent=String(team1);
    
};