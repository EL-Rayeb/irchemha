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
}
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
}
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
}
function dp(){
    lp+=1
    if (lp===9) {
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
}
function plyet(){
    lp+=1
    if (lp===9) {
        var scor=20;
    }else{
        var scor=10;
    }
    let cartBody1 = document.getElementById('cart-body1');
    let cartBody2 = document.getElementById('cart-body2');
    let cartBody3 = document.getElementById('cart-body3');
    let cartBody4 = document.getElementById('cart-body4');
    let p1=document.getElementById('p1');
    let plyet1 = document.createElement('input');
    plyet1.className = "pnum";
    plyet1.type='number'
    plyet1.id = "1";
    plyet1.textContent = 'plyet';
    p1.appendChild(plyet1);
    plyet1.addEventListener('blur', () => {
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
        plyet1.remove();
      }
    );
    let p2=document.getElementById('p2');
    let plyet2 = document.createElement('input');
    plyet2.className = "pnum";
    plyet2.type='number'
    plyet2.id = "2";
    plyet2.textContent = 'plyet';
    p2.appendChild(plyet2);
    plyet2.addEventListener('blur', () => {
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
        plyet2.remove();
      }
    );
    let p3=document.getElementById('p3');
    let plyet3 = document.createElement('input');
    plyet3.className = "pnum";
    plyet3.type='number'
    plyet3.id = "3";
    plyet3.textContent = 'plyet';
    p3.appendChild(plyet3);
    plyet3.addEventListener('blur', () => {
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
        plyet3.remove();
      }
    );
    let p4=document.getElementById('p4');
    let plyet4 = document.createElement('input');
    plyet4.className = "pnum";
    plyet4.type='number'
    plyet4.id = "4";
    plyet4.textContent = 'plyet';
    p4.appendChild(plyet4);
    plyet4.addEventListener('blur', () => {
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
        plyet4.remove();
      }
    );
}
