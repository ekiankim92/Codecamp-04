function days (month) {
    if (month === 2) {
        return 28
    } else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        return 31
    } else {
        return 30 
    }
}

