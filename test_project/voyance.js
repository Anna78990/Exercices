var arrayChoice = [];
'use strict';
{
    var button = document.getElementById('button'); 
    button.onclick = function(){
    const list = document.getElementById("choix");
    if (arrayChoice.length < 5 && choice.value.length !== 0)
    {
        const choice = document.getElementById("choice");
        // var delBtn = document.createElement('button');
        // delBtn.innerText = 'x';
        arrayChoice.push(choice.value);
        var li = document.createElement('li');
        // delBtn.setAttribute('class','del');
        li.setAttribute('id','list');
        li.innerText = choice.value + '  ';
        list.appendChild(li);
        li.appendChild(delBtn);
    }
    }
    const btn = document.getElementById('btn');
    btn.addEventListener('click', ()=>{
        var min = 0 ;
        var max = 4 ;
        
        var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
      if (arrayChoice[a]){
          btn.textContent = arrayChoice[a];
      }else{
          btn.textContent = 'RESTART';
      }


    });
    btn.addEventListener('mousedown', ()=>{
        btn.classList.add('pressed');
    });
    btn.addEventListener('mouseup', ()=>{
        btn.classList.remove('pressed');
    });
    const target = document.getElementsByClassName('del');
    const targetLi = document.getElementsByTagName('li');

    // for (let j = 0; j < target.length; j++) {
    //     target[j].addEventListener('click', () => {
    //         console.log("succeed");
    //         // targetLi[j].style.display = 'none';
    //         // target[j].remove();
    //     }, false);
    // }
}
