function countLetter (str) {
    let result = 0;
    str = str.toLowerCase()
    for (let i=0; i<str.length;i++) {
        if (str[i] === 'a') {
            result++
        }
    }
    return result
}




function countLetter (str) {
    let result = 0 
    for (let i=0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'A') {
            result++
        }
    }
    return result 
}






//break down 
str = 'I am from Korea'
str.length = 15 
str[0] = 'I'

for (let i=0; i < str.length;i++){
    console.log(str[i])
}

for (let i=0; i < str.length;i++){
    console.log(str[i], count)
}

let count = 0
for (let i=0; i < str.length; i++){
    if (str[i] === 'a' || str[i] === 'A') {
        count ++
    }
    console.log(str[i], count)
}
