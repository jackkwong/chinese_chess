import Boot from './states/boot';
import Game from './states/game';
import Menu from './states/menu';
import Preloader from './states/preloader';
import Gameover from './states/gameover';


// const w = window.innerWidth
// const h = window.innerHeight
const w = 482 + 20 * 2
const h = 543 + 20 * 2
const game = new Phaser.Game(w, h, Phaser.AUTO, 'chinese-chess-game');

game.state.add('boot', new Boot());
game.state.add('game', new Game());
game.state.add('menu', new Menu());
game.state.add('preloader', new Preloader());
game.state.add('gameover', new Gameover());

game.state.start('boot');
