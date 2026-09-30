class PointsGameObject extends GameObject{
    constructor(){
        super("PointsGameObject", [], "UI")
        this.addComponent(new TextLabel(), {fillStyle: "red", text:"0 points", font: "20px Arial"})
        this.addComponent(new PointsController())
    }
}