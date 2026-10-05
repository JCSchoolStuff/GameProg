class LevelController extends Component{
    start(){
        //additive load
        SceneManager.loadScene(GenericScene, true)
    }

    update(){
        if(Globals.stage == 0){
            if(Input.keysDown.includes("Space")){
                //change scene to next level
                SceneManager.loadScene(MainScene)
            }
        }
    }
}