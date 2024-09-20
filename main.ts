robot.onLineLeftRightDetected(true, true, function () {
    robot.motorSteer(0, 100)
})
robot.yahboomTinyBit.start()
robot.motorTank(100, 100)
robot.setColor(0x00ffff)
robot.motorSteer(0, 100)
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # . . . #
        # . . . #
        . . . . .
        . . # . .
        `)
})
