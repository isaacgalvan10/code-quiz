let clearScores = document.getElementById('clear-scores');
let playersList = document.getElementById('players-list');
console.log(playersList);
let playerNames;

function getFromLocalStorage() {
  let reference = localStorage.getItem('names');
  if ((reference != null) || (reference != undefined)) {
    playerNames = JSON.parse(reference);
    renderPlayers(playerNames);
  }
};

// initially get everything from localStorage
getFromLocalStorage();

clearScores.addEventListener('click', function() {
  localStorage.removeItem('names');
  playerNames = [];
  playersList.innerHTML = '';
  console.log(playerNames)
});

function renderPlayers(names) {
  console.log(names);
  names.forEach(function(name) {
    let li = document.createElement('li');
    li.classList.add('player-name');
    li.innerText = name;
    console.log(li);
    console.log(playersList);
    playersList.append(li);
  })
}