function sum (num) {
    let count = 0; 
    for (let i=1; i <= num; i++){
        count += i;
    }
    return count;
}

function countLetter (str) {
    let count = 0; 
    for (let i=0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'A') {
            count++
        }
    }
    return count;
}

function makeNumber (num) {
    let str = '1';
    for (let i=2; i <= num; i++ ) {
        str = str + "-" + i;
    }
    return str;
}

function makeOdd (num) {
    let str = ''
    for (let i=1; i <= num; i++) {
        if (i % 2 === 1){
            str = str + i;
        }
    }
    return str;
}

function bigNum (str) {
    let biggest = '';
    for (let i=0; i <= str.length; i++){
        if (str[i] >= biggest){
            biggest = Number(str[i])
        }
    }
    return biggest
}

function grade (score) {
    if (score > 100 || score < 0) {
        return 'Wrong score'
    } else if (score >= 90) {
        return 'A'
    } else if (score >=80) {
        return 'B'
    } else if (score >=70) {
        return 'C'
    } else if (score >= 60) {
        return 'D'
    } else {
        return 'F'
    }
}

let count = 0; 
let price = 0; 
let tier = ''

for (let i=0; i < myShopping.length; i++){
    if (myShopping[i].category === '의류') {
        count++
        price += myShopping[i].price
    }
}

if (count >= 5) {
    tier = 'gold'
} else if (count >=3) {
    tier = 'silver'
} else if (count >=0) {
    tier = 'bronze'
}

console.log(`의류를 구매한 횟수는 총 ${count}회 금액은 ${price}원이며 둥급은 ${tier}입니다`)