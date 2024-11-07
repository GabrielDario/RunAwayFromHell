

const actions = {
  2 : {
    north: {
      1: (carry) => { carry.push(2, "Você estando indo para a sala 2") },
      2: (carry) => { carry.push(2, "Não há nada aqui") },
      3: (carry) => { carry.push(3, "Não há nada aqui") },
      4: (carry) => { carry.push(5, "Você estando indo para a sala 5") },
      5: (carry) => { carry.push(5, "Não há nada aqui") }
    },
    south: {
      1: (carry) => { carry.push(1, "Não há nada aqui") },
      2: (carry) => { carry.push(1, "Você estando indo para a sala 1") },
      3: (carry) => { carry.push(3, "Não há nada aqui") },
      4: (carry) => { carry.push(4, "Não há nada aqui") },
      5: (carry) => { carry.push(4, "Você estando indo para a sala 4") }
    },
    left: {
      1: (carry) => { carry.push(4, "Você estando indo para a sala 4") },
      2: (carry) => { carry.push(1, "VOCÊ MORREU E VOLTARÁ PARA A SALA 1!") },
      3: (carry) => { carry.push(1, "Você estando indo para a sala 1") },
      4: (carry) => { carry.push(4, "Não há nada aqui") },
      5: (carry) => { carry.push(1, "VOCÊ MORREU E VOLTARÁ PARA A SALA 1!") }
    },
    right: {
      1: (carry) => { carry.push(3, "Você estando indo para a sala 3") },
      2: (carry) => { carry.push(2, 'VOCÊ FOI PARA O PRÓXIMO ANDAR!', true) },
      3: (carry) => { carry.push(1, "VOCÊ MORREU E VOLTARÁ PARA A SALA 1!") },
      4: (carry) => { carry.push(1, "Você estando indo para a sala 1") },
      5: (carry) => { carry.push(1, "VOCÊ MORREU E VOLTARÁ PARA A SALA 1!") }
    }

  },
3 : {
    north: {
      1: (carry) => {  carry.push(1, "Não há nada aqui")},
      2: (carry) => { carry.push(2, "Não há nada aqui") },
      3: (carry) => {  },
      4: (carry) => { carry.push(1, "Você estando indo para a sala 1") },
    },
    south: {
      1: (carry) => { carry.push(4, "Você estando indo para a sala 4") },
      2: (carry) => {  },
      3: (carry) => {checkObject(carry);},
      4: (carry) => { carry.push(4, "Não há nada aqui") },
    },
    left: {
      1: (carry) => { carry.push(2, "Você estando indo para a sala 2") },
      2: (carry) => { },
      3: (carry) => { carry.push(1, "Você estando indo para a sala 1") },
      4: (carry) => {  },
    },
    right: {
      1: (carry) => { carry.push(3, "Você estando indo para a sala 3") },
      2: (carry) => { carry.push(1, "Você estando indo para a sala 1") },
      3: (carry) => { carry.push(3, "Não há nada aqui")},
      4: (carry) => { carry.push(4, "Não há nada aqui") },
    }

  }
};

const checkObject = (carry) => {
  carry.push(3, "Uma árvore gigante está bloqueando sua passagem!"
       + "\nProcure nas salas para encontrar um machado e cortar a árvore.", "Você não passará");
}
const executeAction = (direct, room, floor) => {
  let carry = []
  console.log(`ANDAR ` + floor)
  if (actions[floor] && actions[floor][direct]) {
    (actions[floor][direct][room] || actions[floor][direct].default)(carry);
  }
  return carry
};

export default { executeAction };