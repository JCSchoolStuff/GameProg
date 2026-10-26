class Collider extends Component{
    get points(){
        return this.gameObject.getComponent(Polygon).points
    }
    
    set points(points){
        this._points = points
    }
}