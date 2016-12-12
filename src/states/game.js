class Game extends Phaser.State {

  constructor() {
    super();
  }

  create() {
    let chessboard = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'chessboard');
    chessboard.anchor.set(0.5);
    this.input.onDown.add(this.endGame, this);
  }

  update() {

  }

  endGame() {
    this.game.state.start('gameover');
  }

}

export default Game;
