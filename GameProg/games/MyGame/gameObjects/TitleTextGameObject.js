class TitleTextGameObject extends GameObject{ 
    constructor(){
        super("Title", [], "UI")
        this.addComponent(new TextLabel(), {text:"Detective Star: Murder at Roundington Manor", fillStyle:"white", font:"30px TImes"})
    }
}