class DialogueGameObject extends GameObject{ 
    constructor(){
        super("Dialogue", [], "UI")
        this.addComponent(new MultiLineTextLabel(), {fillStyle:"gold", text:"This is placeholder dialogue.", font:"30px Georgia", maxWidth: 1300})
    }
}