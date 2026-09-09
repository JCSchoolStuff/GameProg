class StaticGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new StaticUpdateComponent())
        this.addComponent(new StaticDrawComponent())
    }
}