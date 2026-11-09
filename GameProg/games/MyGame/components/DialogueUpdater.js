class DialogueUpdater extends Component {
    updateDialogue(suspect, dialogueState) {
            this.fillStyle = suspect.dialogueColorArray[dialogueState]
            this.text = suspect.dialogueArray[dialogueState]
            dialogueState += 1
    }
}