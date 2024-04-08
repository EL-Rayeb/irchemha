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
    lp++
    if (lp===10) {
        var scor=200;
    }else{
        var scor=100;
    }
    let cartBody1 = document.getElementById('cart-body1');
    let cartBody2 = document.getElementById('cart-body2');
    let cartBody3 = document.getElementById('cart-body3');
    let cartBody4 = document.getElementById('cart-body4');
    let p1=document.getElementById('p1');
    let rc1 = document.createElement('button');
    rc1.className = "btn";
    rc1.textContent = 'rc';
    p1.appendChild(rc1);
    rc1.addEventListener('click', () => {
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
        rc1.remove();
        rc2.remove();
        rc3.remove();
        rc4.remove(); 
      }
    );
    let p2=document.getElementById('p2');
    let rc2 = document.createElement('button');
    rc2.className = "btn";
    rc2.textContent = 'rc';
    p2.appendChild(rc2);
    rc2.addEventListener('click', () => {
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
        rc1.remove();
        rc2.remove();
        rc3.remove();
        rc4.remove();
      }
    );
    let p3=document.getElementById('p3');
    let rc3 = document.createElement('button');
    rc3.className = "btn";
    rc3.textContent = 'rc';
    p3.appendChild(rc3);
    rc3.addEventListener('click', () => {
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
        rc1.remove();
        rc2.remove();
        rc3.remove();
        rc4.remove();
         
      }
    );
    let p4=document.getElementById('p4');
    let rc4 = document.createElement('button');
    rc4.className = "btn";
    rc4.textContent = 'rc';
    p4.appendChild(rc4);
    rc4.addEventListener('click', () => {
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
        rc1.remove();
        rc2.remove();
        rc3.remove();
        rc4.remove(); 
      }
    );
   document.getElementById('rc').disabled = true;
   document.getElementById('rc').style.cssText="filter: blur(1px);"
}

// ============51=================//
function su(){
    lp+=1
    if (lp===10) {
        var scor=1020;
    }else{
        var scor=510;
    }
    let cartBody1 = document.getElementById('cart-body1');
    let cartBody2 = document.getElementById('cart-body2');
    let cartBody3 = document.getElementById('cart-body3');
    let cartBody4 = document.getElementById('cart-body4');
    let p1=document.getElementById('p1');
    let su1 = document.createElement('button');
    su1.className = "btn";
    su1.textContent = 'su';
    p1.appendChild(su1);
    su1.addEventListener('click', () => {
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
        su1.remove();
        su2.remove();
        su3.remove();
        su4.remove(); 
      }
    );
    let p2=document.getElementById('p2');
    let su2 = document.createElement('button');
    su2.className = "btn";
    su2.textContent = 'su';
    p2.appendChild(su2);
    su2.addEventListener('click', () => {
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
        su1.remove();
        su2.remove();
        su3.remove();
        su4.remove();
      }
    );
    let p3=document.getElementById('p3');
    let su3 = document.createElement('button');
    su3.className = "btn";
    su3.textContent = 'su';
    p3.appendChild(su3);
    su3.addEventListener('click', () => {
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
        su1.remove();
        su2.remove();
        su3.remove();
        su4.remove();
         
      }
    );
    let p4=document.getElementById('p4');
    let su4 = document.createElement('button');
    su4.className = "btn";
    su4.textContent = 'su';
    p4.appendChild(su4);
    su4.addEventListener('click', () => {
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
        su1.remove();
        su2.remove();
        su3.remove();
        su4.remove(); 
      }
    );
    document.getElementById('su').disabled = true;
   document.getElementById('su').style.cssText="filter: blur(1px);"

}

// ============dernier plie=================//
function dp(){
    lp+=1
    if (lp===10) {
        var scor=200;
    }else{
        var scor=100;
    }
    let cartBody1 = document.getElementById('cart-body1');
    let cartBody2 = document.getElementById('cart-body2');
    let cartBody3 = document.getElementById('cart-body3');
    let cartBody4 = document.getElementById('cart-body4');
    let p1=document.getElementById('p1');
    let dp1 = document.createElement('button');
    dp1.className = "btn";
    dp1.textContent = 'dp';
    p1.appendChild(dp1);
    dp1.addEventListener('click', () => {
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
        dp1.remove();
        dp2.remove();
        dp3.remove();
        dp4.remove(); 
      }
    );
    let p2=document.getElementById('p2');
    let dp2 = document.createElement('button');
    dp2.className = "btn";
    dp2.textContent = 'dp';
    p2.appendChild(dp2);
    dp2.addEventListener('click', () => {
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
        dp1.remove();
        dp2.remove();
        dp3.remove();
        dp4.remove();
      }
    );
    let p3=document.getElementById('p3');
    let dp3 = document.createElement('button');
    dp3.className = "btn";
    dp3.textContent = 'dp';
    p3.appendChild(dp3);
    dp3.addEventListener('click', () => {
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
        dp1.remove();
        dp2.remove();
        dp3.remove();
        dp4.remove();
         
      }
    );
    let p4=document.getElementById('p4');
    let dp4 = document.createElement('button');
    dp4.className = "btn";
    dp4.textContent = 'dp';
    p4.appendChild(dp4);
    dp4.addEventListener('click', () => {
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
        dp1.remove();
        dp2.remove();
        dp3.remove();
        dp4.remove(); 
      }
    );
    document.getElementById('dp').disabled = true;
   document.getElementById('dp').style.cssText="filter: blur(1px);"
}

// ============plieyt=================//
function plyet(){
//     lp+=1
//     if (lp===9) {
//         var scor=20;
//     }else{
//         var scor=10;
//     }
//     let cartBody1 = document.getElementById('cart-body1');
//     let cartBody2 = document.getElementById('cart-body2');
//     let cartBody3 = document.getElementById('cart-body3');
//     let cartBody4 = document.getElementById('cart-body4');
//     let p1=document.getElementById('p1');
//     let plyet1 = document.createElement('input');
//     plyet1.className = "pnum";
//     plyet1.type='number'
//     plyet1.id = "1";
//     plyet1.textContent = 'plyet';
//     p1.appendChild(plyet1);
//     plyet1.addEventListener('blur', () => {
//         let row = document.createElement('tr');
//         let col1 = document.createElement('td');
//         let scorp1=document.getElementById('1').value;
//         if (pr===1) {
//             scor1+=(Number(scorp1)*scor*2);
//             col1.textContent = String(Number(scorp1)*scor*2);
//         } else {
//             scor1+=Number(scorp1)*scor;
//             col1.textContent = String(Number(scorp1)*scor);
//         }
//         cartBody1.appendChild(row);
//         row.appendChild(col1);
//         document.getElementById('scor1').innerText=scor1;
//         plyet1.remove();
//       }
//     );
//     let p2=document.getElementById('p2');
//     let plyet2 = document.createElement('input');
//     plyet2.className = "pnum";
//     plyet2.type='number'
//     plyet2.id = "2";
//     plyet2.textContent = 'plyet';
//     p2.appendChild(plyet2);
//     plyet2.addEventListener('blur', () => {
//         let row = document.createElement('tr');
//         let col2 = document.createElement('td');
//         let scorp2=document.getElementById('2').value;
//         if (pr===2) {
//             scor2+=(Number(scorp2)*scor*2);
//             col2.textContent = String(Number(scorp2)*scor*2);
//         } else {
//             scor2+=Number(scorp2)*scor;
//             col2.textContent = String(Number(scorp2)*scor);
//         }
//         cartBody2.appendChild(row);
//         row.appendChild(col2);
//         document.getElementById('scor2').innerText=scor2;
//         plyet2.remove();
//       }
//     );
//     let p3=document.getElementById('p3');
//     let plyet3 = document.createElement('input');
//     plyet3.className = "pnum";
//     plyet3.type='number'
//     plyet3.id = "3";
//     plyet3.textContent = 'plyet';
//     p3.appendChild(plyet3);
//     plyet3.addEventListener('blur', () => {
//         let row = document.createElement('tr');
//         let col3 = document.createElement('td');
//         let scorp3=document.getElementById('3').value;
//         if (pr===3) {
//             scor3+=(Number(scorp3)*scor*2);
//             col3.textContent = String(Number(scorp3)*scor*2);
//         } else {
//             scor3+=Number(scorp3)*scor;
//             col3.textContent = String(Number(scorp3)*scor);
//         }
//         cartBody3.appendChild(row);
//         row.appendChild(col3);
//         document.getElementById('scor3').innerText=scor3;
//         plyet3.remove();
//       }
//     );
//     let p4=document.getElementById('p4');
//     let plyet4 = document.createElement('input');
//     plyet4.className = "pnum";
//     plyet4.type='number'
//     plyet4.id = "4";
//     plyet4.textContent = 'plyet';
//     p4.appendChild(plyet4);
//     plyet4.addEventListener('blur', () => {
//         let row = document.createElement('tr');
//         let col4 = document.createElement('td');
//         let scorp4=document.getElementById('4').value;
//         if (pr===4) {
//             scor4+=(Number(scorp4)*scor*2);
//             col4.textContent = String(Number(scorp4)*scor*2);
//         } else {
//             scor4+=Number(scorp4)*scor;
//             col4.textContent = String(Number(scorp4)*scor);
//         }
//         cartBody4.appendChild(row);
//         row.appendChild(col4);
//         document.getElementById('scor4').innerText=scor4;
//         plyet4.remove();
//       }
//     );
//     document.getElementById('plyet').disabled = true;
//    document.getElementById('plyet').style.cssText="filter: blur(1px);"
input_game(10, 'plyet', 8)
}

// ============diem=================//
function diem(){
    lp+=1
    if (lp===9) {
        var scor=40;
    }else{
        var scor=20;
    }
    let cartBody1 = document.getElementById('cart-body1');
    let cartBody2 = document.getElementById('cart-body2');
    let cartBody3 = document.getElementById('cart-body3');
    let cartBody4 = document.getElementById('cart-body4');
    let p1=document.getElementById('p1');
    let diem1 = document.createElement('input');
    diem1.className = "pnum";
    diem1.type='number'
    diem1.id = "1";
    diem1.textContent = 'diem';
    p1.appendChild(diem1);
    diem1.addEventListener('blur', () => {
        let row = document.createElement('tr');
        let col1 = document.createElement('td');
        let scorp1=document.getElementById('1').value;
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
        diem1.remove();
      }
    );
    let p2=document.getElementById('p2');
    let diem2 = document.createElement('input');
    diem2.className = "pnum";
    diem2.type='number'
    diem2.id = "2";
    diem2.textContent = 'diem';
    p2.appendChild(diem2);
    diem2.addEventListener('blur', () => {
        let row = document.createElement('tr');
        let col2 = document.createElement('td');
        let scorp2=document.getElementById('2').value;
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
        diem2.remove();
      }
    );
    let p3=document.getElementById('p3');
    let diem3 = document.createElement('input');
    diem3.className = "pnum";
    diem3.type='number'
    diem3.id = "3";
    diem3.textContent = 'diem';
    p3.appendChild(diem3);
    diem3.addEventListener('blur', () => {
        let row = document.createElement('tr');
        let col3 = document.createElement('td');
        let scorp3=document.getElementById('3').value;
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
        diem3.remove();
      }
    );
    let p4=document.getElementById('p4');
    let diem4 = document.createElement('input');
    diem4.className = "pnum";
    diem4.type='number'
    diem4.id = "4";
    diem4.textContent = 'diem';
    p4.appendChild(diem4);
    diem4.addEventListener('blur', () => {
        let row = document.createElement('tr');
        let col4 = document.createElement('td');
        let scorp4=document.getElementById('4').value;
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
        diem4.remove();
      }
    );
    document.getElementById('diem').disabled = true;
   document.getElementById('diem').style.cssText="filter: blur(1px);"
}

//============dineri=================//
function dineri(){
    lp+=1
    if (lp===9) {
        var scor=40;
    }else{
        var scor=20;
    }
    let cartBody1 = document.getElementById('cart-body1');
    let cartBody2 = document.getElementById('cart-body2');
    let cartBody3 = document.getElementById('cart-body3');
    let cartBody4 = document.getElementById('cart-body4');
    let p1=document.getElementById('p1');
    let dineri1 = document.createElement('input');
    dineri1.className = "pnum";
    dineri1.type='number'
    dineri1.id = "1";
    dineri1.textContent = 'dineri';
    p1.appendChild(dineri1);
    dineri1.addEventListener('blur', () => {
        let row = document.createElement('tr');
        let col1 = document.createElement('td');
        let scorp1=document.getElementById('1').value;
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
        dineri1.remove();
      }
    );
    let p2=document.getElementById('p2');
    let dineri2 = document.createElement('input');
    dineri2.className = "pnum";
    dineri2.type='number'
    dineri2.id = "2";
    dineri2.textContent = 'dineri';
    p2.appendChild(dineri2);
    dineri2.addEventListener('blur', () => {
        let row = document.createElement('tr');
        let col2 = document.createElement('td');
        let scorp2=document.getElementById('2').value;
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
        dineri2.remove();
      }
    );
    let p3=document.getElementById('p3');
    let dineri3 = document.createElement('input');
    dineri3.className = "pnum";
    dineri3.type='number'
    dineri3.id = "3";
    dineri3.textContent = 'dineri';
    p3.appendChild(dineri3);
    dineri3.addEventListener('blur', () => {
        let row = document.createElement('tr');
        let col3 = document.createElement('td');
        let scorp3=document.getElementById('3').value;
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
        dineri3.remove();
      }
    );
    let p4=document.getElementById('p4');
    let dineri4 = document.createElement('input');
    dineri4.className = "pnum";
    dineri4.type='number'
    dineri4.id = "4";
    dineri4.textContent = 'dineri';
    p4.appendChild(dineri4);
    dineri4.addEventListener('blur', () => {
        let row = document.createElement('tr');
        let col4 = document.createElement('td');
        let scorp4=document.getElementById('4').value;
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
        dineri4.remove();
      }
    );
    document.getElementById('dineri').disabled = true;
   document.getElementById('dineri').style.cssText="filter: blur(1px);"
}

//============general=================//
function g(){
    lp+=1
    if (lp===9) {
        var scor=40;
    }else{
        var scor=20;
    }
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
        if (pr===1) {
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
        if (pr===2) {
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
        if (pr===3) {
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
        if (pr===4) {
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