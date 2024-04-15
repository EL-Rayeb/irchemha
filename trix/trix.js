let scor1=0;
let scor2=0;
let scor3=0;
let scor4=0;
let lp=0;
let pr=1;
function name_players(){
    let name1 = document.getElementById('name1').value;
    let name2 = document.getElementById('name2').value;
    let displayNameElement1 = document.getElementById('np1');
    let displayNameElement2 = document.getElementById('np2');
    displayNameElement2.textContent = name2;
    displayNameElement1.textContent = name1;
    let name3 = document.getElementById('name3').value;
    let name4 = document.getElementById('name4').value;
    let displayNameElement3 = document.getElementById('np3');
    let displayNameElement4 = document.getElementById('np4');
    displayNameElement3.textContent = name3;
    displayNameElement4.textContent = name4;
}

// ============ray coeur=================//
function rc(){
    btn_game(100, 'rc')
}

// ============51=================//
function su(){
    btn_game(100, 'su')

}

// ============dernier plie=================//
function dp(){
    btn_game(100, 'dp')
}

// ============diem=================//
function diem(){
   input_game(20, 'diem', 4);
}

//============dineri=================//
function dineri(){
    input_game(20, 'dineri', 8)
}

function plyet(){
    input_game(10, 'plyet', 8)
}

//============general=================//
function g(){
    lp+=1
    let cartBody1 = document.getElementById('cart-body1');
    let cartBody2 = document.getElementById('cart-body2');
    let cartBody3 = document.getElementById('cart-body3');
    let cartBody4 = document.getElementById('cart-body4');
    let p1=document.getElementById('p1');
    let g1 = document.createElement('input');
    g1.className = "pnum";
    g1.type='number'
    g1.id = "1";
    g1.textContent = 'g';
    p1.appendChild(g1);
    g1.addEventListener('blur', () => {
        let row = document.createElement('tr');
        let col1 = document.createElement('td');
        let scorp1=document.getElementById('1').value;
        if (lp===9) {
            scorp1=scorp1*2;
       }if (pr===1) {
            scor1+=(Number(scorp1)*2);
            col1.textContent = String(Number(scorp1)*2);
        } else {
            scor1+=Number(scorp1);
            col1.textContent = String(Number(scorp1));
        }
        cartBody1.appendChild(row);
        row.appendChild(col1);
        document.getElementById('scor1').innerText=scor1;
        g1.remove();
      }
    );
    let p2=document.getElementById('p2');
    let g2 = document.createElement('input');
    g2.className = "pnum";
    g2.type='number'
    g2.id = "2";
    g2.textContent = 'g';
    p2.appendChild(g2);
    g2.addEventListener('blur', () => {
        let row = document.createElement('tr');
        let col2 = document.createElement('td');
        let scorp2=document.getElementById('2').value;
        if (lp===9) {
            scorp2=scorp2*2;
       }if (pr===2) {
            scor2+=(Number(scorp2)*2);
            col2.textContent = String(Number(scorp2)*2);
        } else {
            scor2+=Number(scorp2);
            col2.textContent = String(Number(scorp2));
        }
        cartBody2.appendChild(row);
        row.appendChild(col2);
        document.getElementById('scor2').innerText=scor2;
        g2.remove();
      }
    );
    let p3=document.getElementById('p3');
    let g3 = document.createElement('input');
    g3.className = "pnum";
    g3.type='number'
    g3.id = "3";
    g3.textContent = 'g';
    p3.appendChild(g3);
    g3.addEventListener('blur', () => {
        let row = document.createElement('tr');
        let col3 = document.createElement('td');
        let scorp3=document.getElementById('3').value;
        if (lp===9) {
            scorp3=scorp3*2;
       }if (pr===3) {
            scor3+=(Number(scorp3)*2);
            col3.textContent = String(Number(scorp3)*2);
        } else {
            scor3+=Number(scorp3);
            col3.textContent = String(Number(scorp3));
        }
        cartBody3.appendChild(row);
        row.appendChild(col3);
        document.getElementById('scor3').innerText=scor3;
        g3.remove();
      }
    );
    let p4=document.getElementById('p4');
    let g4 = document.createElement('input');
    g4.className = "pnum";
    g4.type='number'
    g4.id = "4";
    g4.textContent = 'g';
    p4.appendChild(g4);
    g4.addEventListener('blur', () => {
        let row = document.createElement('tr');
        let col4 = document.createElement('td');
        let scorp4=document.getElementById('4').value;
        if (lp===9) {
            scorp4=scorp4*2;
        }if (pr===4) {
            scor4+=(Number(scorp4)*2);
            col4.textContent = String(Number(scorp4)*2);
        } else {
            scor4+=Number(scorp4);
            col4.textContent = String(Number(scorp4));
        }
        cartBody4.appendChild(row);
        row.appendChild(col4);
        document.getElementById('scor4').innerText=scor4;
        g4.remove();
      }
    );
    document.getElementById('g').disabled = true;
   document.getElementById('g').style.cssText="filter: blur(1px);"
}

//============trix=================//
function trix(){
    var w=1;
    lp+=1;
    if (lp===9) {
        var scor=-200;
        lp=0;
        pr+=1;
    }else{
        var scor=-100;
    }
    let cartBody1 = document.getElementById('cart-body1');
    let cartBody2 = document.getElementById('cart-body2');
    let cartBody3 = document.getElementById('cart-body3');
    let cartBody4 = document.getElementById('cart-body4');
    let p1=document.getElementById('p1');
    let trix1 = document.createElement('button');
    trix1.className = "btn";
    trix1.id = "1";
    trix1.textContent = 'trix';
    p1.appendChild(trix1);
    trix1.addEventListener('click', () => {
        let row = document.createElement('tr');
        let col1 = document.createElement('td');
        if (pr===1) {
            scor1+=scor*2;
            col1.textContent = String(scor*2);
        } else {
            scor1+=scor;
            col1.textContent = String(scor);
        }
        cartBody1.appendChild(row);
        row.appendChild(col1);
        document.getElementById('scor1').innerText=scor1;
        
        if (w===1) {
           if (lp===9) {
             scor=-100;
            }else{
                 scor=-50;
            }
            trix1.remove(); 
            w=2
        }else{
            trix1.remove(); 
            trix2.remove(); 
            trix3.remove(); 
            trix4.remove();  
        }
        
      }
    );
    let p2=document.getElementById('p2');
    let trix2 = document.createElement('button');
    trix2.className = "btn";
    trix2.id = "2";
    trix2.textContent = 'trix';
    p2.appendChild(trix2);
    trix2.addEventListener('click', () => {
        let row = document.createElement('tr');
        let col2 = document.createElement('td');
        if (pr===2) {
            scor2+=(scor*2);
            col2.textContent = String(scor*2);
        } else {
            scor2+=scor;
            col2.textContent = String(scor);
        }
        cartBody2.appendChild(row);
        row.appendChild(col2);
        document.getElementById('scor2').innerText=scor2;
        if (w===1) {
            if (lp===9) {
              scor=-100;
              PassePlayer()
             }else{
                  scor=-50;
             }
             trix2.remove(); 
             w=2
         }else{
             trix1.remove(); 
             trix2.remove(); 
             trix3.remove(); 
             trix4.remove();  
         }
      }
    );
    let p3=document.getElementById('p3');
    let trix3 = document.createElement('button');
    trix3.className = "btn";
    trix3.id = "3";
    trix3.textContent = 'trix';
    p3.appendChild(trix3);
    trix3.addEventListener('click', () => {
        let row = document.createElement('tr');
        let col3 = document.createElement('td');
        if (pr===3) {
            scor3+=(scor*2);
            col3.textContent = String(scor*2);
        } else {
            scor3+=scor;
            col3.textContent = String(scor);
        }
        cartBody3.appendChild(row);
        row.appendChild(col3);
        document.getElementById('scor3').innerText=scor3;
        if (w===1) {
            if (lp===9) {
              scor=-100;
             }else{
                  scor=-50;
             }
             trix4.remove(); 
             w=2
         }else{
             trix1.remove(); 
             trix2.remove(); 
             trix3.remove(); 
             trix4.remove();  
         }
      }
    );
    let p4=document.getElementById('p4');
    let trix4 = document.createElement('button');
    trix4.className = "btn";
    trix4.id = "4";
    trix4.textContent = 'trix';
    p4.appendChild(trix4);
    trix4.addEventListener('click', () => {
        let row = document.createElement('tr');
        let col4 = document.createElement('td');
        if (pr===4) {
            scor4+=(scor*2);
            col4.textContent = String(scor*2);
        } else {
            scor4+=scor;
            col4.textContent = String(scor);
        }
        cartBody4.appendChild(row);
        row.appendChild(col4);
        document.getElementById('scor4').innerText=scor4;
        if (w===1) {
            if (lp===9) {
              scor=-100;
             }else{
                  scor=-50;
             }
             trix4.remove(); 
             w=2
         }else{
             trix1.remove(); 
             trix2.remove(); 
             trix3.remove(); 
             trix4.remove();  
         }
      }
    );
    document.getElementById('trix').disabled = true;
   document.getElementById('trix').style.cssText="filter: blur(1px);"
}
function input_game(scor, j, max){
    let nbg=0;
    lp+=1
    if (lp===9) {
        var scor=scor*2;
        lp=0;
        pr+=1;
        PassePlayer()
    }
    let cartBody1 = document.getElementById('cart-body1');
    let cartBody2 = document.getElementById('cart-body2');
    let cartBody3 = document.getElementById('cart-body3');
    let cartBody4 = document.getElementById('cart-body4');
    let p1=document.getElementById('p1');
    let j1 = document.createElement('input');
    j1.className = "pnum";
    j1.type='number'
    j1.id = "1";
    j1.textContent = j;
    p1.appendChild(j1);
    j1.addEventListener('blur', () => {
        let row = document.createElement('tr');
        let col1 = document.createElement('td');
        let scorp1=document.getElementById('1').value;
        nbg+=Number(scorp1)
        if (pr===1) {
            scor1+=(Number(scorp1)*scor*2);
            col1.textContent = String(Number(scorp1)*scor*2);
        } else {
            scor1+=Number(scorp1)*scor;
            col1.textContent = String(Number(scorp1)*scor);
        }
        cartBody1.appendChild(row);
        row.appendChild(col1);
        document.getElementById('scor1').innerText=scor1;
        j1.remove();
        if (nbg===max) {
            j1.remove();
            j2.remove();
            j3.remove();
            j4.remove(); 
        }
      }
    );
    let p2=document.getElementById('p2');
    let j2 = document.createElement('input');
    j2.className = "pnum";
    j2.type='number'
    j2.id = "2";
    j2.textContent = j;
    p2.appendChild(j2);
    j2.addEventListener('blur', () => {
        let row = document.createElement('tr');
        let col2 = document.createElement('td');
        let scorp2=document.getElementById('2').value;
        nbg+=Number(scorp2)
        if (pr===2) {
            scor2+=(Number(scorp2)*scor*2);
            col2.textContent = String(Number(scorp2)*scor*2);
        } else {
            scor2+=Number(scorp2)*scor;
            col2.textContent = String(Number(scorp2)*scor);
        }
        cartBody2.appendChild(row);
        row.appendChild(col2);
        document.getElementById('scor2').innerText=scor2;
        j2.remove();
        if (nbg===max) {
            j1.remove();
            j2.remove();
            j3.remove();
            j4.remove(); 
        }
      }
    );
    let p3=document.getElementById('p3');
    let j3 = document.createElement('input');
    j3.className = "pnum";
    j3.type='number'
    j3.id = "3";
    j3.textContent = j;
    p3.appendChild(j3);
    j3.addEventListener('blur', () => {
        let row = document.createElement('tr');
        let col3 = document.createElement('td');
        let scorp3=document.getElementById('3').value;
        nbg+=Number(scorp3)
        if (pr===3) {
            scor3+=(Number(scorp3)*scor*2);
            col3.textContent = String(Number(scorp3)*scor*2);
        } else {
            scor3+=Number(scorp3)*scor;
            col3.textContent = String(Number(scorp3)*scor);
        }
        cartBody3.appendChild(row);
        row.appendChild(col3);
        document.getElementById('scor3').innerText=scor3;
        j3.remove();
        if (nbg===max) {
            j1.remove();
            j2.remove();
            j3.remove();
            j4.remove(); 
        }
      }
    );
    let p4=document.getElementById('p4');
    let j4 = document.createElement('input');
    j4.className = "pnum";
    j4.type='number'
    j4.id = "4";
    j4.textContent = j;
    p4.appendChild(j4);
    j4.addEventListener('blur', () => {
        let row = document.createElement('tr');
        let col4 = document.createElement('td');
        let scorp4=document.getElementById('4').value;
        nbg+=Number(scorp4)
        if (pr===4) {
            scor4+=(Number(scorp4)*scor*2);
            col4.textContent = String(Number(scorp4)*scor*2);
        } else {
            scor4+=Number(scorp4)*scor;
            col4.textContent = String(Number(scorp4)*scor);
        }
        cartBody4.appendChild(row);
        row.appendChild(col4);
        document.getElementById('scor4').innerText=scor4;
        j4.remove();
        if (nbg===max) {
            j1.remove();
            j2.remove();
            j3.remove();
            j4.remove(); 
        }
      }
    );
    document.getElementById(`${j}`).disabled = true;
   document.getElementById(`${j}`).style.cssText="filter: blur(1px);"
}
function btn_game(scor, j){
    lp+=1
    if (lp===9) {
        scor=scor*2
        lp=0;
        pr+=1;
        PassePlayer()
    }
    let cartBody1 = document.getElementById('cart-body1');
    let cartBody2 = document.getElementById('cart-body2');
    let cartBody3 = document.getElementById('cart-body3');
    let cartBody4 = document.getElementById('cart-body4');
    let p1=document.getElementById('p1');
    let j1 = document.createElement('button');
    j1.className = "btn";
    j1.textContent = 'j';
    p1.appendChild(j1);
    j1.addEventListener('click', () => {
        let row = document.createElement('tr');
        let col1 = document.createElement('td');        
        if (pr===1) {
            scor1+=(scor*2);

            col1.textContent = String(scor*2);  
        }else{
            scor1+=scor;
            col1.textContent = String(scor);  
        }
        cartBody1.appendChild(row);
        row.appendChild(col1);
        document.getElementById('scor1').innerText=scor1;
        j1.remove();
        j2.remove();
        j3.remove();
        j4.remove(); 
      }
    );
    let p2=document.getElementById('p2');
    let j2 = document.createElement('button');
    j2.className = "btn";
    j2.textContent = 'j';
    p2.appendChild(j2);
    j2.addEventListener('click', () => {
        let row = document.createElement('tr');
        let col2 = document.createElement('td');
        if (pr===2) {
            scor2+=(scor*2);
            col2.textContent = String(scor*2);
        } else {
            scor2+=scor;
            col2.textContent = String(scor);
        }
        cartBody2.appendChild(row);
        row.appendChild(col2);
        document.getElementById('scor2').innerText=scor2;
        j1.remove();
        j2.remove();
        j3.remove();
        j4.remove();
      }
    );
    let p3=document.getElementById('p3');
    let j3 = document.createElement('button');
    j3.className = "btn";
    j3.textContent = 'j';
    p3.appendChild(j3);
    j3.addEventListener('click', () => {
        let row = document.createElement('tr');
        let col3 = document.createElement('td');
        if (pr===3) {
            scor3+=(scor*2);
            col3.textContent = String(scor*2);
        } else {
            scor3+=scor;
            col3.textContent = String(scor); 
        }
        cartBody3.appendChild(row);
        row.appendChild(col3);
        document.getElementById('scor3').innerText=scor3;
        j1.remove();
        j2.remove();
        j3.remove();
        j4.remove();
         
      }
    );
    let p4=document.getElementById('p4');
    let j4 = document.createElement('button');
    j4.className = "btn";
    j4.textContent = 'j';
    p4.appendChild(j4);
    j4.addEventListener('click', () => {
        let row = document.createElement('tr');
        let col4 = document.createElement('td');
        if (pr===4) {
            scor4+=(scor*2);
            col4.textContent=String(scor*2);
        } else {
            scor4+=scor;
            col4.textContent = String(scor);
        }
        cartBody4.appendChild(row);
        row.appendChild(col4);
        document.getElementById('scor4').innerText=scor4;
        j1.remove();
        j2.remove();
        j3.remove();
        j4.remove(); 
      }
    );
    document.getElementById(`${j}`).disabled = true;
   document.getElementById(`${j}`).style.cssText="filter: blur(1px);"
}
function PassePlayer(){
    document.getElementById('rc').disabled = false;
    document.getElementById('rc').style.cssText="filter: none;"
    document.getElementById('diem').disabled = false;
    document.getElementById('diem').style.cssText="filter: none;"
    document.getElementById('plyet').disabled = false;
    document.getElementById('plyet').style.cssText="filter: none;"
    document.getElementById('dp').disabled = false;
    document.getElementById('dp').style.cssText="filter: none;"
    document.getElementById('su').disabled = false;
    document.getElementById('su').style.cssText="filter: none;"
    document.getElementById('g').disabled = false;
    document.getElementById('g').style.cssText="filter: none;"
    document.getElementById('dineri').disabled = false;
    document.getElementById('dineri').style.cssText="filter: none;"
    document.getElementById('trix').disabled = false;
    document.getElementById('trix').style.cssText="filter: none;"
}