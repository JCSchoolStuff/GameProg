class UpdateComponent extends Component {
    position
    
    start(){
        this.timeSinceLastLaser = 0
    }
    update() {
        this.timeSinceLastLaser += 1
        if (Input.keysDown.includes("ArrowRight"))
            this.transform.position.x += 3
        if (Input.keysDown.includes("ArrowLeft"))
            this.transform.position.x -= 3
        if (Input.keysDown.includes("ArrowUp"))
            this.transform.position.y -= 3
        if (Input.keysDown.includes("ArrowDown"))
            this.transform.position.y += 3

        if (this.timeSinceLastLaser > 10){
            if (Input.keysDown.includes("Space")){
                instantiate(new LaserGameObject(), this.transform.position.clone())
            }
            this.timeSinceLastLaser = 0
        }
    }
}