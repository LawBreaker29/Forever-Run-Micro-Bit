sprite: game.LedSprite = None
obstacles: game.LedSprite = None
starting = 0
score = 0

def on_button_pressed_a():
    global sprite, obstacles, starting
    game.set_life(1)
    sprite = game.create_sprite(2, 2)
    obstacles = game.create_sprite(4, 2)
    starting = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    for index in range(2):
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    basic.pause(200)
    for index2 in range(2):
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    global score, starting
    if starting == 1:
        score += 1
        basic.pause(1000)
    else:
        game.game_over()
        score = score
    if sprite.is_touching(obstacles):
        game.remove_life(1)
        starting = 0
basic.forever(on_forever)
