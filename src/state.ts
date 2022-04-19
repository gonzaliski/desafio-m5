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
  listeners: [], // los callbacks
  // init(){
  //   const localData = localStorage.getItem("saved-item");
  //   this.setState(JSON.parse(localData))
  // },
  getState() {
    return this.data;
  },
  setComSelection() {
    const comSelection = this.getRandomSelection();
    console.log("jugada de COM", comSelection);
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
    console.log("player move:", lastState.playerPlay);

    return lastState.playerPlay;
  },
  setState(newState) {
    // modifica this.data (el state) e invoca los callbacks
    this.data = newState;
    for (const cb of this.listeners) {
      cb(newState);
    }
  
  },
  subscribe(callback: (any) => any) {
    // recibe callbacks para ser avisados posteriormente
    this.listeners.push(callback);
  },
  savePlayerPlay(play: Play) {
    const currentState = this.getState();
    currentState.playerPlay = play;
    console.log("saving player move:", currentState.playerPlay);
    this.setState(currentState);
    this.setComSelection();
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
      console.log(
        "jugador gana tenia:",
        currentState.history.player,
        "victorias"
      );
      currentState.history.player += 1;
      console.log("ahora tiene:", currentState.history.player, "victorias");
    } else {
      console.log("com gana tenia:", currentState.history.com, "victorias");
      currentState.history.com += 1;
      console.log("ahora tiene:", currentState.history.com, "victorias");
    }
    this.setState(currentState);
  },
};

export { state };
