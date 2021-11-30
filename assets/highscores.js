let clearScores = document.getElementById('clear-scores');
let playersList = document.getElementById('players-List');

function getFromLocalStorage() {
  let reference = localStorage.getItem('names');
  if (reference) {
    playerNames = JSON.parse(reference);
    renderPlayers(playerNames);
  }
  console.log(playerNames);
}

// initially get everything from localStorage
getFromLocalStorage();

clearScores.addEventListener('click', function() {
  localStorage.removeItem('names');
  playerNames = [];
});

function renderPlayers(names) {
  names.forEach(function(name) {
    let li = document.createElement('li');
    li.classList.add('player-name');
    li.innerText = name;
    playersList.append(li);
  })
}