class EvidenceHandler extends Component {
    evidenceOn = -1

    update(){
        console.log(this.evidenceOn)
        if(Collisions.isCollisionPointPolygon(Input.mousePosition, this.gameObject) && Input.mouseButtonsDownThisFrame.includes(0)){
            this.evidenceOn *= -1
        }
    }
}