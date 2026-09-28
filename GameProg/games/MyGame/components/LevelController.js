class LevelController extends Component{
    start(){
        //additive load
        //SceneManager.loadScene(GenericLevel, true)
    }

    update(){
        let startButton = GameObject.find("TitleButton")
        if(!startButton){
            //change scene to next level
            SceneManager.loadScene(MainScene)
        }
    }
}