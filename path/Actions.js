import  bandAidCheck  from "../components/ModelRoom.js";

const actions = {
  2: {
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
  3: {
    north: {
      1: (carry) => { carry.push(1, "Não há nada aqui") },
      2: (carry) => { carry.push(2, "Não há nada aqui") },
      3: (carry) => {carry.push(3, "VOCÊ TOMOU UM CHOQUE NA PORTA!\nPERDEU 10 DE VIDA", -10)},
      4: (carry) => { carry.push(1, "Você estando indo para a sala 1") },
    },
    south: {
      1: (carry) => { carry.push(4, "Você estando indo para a sala 4") },
      2: (carry) => { carry.push(2, "VOCÊ TOMOU UM CHOQUE NA PORTA!\nPERDEU 10 DE VIDA", -10)},
      3: (carry,axe) => { checkObject(carry,axe); },
      4: (carry) => { carry.push(4, "Não há nada aqui") },
    },
    left: {
      1: (carry) => { carry.push(2, "Você estando indo para a sala 2") },
      2: (carry) => { carry.push(2, "VOCÊ TOMOU UM CHOQUE NA PORTA!\nPERDEU 10 DE VIDA", -10)},
      3: (carry) => { carry.push(1, "Você estando indo para a sala 1") },
      4: (carry) => {carry.push(4, "VOCÊ TOMOU UM CHOQUE NA PORTA!\nPERDEU 10 DE VIDA", -10) },
    },
    right: {
      1: (carry) => { carry.push(3, "Você estando indo para a sala 3") },
      2: (carry) => { carry.push(1, "Você estando indo para a sala 1") },
      3: (carry) => { carry.push(3, "Não há nada aqui") },
      4: (carry) => { carry.push(4, "Não há nada aqui") },
    }

  }
};

const checkFloor = {
  3 : {
    1: (carry) => {  
      bandAidCheck
      ? carry.push("Dicas: \n 1 + \n 2 o \n 3 s")
      : carry.push('Você achou um curativo!' , true,true)
    },
    2: (carry,axe) => { axe ? carry.push("Não tem nada nesa sala!") : carry.push("Você achou um machado!", true)  },
    3: (carry) => { carry.push("Não tem nada nesa sala!") },
    4: (carry) => { carry.push("Não tem nada nesa sala!") },
  },
  4 : {

  }
}
const checkObject = (carry,axe) => {
  if(axe) {
     carry.push('VOCE CORTOU A ÁRVORE E SUBIRÁ PARA O PRÓXIMO ANDAR!',true,true)
  }else {
    carry.push(3, "Uma árvore gigante está bloqueando sua passagem!"
      + "\nProcure nas salas para encontrar um MACHADO e cortar a árvore.", "Você não passará",true);
  }
  
}
const executeAction = (direct, room, floor,axe) => {
  let carry = []
  if (actions[floor] && actions[floor][direct]) {
    (actions[floor][direct][room])(carry,axe);
  }
  return carry
};

const checking = (floor,room,axe) => {
  console.log(bandAidCheck)
  let carry = []
  if (checkFloor[floor] && checkFloor[floor][room]) {
    (checkFloor[floor][room])(carry,axe);
  }
  return carry
}


export default { executeAction ,checking};