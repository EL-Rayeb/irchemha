let ScorTeam1=0;
let ScorTeam2=0;
let inputField = document.getElementById("team1");
let inputField2 = document.getElementById("team2");
const urlParams = new URLSearchParams(window.location.search);
const name1 = urlParams.get('name1');
const name2 = urlParams.get('name2');
const displayNameElementv = document.getElementById('v');
const displayNameElementn = document.getElementById('n');
displayNameElementn.textContent = name1;
displayNameElementv.textContent = name2;

function renderCart() {
    let team1=document.getElementById('team1').value;
    let team2=document.getElementById('team2').value;
    let scor1=document.getElementById('scor1');
    let scor2=document.getElementById('scor2');
    let irchem_team1=document.getElementById('irchem_team1');
    let irchem_team2=document.getElementById('irchem_team2');
    ScorTeam1+=Number(team1);
    ScorTeam2+=Number(team2);
    irchem_team1.innerHTML='';
    irchem_team2.innerHTML='';
    for (let i = 1; i <= ScorTeam1; i++) {
        if(i%5===0){
            irchem_team1.innerHTML+='<div class="sacara"></div>';
        }else{
            irchem_team1.innerHTML+='<div class="scor"></div>';
        }
    }
    for (let j = 1; j <= ScorTeam2; j++) {
        if(j%5===0){
            irchem_team2.innerHTML+='<div class="sacara"></div>';
        }else{
            irchem_team2.innerHTML+='<div class="scor"></div>';
        }
    }
    scor1.innerHTML=ScorTeam1;
    scor2.innerHTML=ScorTeam2;
    if (ScorTeam1>=21 || ScorTeam2>=21) {
        document.getElementById('name1post').value= name1;
        document.getElementById('name2post').value= name2;
        document.getElementById('scor1post').value= ScorTeam1;
        document.getElementById('scor2post').value= ScorTeam2;
        document.getElementById('time').value= new Date();
        document.getElementById('team1').value="";
        document.getElementById('team2').value="";
        const submitButton = document.getElementById('myButton');
        submitButton.setAttribute('style', 'display: block');
        const irchem = document.getElementById('irchem');
        irchem.setAttribute('style', 'display: none');
      }
};
