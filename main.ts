input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.stopAllSounds()
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . # #
            . . . . #
            . . . . .
            # . . . .
            # # . . .
            `)
        basic.showLeds(`
            . . # # #
            . . . # #
            # . . . #
            # # . . .
            # # # . .
            `)
        basic.showLeds(`
            . # # # #
            # . # # #
            # # . # #
            # # # . #
            # # # # .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 2; index++) {
        music.playTone(294, music.beat(BeatFraction.Whole))
        basic.pause(100)
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(220, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        basic.pause(100)
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        basic.pause(100)
    }
    music.playTone(294, music.beat(BeatFraction.Double))
})
input.onButtonPressed(Button.AB, function () {
    music._playDefaultBackground(music.stringPlayable("F D A E D F A D ", 1200), music.PlaybackMode.LoopingInBackground)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # # # .
        . # . . #
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # # # .
        # . . # .
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # # # .
        . # . . #
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # # # .
        # . . # .
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # # # .
        . # . . #
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # # # .
        # . . # .
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # # # .
        . # . . #
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # # # .
        # . . # .
        `)
    music.stopAllSounds()
})
input.onSound(DetectedSound.Loud, function () {
    for (let index = 0; index < 2; index++) {
        music.playTone(196, music.beat(BeatFraction.Whole))
        basic.pause(200)
        music.playTone(196, music.beat(BeatFraction.Half))
        music.playTone(233, music.beat(BeatFraction.Half))
        music.playTone(196, music.beat(BeatFraction.Whole))
        music.playTone(196, music.beat(BeatFraction.Whole))
        music.playTone(196, music.beat(BeatFraction.Whole))
        music.playTone(196, music.beat(BeatFraction.Half))
        music.playTone(233, music.beat(BeatFraction.Half))
        music.playTone(196, music.beat(BeatFraction.Half))
        music.playTone(175, music.beat(BeatFraction.Whole))
    }
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(200)
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(311, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(311, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(233, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    basic.pause(200)
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Double))
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        music.play(music.stringPlayable("A E F A G A E D ", 1200), music.PlaybackMode.UntilDone)
    }
    music.stopMelody(MelodyStopOptions.All)
})
basic.forever(function () {
	
})
