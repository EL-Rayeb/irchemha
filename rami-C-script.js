
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
function renderCart() {
    let cartBody = document.getElementById('cart-body');
    let team1=document.getElementById('team1').value;
    let team2=document.getElementById('team2').value;
    let scor1=document.getElementById('scor1');
    let scor2=document.getElementById('scor2');
    let row = document.createElement('tr');
    let productCell = document.createElement('td');
    let priceCell = document.createElement('td');
    let affcher = "";
    for (let i = 0; i < Number(num); i++) {
        affcher = affcher + `<p>aaaaaaaaa</p>` ;
    }
    document.getElementById("inputscors").innerHTML=affcher;
    if (team1==="" ||team1==="-20" && team2!=="") {
      productCell.textContent = "-20" ;
      priceCell.textContent = String(team2) ;
      ScorTeam1=ScorTeam1-20 ;
      ScorTeam2=ScorTeam2+ Number(team2);
    }
    if (team2==="" || team2==="-20" && team1!=="") {
      productCell.textContent = String(team1) ;
      priceCell.textContent = "-20" ;
      ScorTeam1=ScorTeam1+ Number(team1) ;
      ScorTeam2=ScorTeam2-20;
    }
    if (ScorTeam1>=Fscor || ScorTeam2>=Fscor) {
        document.getElementById('name1post').value= name1;
        document.getElementById('name2post').value= name2;
        document.getElementById('scor1post').value= ScorTeam1;
        document.getElementById('scor2post').value= ScorTeam2;
        document.getElementById('time').value= new Date();
        cartBody.appendChild(row);
        row.appendChild(productCell);
        row.appendChild(priceCell);
        scor1.innerHTML=String(ScorTeam1);
        scor2.innerHTML=String(ScorTeam2);
        document.getElementById('team1').value="";
        document.getElementById('team2').value="";
        const submitButton = document.getElementById('myButton');
        submitButton.setAttribute('style', 'display: block');
        const irchem = document.getElementById('irchem');
        irchem.setAttribute('style', 'display: none');
      };
    cartBody.appendChild(row);
    row.appendChild(productCell);
    row.appendChild(priceCell);
    scor1.innerHTML=String(ScorTeam1);
    scor2.innerHTML=String(ScorTeam2);
    document.getElementById('team1').value="";
    document.getElementById('team2').value="";
};
