class UpdateComponent extends Component {
    position
    speed = 180
    
    update() {
        if (Input.keysDown.includes("ArrowRight") || Input.keysDown.includes("KeyD"))
            this.transform.position.x += Time.deltaTime*this.speed
        if (Input.keysDown.includes("ArrowLeft") || Input.keysDown.includes("KeyA"))
            this.transform.position.x -= Time.deltaTime*this.speed
        if (Input.keysDown.includes("ArrowUp") || Input.keysDown.includes("KeyW"))
            this.transform.position.y -= Time.deltaTime*this.speed
        if (Input.keysDown.includes("ArrowDown") || Input.keysDown.includes("KeyS"))
            this.transform.position.y += Time.deltaTime*this.speed
        Camera.main.transform.position = this.transform.position.clone()
    }

    onCollisionStay(other){
        console.log(other)
    }
}