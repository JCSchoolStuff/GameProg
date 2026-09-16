class Polygon extends Component{
    fillStyle = "magenta"
    points = []

    draw(ctx){
        let position = this.transform.position
        //signalling to context that drawing will happen
        ctx.save()

        //tell browser where center of object is
        ctx.translate(position.x, position.y-20)
        ctx.scale(this.transform.scale.x,this.transform.scale.y)
        ctx.rotate(this.transform.rotation)

        ctx.beginPath()
        for(const point of this.points){
            ctx.lineTo(point.x,point.y)
        }

        ctx.fillStyle = this.fillStyle
        ctx.fill()

        //signalling that drawing is over
        ctx.restore()
    }
}