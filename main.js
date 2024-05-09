import './style.css'
import Phaser from 'phaser'

const sizes = {
	width: 500,
	height: 500
}


class GameScene extends Phaser.Scene {
	constructor() {
		super("scene-game")
		this.timedEvent;
		this.btn;
		this.guessTime;
		this.timeText;
		this.remainingTime;
		this.countDown;
		this.pressedTime;

	}
	preload() {
		this.load.image("bg", "/assets/background.jpg");
		this.load.image("button", "/assets/redDot.png")
	}

	create() {
		this.add.image(-70, 0, "bg").setOrigin(0, 0);
		this.startButton = this.add.text(sizes.width / 2 - 60, 10, "Start", {
			font: "50px Arial",
			fill: "#ffffff"
		});
		this.countDown = Math.floor(Math.random() * 5) + 3;
		this.btn = this.add.image(220, 425, "button").setScale(0.1).setOrigin(0, 0);
		this.btn.setInteractive();
		this.guessTime = Math.floor(Math.random() * 12) + 3;
		this.timeText = this.add.text(sizes.width / 2-60, 110, this.guessTime + ":00", {
			font: "50px Arial",
			fill: "#ffffff"
		});
		this.timedEvent = this.time.delayedCall(6000 + this.guessTime * 1000, this.gameOver, [], this);
		console.log(this.guessTime + 6);
		console.log(this.timedEvent.getRemainingSeconds());
		this.btn.on("pointerdown", () => {
			this.pressedButton();
		});
		

	}

	update() {
		this.remainingTime = Math.floor(this.timedEvent.getRemainingSeconds());
		var startTime = Math.floor(this.guessTime + 6 - this.remainingTime);
		
		if (startTime < 4) {
			this.timeText.setText(startTime);
		} else {
			if (this.remainingTime < this.countDown) {
				this.timeText.setText(Math.round(this.remainingTime).toString());
			} else {
				this.timeText.setText(this.guessTime + ":00");
			}
		}
	}

	gameOver() {
		this.timeText.setText(this.pressedTime);
	}

	pressedButton() {
		var factor = Math.pow(10, 3); // last number equals the quantity of decimals for the round
		this.pressedTime = this.guessTime + 3 - this.timedEvent.getRemainingSeconds();
		this.pressedTime = Math.round((this.pressedTime + Number.EPSILON) * factor) / factor;
		console.log("pulsado en " + this.pressedTime);
	}
}

const config = {
	type: Phaser.WEBGL,
	width: sizes.width,
	height: sizes.height,
	canvas: gameCanvas,
	scene: [GameScene]
}

const game = new Phaser.Game(config)
