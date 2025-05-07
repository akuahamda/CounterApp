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
