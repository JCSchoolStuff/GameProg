class DialogueGameObject extends GameObject{ 
    constructor(){
        super("Dialogue", [], "UI")
        this.addComponent(new TextLabel(), {fillStyle:"gold", text:"This is placeholder dialogue.", font:"30px Georgia"})
    }
}