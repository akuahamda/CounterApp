(function(){
    let count = 0;
    let counterPara = document.getElementById('counter');

   let incrementBtn = document.getElementById('increment').addEventListener('click', () => {
        count++;
        counterPara.textContent = count;
    });

    let decrementBtn = document.getElementById('decrement').addEventListener('click', () => {
        counterPara.textContent = count;
        if(count == 0){
            return false;
        }
        count--;

    });
})();

let btnClicked = () => {
    let btn = document.getElementById('button');
    btn.addEventListener('click', () => {
      document.body.classList.toggle('bg-white');
      document.body.classList.toggle('text-black');
      document.body.classList.toggle('bg-black');
      document.body.classList.toggle('text-white');
    });
  };
  btnClicked();
  
  let changeTime = ()=>{
    let btnChange = document.getElementById('date');
    btnChange.addEventListener('click',()=>{
        let now = new Date();
      let h4Element = document.createElement('h4');
      h4Element.textContent = now;
      document.body.appendChild(h4Element);
      h4Element.style.margin = '10px'
    });
  };
  changeTime();

  let colorPicker = ()=>{
    let inputType = document.querySelector('input');
    let bottonElement = document.getElementById('colorpicker');
    bottonElement.addEventListener('click',()=>{
      document.body.style.backgroundColor = inputType.value;  
    });
  };
  colorPicker();