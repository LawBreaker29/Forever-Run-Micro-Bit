// The loop for the music to run forever
music.onEvent(MusicEvent.BackgroundMelodyEnded, function () {
    music.startMelody(mario2Body, MelodyOptions.OnceInBackground)
})
// When A is pressed
input.onButtonPressed(Button.A, function () {
    // Starting (the variable) is turned on (1) when button A is pressed. This waits until A is pressed to create the spirites.
    while (!(starting == 0)) {
        basic.pause(.00001)
    }
    // Creates the sprite at x:1 y:3
    sprite = game.createSprite(1, 3)
    // Creates one obstacle at the right end to make the illusion of scrolling.
    obstacles = game.createSprite(4, 3)
    // Brodcasting that the A starts
    starting = 1
})
// When button B is pressed (this input for jumping)
input.onButtonPressed(Button.B, function () {
    // Repeat twice
    for (let index = 0; index < 2; index++) {
        sprite.change(LedSpriteProperty.Y, -1)
        // Pauses in between the jumps
        basic.pause(100)
    }
    music.setVolume(500)
    // Plays the sound effect jump
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    // Pauses so the jump isn't super fast
    basic.pause(200)
    for (let index = 0; index < 2; index++) {
        sprite.change(LedSpriteProperty.Y, 1)
        // Pauses in between the jumps
        basic.pause(100)
    }
})
// Starts the code once the button A is pressed.
let score = 0
let obstacles: game.LedSprite = null
let sprite: game.LedSprite = null
let mario2Body: string[] = []
let starting = 0
// Starting (the variable) is turned on (1) when button A is pressed. This waits until A is pressed to start the music.
while (!(starting == 1)) {
    basic.pause(.00001)
}
let mario2Start = [
"g5:4",
"f#:8",
"f:4",
"d:8",
"b4:4",
"a:8",
"g#:4",
"g:12",
"g5",
"g4:18",
"r:6"
]
mario2Body = [
"g5:8",
"c:4",
"e:8",
"g:12",
"c:4",
"e:8",
"g:4",
"b4",
"eb5",
"g",
"b:8",
"a:24",
"r:4",
"g5:8",
"bb4:4",
"d5:8",
"g:12",
"bb4:4",
"d5:8",
"g:4",
"c#",
"e",
"g",
"b:8",
"a:20",
"r:4",
"b:4",
"c6:8",
"b5:4",
"c6:8",
"a5:12",
"c6:4",
"b5:8",
"a:4",
"g:8",
"f#:4",
"g:8",
"e:12",
"c#:4",
"d:8",
"e:4",
"f:8",
"e:4",
"f:8",
"b4:12",
"e5:4",
"d:8",
"c:28",
"r:24",
"r:8",
"e5:16",
"g:12",
"a:8",
"c6:28",
"a5:8",
"g:4",
"e:8",
"c:4",
"d:8",
"e:4",
"d:8",
"e:4",
"d:8",
"a4:8",
"r:4",
"d5:16",
"a4:2",
"d5",
"a4",
"d5",
"a4",
"d5",
"a4",
"d5",
"a4",
"d5",
"a4",
"d5:4",
"r:10",
"d:12",
"e:4",
"d:8",
"e:4",
"d:8",
"e:4",
"r:8",
"a:12",
"g:4",
"a:8",
"g:4",
"e:8",
"d:4",
"c:8",
"e:16",
"g4:2",
"e5",
"g4",
"e5",
"g4",
"e5",
"g4",
"e5",
"g4",
"e5",
"g4",
"e5:4",
"r:10",
"r:8",
"g",
"d",
"b4",
"a",
"g",
"r:8",
"e5:16",
"g:12",
"a:8",
"c6:28",
"a5:8",
"g:4",
"e:8",
"c:4",
"d:8",
"e:4",
"d:8",
"e:4",
"d:8",
"a4:8",
"r:4",
"d5:16",
"a4:2",
"d5",
"a4",
"d5",
"a4",
"d5",
"a4",
"d5",
"a4",
"d5",
"a4",
"d5:4",
"r:10",
"d:12",
"e:4",
"d:8",
"e:4",
"d:8",
"e:4",
"r:8",
"a:12",
"g:4",
"a:8",
"g:4",
"a:8",
"g:4",
"e:8",
"c:16",
"r:8",
"f#4:4",
"g:8",
"g#:4",
"a:8",
"c5:12",
"r:12",
"c:16",
"r:12",
"e5:8",
"f:4",
"d#:8",
"e:4",
"f:8",
"d#:4",
"e:8",
"b:16",
"g#:12",
"f",
"e",
"d:3",
"e",
"d",
"c",
"b4:8",
"c5:4",
"d:8",
"c:4",
"b4:8",
"c5:16",
"r:8",
"c:4",
"b4:12",
"c5",
"r:8",
"d:16",
"c#:12",
"d:8",
"a:16",
"f#:12",
"g",
"a",
"b5:8",
"a#4:4",
"b:8",
"b5:4",
"a:8",
"g#4:4",
"a:8",
"a5:4",
"ab:8",
"g4:4",
"ab:8",
"ab5:4",
"g:8",
"d:4",
"b4:8",
"g:4"
]
music.setTempo(192 * 3)
music.startMelody(mario2Start, MelodyOptions.OnceInBackground)
// Runs the scoring forever
basic.forever(function () {
    // After button A is pressed
    while (starting == 1) {
        // Changes score by 1
        score += 1
        // Waits 100ms before loop repeats
        basic.pause(100)
    }
})
// Another forever loop to make it work
basic.forever(function () {
    // After button A is pressed and the game is not over, it runs the loop inside the game
    while (starting == 1) {
        // Obstacles move left at 1 pixel
        obstacles.change(LedSpriteProperty.X, -1)
        // Pauses in between the loop
        basic.pause(300)
        // Detects that the obstacle touches the end 
        if (obstacles.isTouchingEdge()) {
            // Deletes the obstacle
            obstacles.delete()
            // Creates a new obstacle and create the illusion to make the scrolling feel. This also can be random in height so you can jump or not.
            obstacles = game.createSprite(3, randint(1, 3))
            // Pauses so it doesn't bug
            basic.pause(100)
        }
        // Checks if there is collision with the obstacle and sprite
        if (obstacles.isTouching(sprite) || sprite.isTouching(obstacles)) {
            // Since the score block is buggy but is a needed element, it is set to the variable "score".
            game.setScore(score)
            for (let index = 0; index < 3; index++) {
                // Plays death sound 3 times
                music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
            }
            // Deletes remaining obstacles so it doesn't bug
            obstacles.delete()
            // Broadcast game over. A+B to restart
            game.gameOver()
            // Allows A to be pressed again.
            starting = 0
        }
    }
})
