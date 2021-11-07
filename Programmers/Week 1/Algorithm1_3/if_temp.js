function temperature (num) {
    if (num >= 24) {
        return '조금 덥습니다'
    } else if (num >=19) {
        return '날씨가 좋네요'
    } else {
        return '조금 춥네요'
    }
}


function temperature (num) {
    if (num >= 24) {
        return '조금 덥습니다'
    } else if (num >=19) {
        return '날씨가 좋네요'
    } else if (num <= 18) {
        return '조금 춥네요'
    }
}


if (num <= 18) {
    console.log('조금 춥네요')
} else if (num >=19 && num <= 23) {
    console.log('날씨가 좋네요')
} else if (num >= 24) {
    console.log('조금 덥습니다')
}