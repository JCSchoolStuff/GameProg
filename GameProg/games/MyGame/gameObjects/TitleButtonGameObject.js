class TitleButtonGameObject extends GameObject{ 
    constructor(){
        super("TitleButton")
        this.addComponent(new TextLabel(), {text:"Press Space to start!", fillStyle:"white"})
        this.addComponent(new TitleProgresser())
    }
}