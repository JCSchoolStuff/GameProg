class Vector2{
    x
    y

    //think __init__
    constructor(x, y){
        this.x = x
        this.y = y
    }

    clone(){
        return new Vector2(this.x,this.y)
    }
}