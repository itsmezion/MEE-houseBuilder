player.onChat("House", function () {
    player.teleport(pos(0, 0, 0))
    blocks.fill(
    PLANKS_OAK,
    pos(0, 0, 0),
    pos(8, 4, 7),
    FillOperation.Outline
    )
    blocks.fill(
    GLASS_PANE,
    pos(8, 2, 1),
    pos(8, 3, 6),
    FillOperation.Replace
    )
    blocks.fill(
    GLASS_PANE,
    pos(1, 2, 0),
    pos(8, 3, 0),
    FillOperation.Replace
    )
    blocks.fill(
    GLASS_PANE,
    pos(8, 2, 7),
    pos(1, 3, 7),
    FillOperation.Replace
    )
    blocks.fill(
    LOG_SPRUCE,
    pos(-3, 5, -3),
    pos(11, 5, 10),
    FillOperation.Replace
    )
    blocks.fill(
    LOG_SPRUCE,
    pos(-2, 6, -2),
    pos(10, 5, 9),
    FillOperation.Replace
    )
    blocks.fill(
    OAK_DOOR,
    pos(0, 1, 3),
    pos(0, 1, 4),
    FillOperation.Replace
    )
    blocks.place(OAK_WOOD_STAIRS, pos(-1, 0, 3))
    blocks.place(OAK_WOOD_STAIRS, pos(-1, 0, 4))
})
