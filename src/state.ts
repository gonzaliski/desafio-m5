type Play = "piedra" | "papel" | "tijera";
const state = {
  data: {
    playerPlay: "",
    comPlay: "",
    history: {
      player: 0,
      com: 0,
    },
    hasWon: false,
  },

  getState() {
    return this.data;
  },
  setComSelection() {
    const comSelection = this.getRandomSelection();

    const currentState = this.getState();
    currentState.comPlay = comSelection;
    this.setState(currentState);
  },
  getRandomSelection() {
    const possiblePlays = ["piedra", "papel", "tijera"].filter((p)=>{return p != state.getPlayerSelection()});
    const randomSelection =
      possiblePlays[Math.floor(Math.random() * possiblePlays.length)];
    return randomSelection;
  },
  getComSelection() {
    return this.getState().comPlay;
  },
  getPlayerSelection() {
    const lastState = this.getState();


    return lastState.playerPlay;
  },
  setState(newState) {
    // modifica this.data (el state) e invoca los callbacks
    this.data = newState;
  
  },
  savePlayerPlay(play: Play) {

    const currentState = this.getState();
    
    currentState.playerPlay = play;

    this.setComSelection();
    this.setState(currentState);
  },
  parameters: {},
  saveParams(params) {
    this.parameters = params;
  },
  getParams() {
    return this.parameters;
  },
  whoWins() {    
    const playerMove = this.getPlayerSelection();
    const comMove = this.getComSelection();
    const ganeConTijera = playerMove == "tijera" && comMove == "papel";
    const ganeConPapel = playerMove == "papel" && comMove == "piedra";
    const ganeConPiedra = playerMove == "piedra" && comMove == "tijera";
    const gane = [ganeConPapel, ganeConPiedra, ganeConTijera].includes(true);
    localStorage.setItem("saved-item", JSON.stringify(this.getState()))
    this.getState().hasWon = gane;
    this.saveHistory(gane);
    return gane;
  },
  isDraw(){
    const playerMove = this.getPlayerSelection();
    const comMove = this.getComSelection();
    return playerMove == comMove
  },
  lastResult() {
    return this.getState().hasWon;
  },
  saveHistory(result) {
    const currentState = this.getState();
    if (result) {
 
      currentState.history.player += 1;
      
    } else {
      
      currentState.history.com += 1;
      
    }
    this.setState(currentState);
  },
};

export { state };
