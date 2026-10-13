class GenericLevel extends Scene{
    constructor(){
        super()
        let mainGameObject = this.instantiate(new MainGameObject(), new Vector2(0,0))
        this.instantiate(new PointsGameObject(), new Vector2(10,20))
        //Camera.main.backgroundColor = "black"
        let helperGameObject = this.instantiate(new HelperGameObject, new Vector2(50,50))

        helperGameObject.transform.setParent(mainGameObject.transform)

        let sceneTimer = new GameObject("SceneTimer", [], "UI")
        sceneTimer.addComponent(new TextLabel(), {fillStyle:"orange", font:"20px Arial"})
        sceneTimer.addComponent(new SceneTimerController())
        this.instantiate(sceneTimer, new Vector2(10,40))

        let wrappedText = new GameObject("WrappedText)", [], "UI")
        wrappedText.addComponent(new MultiLineTextLabel(), {fillStyle:"DodgerBlue", text:"digdhas sahdkjashdkjhas sjdhasd asdasdadaw ddd ksjdlksjadlj sadjasjdjasd askjdasdkjsad nmv  yep yeo yep jdsajdksajdj as asjdkjdj aldijaoij daxjd aidj askljd asjd sajd aslj djaskl asldj lasjdl asld jsalkjd lasjd lksaj dlkjas ldjsal jlas lkjaslj dlkasj kldjaslkjldaks jjj", font:"30px Times"})
        this.instantiate(wrappedText, new Vector2(10,70))
    }
}