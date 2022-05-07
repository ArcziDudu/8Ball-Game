const image = document.querySelector('img');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');
const input = document.querySelector('input');
const answersArray = ['być może', 'to zależy', 'tak', 'nie', 'zdecydowanie tak!', 'zdecydowanie nie!', 'trudno powiedzieć']
const buttonOwn = document.querySelector('.own');
const ownBox = document.querySelector('.wrapper__own-answer');
const anulate = document.querySelector('.X');
const addAnswer = document.querySelector('.add');
const neww = document.querySelector('.new')
let options = 7;

const newAnswer = () =>{
  let variable =  neww.value
  answersArray.push(variable);
  options++;
  neww.value = '';
  ownBox.classList.remove('own-animation')
}



const shakeBall = () =>{
    image.classList.add('shake-animation');
   setTimeout(checkInput, 1000);
}

const checkInput = () =>{
    error.textContent = '';
    answer.textContent =  '';
    if(input.value !== '' && input.value.slice(-1) == '?'){
        randomAnswer();
        input.value = '';
        image.classList.remove('shake-animation');
    }else if(input.value.length > 0 && input.value.slice(-1) !== '?'){
        answer.textContent = 'Dodaj na końcu pytajnik ;)'
        image.classList.remove('shake-animation');
    }else{
        error.textContent = 'najpierw zadaj pytanie';
        image.classList.remove('shake-animation');
    }
}
const randomAnswer = () =>{
    const number = Math.floor(Math.random() * options)
    answer.innerHTML = `<span> Odpowiedź:</span> ${answersArray[number]}`
}
image.addEventListener('click', shakeBall)
buttonOwn.addEventListener('click', () =>{
    ownBox.classList.remove('own2-animation');
    ownBox.classList.add('own-animation');
})
anulate.addEventListener('click', () =>{
    ownBox.classList.add('own2-animation');
    ownBox.classList.remove('own-animation');
})
addAnswer.addEventListener('click', newAnswer)








