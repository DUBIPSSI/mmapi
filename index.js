const player = document.querySelector('.player');
const nom1 = document.getElementById('nom1');
const poids1 = document.getElementById('poids1');
const force1 = document.getElementById('force1');
const endurance1 = document.getElementById('endurance1');
const pays1 = document.getElementById('pays1');

const opponent = document.querySelector('.opponent');
const nom2 = document.getElementById('nom2');
const poids2 = document.getElementById('poids2');
const force2 = document.getElementById('force2');
const endurance2 = document.getElementById('endurance2');
const pays2 = document.getElementById('pays2');

function loadFighter(fighter, nom, poids, force, endurance, pays) {
  if (fighter === 'player') {
    console.log('load player');
  }
  if (fighter === 'opponent') {
    console.log('load opponent');
  }
}

function toggleDisplayCards() {
  player.classList.toggle('hidden')
  opponent.classList.toggle('hidden');
}

fetch('fight.json')
  .then(response => {
    // Vérifie si la requête a réussi
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    document.addEventListener('click', (e)=>{
      if (e.target.id === 'start') {
        toggleDisplayCards();
      }
    })
  })
  .catch(error => {
    console.error('Il y a eu un problème avec l’opération fetch: ', error);
  });