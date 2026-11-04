class DialogueUpdater extends Component {
    updateDialogue(suspect) {
        let dialogueState = 0

        while (dialogueState < suspect.dialogueArray.length) {
            if (Input.keysDownThisFrame.includes("Space")) {
                this.fillStyle = suspect.dialogueColorArray[dialogueState]
                this.text = suspect.dialogueArray[dialogueState]
                dialogueState += 1
            }
        }
    }
}