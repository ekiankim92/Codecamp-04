function bigNum (str) {
    let result = 0; 
    for (let i=0; i <= str.length; i++) {
        if (str[i] >= result) {
    result = Number(str[i])
}
}
    return result;
}

//break down 
str = '12543'
let biggest = 0; 
for (let i=0; i < str.length; i++){
    console.log(str[i])
}

for (let i=0; i < str.length; i++){
    console.log(str[i], biggest)
    if (Number(str[i]) > biggest) {
        biggest = Number(str[i])
    }
    console.log(biggest)
}