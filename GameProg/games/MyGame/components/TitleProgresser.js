class TitleProgresser extends Component{
    update(){
        if(Input.keysDown.includes("Space")){
            this.gameObject.destroy()
        }
    }
}