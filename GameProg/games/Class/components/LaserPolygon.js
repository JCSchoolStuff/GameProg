class LaserPolygon extends Component{
    draw(ctx){
        let position = this.transform.position
        //signalling to context that drawing will happen
        ctx.save()

        //tell browser where center of object is
        ctx.translate(position.x, position.y-20)

        ctx.beginPath()
        ctx.lineTo(0, -10)
        ctx.lineTo(5,5)
        ctx.lineTo(-5,5)

        ctx.fillStyle = "red"
        ctx.fill()

        //signalling that drawing is over
        ctx.restore()
    }
}