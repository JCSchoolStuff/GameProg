class LaserGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new LaserController())
        this.addComponent(new LaserPolygon())

    }
}