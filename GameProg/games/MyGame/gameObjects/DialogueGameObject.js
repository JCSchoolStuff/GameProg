class DialogueGameObject extends GameObject{ 
    constructor(){
        super("Dialogue", [], "UI")
        this.addComponent(new MultiLineTextLabel(), {fillStyle:"gold", text:"Press Space to interact!", font:"30px Georgia", maxWidth: 1300})
        this.addComponent(new DialogueUpdater())
    }
}