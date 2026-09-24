class LevelController extends Component{
    start(){
        //additive load
        SceneManager.loadScene(GenericLevel, true)
    }

    update(){
        let enemyGameObject = GameObject.find("Enemy")
        if(!enemyGameObject){
            //change scene to next level
            //SceneManager.nextScene = Level02
            SceneManager.loadScene(Level02)
        }
    }
}