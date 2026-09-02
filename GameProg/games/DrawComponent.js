class DrawComponent extends Component {
    draw(ctx){
        let position = this.gameObject.components[0].position
        //signalling to context that drawing will happen
        ctx.save()

        //tell browser where center of object is
        ctx.translate(position.x, position.y)

        ctx.lineTo(0, -30)
        ctx.lineTo(10, 0)
        ctx.lineTo(40, 0)
        ctx.lineTo(15, 20)
        ctx.lineTo(25, 50)
        ctx.lineTo(0, 30)
        ctx.lineTo(-25, 50)
        ctx.lineTo(-15, 20)
        ctx.lineTo(-40, 0)
        ctx.lineTo(-10, 0)

        ctx.fillStyle = "gold"
        ctx.fill()

        //signalling that drawing is over
        ctx.restore()
    }
}