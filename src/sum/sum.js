export function sum(a, b) {
    return a + b
}

export function sumList(numbers) {
    return numbers.reduce(
        (sum, number) =>  
            sum + number, 
        0)
}