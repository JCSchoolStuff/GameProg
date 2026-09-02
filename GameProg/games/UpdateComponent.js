class UpdateComponent extends Component {
    position
    
    start(){
        this.position = new Vector2(50,50)
    }
    update() {
        if (Input.keysDown.includes("ArrowRight"))
            this.position.x += 1
        if (Input.keysDown.includes("ArrowLeft"))
            this.position.x -= 1
        if (Input.keysDown.includes("ArrowUp"))
            this.position.y -= 1
        if (Input.keysDown.includes("ArrowDown"))
            this.position.y += 1
    }
}