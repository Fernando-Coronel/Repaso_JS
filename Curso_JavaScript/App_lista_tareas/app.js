const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');

addBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    
    const text = input.value;

    if(text !== ''){
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value ="";
    empty.style.display = 'none';
    }
});

function addDeleteBtn(){
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll('li');

        if(items.length ===0){
            empty.style.display = 'block';
        }
    });

    return deleteBtn;
}

// Juego de tic tac toe
const images = [
    '../img/gato1.jpg',
    '../img/gato2.jpg',
    '../img/gato3.png',
    '../img/gato4.jpg',
    '../img/gato5.jpg',
    '../img/gato6.jpg',
    '../img/gato7.jpg',
    '../img/gato8.jpg',
    '../img/gato1.jpg',
    '../img/gato2.jpg',
    '../img/gato3.png',
    '../img/gato4.jpg',
    '../img/gato5.jpg',
    '../img/gato6.jpg',
    '../img/gato7.jpg',
    '../img/gato8.jpg',
  ];
  
  const gameContainer = document.getElementById('game');
  const restartButton = document.getElementById('restart-btn');
  let firstCard = null;
  let secondCard = null;
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function createCard(image) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.image = image;
    const img = document.createElement('img');
    img.src = '../img/Coronel_web.png';
    img.alt = 'Default';
    card.appendChild(img);
    card.addEventListener('click', function() {
      if (this === firstCard) {
        return;
      }
      this.classList.add('flipped');
      if (!firstCard) {
        firstCard = this;
      } else if (!secondCard) {
        secondCard = this;
        checkCards();
      }
    });
    gameContainer.appendChild(card);
  }
  
  function checkCards() {
    const firstImage = firstCard.dataset.image;
    const secondImage = secondCard.dataset.image;
  
    if (firstImage === secondImage) {
      firstCard.removeEventListener('click', createCard);
      secondCard.removeEventListener('click', createCard);
      firstCard = null;
      secondCard = null;
    } else {
      setTimeout(function() {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        firstCard = null;
        secondCard = null;
      }, 1000);
    }
  }
  
  function startGame() {
    gameContainer.innerHTML = '';
    shuffle(images).forEach(function(image) {
      createCard(image);
    });
  }
  
  restartButton.addEventListener('click', startGame);
  startGame();
  
  
  

  


















