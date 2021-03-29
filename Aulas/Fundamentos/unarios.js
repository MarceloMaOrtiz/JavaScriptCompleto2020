let num1 = 1
let num2 = 2

// Precedẽncia --var > var--
num1++
console.log(num1)
--num1
console.log(num1)

// o ++ é executado antes do === enquanto o -- é executado após
console.log(++num1 === num2--)
console.log(num1 == num2)