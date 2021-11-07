function sum (num) {
    let result = 0
    for (let i=1; i <= num; i++) {
        result = result + i;
    }
    return result
}






//break down 
let count = 0
for (let i=1; i <= 5; i++) {
    count = count + i
    console.log(count, i)
}