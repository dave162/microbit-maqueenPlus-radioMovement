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
    1023
    )
    if (tilt < 100 && tilt > 0) {
        radio.sendString("a")
    } else {
        radio.sendNumber(1)
    }
})
