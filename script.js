document.body.innerHTML=` <div class="container">
<h1>Calculator</h1>

<input type="text" name="screen" id="input">
<div class="row">
        <button class="button">c</button>
        <button class="button">del</button>
        <button class="button">.</button>
        <button class="button">*</button>
    </div>

    <div class="row">
    <button class="button">7</button>
    <button class="button">8</button>
    <button class="button">9</button>
    <button class="button">/</button>
    </div>
    <div class="row">
        <button class="button">4</button>
        <button class="button">5</button>
        <button class="button">6</button>
        <button class="button">-</button>
    </div>
    <div class="row">
        <button class="button">1</button>
        <button class="button">2</button>
        <button class="button">3</button>
        <button class="button">+</button>
    </div>
    <div class="row">
    <button class="button">0</button>
    <button class="button">00</button>
    <button class="button">=</button>
     </div>

</div>`;

let string= "";
let buttons= document.querySelectorAll('.button');
Array.from(buttons).forEach(button => {
  button.addEventListener('click', (e)=>{
  
    if(e.target.innerText =='='){
        string=eval(string);
        document.querySelector('input').value=string;
    }
    else if(e.target.innerText=="c"){
        string="";
        document.querySelector('input').value=string;
    }
    else if(e.target.innerText=="del"){
        string= string.slice(0,-1);
        document.querySelector('input').value=string;
    }
    else{
    console.log(e.target)
    string= string+e.target.innerHTML;
    document.querySelector('input').value=string;}
 
})

});
    


