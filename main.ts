scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sonic.isHittingTile(CollisionDirection.Bottom)) {
        jumps = 0
        if (sonic.image == spin) {
            if (jumping == true) {
                if (tiles.tileAtLocationEquals(sonic.tilemapLocation(), assets.tile`myTile0`)) {
                    rings += 10
                    info.changeScoreBy(10)
                    tiles.setTileAt(sonic.tilemapLocation(), assets.tile`transparency16`)
                    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                }
                if (tiles.tileAtLocationEquals(sonic.tilemapLocation(), assets.tile`myTile10`)) {
                    info.changeLifeBy(1)
                    tiles.setTileAt(sonic.tilemapLocation(), assets.tile`transparency16`)
                    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
                }
            }
        }
    }
    if (sonic.image == spin) {
        if (sonic.isHittingTile(CollisionDirection.Right)) {
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(location.column + 1, location.row), assets.tile`myTile19`)) {
                tiles.setTileAt(location.getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                tiles.setWallAt(location.getNeighboringLocation(CollisionDirection.Right), false)
            }
        }
        jumping = false
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    sonic.setImage(spin)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    rings += 1
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
    game.splash("Phase 2/3 Complete!", "Score " + info.score())
    game.splash("Rings " + rings + "/", "Red Rings " + red_ring_ + "/")
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    game.splash("Labyrinth Zone", "Phase 3/3")
    rings = 0
    red_ring_ = 0
    tiles.setCurrentTilemap(tilemap`level6`)
    restart_location = tiles.getTileLocation(2, 14)
    tiles.placeOnTile(sonic, restart_location)
    sonic.setImage(assets.image`sonicR`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    game.splash("Phase 2/3 Complete!", "Score " + info.score())
    game.splash("Rings " + rings + "/73", "Red Rings " + red_ring_ + "/2")
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    game.splash("Green Hill Zone", "Phase 3/3")
    rings = 0
    red_ring_ = 0
    tiles.setCurrentTilemap(tilemap`level4`)
    restart_location = tiles.getTileLocation(2, 11)
    tiles.placeOnTile(sonic, restart_location)
    sonic.setImage(assets.image`sonicR`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    chaos_emerald += 1
    game.splash("Phase 3/3 Complete!", "Score " + info.score())
    game.splash("Rings " + rings + "/77", "Red Rings " + red_ring_ + "/2")
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    game.splash("Zone Complete!")
    game.splash("Labyrinth Zone", "Phase 1/3")
    rings = 0
    red_ring_ = 0
    tiles.setCurrentTilemap(tilemap`level6`)
    scene.setBackgroundImage(assets.image`labyrinth zone0`)
    restart_location = tiles.getTileLocation(2, 14)
    tiles.placeOnTile(sonic, restart_location)
    sonic.setImage(assets.image`sonicR`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile32`, function (sprite, location) {
    game.splash("Phase 1/3 Complete!", "Score " + info.score())
    game.splash("Rings " + rings + "/133", "Red Rings " + red_ring_ + "/2")
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    game.splash("Labyrinth Zone", "Phase 2/3")
    rings = 0
    red_ring_ = 0
    tiles.setCurrentTilemap(tilemap`level9`)
    restart_location = tiles.getTileLocation(0, 0)
    tiles.placeOnTile(sonic, restart_location)
    sonic.setImage(assets.image`sonicR`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    game.splash("Phase 1/3 Complete!", "Score " + info.score())
    game.splash("Rings " + rings + "/56", "Red Rings " + red_ring_ + "/1")
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    game.splash("Green Hill Zone", "Phase 2/3")
    rings = 0
    red_ring_ = 0
    tiles.setCurrentTilemap(tilemap`Green_Hill_Zone_Phase_2`)
    restart_location = tiles.getTileLocation(1, 11)
    tiles.placeOnTile(sonic, restart_location)
    sonic.setImage(assets.image`sonicR`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumps < 2) {
        music.play(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        jumps += 1
        sonic.ay = spin_hite
        pause(spin_length)
        sonic.ay = 500
        jumping = true
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    die()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    chaos_emerald += 1
    game.splash("Phase 3/3 Complete!", "Score " + info.score())
    game.splash("Rings " + rings + "/", "Red Rings " + red_ring_ + "/")
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    game.splash("Zone Complete!")
    game.splash("Zone", "Phase 1/3")
    rings = 0
    red_ring_ = 0
    tiles.setCurrentTilemap(tilemap`level7`)
    restart_location = tiles.getTileLocation(0, 0)
    tiles.placeOnTile(sonic, restart_location)
    sonic.setImage(assets.image`sonicR`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    game.splash("Phase 2/3 Complete!", "Score " + info.score())
    game.splash("Rings " + rings + "/70", "Red Rings " + red_ring_ + "/2")
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    game.splash("Marble Zone", "Phase 3/3")
    rings = 0
    red_ring_ = 0
    tiles.setCurrentTilemap(tilemap`level11`)
    restart_location = tiles.getTileLocation(2, 2)
    tiles.placeOnTile(sonic, restart_location)
    sonic.setImage(assets.image`sonicR`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    die()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(sonic.image == spin)) {
        sonic.setImage(assets.image`sonicL`)
    }
    music.play(music.melodyPlayable(music.footstep), music.PlaybackMode.InBackground)
})
function die () {
    jumps = 0
    if (sonic.tileKindAt(TileDirection.Center, assets.tile`myTile20`) || sonic.tileKindAt(TileDirection.Center, assets.tile`myTile14`) || sonic.tileKindAt(TileDirection.Center, assets.tile`myTile12`) || sonic.tileKindAt(TileDirection.Center, assets.tile`myTile7`) || (sonic.tileKindAt(TileDirection.Center, assets.tile`myTile5`) || sonic.tileKindAt(TileDirection.Center, assets.tile`myTile8`))) {
        pause(100)
        info.changeLifeBy(-1)
        music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
        tiles.placeOnTile(sonic, restart_location)
        sonic.setImage(assets.image`spin`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    jumps = 0
    sonic.vx = 750
    pause(200)
    sonic.vx = 0
})
info.onCountdownEnd(function () {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    chaos_emerald += 1
    game.splash("Phase 3/3 Complete!", "Score " + info.score())
    game.splash("Rings " + rings + "/80", "Red Rings " + red_ring_ + "/2")
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    game.splash("Zone Complete!")
    rings = 0
    red_ring_ = 0
    game.splash("Marble Zone", "Phase 1/3")
    tiles.setCurrentTilemap(tilemap`level2`)
    scene.setBackgroundImage(assets.image`marble Zone`)
    restart_location = tiles.getTileLocation(2, 2)
    tiles.placeOnTile(sonic, restart_location)
    sonic.setImage(assets.image`sonicR`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    die()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(sonic.image == spin)) {
        sonic.setImage(assets.image`sonicR`)
    }
    music.play(music.melodyPlayable(music.footstep), music.PlaybackMode.InBackground)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    jumps = 0
    sonic.ay = 750
    pause(200)
    sonic.ay = 500
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    die()
})
info.onScore(508, function () {
    game.splash("New High Score!")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    music.play(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    jumps = 0
    sonic.vy = -350
    pause(200)
    sonic.ay = 500
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    die()
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    sonic.setImage(assets.image`sonicR`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    game.splash("Phase 1/3 Complete!", "Score " + info.score())
    game.splash("Rings " + rings + "/88", "Red Rings " + red_ring_ + "/2")
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    game.splash("Marble Zone", "Phase 2/3")
    rings = 0
    red_ring_ = 0
    tiles.setCurrentTilemap(tilemap`level3`)
    restart_location = tiles.getTileLocation(1, 13)
    tiles.placeOnTile(sonic, restart_location)
    sonic.setImage(assets.image`sonicR`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    die()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    info.changeScoreBy(5)
    tiles.setTileAt(location, assets.tile`transparency16`)
    red_rings += 1
    red_ring_ += 1
    music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.InBackground)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile27`)
    restart_location = location
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
    game.showLongText("Check Point!", DialogLayout.Bottom)
})
let red_rings = 0
let chaos_emerald = 0
let red_ring_ = 0
let rings = 0
let jumping = false
let jumps = 0
let restart_location: tiles.Location = null
let sonic: Sprite = null
let spin: Image = null
let spin_length = 0
let spin_hite = 0
info.setLife(3)
scene.setBackgroundImage(assets.image`green hill zone`)
game.splash("Green Hill Zone", "Phase 1/3")
spin_hite = -500
spin_length = 300
spin = assets.image`spin`
sonic = sprites.create(assets.image`sonicR`, SpriteKind.Player)
controller.moveSprite(sonic, 100, 0)
scene.cameraFollowSprite(sonic)
sonic.ay = 500
tiles.setCurrentTilemap(tilemap`Green_Hill_Zone_Phase_1`)
restart_location = tiles.getTileLocation(1, 13)
tiles.placeOnTile(sonic, restart_location)
