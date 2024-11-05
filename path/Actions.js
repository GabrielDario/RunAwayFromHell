
const actions = {
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
    2: (carry) => {  carry.push(1, "VOCÊ MORREU E VOLTARÁ PARA A SALA 1!")},
    3: (carry) => { carry.push(1, "Você estando indo para a sala 1") },
    4: (carry) => { carry.push(4, "Não há nada aqui") },
    5: (carry) => {  carry.push(1, "VOCÊ MORREU E VOLTARÁ PARA A SALA 1!")}
  },
  right: {
    1: (carry) => { carry.push(3, "Você estando indo para a sala 3") },
    2: (carry) => { carry.push(2, 'VOCÊ FOI PARA O PRÓXIMO ANDAR!',true) },
    3: (carry) => {  carry.push(1, "VOCÊ MORREU E VOLTARÁ PARA A SALA 1!") },
    4: (carry) => { carry.push(1, "Você estando indo para a sala 1") },
    5: (carry) => { carry.push(1, "VOCÊ MORREU E VOLTARÁ PARA A SALA 1!")}
  }
};


const executeAction = (direct, room) => {
  let carry = []
  if (actions[direct]) {
    (actions[direct][room] || actions[direct].default)(carry);
  }
  return carry
};

export default { executeAction };