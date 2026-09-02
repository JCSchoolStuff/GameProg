class Input{
    //list of keys currently pressed
    static keysDown = []

    //add keys to keysDown
    static keydown(event){
        if(!Input.keysDown.includes(event.code))
            Input.keysDown.push(event.code)
    }

    //remove keys from keysDown
    static keyup(event){
        let index = Input.keysDown.indexOf(event.code)
        Input.keysDown.splice(index,1)
    }
}