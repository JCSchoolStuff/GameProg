class DialogueGameObject extends GameObject{ 
    constructor(){
        super("Dialogue")
        this.addComponent(new TextLabel(), {fillStyle:"black", text:"This is placeholder dialogue."})
    }
}