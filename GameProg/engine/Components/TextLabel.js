class TextLabel extends Component{
    fillStyle = "black"
    text = "[BLANK]"

    draw(ctx){
        //  let position = this.transform.position
        //signalling to context that drawing will happen
        ctx.save()

        //tell browser where center of object is
        ctx.translate(this.transform.position.x, this.transform.position.y)
        //  ctx.scale(this.transform.scale.x,this.transform.scale.y)
        //  ctx.rotate(this.transform.rotation)

        ctx.fillStyle = this.fillStyle
        //draw text
        ctx.fillText(this.text, 0, 0)

        //signalling that drawing is over
        ctx.restore()
    }
}