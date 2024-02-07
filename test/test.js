let ScorPlayers=[];
let inputPlayers=[];
let namePlayers=[];
const urlParams = new URLSearchParams(window.location.search);
const Fscor = urlParams.get('Fscor');
const numPlayers = urlParams.get('num');
function createScoreInput() {
  // Create a container element
  const container = document.createElement("div");

  // Create the input fields
  for (let i = 0; i < numPlayers; i++) {
    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = `Player ${i + 1} score`;
    container.appendChild(input);
  }

  // Create the history section
  const history = document.createElement("div");
  history.textContent = "Score history:";
  container.appendChild(history);

  // Return the container element
  return container;
}

// Example usage:
const container = createScoreInput(numPlayers);
document.body.appendChild(container);