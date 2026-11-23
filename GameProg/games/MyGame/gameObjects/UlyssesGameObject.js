class UlyssesGameObject extends GameObject{
    constructor(){
        super("Ulysses", ["Suspect"], "midground")
        this.addComponent(new Polygon(), {fillStyle:"green", points:Assets.square})
        this.transform.scale = new Vector2(50,50)
        this.suspectColor = "green"
        this.detectiveColor = "gold"
        this.dialogue1 = "Good evening, detective. Ulysses Aire Esq., Roundington family laywer, at your service."
        this.dialogue2 = "Thank you for speaking with me. Have you worked with the family long?"
        this.dialogue3 = "I've been handling the family's affairs for many years. I suppose I shall have to deal with Sir Gil's will, too."
        this.dialogue4 = "Quite. On the topic, could you describe your actions during the murder?"
        this.dialogue5 = "I'm afraid I don't have much to say. I stayed in my room for the majority of the night."
        this.dialogue6 = "Really? Nothing happened at all? No visitors, didn't step outside?"
        this.dialogue7 = "Well... I did wish to speak with the victim concerning a document bearing his signature, but when I knocked at his door, I got no response."
        this.dialogue8 = "Hm... no response. What time was this at?"
        this.dialogue9 = "I did not concern myself with the precise time, just that it was between dinner and when Sir Hex alerted us."
        this.dialogue10 = "I see, so we can't confirm when the victim didn't respond, or why he didn't."
        this.dialogue11 = "My apololgies, perhaps if I'd been more dilligent..."
        this.dialogue12 = "Regardless, is there anything else I can help you with?"
        this.dialogue13 = "Not at this moment. I need to continue my investigation."
        this.dialogue14 = "I wish you luck, detective."
        this.dialogueArray = [this.dialogue1, this.dialogue2, this.dialogue3, this.dialogue4, this.dialogue5, this.dialogue6, this.dialogue7, 
            this.dialogue8, this.dialogue9, this.dialogue10, this.dialogue11, this.dialogue12, this.dialogue13, this.dialogue14, "end"]
        this.dialogueColorArray = [this.suspectColor, this.detectiveColor, this.suspectColor, this.detectiveColor, this.suspectColor, this.detectiveColor, this.suspectColor,
            this.detectiveColor, this.suspectColor, this.detectiveColor, this.suspectColor, this.suspectColor, this.detectiveColor, this.suspectColor, "black"]
    }
}