class DialogueHandler extends Component {
    update() {
        //collison check
        let myPosition = this.transform.position
        //let investigateable = GameObject.findGameObjectsWithTag("Investigate")
        let suspect1 = GameObject.find("Equity")
        let suspect2 = GameObject.find("Ulysses")
        let suspect3 = GameObject.find("Gohn")
        let suspect4 = GameObject.find("Hex")
        let victim = GameObject.find("Victim")
        if (suspect1){
            let suspectPosition = suspect1.transform.position
            let distance = myPosition.minus(suspectPosition).magnitude
            if (distance < 40) {
                if (Input.keysDown.includes("Space")) {
                    instantiate(new DialogueBoxGameObject(), new Vector2((window.innerWidth)/2,600))
                    let dialogueGameObject = instantiate(new DialogueGameObject(), new Vector2(100,520))
                    dialogueGameObject.getComponent(TextLabel).fillStyle = "red"
                    dialogueGameObject.getComponent(TextLabel).text = "Hello there, Detective. I'm Equity Lateral, fiancee of the late Mr. Roundington."
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
                    let dialogueGameObject = instantiate(new DialogueGameObject(), new Vector2(100,520))
                    dialogueGameObject.getComponent(TextLabel).fillStyle = "green"
                    dialogueGameObject.getComponent(TextLabel).text = "Thank you ever so for coming, Detective. I was the deceased's attorney. Ulyssess Aire, Esquire."
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
                    let dialogueGameObject = instantiate(new DialogueGameObject(), new Vector2(100,520))
                    dialogueGameObject.getComponent(TextLabel).fillStyle = "orange"
                    dialogueGameObject.getComponent(TextLabel).text = "G-Graham... I promise it wasn't me. You trust me, right, bro?"
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
                    let dialogueGameObject = instantiate(new DialogueGameObject(), new Vector2(100,520))
                    dialogueGameObject.getComponent(TextLabel).fillStyle = "purple"
                    dialogueGameObject.getComponent(TextLabel).text = "Yo yo yo! It's the life of the party, Hex A. Connel! ... wait, murder? Someone died?"
                    Globals.investigation ++
                }
            }
        }
        if (victim){
            let victimPosition = victim.transform.position
            let distance = myPosition.minus(victimPosition).magnitude
            if (distance < 40) {
                if (Input.keysDown.includes("Space")) {
                    instantiate(new DialogueBoxGameObject(), new Vector2((window.innerWidth)/2,600))
                    let dialogueGameObject = instantiate(new DialogueGameObject(), new Vector2(100,520))
                    dialogueGameObject.getComponent(TextLabel).text = "This is the victim, Sir Gil Roundington."
                    Globals.investigation ++
                }
            }
        }
    }
}