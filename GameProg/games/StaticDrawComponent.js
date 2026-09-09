class StaticDrawComponent extends Component {
    draw(ctx){
        let position = this.gameObject.components[0].position
        //signalling to context that drawing will happen
        ctx.save()

        //tell browser where center of object is
        ctx.translate(position.x, position.y)

        ctx.lineTo(0, -30)
        ctx.lineTo(30,-30)
        ctx.lineTo(30,-60)
        ctx.lineTo(0,-60)
        ctx.lineTo(0,-30)

        ctx.fillStyle = "green"
        ctx.fill()

        //signalling that drawing is over
        ctx.restore()
    }
}