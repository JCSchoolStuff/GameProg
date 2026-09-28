class TitleTextGameObject extends GameObject{ 
    constructor(){
        super("Title")
        this.addComponent(new TextLabel(), {text:"Detective Star", fillStyle:"white"})
    }
}