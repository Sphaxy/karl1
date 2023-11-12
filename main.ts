input.onButtonPressed(Button.A, function () {
    Main = randint(1, 3)
    if (Main == 1) {
        basic.showIcon(IconNames.No)
    } else if (Main == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.SmallSquare)
    }
})
let Main = 0
for (let index = 0; index <= 4; index++) {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showNumber(5 - index)
}
basic.clearScreen()
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
basic.showString("Bon anniv Karl!!")
