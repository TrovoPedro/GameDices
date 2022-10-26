//gera um numero aleatorio de 1 a 6
const firstRandomNum = Math.floor(Math.random() * 6) + 1;

const firstDiceImage = 'img/dice' + firstRandomNum + '.png';

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);

//gera um numero aleatorio de 1 a 6
const secondRandomNum = Math.floor(Math.random() * 6) + 1;

const secondDiceImage = 'img/dice' + secondRandomNum + '.png';

document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

//logica do vencedor

if (firstRandomNum > secondRandomNum) {
    document.querySelector('h1').innerHTML = 'O vencedor é o jogador 1';
} else if (firstRandomNum < secondRandomNum) {
    document.querySelector('h1').innerHTML = 'O vencedor é o jogador 2';
} else {
    document.querySelector('h1').innerHTML = 'Houve um empate!!';
}
