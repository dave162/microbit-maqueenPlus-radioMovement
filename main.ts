radio.onReceivedNumber(function (receivedNumber) {
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, acceleration)
})
radio.onReceivedString(function (receivedString) {
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
})
let tilt = 0
let acceleration = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    `)
basic.forever(function () {
    tilt = input.rotation(Rotation.Pitch)
    acceleration = pins.map(
    tilt,
    0,
    255,
    0,
    2046
    )
    if (tilt < 500 && tilt > 0) {
        radio.sendString("a")
    } else {
        radio.sendNumber(1)
    }
})
