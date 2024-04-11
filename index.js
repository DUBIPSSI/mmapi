const playerName = document.getElementById('playerName');

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
const img2 = document.getElementById('img2')

function loadFighter(fighter, nom, poids, force, endurance, pays, link) {
  if (fighter === 'player') {
    if (nom1 && poids1 && force1 && endurance1 && pays1) {
      nom1.textContent = nom;
      poids1.textContent = poids;
      force1.textContent = force;
      endurance1.textContent = endurance;
      pays1.textContent = pays;
    } else {
      console.error("Player elements not found in the DOM.");
    }
  }
  if (fighter === 'opponent') {
    if (nom2 && poids2 && force2 && endurance2 && pays2) {
      nom2.textContent = nom;
      poids2.textContent = poids;
      force2.textContent = force;
      endurance2.textContent = endurance;
      pays2.textContent = pays;
      img2.src = link;
    } else {
      console.error("Opponent elements not found in the DOM.");
    }
  }
}

function toggleDisplayCards() {
  player.classList.toggle('hidden')
  opponent.classList.toggle('hidden');
}

function getRandomFighter(fighters) {
  return fighters[Math.floor(Math.random() * fighters.length)];
}

fetch('fight.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    document.addEventListener('click', (e)=>{
      if (e.target.id === 'start' && playerName.value !== '') {
       nom1.textContent = playerName.value;
        const fighters = data.filter(fighter => fighter.nom !== playerName);
        const opponentFighter = getRandomFighter(fighters);
        console.log(opponentFighter);
        loadFighter('opponent', opponentFighter.nom, opponentFighter.poids, opponentFighter.force, opponentFighter.endurance, opponentFighter.pays, opponentFighter.link);
        toggleDisplayCards();
      }
    })
  })
  .catch(error => {
    console.error('Il y a eu un problème avec l’opération fetch: ', error);
  });