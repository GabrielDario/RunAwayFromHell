const actions = {
    north: {
      1: () => { /* ação para north, room 1 */ },
      2: () => { /* ação para north, room 2 */ },
      3: () => { /* ação para north, room 3 */ },
      4: () => { /* ação para north, room 4 */ },
      default: () => { /* ação padrão para north */ }
    },
    south: {
      1: () => { /* ação para south, room 1 */ },
      2: () => { /* ação para south, room 2 */ },
      3: () => { /* ação para south, room 3 */ },
      4: () => { /* ação para south, room 4 */ },
      default: () => { /* ação padrão para south */ }
    },
    left: {
      1: () => { /* ação para left, room 1 */ },
      2: () => { /* ação para left, room 2 */ },
      3: () => { /* ação para left, room 3 */ },
      4: () => { /* ação para left, room 4 */ },
      default: () => { /* ação padrão para left */ }
    },
    right: {
      1: () => { /* ação para right, room 1 */ },
      2: () => { /* ação para right, room 2 */ },
      3: () => { /* ação para right, room 3 */ },
      4: () => { /* ação para right, room 4 */ },
      default: () => { /* ação padrão para right */ }
    }
  };
  

const executeAction = (direct, room) => {
    console.log(`${direct} ${room}`);
    if (actions[direct]) {
        (actions[direct][room] || actions[direct].default)();
      }
    console.log(actions)
  };
  
  export default { executeAction };