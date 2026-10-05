class TitleButtonGameObject extends GameObject{ 
    constructor(){
        super("TitleButton", [], "UI")
        this.addComponent(new TextLabel(), {text:"Press Space to start!", fillStyle:"white", font:"20px Georgia"})
        this.addComponent(new TitleProgresser())
    }
}