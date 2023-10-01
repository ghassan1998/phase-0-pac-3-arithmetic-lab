function add(x,y){
    let z=x+y
    return z
}
console.log(add(5,6))

function subtract(x,y){
    let z=x-y
    return z
}
console.log(subtract(5,6))

function multiply(x,y){
    let z=x*y
    return z
}
console.log(multiply(5,6))

function divide(x,y){
    let z=x/y
    return z
}
console.log(divide(5,6))

function increment(n){
    return n+=1

}
console.log(increment(2))

function decrement(n){
    return n-=1
}
console.log(decrement(2))
function makeInt(n){
    return parseInt(`${n}`,10)
}
console.log(makeInt("ghassan"))

function preserveDecimal(n){
    return parseFloat(`${n}`)
}
console.log(preserveDecimal("12.222"))
