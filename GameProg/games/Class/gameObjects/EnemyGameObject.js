class EnemyGameObject extends GameObject{
    constructor(){
        super("Enemy")
        this.addComponent(new Polygon(), {fillStyle: "blue", points:Assets.triangle})
        this.addComponent(new EnemyController())
        this.addComponent(new Health(), {health:2})
    }
}