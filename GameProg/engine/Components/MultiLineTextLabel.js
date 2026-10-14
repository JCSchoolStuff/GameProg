class MultiLineTextLabel extends Component{
    fillStyle = "black"
    text = "[BLANK]"
    font = "10px Arial" //Sizepx Font

    maxWidth = 500

    draw(ctx){
        //  let position = this.transform.position
        //signalling to context that drawing will happen
        ctx.save()

        //tell browser where center of object is
        // ctx.translate(this.transform.position.x, this.transform.position.y)
        // ctx.scale(this.transform.scale.x,this.transform.scale.y)
        // ctx.rotate(this.transform.rotation)

        ctx.fillStyle = this.fillStyle

        ctx.font = this.font
        //draw text

        //measure
        //let measurement = ctx.measureText(this.text)
        let fontHeight = ctx.measureText("").fontBoundingBoxAscent + ctx.measureText("").fontBoundingBoxDescent
        let y = 0
        let safeLine = ""
        let possibleLine = ""

        for(let word of this.text.split(" ")){
            possibleLine = safeLine + word + " "
            if(ctx.measureText(possibleLine).width > this.maxWidth){
                ctx.fillText(safeLine, 0, y)
                y += fontHeight
                safeLine = word + " "
            }
            else{
                safeLine = possibleLine
            }
        }
        ctx.fillText(safeLine, 0, y)

        //ctx.fillText(this.text, 0, 0)

        //signalling that drawing is over
        ctx.restore()
    }
}