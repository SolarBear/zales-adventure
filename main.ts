enum ActionKind {
    Attack,
    Walking,
    Idle,
    Jumping
}
enum RadioMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const chest = SpriteKind.create()
    export const sign = SpriteKind.create()
    export const Button = SpriteKind.create()
    export const fleur = SpriteKind.create()
    export const Tronc = SpriteKind.create()
    export const tree = SpriteKind.create()
    export const enemybounce = SpriteKind.create()
    export const element = SpriteKind.create()
    export const element2 = SpriteKind.create()
    export const element3 = SpriteKind.create()
    export const element4 = SpriteKind.create()
    export const person = SpriteKind.create()
    export const hammer = SpriteKind.create()
    export const rock = SpriteKind.create()
    export const house = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.element2, function (sprite, otherSprite) {
    if (compteur_de_vie == 3) {
    	
    } else {
        info.changeLifeBy(1)
        sprites.destroy(otherSprite)
        compteur_de_vie += 1
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (isJumping) {
        if (!(isFacingRight)) {
            for (let valeur of animNotMoving.frames) {
                valeur.flipX()
            }
            for (let valeur2 of animJump.frames) {
                valeur2.flipX()
            }
        }
        if (controller.left.isPressed() || controller.right.isPressed()) {
            console.log("WALKIN")
            animation.setAction(Zale, ActionKind.Idle)
        } else {
            console.log("IDLE")
            animation.setAction(Zale, ActionKind.Idle)
        }
        isJumping = false
    }
})
function creerAnims () {
    animWalking = animation.createAnimation(ActionKind.Walking, 100)
    animWalking.addAnimationFrame(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `)
    animWalking.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `)
    animWalking.addAnimationFrame(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `)
    animWalking.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `)
    animation.attachAnimation(Zale, animWalking)
    animNotMoving = animation.createAnimation(ActionKind.Idle, 100)
    animNotMoving.addAnimationFrame(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `)
    animation.attachAnimation(Zale, animNotMoving)
    animAttack = animation.createAnimation(ActionKind.Attack, 200)
    animAttack.addAnimationFrame(img`
        .......ff...............
        ....ffff2ff.............
        ..ffeeeef2ff............
        .ffeeeeef22ff...........
        .feeeeffeeeef...........
        .fffffee2222ef..........
        fffe222ffffe2f..........
        ffffffffeeefff..........
        fefe44ebf44eef..........
        .fee4d4bfddef...........
        ..feee4dddee.c..........
        ...f2222eeddeccccccc....
        ...f444e44ddecddddd.....
        ...fffffeeee.ccccc......
        ..ffffffff...c..........
        ..fff..ff...............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `)
    animation.attachAnimation(Zale, animAttack)
    animJump = animation.createAnimation(ActionKind.Jumping, 100)
    animJump.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `)
    animation.attachAnimation(Zale, animJump)
}
function Début_du_jeu () {
    scene.setBackgroundColor(9)
    Zale = sprites.create(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(Zale, tiles.getTileLocation(4, 17))
    info.setScore(0)
    info.setLife(3)
    controller.moveSprite(Zale, 100, 0)
    creerAnims()
    scene.cameraFollowSprite(Zale)
    doublejump = false
    Zale.ay = 150
    BouncingEnemies()
    compteur_de_vie = 3
    Makelevel()
    characterAnimations.setCharacterState(Zale, characterAnimations.rule(Predicate.NotMoving))
}
function Makelevel () {
    tiles.placeOnRandomTile(Zale, assets.tile`myTile22`)
    tileUtil.replaceAllTiles(assets.tile`myTile22`, assets.tile`transparency16`)
    liste = [tilemap`levelmap0`, tilemap`niveau1`, tilemap`niveau10`]
    tiles.setCurrentTilemap(liste[niveau])
    BouncingEnemies()
    for (let valeur22 of tiles.getTilesByType(assets.tile`myTile15`)) {
        pièce = sprites.create(assets.image`pièce`, SpriteKind.element)
        animation.runImageAnimation(
        pièce,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 5 5 4 4 4 4 4 5 f . . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . . f 5 5 4 4 4 5 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . f 5 4 4 4 4 5 5 f . . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 4 4 5 5 5 f . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 4 4 5 5 f . . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 4 4 5 5 f . . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . f 5 4 4 4 4 5 5 f . . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 4 4 5 5 5 f . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 5 5 4 4 4 4 4 5 f . . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . . f 5 5 4 4 4 5 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(pièce, valeur22)
        tiles.setTileAt(valeur22, assets.tile`transparency16`)
    }
    for (let valeur222 of tiles.getTilesByType(assets.tile`myTile16`)) {
        coeur = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f . f f f f f f . 
            . f f 3 3 3 3 f f f 3 3 3 3 f f 
            . f 3 3 3 3 3 3 f 3 3 3 3 3 3 f 
            . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
            . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
            . f 3 3 3 3 3 b b b 1 1 1 3 3 f 
            . f 3 3 3 3 b b b b b 3 3 3 3 f 
            . f f 3 3 b b b b b b b 3 3 f f 
            . . f f 3 b b b b b b b 3 f f . 
            . . . f f b b b b b b b f f . . 
            . . . . f f b b b b b f f . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.element2)
        animation.runImageAnimation(
        coeur,
        [img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f . f f f f f f . 
            . f f 3 3 3 3 f f f 3 3 3 3 f f 
            . f 3 3 3 3 3 3 f 3 3 3 3 3 3 f 
            . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
            . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
            . f 3 3 3 3 3 b b b 1 1 1 3 3 f 
            . f 3 3 3 3 b b b b b 3 3 3 3 f 
            . f f 3 3 b b b b b b b 3 3 f f 
            . . f f 3 b b b b b b b 3 f f . 
            . . . f f b b b b b b b f f . . 
            . . . . f f b b b b b f f . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f . f f f f f . . 
            . . f f 3 3 3 f f f 3 3 3 f f . 
            . . f 3 3 3 3 3 f 3 3 3 3 3 f . 
            . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
            . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
            . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
            . . f f 3 3 3 b b b 3 3 3 f f . 
            . . . f f 3 b b b b b 3 f f . . 
            . . . . f f b b b b b f f . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        400,
        true
        )
        tiles.placeOnTile(coeur, valeur222)
        tiles.setTileAt(valeur222, assets.tile`transparency16`)
    }
    for (let valeur3 of tiles.getTilesByType(assets.tile`myTile17`)) {
        perle = sprites.create(img`
            . . . . . b b b b b b . . . . . 
            . . . b b 9 9 9 9 9 9 b b . . . 
            . . b b 9 9 9 9 9 9 9 9 b b . . 
            . b b 9 d 9 9 9 9 9 9 9 9 b b . 
            . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
            b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
            b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
            b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
            b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
            b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
            b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
            . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
            . b d 5 3 3 3 3 3 3 3 d 5 b b . 
            . . b d 5 d 3 3 3 3 5 5 b b . . 
            . . . b b 5 5 5 5 5 5 b b . . . 
            . . . . . b b b b b b . . . . . 
            `, SpriteKind.element3)
        tiles.placeOnTile(perle, valeur3)
        tiles.setTileAt(valeur3, assets.tile`transparency16`)
    }
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (!(isJumping)) {
        animation.setAction(Zale, ActionKind.Idle)
    }
})
function BouncingEnemies () {
    for (let valeur4 of tiles.getTilesByType(assets.tile`myTile9`)) {
        champi = sprites.create(img`
            . . . . . . . . b b b b . . . . 
            . . . . b b b b 2 2 2 2 b . . . 
            . c c b b 1 1 2 2 2 2 2 b b . . 
            c c 2 2 1 1 2 2 2 2 2 1 1 b . . 
            c b 2 2 2 2 2 2 2 2 2 1 1 b . . 
            f b b c c c 2 2 2 2 2 2 2 c . . 
            f b c c c b b b b 2 2 2 2 2 c . 
            f b c c d d d d d b b 2 2 2 2 c 
            . c c d c d d d d d d b c 2 2 c 
            . c b d c d d d c d d c c c 2 f 
            . f d d d d d c d d d c c c b f 
            . f d b b b d d d d d c c c b f 
            . . c d d d d d d d b c b b f f 
            . . f f d d d d c c b f f f f . 
            . f f b b f f c c b d d b f . . 
            . f b b b f f . . b d d d f . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(champi, valeur4)
        tiles.setTileAt(valeur4, assets.tile`transparency16`)
        if (Math.percentChance(50)) {
            champi.vx = 50
        } else {
            champi.vx = -50
        }
        champi.setFlag(SpriteFlag.BounceOnWall, true)
        characterAnimations.loopFrames(
        champi,
        [img`
            . . . . . . . . b b b b . . . . 
            . . . . b b b b 2 2 2 2 b . . . 
            . c c b b 1 1 2 2 2 2 2 b b . . 
            c c b 2 1 1 2 2 2 2 2 1 1 b . . 
            c b 2 2 2 2 2 2 2 2 2 1 1 b . . 
            f b b c c c c b 2 2 2 2 2 c . . 
            f b c c c d d d b b 2 2 2 2 c . 
            f b c b d d d d d d b b 2 2 b c 
            . c b d c d d d d d d b c 2 2 c 
            . c d d c d d d c d d c c c 2 f 
            . f d d d d d c d d d c c c b f 
            . f d b b b d d b f f c c c b f 
            . . c d d d d b d d b f b b f f 
            . . . c d d d b b d d f f f f . 
            . . . f f b b f b b b b . . . . 
            . . . f b b b f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b b b b . . . . 
            . . . . b b b b 2 2 2 2 b . . . 
            . c c b b 1 1 2 2 2 2 2 b b . . 
            c c c 2 1 1 1 2 2 2 2 1 1 b . . 
            c b 2 2 2 2 2 2 2 2 2 1 1 b . . 
            f b b c c c c b b 2 2 1 1 c . . 
            f b c c b d d d d b b 2 2 c c . 
            f b c d d d d d d d b b 2 2 b c 
            . c d d c d d d d d d b b 2 2 c 
            . c d d c d d d c d d b c 2 2 f 
            . f d d d d d c d d d c c c b f 
            . f d b b b b f f d d c c c b f 
            . . c d d b d d b f c c b b f f 
            . . . c d b b d d f c c f f f . 
            . . . . c f b b b b . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b b b b . . . . 
            . . . . b b b b 2 2 2 2 b . . . 
            . c c b 1 1 2 2 2 2 2 2 b b . . 
            c c c 2 1 1 1 2 2 2 2 2 2 b . . 
            c b 2 2 2 2 2 2 2 2 2 1 1 b . . 
            f b b c c c c b 2 2 2 1 1 c . . 
            f b c c c d d d b b 2 2 2 c c . 
            f b c b d d d d d d b b 2 2 b c 
            . c b d d d d d d d d b c 2 2 c 
            . c d c c d d d d d d c c c 2 f 
            . f d d d d d c c d d c c c b f 
            . f d b b b d d d d d c c c b f 
            . . c d d d d d b f f c b b f f 
            . . f b d d d b b d d f f f f . 
            . . f f f c c b d d d f . . . . 
            `,img`
            . . . . . . . . b b b b . . . . 
            . . . . b b b b 2 2 2 2 b . . . 
            . c c b b 1 1 2 2 2 2 2 b b . . 
            c c 2 2 1 1 2 2 2 2 2 1 1 b . . 
            c b 2 2 2 2 2 2 2 2 2 1 1 b . . 
            f b b c c c 2 2 2 2 2 2 2 c . . 
            f b c c c b b b b 2 2 2 2 2 c . 
            f b c c d d d d d b b 2 2 2 2 c 
            . c c d c d d d d d d b c 2 2 c 
            . c b d c d d d c d d c c c 2 f 
            . f d d d d d c d d d c c c b f 
            . f d b b b d d d d d c c c b f 
            . . c d d d d d d d b c b b f f 
            . . f f d d d d c c b f f f f . 
            . f f b b f f c c b d d b f . . 
            . f b b b f f . . b d d d f . . 
            `],
        100,
        characterAnimations.rule(Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
        champi,
        [img`
            . . . . b b b b . . . . . . . . 
            . . . b 2 2 2 2 b b b b . . . . 
            . . b b 2 2 2 2 2 1 1 b b c c . 
            . . b 1 1 2 2 2 2 2 1 1 2 b c c 
            . . b 1 1 2 2 2 2 2 2 2 2 2 b c 
            . . c 2 2 2 2 2 b c c c c b b f 
            . c 2 2 2 2 b b d d d c c c b f 
            c b 2 2 b b d d d d d d b c b f 
            c 2 2 c b d d d d d d c d b c . 
            f 2 c c c d d c d d d c d d c . 
            f b c c c d d d c d d d d d f . 
            f b c c c f f b d d b b b d f . 
            f f b b f b d d b d d d d c . . 
            . f f f f d d b b d d d c . . . 
            . . . . b b b b f b b f f . . . 
            . . . . . . . f f b b b f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . b b b b . . . . . . . . 
            . . . b 2 2 2 2 b b b b . . . . 
            . . b b 2 2 2 2 2 1 1 b b c c . 
            . . b 1 1 2 2 2 2 1 1 1 2 c c c 
            . . b 1 1 2 2 2 2 2 2 2 2 2 b c 
            . . c 1 1 2 2 b b c c c c b b f 
            . c c 2 2 b b d d d d b c c b f 
            c b 2 2 b b d d d d d d d c b f 
            c 2 2 b b d d d d d d c d d c . 
            f 2 2 c b d d c d d d c d d c . 
            f b c c c d d d c d d d d d f . 
            f b c c c d d f f b b b b d f . 
            f f b b c c f b d d b d d c . . 
            . f f f c c f d d b b d c . . . 
            . . . . . . b b b b f c . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . b b b b . . . . . . . . 
            . . . b 2 2 2 2 b b b b . . . . 
            . . b b 2 2 2 2 2 2 1 1 b c c . 
            . . b 2 2 2 2 2 2 1 1 1 2 c c c 
            . . b 1 1 2 2 2 2 2 2 2 2 2 b c 
            . . c 1 1 2 2 2 b c c c c b b f 
            . c c 2 2 2 b b d d d c c c b f 
            c b 2 2 b b d d d d d d b c b f 
            c 2 2 c b d d d d d d d d b c . 
            f 2 c c c d d d d d d c c d c . 
            f b c c c d d c c d d d d d f . 
            f b c c c d d d d d b b b d f . 
            f f b b c f f b d d d d d c . . 
            . f f f f d d b b d d d b f . . 
            . . . . f d d d b c c f f f . . 
            `,img`
            . . . . b b b b . . . . . . . . 
            . . . b 2 2 2 2 b b b b . . . . 
            . . b b 2 2 2 2 2 1 1 b b c c . 
            . . b 1 1 2 2 2 2 2 1 1 2 2 c c 
            . . b 1 1 2 2 2 2 2 2 2 2 2 b c 
            . . c 2 2 2 2 2 2 2 c c c b b f 
            . c 2 2 2 2 2 b b b b c c c b f 
            c 2 2 2 2 b b d d d d d c c b f 
            c 2 2 c b d d d d d d c d c c . 
            f 2 c c c d d c d d d c d b c . 
            f b c c c d d d c d d d d d f . 
            f b c c c d d d d d b b b d f . 
            f f b b c b d d d d d d d c . . 
            . f f f f b c c d d d d f f . . 
            . . f b d d b c c f f b b f f . 
            . . f d d d b . . f f b b b f . 
            `],
        100,
        characterAnimations.rule(Predicate.FacingRight)
        )
    }
    for (let valeur5 of tiles.getTilesByType(assets.tile`myTile10`)) {
        ennemirebondir = sprites.create(img`
            . . . . . 3 3 3 3 3 . . . . . . 
            . . . . . 3 3 3 3 3 . . . . . . 
            . . . . . 3 3 3 3 3 . . . . . . 
            . . . . . 3 3 3 3 3 . . . . . . 
            . . . . . 3 3 3 3 3 . . . . . . 
            . . . . . 3 3 3 3 3 . . . . . . 
            . . . . . 3 3 3 3 3 . . . . . . 
            . . . . . 3 3 3 3 3 . . . . . . 
            . . . . . 3 3 3 3 3 . . . . . . 
            . . . . . 3 3 3 3 3 . . . . . . 
            . . . . . 3 3 3 3 3 . . . . . . 
            . . . . . 3 3 3 3 3 . . . . . . 
            . . . . . 3 3 3 3 3 . . . . . . 
            . . . . . 3 3 3 3 3 . . . . . . 
            . . . . . 3 3 3 3 3 . . . . . . 
            . . . . . 3 3 3 3 3 . . . . . . 
            `, SpriteKind.enemybounce)
        tiles.placeOnTile(ennemirebondir, valeur5)
        tiles.setTileAt(valeur5, assets.tile`transparency16`)
        ennemirebondir.setFlag(SpriteFlag.Invisible, true)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    leaveIdle()
    if (!(isJumping)) {
        if (!(isFacingRight)) {
            for (let valeur6 of animJump.frames) {
                valeur6.flipX()
            }
        }
        animation.setAction(Zale, ActionKind.Jumping)
        Zale.vy += -100
        music.play(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        isJumping = true
        doublejump = true
    } else if (doublejump) {
        Zale.vy += -70
        music.play(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        doublejump = false
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    if (controller.up.isPressed()) {
        niveau += 1
        scene.setBackgroundColor(9)
        Makelevel()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.element, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    leaveIdle()
    if (!(isAttacking)) {
        if (!(isFacingRight)) {
            for (let valeur62 of animAttack.frames) {
                valeur62.flipX()
            }
        }
        if (isFacingRight) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . 1 b . . 
                . . . . . . . . . . . . 1 b . . 
                . . . . . . . . . . . . . b . . 
                . . . . . . . . . . . . 1 b . . 
                . . . . . . . . . . . . . b . . 
                . . . . . . . . . . . . 1 b . . 
                . . . . . . . . . . . . b . . . 
                . . . . . . . . . . 1 . b . . . 
                . . . . . . . . . . . b . . . . 
                . . . . . . . . . 1 b . . . . . 
                . . . . . . . . . b . . . . . . 
                . . . . . . . . b . . . . . . . 
                . . 1 . 1 . b b . . . . . . . . 
                b b b b b b 1 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Zale, 200, 0)
        } else {
            projectile = sprites.createProjectileFromSprite(img`
                . . b 1 . . . . . . . . . . . . 
                . . b 1 . . . . . . . . . . . . 
                . . b . . . . . . . . . . . . . 
                . . b 1 . . . . . . . . . . . . 
                . . b . . . . . . . . . . . . . 
                . . b 1 . . . . . . . . . . . . 
                . . . b . . . . . . . . . . . . 
                . . . b . 1 . . . . . . . . . . 
                . . . . b . . . . . . . . . . . 
                . . . . . b 1 . . . . . . . . . 
                . . . . . . b . . . . . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . . . . b b . 1 . 1 . . 
                . . . . . . . . . 1 b b b b b b 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Zale, -200, 0)
        }
        animation.setAction(Zale, ActionKind.Attack)
        pause(200)
        if (!(isFacingRight)) {
            for (let valeur622 of animAttack.frames) {
                valeur622.flipX()
            }
        }
        sprites.destroy(projectile)
        isAttacking = false
        animation.setAction(Zale, ActionKind.Idle)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    leaveIdle()
    if (!(isFacingRight)) {
        for (let valeur63 of animWalking.frames) {
            valeur63.flipX()
        }
        isFacingRight = true
    }
    if (!(isJumping)) {
        animation.setAction(Zale, ActionKind.Walking)
    }
})
function leaveIdle () {
    if (!(isFacingRight)) {
        for (let valeur632 of animNotMoving.frames) {
            valeur632.flipX()
        }
    }
}
info.onLifeZero(function () {
    game.gameOver(false)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (!(isJumping)) {
        for (let valeur6222 of animNotMoving.frames) {
            valeur6222.flipX()
        }
        animation.setAction(Zale, ActionKind.Idle)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.element3, function (sprite, otherSprite) {
    info.changeScoreBy(100)
    sprites.destroy(otherSprite)
    effects.confetti.startScreenEffect(1000)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    leaveIdle()
    isFacingRight = false
    if (!(isJumping)) {
        for (let valeur7 of animWalking.frames) {
            valeur7.flipX()
        }
        animation.setAction(Zale, ActionKind.Walking)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.enemybounce, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(10)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
    compteur_de_vie += -1
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
})
let projectile: Sprite = null
let ennemirebondir: Sprite = null
let champi: Sprite = null
let perle: Sprite = null
let coeur: Sprite = null
let pièce: Sprite = null
let niveau = 0
let liste: tiles.TileMapData[] = []
let doublejump = false
let Zale: Sprite = null
let compteur_de_vie = 0
let isAttacking = false
let isFacingRight = false
let isJumping = false
let animJump: animation.Animation = null
let menu = 0
let animWalking: animation.Animation = null
let animNotMoving: animation.Animation = null
let animAttack: animation.Animation = null
isJumping = false
isFacingRight = true
isAttacking = false
music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.UntilDone)
Début_du_jeu()
