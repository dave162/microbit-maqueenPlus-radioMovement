radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, input.acceleration(Dimension.X))
    } else if (receivedNumber == 2) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, input.acceleration(Dimension.X))
    } else if (receivedNumber == 3) {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, input.acceleration(Dimension.X))
    }
})
radio.onReceivedString(function (receivedString) {
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
})
let acceleration = 0
let direction = 0
let tilt = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    `)
basic.forever(function () {
    tilt = input.rotation(Rotation.Pitch)
    direction = input.rotation(Rotation.Roll)
    acceleration = pins.map(
    tilt,
    -90,
    90,
    0,
    1024
    )
    if (tilt < 30 && tilt > -30) {
        radio.sendString("a")
    } else if (tilt > 30) {
        radio.sendNumber(1)
    } else if (tilt > -30) {
        radio.sendNumber(2)
    } else if (direction > 60) {
        radio.sendNumber(3)
    }
})
