let fruits = ["사과", "바나나", "파인애플"]

let newFruits = []

fruits[fruits.length-1] // ['파인애플']

newFruits.push(fruits[fruits.length-1])


const lastFruits = fruits[fruits.length-1]
newFruits.push(lastFruits)

newFruits[0] = lastFruits