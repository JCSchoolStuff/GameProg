class DialogueHandler extends Component {
    update() {
        //collison check
        let myPosition = this.transform.position
        //let investigateable = GameObject.findGameObjectsWithTag("Investigate")
        let suspect1 = GameObject.find("Equity")
        let suspect2 = GameObject.find("Ulysses")
        let suspect3 = GameObject.find("Gohn")
        let suspect4 = GameObject.find("Hex")
        if (suspect1){
            let suspectPosition = suspect1.transform.position
            let distance = myPosition.minus(suspectPosition).magnitude
            if (distance < 40) {
                if (Input.keysDown.includes("Space")) {
                    instantiate(new DialogueBoxGameObject(), new Vector2((window.innerWidth)/2,600))
                    let dialogueGameObject = instantiate(new DialogueGameObject(), new Vector2(500,600))
                    dialogueGameObject.getComponent(TextLabel).fillStyle = "red"
                    Globals.investigation ++
                }
            }
        }
        if (suspect2){
            let suspectPosition = suspect2.transform.position
            let distance = myPosition.minus(suspectPosition).magnitude
            if (distance < 40) {
                if (Input.keysDown.includes("Space")) {
                    instantiate(new DialogueBoxGameObject(), new Vector2((window.innerWidth)/2,600))
                    let dialogueGameObject = instantiate(new DialogueGameObject(), new Vector2(500,600))
                    dialogueGameObject.getComponent(TextLabel).fillStyle = "green"
                    Globals.investigation ++
                }
            }
        }
        if (suspect3){
            let suspectPosition = suspect3.transform.position
            let distance = myPosition.minus(suspectPosition).magnitude
            if (distance < 40) {
                if (Input.keysDown.includes("Space")) {
                    instantiate(new DialogueBoxGameObject(), new Vector2((window.innerWidth)/2,600))
                    let dialogueGameObject = instantiate(new DialogueGameObject(), new Vector2(500,600))
                    dialogueGameObject.getComponent(TextLabel).fillStyle = "orange"
                    Globals.investigation ++
                }
            }
        }
        if (suspect4){
            let suspectPosition = suspect4.transform.position
            let distance = myPosition.minus(suspectPosition).magnitude
            if (distance < 40) {
                if (Input.keysDown.includes("Space")) {
                    instantiate(new DialogueBoxGameObject(), new Vector2((window.innerWidth)/2,600))
                    let dialogueGameObject = instantiate(new DialogueGameObject(), new Vector2(500,600))
                    dialogueGameObject.getComponent(TextLabel).fillStyle = "purple"
                    Globals.investigation ++
                }
            }
        }
    }
}