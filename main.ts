scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    tiles.placeOnTile(car_driver, tiles.getTileLocation(2, 17))
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverPlayable(true, music.melodyPlayable(music.powerUp), false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    tiles.placeOnTile(car_driver, tiles.getTileLocation(2, 17))
})
let car_driver: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
car_driver = sprites.create(img`
    . . . . . . 8 8 c c 8 8 . . . . 
    . . . . . 8 6 6 6 6 6 6 8 . . . 
    . . . . 6 c 6 6 6 6 6 6 c 6 . . 
    . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
    . . . f 6 6 9 6 6 6 6 6 c 6 f . 
    . . . f 6 6 9 6 6 6 6 6 6 6 f . 
    . . . f 6 6 9 6 6 6 6 6 6 6 f . 
    . . . f 6 c 6 9 9 6 6 6 c 6 f . 
    . . . 8 6 c 8 c c c c 8 c 6 8 . 
    . . . 8 6 8 c b b b b c 8 6 8 . 
    . . . 8 6 8 b b b b b b 8 6 8 . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . . f 8 d 8 8 8 8 8 8 d 8 f . 
    . . . f 8 6 d 8 8 8 8 d 6 8 f . 
    . . . f f 8 8 8 8 8 8 8 8 f f . 
    . . . . f f . . . . . . f f . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(car_driver)
tiles.placeOnTile(car_driver, tiles.getTileLocation(2, 17))
controller.moveSprite(car_driver)
music.play(music.createSong(hex`0078000408020205001c000f0a006400f4010a0000040000000000000000000000000000000002680000000400031b1d1e04000800031b1d1e08000c00031b1d1e0c001000031b1d1e10001400031b1d1e14001800031b1d1e18001c00031b1d1e1c002000031b1d1e20002400031b1d1e24002800031b1d1e28002c00031b1d1e2c003000031b1d1e30003400031b1d1e09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000600140015000106`), music.PlaybackMode.LoopingInBackground)