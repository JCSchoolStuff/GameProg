class Assets{
    static triangle = [
        new Vector2(0,-1),
        new Vector2(0.86654, 0.49911),
        new Vector2(-0.86654, 0.49911)
    ]

    static square = [
        new Vector2(0.70711, -0.70711),
        new Vector2(0.70711, 0.70711),
        new Vector2(-0.70711, 0.70711),
        new Vector2(-0.70711, -0.70711)
    ]

    static pentagon = [
        new Vector2(0,-1),
        new Vector2(0.95244, -0.30472),
        new Vector2(0.57998, 0.81463),
        new Vector2(-0.57998, 0.81463),
        new Vector2(-0.95244, -0.30472)
    ]

    static hexagon = [
        new Vector2(0,-1),
        new Vector2(0.868, -0.49656),
        new Vector2(0.868, 0.49656),
        new Vector2(0,1),
        new Vector2(-0.868, 0.49656),
        new Vector2(-0.868, -0.49656)
    ]

    static star = [
        new Vector2(0,-1), //1
        new Vector2(0.57998, 0.81463), //3
        new Vector2(-0.95244, -0.30472), //5
        new Vector2(0.95244, -0.30472), //2
        new Vector2(-0.57998, 0.81463) //4
    ]
}