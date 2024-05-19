import { Scene } from "phaser";
import { GameScene } from "./gameScene.js";

export class ScoreScene extends Scene {
    constructor () {
      super("ScoreScene");
    }

     init(data) {
        this.time = data.time;
    }

    create () {
        // sets game values based on screen size
        this.screenWidth = 500;
        this.screenHeight = 500;
        this.screenCenterX = this.screenWidth / 2;

        // adds Game Over text to middle of screen
        this.gameOverText = this.add.text(this.screenCenterX, this.screenHeight / 2,"Your time was:" + this.time, { fontSize: '32px', fill: 'white' }).setOrigin(0.5, 0.5);

        // adds Tap to Restart text underneath Game Over text
        this.restartText = this.add.text(this.screenCenterX, this.screenHeight / 3 + 200, 'Tap to restart', {fontSize: '15px', fill: '#ffffff'}).setOrigin(0.5, 0.5);

        // adds pulsing animation to restart text

       /* this.tweens.add({
            targets: this.restartText,
            scaleX: 1.5, // Scale it to 150% of its original size
            scaleY: 1.5,
            duration: 1000, // Duration of one pulse
            ease: 'Sine.easeInOut', // Smooth easing
            yoyo: true, // Reverse the tween on completion, creating the "pulse" effect
            repeat: -1 // Repeat forever
        })*/
        this.restartText.setInteractive();
        this.restartText.on('pointerdown', () => {
            this.scene.stop('ScoreScene');
		    this.scene.start('MainScene');
        });
    }

    createRank(){
        //
    }
  }