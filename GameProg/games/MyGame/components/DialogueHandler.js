class DialogueHandler extends Component {
    dialogueState = 0
    update() {
        //collison check
        let myPosition = this.transform.position
        let suspects = GameObject.findGameObjectsWithTag("Suspect")
        let investigate = GameObject.findGameObjectsWithTag("Investigate")
        // let suspect1 = GameObject.find("Equity")
        // let suspect2 = GameObject.find("Ulysses")
        // let suspect3 = GameObject.find("Gohn")
        // let suspect4 = GameObject.find("Hex")
        // let victim = GameObject.find("Victim")

        if(Globals.inDialogue){
                if (this.dialogueState >= this.suspectInDialogue.dialogueArray.length) {
                    this.dialogueBox.destroy()
                    this.dialogueGameObject.destroy()
                    this.dialogueState = 0
                    Globals.inDialogue = false
                }
                else if (Input.keysDownThisFrame.includes("Space")) {
                    this.dialogueGameObject.getComponent(MultiLineTextLabel).fillStyle = this.suspectInDialogue.dialogueColorArray[this.dialogueState]
                    console.log(this.suspectInDialogue.dialogueArray[this.dialogueState])
                    this.dialogueGameObject.getComponent(MultiLineTextLabel).text = this.suspectInDialogue.dialogueArray[this.dialogueState]
                    this.dialogueState += 1
                }
            }
        for (const suspect of suspects) {
            let suspectPosition = suspect.transform.position
            let distance = myPosition.minus(suspectPosition).magnitude
            if(Globals.inDialogue){
                
            }
            else{
            if (distance < 40) {
                if (Input.keysDownThisFrame.includes("Space")) {
                    Globals.inDialogue = true
                    this.dialogueBox = instantiate(new DialogueBoxGameObject(), new Vector2((window.innerWidth) / 2, 600))
                    this.dialogueGameObject = instantiate(new DialogueGameObject(), new Vector2(100, 520))
                    this.suspectInDialogue = suspect
                }
            }
        }
        }
    }
}