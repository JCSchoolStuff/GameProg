class InvestigationHandler extends Component{
    investigationState = 0
    update(){
        //collison check
        let myPosition = this.transform.position
        let investigate = GameObject.findGameObjectsWithTag("Investigate")

        if(Globals.inInvestigation){
                if (this.investigationState >= this.evidenceInInvestigation.investigationArray.length) {
                    this.dialogueBox.destroy()
                    this.dialogueGameObject.destroy()
                    this.investigationState = 0
                    this.evidenceInInvestigation.seen = true
                    Globals.inInvestigation = false
                }
                else if (Input.keysDownThisFrame.includes("Space")) {
                    this.dialogueGameObject.getComponent(MultiLineTextLabel).fillStyle = "gold"
                    this.dialogueGameObject.getComponent(MultiLineTextLabel).text = this.evidenceInInvestigation.investigationArray[this.investigationState]
                    this.investigationState += 1
                }
            }
        for (const evidence of investigate) {
            let evidencePosition = evidence.transform.position
            let distance = myPosition.minus(evidencePosition).magnitude
            if(Globals.inInvestigation){
                
            }
            else{
            if (distance < 40) {
                if (Input.keysDownThisFrame.includes("Space")) {
                    Globals.inInvestigation = true
                    this.dialogueBox = instantiate(new DialogueBoxGameObject(), new Vector2((window.innerWidth) / 2, 600))
                    this.dialogueGameObject = instantiate(new DialogueGameObject(), new Vector2(100, 520))
                    this.evidenceInInvestigation = evidence
                }
            }
        }
        }
    }
}
