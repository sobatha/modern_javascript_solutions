const ConstructCounter = (initialValue, incrementBy=1) => {
    let counter = 0
    return {
        count: () => {
            value = initialValue + incrementBy*counter
            counter++
            return value
        }
    }
}

const myFirstCounter = ConstructCounter(0, 2)
console.log(myFirstCounter.count())
console.log(myFirstCounter.count())