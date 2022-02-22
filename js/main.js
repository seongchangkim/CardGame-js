const pageContent = document.querySelector('.page-content');
let number = Array(9).fill(" ");
let choiseLife = 3;
let choisedCardNumbers = [];
let count = 1;

const choise = (event) => {
    choiseLife--;
    
    const target = event.target;
    const num = target.lastElementChild;

    target.style.background = 'red';

    const nanNum = Math.floor(Math.random()*3)+1;
    num.innerText = nanNum;
    choisedCardNumbers.push(nanNum);

    const index = choisedCardNumbers.length-2;

    if(choisedCardNumbers.length > 1){
        for(let i= index; i < choisedCardNumbers.length-1; i++){
            for(let j =index+1; j<choisedCardNumbers.length; j++){
                if(choisedCardNumbers[i] === choisedCardNumbers[j]){
                    count++;
                }
            }
        }
    }
    
    if(choisedCardNumbers.length === 3 && count === 3){
        alert(`You're victory`);
        setTimeout(() => location.reload(true), 1000);
    }else if(choiseLife <= 0 && count !== 3){
        alert('Game Over!!');
        setTimeout(() => location.reload(true), 1000);
    }
}

number.forEach(() =>{
    pageContent.innerHTML += `
        <div class='card'>
            <span class="num"></span>
        </div>
    `; 
    
    const card = document.querySelectorAll('.card');
    
    if(card !== []){
        for(let car of card){
            car.addEventListener('click', choise);
        }
    }
});



