radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, input.acceleration(Dimension.X))
    } else if (receivedNumber == 2) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, input.acceleration(Dimension.X))
    }
})
radio.onReceivedString(function (receivedString) {
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
})
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    `)
basic.forever(function () {
    let tilt = 0
    if (tilt < 30 && tilt > -30) {
        radio.sendString("a")
    } else if (tilt > 30) {
        radio.sendNumber(1)
    } else {
        radio.sendNumber(2)
    }
})
