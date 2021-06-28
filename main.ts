function Horizontal (v: number) {
    servos.P1.setAngle(Joystick2Servo(v))
}
function Joystick2Servo (val: number) {
    if (val < 100) {
        return 0
    } else if (val < 200) {
        return 30
    } else if (val < 400) {
        return 60
    } else if (val > 900) {
        return 180
    } else if (val > 800) {
        return 140
    } else if (val > 600) {
        return 120
    } else {
        return 90
    }
}
function Vertical (v: number) {
    servos.P2.setAngle(Joystick2Servo(v))
}
let y = 0
let x = 0
OLED12864_I2C.init(60)
OLED12864_I2C.clear()
basic.forever(function () {
    x = pins.analogReadPin(AnalogPin.P3)
    y = pins.analogReadPin(AnalogPin.P4)
    OLED12864_I2C.showString(
    0,
    0,
    "x: " + x + "   ",
    1
    )
    OLED12864_I2C.showString(
    0,
    1,
    "y: " + y + "   ",
    1
    )
    Horizontal(x)
    Vertical(y)
})
