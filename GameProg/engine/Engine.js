class Engine {
    static canvas

    static ctx

    static currentScene

    static start() {
        Engine.canvas = document.querySelector("#canv")
        Engine.ctx = Engine.canvas.getContext("2d")

        //track when keys are pressed and let go
        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup)
        
        Engine.currentScene.start()

        //request browser to call gameLoop
        requestAnimationFrame(Engine.gameLoop)
    }

    //refresh the screen
    static gameLoop() {
        Engine.update()
        Engine.draw()

        Time.update()
        
        //call gameloop again when browser asks
        requestAnimationFrame(Engine.gameLoop)
    }

    //call game-specific movement function
    static update() {
        Engine.currentScene.update()
    }

    static draw() {
        //expand canvas size
        Engine.canvas.width = window.innerWidth
        Engine.canvas.height = window.innerHeight
        Engine.currentScene.draw(Engine.ctx)
    }
}