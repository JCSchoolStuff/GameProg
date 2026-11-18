class Polygon extends Component{
    fillStyle = "magenta"
    points = []
    alpha = 1

    draw(ctx){
        let position = this.transform.position
        //signalling to context that drawing will happen
        ctx.save()

        ctx.globalAlpha = this.alpha

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