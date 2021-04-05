scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f 5 f f f f . . . . . 
    . f f f f 5 2 5 f f f f . . . . 
    . f f 2 2 2 2 2 2 2 f f f f . . 
    . f f d d d d d d d d f f f . . 
    . f f d e d d d d e d f f f . . 
    . f f d d d d d d d d d f f . . 
    . f f d d d d d d d d d d f . . 
    . f f f f f d d f f f f f f . . 
    . . . . d 2 2 2 2 d . . f . . . 
    . . . . 5 2 2 2 2 5 . f f . . . 
    . . . . d 2 2 2 2 d . f . . . . 
    . . . . . 8 8 8 8 f f f . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . . d . d . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.setBackgroundColor(11)
tiles.setTilemap(tilemap`level2`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairWest)
scene.cameraFollowSprite(mySprite)
