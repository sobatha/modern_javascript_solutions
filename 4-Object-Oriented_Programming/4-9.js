class Random {
    static nextDouble(low, high) {
        return Math.random()* (high-low) + low
    }
    static nextInt(low, high) {
        return Math.floor(Math.random()*(high-low) + low)
    }
    static nextElement(array) {
        return array[Math.floor(Math.random()*array.length)]
    }
}

let double = Random.nextDouble(2, 8) //6.973566677285421
let int = Random.nextInt(5, 12) //6
let element = Random.nextElement([3, 4, 5, 6, 7, 8, 9]) //8