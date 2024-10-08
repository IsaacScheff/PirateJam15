export default class NonCombatScene extends Phaser.Scene {
    constructor() {
        super({ key: 'NonCombatScene' });
    }

    preload() {
    }

    create() {
        const buttonStyle = {
            fill: '#ffffff',
            font: '20px Arial',
            align: 'center'
        };

        const createButton = (x, y, text, callback) => {
            let button = this.add.rectangle(x, y, 200, 50, 0x000000, 0.8).setInteractive({ useHandCursor: true });
            this.add.text(x, y, text, buttonStyle).setOrigin(0.5);

            button.on('pointerover', () => { button.setFillStyle(0x555555, 0.8); });
            button.on('pointerout', () => { button.setFillStyle(0x000000, 0.8); });
            button.on('pointerdown', callback);
        };

        createButton(this.cameras.main.centerX, 120, 'Result', () => {
            console.log("Okay!");
            this.scene.start('OptionScene');
        });
    }
}