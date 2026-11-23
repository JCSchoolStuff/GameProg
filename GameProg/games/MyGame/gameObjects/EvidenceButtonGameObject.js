class EvidenceButtonGameObject extends GameObject{
    constructor(){
        super("EvidenceButtonGameObject", [], "UI")
        this.addComponent(new Polygon(), {fillStyle: 'DarkSlateGray', points: Assets.square})
        this.transform.scale = new Vector2(70,70)
        //this.addComponent(new Collider())
        //this.addComponent(new RigidBody())
        //this.addComponent(new EvidenceButtonGameObjectController)
        //this.transform.scale = new Vector2(1,1)
    }
}
