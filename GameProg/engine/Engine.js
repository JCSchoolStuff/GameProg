class Engine {
    static canvas

    static ctx

    static layers = ["default", "UI"]

    static start(nextScene, settings) {
        Engine.canvas = document.querySelector("#canv")
        Engine.ctx = Engine.canvas.getContext("2d")

        //track when keys are pressed and let go
        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup)
        addEventListener("mousedown", Input.mousedown)
        addEventListener("mouseup", Input.mouseup)

        SceneManager.nextScene = nextScene

        if(settings){
            Engine.layers = settings.layers
        }

        //request browser to call gameLoop
        requestAnimationFrame(Engine.gameLoop)
    }

    //refresh the screen
    static gameLoop() {
        //update scene manager
        SceneManager.update()

        //update and draw
        Engine.update()
        Engine.draw()

        Time.update()
        Input.update()
        
        //call gameloop again when browser asks
        requestAnimationFrame(Engine.gameLoop)
    }

    //call game-specific movement function
    static update() {
        SceneManager.currentScene.start()
        SceneManager.currentScene.update()
    }

    static draw() {
        //expand canvas size
        Engine.canvas.width = window.innerWidth
        Engine.canvas.height = window.innerHeight
        SceneManager.currentScene.draw(Engine.ctx)
    }
}