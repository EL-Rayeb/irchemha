let ScorTeam1=0;
let ScorTeam2=0;
let inputField = document.getElementById("team1");
let inputField2 = document.getElementById("team2");
let belote1= document.getElementById("team1");
let belote2= document.getElementById("team2");
const urlParams = new URLSearchParams(window.location.search);
const name1 = urlParams.get('name1');
const name2 = urlParams.get('name2');
const displayNameElementv = document.getElementById('v');
const displayNameElementn = document.getElementById('n');
displayNameElementn.textContent = name1;
displayNameElementv.textContent = name2;
var test1=0;
var test2=0;


function addToInput1(value) {
  inputField.value= value;
  inputField2.value = "-";
}
function addToInput2(value) {
  inputField2.value = value;
  inputField.value = "-";
}
function belotee1(){
  test1=1
}
function belotee2(){
  test2=1
}



function renderCart() {
    let cartBody = document.getElementById('cart-body');
    let team1=document.getElementById('team1').value;
    let team2=document.getElementById('team2').value;
    let scor1=document.getElementById('scor1');
    let scor2=document.getElementById('scor2');
    let row = document.createElement('tr');
    let productCell = document.createElement('td');
    let priceCell = document.createElement('td');
    let teamm1=0;
    let teamm2=0;
    if (team1==="-") {
      ScorTeam2=ScorTeam2+ Number(team2);
      priceCell.textContent = String(team2);
      productCell.textContent = "-" ;
    } 
    if (team2==="-"){
      ScorTeam1=ScorTeam1+ Number(team1) ;
      productCell.textContent = String(team1) ;
      priceCell.textContent = "-";
    }
    if (team1!=="-" && team2!=="-") {
      if (Number(team1)+Number(team2)<=182){
        if ( Number(team1)%10 in [0,1,2,3,4]) {
          teamm1=Number(team1)-(Number(team1)%10);
          if(test1===1){
            productCell.textContent = String(teamm1+20) ;
            ScorTeam1+=20;
          }else{
            productCell.textContent = String(teamm1) ;

          };
        }else {
          teamm1=Number(team1)-(Number(team1)%10)+10;
          if(test1===1){
            productCell.textContent = String(teamm1+20) ;
            ScorTeam1+=20;
          }else{
            productCell.textContent = String(teamm1) ;
          }
        };
        if ( Number(team2)%10 in [0,1,2,3,4]) {
          teamm2=Number(team2)-(Number(team2)%10);
          if(test2===1){
            priceCell.textContent = String(teamm2+20) ;
            ScorTeam2+=20;
          }else{
            priceCell.textContent = String(teamm2) ;
          }
          
        }else {
          teamm2=Number(team2)-(Number(team2)%10)+10;
          if(test2===1){
            priceCell.textContent = String(teamm2+20) ;
            ScorTeam2+=20;
          }else{
            priceCell.textContent = String(teamm2) ;
          }
        };
      }else{
        alert("zid thabet l7seb")
      }
      ScorTeam1=ScorTeam1+ Number(teamm1) ;
      ScorTeam2=ScorTeam2+ Number(teamm2);
      
    }
    
    
    cartBody.appendChild(row);
    row.appendChild(productCell);
    row.appendChild(priceCell);
    scor1.innerHTML=String(ScorTeam1);
    scor2.innerHTML=String(ScorTeam2);
    document.getElementById('team1').value="";
    document.getElementById('team2').value="";

};