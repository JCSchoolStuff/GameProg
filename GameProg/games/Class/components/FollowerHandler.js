class FollowerHandler extends Component{
    position

    update() {
        if (Input.keysDown.includes("ArrowRight"))
            this.transform.position.x += 3
        if (Input.keysDown.includes("ArrowLeft"))
            this.transform.position.x -= 3
        if (Input.keysDown.includes("ArrowUp"))
            this.transform.position.y -= 3
        if (Input.keysDown.includes("ArrowDown"))
            this.transform.position.y += 3
        }
}