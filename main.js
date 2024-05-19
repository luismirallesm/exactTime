import './style.css'
import Phaser from 'phaser'
import { ScoreScene } from "./scoreScene.js";
import { GameScene } from "./gameScene.js";

const sizes = {
	width: 500,
	height: 500
}


class MainScene extends Phaser.Scene {
	constructor() {
		super("MainScene");
	}
		preload() {
		this.load.image("bg", "/assets/background.jpg");
		this.load.image("button", "/assets/redDot.png");
		//
	}
	create(){
		this.scene.start('GameScene')
		}
	}

const config = {
	type: Phaser.WEBGL,
	width: sizes.width,
	height: sizes.height,
	canvas: gameCanvas,
	scene: [MainScene, GameScene, ScoreScene]
}


const game = new Phaser.Game(config)
