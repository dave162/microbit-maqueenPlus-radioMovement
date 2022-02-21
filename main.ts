radio.onReceivedNumber(function (receivedNumber) {
    if (tilt < 100 && tilt > 0) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    } else if (tilt < 100) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, acceleration)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(1)
})
let acceleration = 0
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
    acceleration = pins.map(
    tilt,
    0,
    255,
    0,
    1023
    )
})
