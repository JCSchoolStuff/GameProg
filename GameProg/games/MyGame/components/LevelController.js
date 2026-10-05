class LevelController extends Component{
    start(){
        //additive load
        SceneManager.loadScene(GenericScene, true)
    }

    update(){
        if(Globals.investigation == 99){
            let startButton = GameObject.find("TitleButton")
            if(!startButton){
                //change scene to next level
                SceneManager.loadScene(MainScene)
            }
        }
    }
}