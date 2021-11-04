function makeNumber (num) {
    let str = '1';
    for (let i=2; i <= num; i++){
        str = str + "-" + i
    }
    return str 
}

//break down 
let num = 3
for (let i=1; i <= 3; i++ ) {
    console.log(i)
}

let str = ''
for (let i=1; i <= num; i++) {
    str = str + i 

    if (i !== num) {
        str = str + '-'
    }
    console.log(str)
}

function makeNumber (num) {
    let str = ''
    for (let i=1; i <= num; i++) {
        str = i + '-'

        if (i !== num) {
            str = str + '-'
        }
    }
    return str
}