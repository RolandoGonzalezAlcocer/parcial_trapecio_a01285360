input.onButtonPressed(Button.AB, function () {
    basic.showString("Base menor =")
    basic.showNumber(base_menor)
    basic.showString("Base mayor =")
    basic.showNumber(base_mayor)
    basic.showString("Altura =")
    basic.showNumber(altura)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Area del trapecio =")
    basic.showNumber((base_mayor + base_menor) / 2 * altura)
})
let altura = 0
let base_menor = 0
let base_mayor = 0
basic.showString("Rolando Gonzalez Alcocer A01285360")
base_mayor = 20
base_menor = 3 / 5 * base_mayor
altura = randint(1, 200)
