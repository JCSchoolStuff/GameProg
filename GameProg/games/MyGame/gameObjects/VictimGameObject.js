class VictimGameObject extends GameObject{
    constructor(){
        super("Victim", ["Investigate"], "midground")
        this.addComponent(new Polygon(), {fillStyle:"blue", points:Assets.circle})
        this.transform.scale = new Vector2(50,50)
        this.seen = false

        //investigation
        this.investigate1 = "So this is the victim, Sir Gil Roundington. Only heir of the Roundington Family."
        this.investigate2 = "Invited some people over for dinner, only to wind up dead not long after."
        this.investigate3 = "... Looks like he suffered a pretty brutal blow. A full-body blow, but only one. Hm... I'll need to measure this."
        this.investigate4 = "Alright, that comes out to... 116 degrees? Bit of an odd angle. Not impossible, though."
        this.investigate5 = "When a shape makes an attack like this, they usually use one of their point. The wound can get bigger if they rotate... so I should be able to exclude anyone who's points have larger degrees."
        this.investigationArray = [this.investigate1, this.investigate2, this.investigate3, this.investigate4, this.investigate5, " "]
    }
}