class FollowerUpdateComponent extends Component {
    position
    
    start(){
        this.gameObject.transform.position = new Vector2(50,50)
    }
    update() {
        if (Input.keysDown.includes("ArrowRight"))
            this.gameObject.transform.position.x += 1
        if (Input.keysDown.includes("ArrowLeft"))
            this.gameObject.transform.position.x -= 1
        if (Input.keysDown.includes("ArrowUp"))
            this.gameObject.transform.position.y -= 1
        if (Input.keysDown.includes("ArrowDown"))
            this.gameObject.transform.position.y += 1
    }
}