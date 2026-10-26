class Input{
    //list of keys currently pressed
    static keysDown = []

    static keysDownThisFrame = []
    
    static keysUpThisFrame = []

    static mouseButtonsDown = []
    static mouseButtonsDownThisFrame = []
    static mouseButtonsUpThisFrame = []

    static mousePosition
    static mousePositionLastFrame
    static mouseDelta

    static mousedown(event){
        if(!Input.mouseButtonsDown.includes(event.button))
            Input.mouseButtonsDown.push(event.button)
            Input.mouseButtonsDownThisFrame.push(event.button)
    }

    static mouseup(event){
        let index = Input.mouseButtonsDown.indexOf(event.button)
        Input.mouseButtonsDown.splice(index,1)
        Input.mouseButtonsUpThisFrame.push(event.button)
    }

    static mousemove(event){
        if(Input.mousePosition){
            Input.mousePositionLastFrame = Input.mousePosition
        }
        Input.mousePosition = new Vector2(event.clientX, event.clientY)
        if(Input.mousePositionLastFrame){
            Input.mouseDelta = Input.mousePosition.minus(Input.mousePositionLastFrame)
        }
    }

    //add keys to keysDown
    static keydown(event){
        if(!Input.keysDown.includes(event.code))
            Input.keysDown.push(event.code)
            Input.keysDownThisFrame.push(event.code)
    }

    //remove keys from keysDown
    static keyup(event){
        //get index of key
        let index = Input.keysDown.indexOf(event.code)
        
        //remove key from index
        Input.keysDown.splice(index,1)
        Input.keysUpThisFrame.push(event.code)
    }

    static update(){
        Input.keysDownThisFrame = []
        Input.keysUpThisFrame = []
        Input.mouseButtonsDownThisFrame = []
        Input.mouseButtonsUpThisFrame = []
    }
}