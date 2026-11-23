class DialogueHandler extends Component {
    dialogueState = 0
    update() {
        //collison check
        let myPosition = this.transform.position
        let suspects = GameObject.findGameObjectsWithTag("Suspect")

        if(Globals.inDialogue){
                if (this.dialogueState >= this.suspectInDialogue.dialogueArray.length) {
                    this.dialogueBox.destroy()
                    this.dialogueGameObject.destroy()
                    this.dialogueState = 0
                    this.suspectInDialogue.talkedTo = true
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