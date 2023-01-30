const ConstructCounter = (initialValue, incrementBy) => {
    let value = initialValue
    return {
        count: () => value += incrementBy
    }
}

const myFirstCounter = ConstructCounter(0, 2)
console.log(myFirstCounter.count())
console.log(myFirstCounter.count())