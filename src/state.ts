type Play = "piedra" | "papel" | "tijera";
const state = {
    data: {
      playerPlays: [
         "piedra","papel"
      ],
    },
    listeners: [], // los callbacks
    // init(){
    //   const localData = localStorage.getItem("saved-item");
    //   this.setState(JSON.parse(localData))
    // },
    getState() {
      return this.data;
    },
    getComSelection(){
      const possiblePlays = ["piedra","papel","tijera"]
      const comSelection = possiblePlays[Math.floor(Math.random()*possiblePlays.length)];
      console.log("jugada de COM",comSelection)
      return comSelection;
    },
    getPlayerSelection(){
      const lastState = this.getState().playerPlays
      const playerMove = lastState[lastState.length - 1]
      return playerMove
    },
    setState(newState) {
      // modifica this.data (el state) e invoca los callbacks
      this.data = newState;
      for (const cb of this.listeners) {
        cb(newState);
      }
      //localStorage.setItem("saved-item", JSON.stringify(newState))
    },
    subscribe(callback: (any) => any) {
       // recibe callbacks para ser avisados posteriormente
       this.listeners.push(callback);
    },
    savePlayerPlay(play:Play) {
      const currentState = this.getState();
      currentState.data.playerPlays.push(play)
      this.setState(currentState);
      
    }
  };

  export { state }