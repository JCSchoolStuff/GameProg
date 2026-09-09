class FollowerGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new FollowerUpdateComponent())
        this.addComponent(new FollowerDrawComponent())
    }
}