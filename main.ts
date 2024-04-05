controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
    projectile = sprites.createProjectileFromSprite(img`
        2 
        5 
        5 
        `, Spaceship, 0, -100)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 500)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.InBackground)
})
let Badburgur: Sprite = null
let projectile: Sprite = null
let Spaceship: Sprite = null
effects.starField.startScreenEffect()
Spaceship = sprites.create(img`
    . . . . . . . 3 . . . . . . . 
    . . . . . . 3 3 3 . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 5 3 5 3 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 . . . 3 3 3 3 3 . 
    . 3 3 3 3 . . . . . 3 3 3 3 . 
    . 3 3 3 . . . . . . . 3 3 3 . 
    . 3 3 . . . . . . . . . 3 3 . 
    . 3 . . . . . . . . . . . 3 . 
    `, SpriteKind.Player)
Spaceship.setPosition(84, 98)
controller.moveSprite(Spaceship)
info.setLife(3)
game.onUpdateInterval(500, function () {
    Badburgur = sprites.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, SpriteKind.Enemy)
    Badburgur.setPosition(randint(0, scene.screenWidth()), 0)
    Badburgur.follow(Spaceship, 25)
})
