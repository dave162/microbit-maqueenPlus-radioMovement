radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, acceleration)
    } else if (receivedNumber == 2) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, acceleration)
    }
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
    -90,
    90,
    0,
    2046
    )
    if (tilt < 30 && tilt > -30) {
        radio.sendString("a")
    } else if (tilt > 30) {
        radio.sendNumber(1)
    } else {
        radio.sendNumber(2)
    }
})
