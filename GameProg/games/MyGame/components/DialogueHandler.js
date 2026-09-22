class DialogueHandler extends Component {
    update() {
        //collison check
        let myPosition = this.transform.position
        let mainGameObject = GameObject.find("Main")
        if (mainGameObject) {
            let playerPosition = mainGameObject.transform.position
            let distance = myPosition.minus(playerPosition).magnitude
            if (distance < 20) {
                if (Input.keysDown.includes("Space")) {
                    this.gameObject.destroy()
                    instantiate(new DialogueBoxGameObject(), new Vector2((window.innerWidth)/2,600))
                    instantiate(new DialogueGameObject(), new Vector2(500,600))
                }
            }
        }
    }
}