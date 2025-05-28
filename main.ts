radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    bitbot.movems(BBMotor.Right, BBDirection.Forward, 60, 800)
    bitbot.go(BBDirection.Reverse, 40)
    for (let index = 0; index < 10; index++) {
        bitbot.buzzTime(66)
        bitbot.setLedColor(0xff0000)
        basic.pause(50)
        bitbot.ledClear()
        basic.pause(100)
    }
    bitbot.stop(BBStopMode.Coast)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("x")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("Go forward", 69)
})
radio.onReceivedString(function (receivedString) {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    bitbot.movems(BBMotor.Left, BBDirection.Forward, 60, 800)
    bitbot.go(BBDirection.Reverse, 40)
    for (let index = 0; index < 10; index++) {
        bitbot.buzzTime(66)
        bitbot.setLedColor(0xff0000)
        basic.pause(50)
        bitbot.ledClear()
        basic.pause(100)
    }
    bitbot.stop(BBStopMode.Coast)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
radio.onReceivedValue(function (name, value) {
    basic.showIcon(IconNames.Target)
    bitbot.goms(BBDirection.Forward, 80, 2500)
    basic.pause(10)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.showString("OR")
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        . . . # .
        . . # # .
        . . . . .
        . . # . .
        `)
})
radio.setGroup(127)
