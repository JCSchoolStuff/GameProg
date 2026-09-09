class StaticUpdateComponent extends Component {
    position
    
    start(){
        this.gameObject.transform.position = new Vector2(Math.random()*window.innerWidth,Math.random()*window.innerHeight)
    }
    update() {
    }
}