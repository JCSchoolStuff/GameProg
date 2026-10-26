class MainScene extends Scene{
    constructor(){
        super("LightGray")
        Globals.stage = 1
        this.instantiate(new GohnGameObject(), new Vector2(-1050,-1050))
        this.instantiate(new EquityGameObject(), new Vector2(-1050,-2950))
        this.instantiate(new HexGameObject(), new Vector2(1050,-1050))
        this.instantiate(new UlyssesGameObject(), new Vector2(1050,-2950))
        this.instantiate(new VictimGameObject(), new Vector2(0,-3800))
        this.instantiate(new MainGameObject(), new Vector2(0,0))
        this.instantiate(new LevelControllerGameObject(), new Vector2(10,20))
        this.instantiate(new EvidenceOpenGameObject(), new Vector2(100,200))
        //geometry
        
        //entry hall
        this.instantiate(new WallGameObject(), new Vector2(0,212))
        this.instantiate(new ShortWallGameObject(), new Vector2(-495,-282), Math.PI/2)
        this.instantiate(new ShortWallGameObject(), new Vector2(495,-282), Math.PI/2)

        //main hall
        this.instantiate(new WallGameObject(), new Vector2(-1130,-636))
        this.instantiate(new ShortWallGameObject(), new Vector2(-1625,-1126), Math.PI/2)
        this.instantiate(new ShortWallGameObject(), new Vector2(-1625,-1974), Math.PI/2)
        this.instantiate(new ShortWallGameObject(), new Vector2(-1625,-2822), Math.PI/2)
        this.instantiate(new WallGameObject(), new Vector2(-1130,-3316))
        this.instantiate(new WallGameObject(), new Vector2(1130,-636))
        this.instantiate(new ShortWallGameObject(), new Vector2(1625,-1126), Math.PI/2)
        this.instantiate(new ShortWallGameObject(), new Vector2(1625,-1974), Math.PI/2)
        this.instantiate(new ShortWallGameObject(), new Vector2(1625,-2822), Math.PI/2)
        this.instantiate(new WallGameObject(), new Vector2(1130,-3316))
        this.instantiate(new FountainGameObject(), new Vector2(0,-2000))


        //gohn's room
        this.instantiate(new ShortWallGameObject(), new Vector2(-495,-1126), Math.PI/2)
        //door wall
        this.instantiate(new DoorWallGameObject(), new Vector2(-1343,-1480))
        this.instantiate(new DoorWallGameObject(), new Vector2(-777,-1480))
        this.instantiate(new DoorGameObject(), new Vector2(-1060,-1480))

        //equity's room
        this.instantiate(new ShortWallGameObject(), new Vector2(-495,-2962), Math.PI/2)
        //door wall
        this.instantiate(new DoorWallGameObject(), new Vector2(-1343,-2608))
        this.instantiate(new DoorWallGameObject(), new Vector2(-777,-2608))
        this.instantiate(new DoorGameObject(), new Vector2(-1060,-2608))

        //hex's room
        this.instantiate(new ShortWallGameObject(), new Vector2(495,-1126), Math.PI/2)
        //door wall
        this.instantiate(new DoorWallGameObject(), new Vector2(1343,-1480))
        this.instantiate(new DoorWallGameObject(), new Vector2(777,-1480))
        this.instantiate(new DoorGameObject(), new Vector2(1060,-1480))

        //ulysses' room
        this.instantiate(new ShortWallGameObject(), new Vector2(495,-2962), Math.PI/2)
        //door wall
        this.instantiate(new DoorWallGameObject(), new Vector2(1343,-2608))
        this.instantiate(new DoorWallGameObject(), new Vector2(777,-2608))
        this.instantiate(new DoorGameObject(), new Vector2(1060,-2608))

        //victim's room
        this.instantiate(new WallGameObject(), new Vector2(0,-4250))
        this.instantiate(new ShortWallGameObject(), new Vector2(-495,-3810), Math.PI/2)
        this.instantiate(new ShortWallGameObject(), new Vector2(495,-3810), Math.PI/2)
        //door wall
        this.instantiate(new DoorWallGameObject(), new Vector2(-280,-3316))
        this.instantiate(new DoorWallGameObject(), new Vector2(280,-3316))
        this.instantiate(new DetectorGameObject(), new Vector2(0,-3316))
    }
}