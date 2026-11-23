class DetectorGameObject extends GameObject{
    constructor(){
        super("Detector", ["Investigate"], "foreground")
        this.addComponent(new Polygon(), {fillStyle:"gray", points:Assets.doorFront})
        this.transform.scale = new Vector2(144,141)
        this.seen = false
        
        //investigation
        this.investigate1 = "Hm, this door is different from the other ones... is this some sort of scanner? Was the victim paranoid about something. or...?"
        this.investigate2 = "Either way, it's still worth checking. Looks like I can see the records here."
        this.investigate3 = "9:00 P.M. - Warm"
        this.investigate4 = "9:06 P.M. - Warm"
        this.investigate5 = "9:12 P.M. - Cool"
        this.investigate6 = "9:30 P.M. - Cool"
        this.investigate7 = "9:45 P.M. - Cool"
        this.investigate8 = "9:48 P.M. - Warm"
        this.investigate9 = "9:54 P.M. - Warm"
        this.investigate10 = "10:12 P.M. - Cool"
        this.investigate11 = "10:13 P.M. - Cool"
        this.investigate12 = "... strange. Looks like it checks the color temperature of anyone who passes through the door."
        this.investigate13 = "These are the only records from after the dinner, so these should be the only relevant ones."
        this.investigationArray = [this.investigate1, this.investigate2, this.investigate3, this.investigate4, this.investigate5, this.investigate6, this.investigate7,
            this.investigate8, this.investigate9, this.investigate10, this.investigate11, this.investigate12, this.investigate13, " "]
    }
}